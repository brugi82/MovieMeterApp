export interface IProgramQuery {
    minRating: number;
    maxRating: number;
    genre: string;
    year: number;
    actor: string;
    director: string;
    language: string;
    watched: boolean;
    onlyActive: boolean;
    minVotes: number;
}

export class ProgramQuery implements IProgramQuery {
    minRating: number;
    maxRating: number;
    genre: string;
    year: number;
    actor: string;
    director: string;
    language: string;
    watched: boolean;
    onlyActive: boolean;
    minVotes: number;
}
