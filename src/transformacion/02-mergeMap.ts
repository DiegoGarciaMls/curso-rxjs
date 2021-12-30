import { of, interval, fromEvent } from 'rxjs'
import { mergeMap, take, map, takeUntil } from 'rxjs/operators';


const letras$ = of('a', 'b', 'c');

letras$.pipe(
    mergeMap((val) => interval(1000).pipe(
        map(i => val + i),
        take(3)
    ))
)
.subscribe( {
    next: val    => console.log('next: ', val),
    complete: () => console.log('complete')
});


const mouseDown$ = fromEvent<KeyboardEvent>(document, 'mousedown');
const mouseUp$ = fromEvent<KeyboardEvent>(document, 'mouseup');
const interval$ = interval(1000);


mouseDown$.pipe(
    mergeMap(() => interval().pipe(
        takeUntil(mouseUp$)
    ))
)
.subscribe(console.log);
