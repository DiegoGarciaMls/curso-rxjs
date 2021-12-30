import { of } from 'rxjs';
import { startWith, endWith } from 'rxjs';


const numeros$ = of(1, 2, 3).pipe(
    startWith('a', 'b', 'c'),
    endWith('x', 'y', 'z')
);

numeros$.subscribe(console.log);
