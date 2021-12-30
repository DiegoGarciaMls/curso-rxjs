import { fromEvent, Observable } from 'rxjs';
import { map, pluck, debounceTime, mergeAll } from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';

import { GithubUser } from '../interfaces/github-user-interface';
import { GithubUsers } from '../interfaces/github-users.interface';


const mostrarUsuarios = (usuarios: GithubUser[]) => {

    console.log(usuarios);
    orderList.innerHTML = '';

    for (let usuario of usuarios) {

        const list = document.createElement('li');
        const img  = document.createElement('img');

        img.src = usuario.avatar_url;

        const anchor  = document.createElement('a');
        anchor.href   = usuario.html_url;
        anchor.text   = 'Ver página';
        anchor.target = '_blank';

        list.append(img);
        list.append(usuario.login + ' ');
        list.append(anchor);

        orderList.append(list);

    };
};

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);


const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, string>(event => event.target['value']),
    map<string, Observable<GithubUsers>>(texto => ajax.getJSON(
        `https://api.github.com/search/users?q=${texto}`
    )),
    mergeAll(),
    map<GithubUsers, GithubUser[]>(event => event.items)
)
.subscribe(mostrarUsuarios);