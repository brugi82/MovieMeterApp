import { IProgramUserData } from './program-user-data';

export interface IProgram {
    id: string;
    imdbId: string;
    title: string;
    year: number;
    runtime: string;
    genre: string;
    director: string;
    actors: string;
    plot: string;
    country: string;
    language: string;
    imdbRating: number;
    imdbVotes: string;
    poster: string;
    type: number;
    onDemandStarts: Date;
    onDemandEnds: Date;
    programUserData: IProgramUserData[];
}
