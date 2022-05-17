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

  subset(otherSet: CustomSet): boolean {
    // if the other set has all elements of the original set
    const failedCount = this.initial.reduce((total: number, thisSetNumber: number) => {
      if (otherSet.initial.indexOf(thisSetNumber) === -1) {
        total++;
      }
      return total;
    }, 0)
    return failedCount === 0;
  }

  disjoint(otherSet: CustomSet): boolean {
    // if the other set has NO elements of the original set
    const containedCount = this.initial.reduce((total: number, thisSetNumber: number) => {
      if (otherSet.initial.indexOf(thisSetNumber) !== -1) {
        total++;
      }
      return total;
    }, 0)
    return containedCount === 0;
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
