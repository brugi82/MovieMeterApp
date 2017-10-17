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
}
