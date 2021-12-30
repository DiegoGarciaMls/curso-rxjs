import { of, forkJoin } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';


const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER    = 'diegogarciamls';


forkJoin(
    {
        usuario: ajax.getJSON(
            `${GITHUB_API_URL}/${GITHUB_USER}`
        ),
        repos: ajax.getJSON(
            `${GITHUB_API_URL}/${GITHUB_USER}/repos`
        ),
        gists: ajax.getJSON(
            `${GITHUB_API_URL}/${GITHUB_USER}/gists`
        )
    }
).pipe(
    catchError(err => of(err.message))
)
.subscribe(console.log);

