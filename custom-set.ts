export class CustomSet {
  initial: number[];
  constructor(initial: number[] = []) {
   this.initial = initial;
  }

  empty(): boolean {
    return this.initial.length === 0;
  }

  contains(element: number): boolean {
    return this.initial.indexOf(element) !== -1;
  }

  add(element: unknown): CustomSet {
    throw new Error('Remove this statement and implement this function')
  }

  subset(other: unknown): CustomSet {
    throw new Error('Remove this statement and implement this function')
  }

  disjoint(other: unknown): CustomSet {
    throw new Error('Remove this statement and implement this function')
  }

  eql(other: unknown): unknown {
    throw new Error('Remove this statement and implement this function')
  }

  union(other: unknown): CustomSet {
    throw new Error('Remove this statement and implement this function')
  }

  intersection(other: unknown): CustomSet {
    throw new Error('Remove this statement and implement this function')
  }

  difference(other: unknown): CustomSet {
    throw new Error('Remove this statement and implement this function')
  }
}
