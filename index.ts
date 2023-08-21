import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

//emit (1,2,3,4,5)
const srcList$ = from([1, 2, 3, 4, 5, 22, 30, 31, 59]);
//filter out non-even numbers
const example = srcList$.pipe(filter((num) => num % 2 === 0));
//output: "Even number: 2", "Even number: 4"
const subscribe = example.subscribe((val) =>
  console.log(`Even number: ${val}`)
);
