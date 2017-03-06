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

const xs = Rx.Observable.interval(1000).take(5);
const ys = Rx.Observable.interval(2000).take(5);
const zs = Rx.Observable.interval(3000).take(5);
const pattern = xs.and(ys).and(zs);
const plan = pattern.thenDo((x, y, z) => `${x}:${y}:${z}`);
const planed = Rx.Observable.when(plan);
planed.subscribe(x => console.log(x));
