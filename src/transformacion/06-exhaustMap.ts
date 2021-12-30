import { fromEvent, interval } from 'rxjs';
import { take, exhaustMap } from 'rxjs/operators';


const click$    = fromEvent<MouseEvent>(document, 'click');
const interval$ = interval(500).pipe(
    take(6)
);

click$.pipe(
    exhaustMap(() => interval$)
)
.subscribe(console.log)