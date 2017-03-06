/**
 * Created by tomoya.igarashi on 2017/02/22.
 */

/* eslint-disable no-console */
import Rx from 'rx';

const str = 'ES6';
console.log(`Hello ${str}`);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const source = Rx.Observable.fromArray(array);

const filtered = source.filter(x => x % 3 === 0);

filtered.subscribe(x => console.log(x));

const ret = ['-', 'いち', 'に', 'さん', 'よん', 'ご', 'ろく', 'なな', 'はち', 'きゅう', 'じゅう'];
const mapped = source.map(x => ret[x]);

mapped.subscribe(x => console.log(x));

const one = Rx.Observable.timer(1000).map('1秒');
const two = Rx.Observable.timer(2000).map('2秒');

const merge = one.merge(two);

merge.subscribe(x => console.log(x));
