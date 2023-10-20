// Статья Декоратора для данного примера.
// https://dev.to/jmalvarez/decorator-pattern-in-typescript-na5

interface DataSource {
  writeData(data: string): void;
  readData(): string;
}

/**
 * @description Класс, методы которого нужно декорировать.
 */
class FileDataSource implements DataSource {
  private fileName: string;
  private data: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  writeData(data: string): void {
    console.log(
      `[FileDataSource] Writing to file: ${this.fileName}, data: ${data}`
    );
    this.data = data;
  }

  readData(): string {
    console.log(
      `[FileDataSource] Reading from file: ${this.fileName}, data: ${this.data}`
    );
    return this.data;
  }
}

/**
 * Использует ссылку на декорируемый инстанс.
 * @description Родительский Декоратор.
 *
 */
class DataSourceDecorator implements DataSource {
  protected source: DataSource;

  constructor(source: DataSource) {
    this.source = source;
  }

  writeData(data: string): void {
    this.source.writeData(data);
  }

  readData(): string {
    return this.source.readData();
  }
}

class EncryptionDecorator extends DataSourceDecorator {
  writeData(data: string): void {
    const base64Data = btoa(data);
    console.log(`[EncryptionDecorator] Encrypted data: ${base64Data}`);
    super.writeData(base64Data);
  }

  readData(): string {
    const base64Data = super.readData();
    const data = atob(base64Data);
    console.log(`[EncryptionDecorator] Decrypted data: ${data}`);
    return data;
  }
}

class ReverseDecorator extends DataSourceDecorator {
  writeData(data: string): void {
    const compressedData = data.split("").reverse().join("");
    console.log(`[ReverseDecorator] Reversed data: ${compressedData}`);
    super.writeData(compressedData);
  }

  readData(): string {
    const compressedData = super.readData();
    const data = compressedData.split("").reverse().join("");
    console.log(`[ReverseDecorator] Unreversed data: ${data}`);
    return data;
  }
}

/* --------------- Client Code ---------------*/

const file = new FileDataSource("file.txt");
const encryptedFile = new EncryptionDecorator(file);
const compressedEncryptedFile = new ReverseDecorator(encryptedFile);

compressedEncryptedFile.writeData("Hello world!");
compressedEncryptedFile.readData();

/* Output:
  [ReverseDecorator] Reversed data: !dlrow olleH
  [EncryptionDecorator] Encrypted data: IWRscm93IG9sbGVI
  [FileDataSource] Writing to file: file.txt, data: IWRscm93IG9sbGVI
  [FileDataSource] Reading from file: file.txt, data: IWRscm93IG9sbGVI
  [EncryptionDecorator] Decrypted data: !dlrow olleH
  [ReverseDecorator] Unreversed data: Hello world!
*/

/* --------------- Client Code ---------------*/
