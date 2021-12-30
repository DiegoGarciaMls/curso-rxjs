import { endWith, startWith } from 'rxjs';
import { ajax } from 'rxjs/ajax';


// referencias
const loadingDiv = document.createElement('div');
loadingDiv.classList.add('loading');
loadingDiv.innerHTML = 'Cargando...';

const body = document.querySelector('body');

// streams
ajax.getJSON('https://reqres.in/api/users/2?delay=3').pipe(
    startWith(true),
    endWith(false)
)
.subscribe(resp => {

    resp? body.append(loadingDiv) : document.querySelector('.loading').remove();

    console.log(resp);
});


