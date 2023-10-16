interface ILogger {
  info(str: string): void;
  debug(str: string): void;
  warn(str: string): void;
  error(str: string): void;
}

class ProductionLogger implements ILogger {
  info(str: string): void {}
  debug(str: string): void {}
  warn(str: string): void {
    console.warn(str);
  }
  error(str: string): void {
    console.error(str);
  }
}

class DevelopmentLogger implements ILogger {
  info(str: string): void {
    console.info(str);
  }
  debug(str: string): void {
    console.debug(str);
  }
  warn(str: string): void {
    console.warn(str);
  }
  error(str: string): void {
    console.error(str);
  }
}

/**
 * @description Фабрика, которая в зависимости nodeEnv для создания инстанса вызывает нужную конкретную фабрику.
 */
export class Factory {
  static getLogger(nodeEnv : 'production' | 'development' ): ILogger {
    return new (
        nodeEnv === "production"
            ? ProductionLogger
            : DevelopmentLogger
    )();
  }
}

const logger =  Factory.getLogger('production')


