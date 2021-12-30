import { of, fromEvent, interval, forkJoin } from 'rxjs';
import { take } from 'rxjs/operators';


const numeros$  = of(1, 2, 3, 4);
const interval$ = interval(1000).pipe(take(3));
const letras$   = of('a', 'b' , 'c');


// forkJoin(
//     numeros$,
//     interval$,                   // se imprimen los valores como array
//     letras$
// ).subscribe(console.log);

// forkJoin(
//     numeros$,
//     interval$,                   
//     letras$                      // se imprimen los valores uno por uno
// ).subscribe(resp =>{
//     console.log('numero', resp[0]);          
//     console.log('intervalo', resp[1]);
//     console.log('letra', resp[2]);
// });

// forkJoin(
//     {
//         numeros$,
//         interval$,               // se vuelve un object en ECMACScript6
//         letras$
//     }
// ).subscribe(console.log);

forkJoin(
    {
        numero: numeros$,
        intervalo: interval$,       // se vuelve un object con asiganción de dato
        letra: letras$
    }
).subscribe(console.log);



