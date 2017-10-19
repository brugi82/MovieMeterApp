import { IProgramQuery, ProgramQuery } from './program-query';
export class ProgramQueryFactory {
    static getBasicSearchDefaultQuery(): IProgramQuery {
        let basicSearchQuery = new ProgramQuery();
        basicSearchQuery.minRating = 7;
        basicSearchQuery.minVotes = 10000;
        basicSearchQuery.year = 2000;

        return basicSearchQuery;
    }
}
