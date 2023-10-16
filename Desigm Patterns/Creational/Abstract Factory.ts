interface ApiProviderFactory {
  createMovieApiProvider: () => MovieApi;
  createAudioApiProvider: () => AudioApi;
}

interface MovieApi {
  searchByName: (name: string) => Movie[];
  searchByActors: (actors: string[]) => Movie[];
  searchByAwards: (awards: string[]) => Movie[];
  searchByDirector: (director: string) => Movie[];
  searchByReleaseDate: (releaseDate: Date) => Movie[];
}

interface AudioApi {
  searchByName: (name: string) => AudioTrack[];
  searchByArtist: (artist: string) => AudioTrack[];
  searchByMood: (mood: string) => AudioTrack[];
  searchByGenre: (genre: string) => AudioTrack[];
  searchByLyric: (anyPartOfLyric: string) => AudioTrack[];
}

type Movie = unknown; // You can use your own type
type AudioTrack = unknown; // You can use your own type

class NormalMovieApiProvider implements MovieApi {
  searchByActors(actors: string[]): Movie[] {
    return [];
  }

  searchByAwards(awards: string[]): Movie[] {
    return [];
  }

  searchByDirector(director: string): Movie[] {
    return [];
  }

  searchByName(name: string): Movie[] {
    return [];
  }

  searchByReleaseDate(releaseDate: Date): Movie[] {
    return [];
  } /* Implementation */
}

class NormalAudioApiProvider implements AudioApi {
  searchByArtist(artist: string): AudioTrack[] {
    return [];
  }

  searchByGenre(genre: string): AudioTrack[] {
    return [];
  }

  searchByLyric(anyPartOfLyric: string): AudioTrack[] {
    return [];
  }

  searchByMood(mood: string): AudioTrack[] {
    return [];
  }

  searchByName(name: string): AudioTrack[] {
    return [];
  } /* Implementation */
}

class PremiumMovieApiProvider implements MovieApi {
  searchByActors(actors: string[]): Movie[] {
    return [];
  }

  searchByAwards(awards: string[]): Movie[] {
    return [];
  }

  searchByDirector(director: string): Movie[] {
    return [];
  }

  searchByName(name: string): Movie[] {
    return [];
  }

  searchByReleaseDate(releaseDate: Date): Movie[] {
    return [];
  } /* Implementation */
}

class PremiumAudioApiProvider implements AudioApi {
  searchByArtist(artist: string): AudioTrack[] {
    return [];
  }

  searchByGenre(genre: string): AudioTrack[] {
    return [];
  }

  searchByLyric(anyPartOfLyric: string): AudioTrack[] {
    return [];
  }

  searchByMood(mood: string): AudioTrack[] {
    return [];
  }

  searchByName(name: string): AudioTrack[] {
    return [];
  } /* Implementation */
}

class NormalApiProviderFactory implements ApiProviderFactory {
  createMovieApiProvider() {
    return new NormalMovieApiProvider();
  }

  createAudioApiProvider() {
    return new NormalAudioApiProvider();
  }
}

class PremiumApiProviderFactory implements ApiProviderFactory {
  createMovieApiProvider() {
    return new PremiumMovieApiProvider();
  }

  createAudioApiProvider() {
    return new PremiumAudioApiProvider();
  }
}
