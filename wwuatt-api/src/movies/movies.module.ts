import { Module } from '@nestjs/common';
import { MoviesResolver }from './movies.resolver'

@Module({
    providers: [MoviesResolver],
    exports: [MoviesResolver],
})
export class MoviesModule { }
