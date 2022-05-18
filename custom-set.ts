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

  add(input: number): CustomSet {
    const modifiedInput = [...new Set([...this.initial, input])];
    return new CustomSet(modifiedInput);
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

  eql(otherSet: CustomSet): boolean {
    // has to have ALL the same elements in both
    if (this.initial.length !== otherSet.initial.length) return false;
    const failedCount = this.initial.reduce((total: number, thisSetNumber: number) => {
      if (otherSet.initial.indexOf(thisSetNumber) === -1) {
        total++;
      }
      return total;
    }, 0)
    return failedCount === 0;
  }

  union(otherSet: CustomSet): CustomSet {
    // all elements in either set
    const totalArr = [...this.initial, ...otherSet.initial];
    const uniq: number[] = [...new Set([...totalArr])]
    return new CustomSet(uniq)
  }

  intersection(otherSet: CustomSet): CustomSet {
    // all elements shared between the two sets
    const sharedItems = this.initial.reduce((acc: number[], thisSetNumber: number) => {
      if (otherSet.initial.indexOf(thisSetNumber) !== -1) {
        acc.push(thisSetNumber);
      }
      return acc;
    }, [])
    return new CustomSet(sharedItems);
  }

  difference(otherSet: CustomSet): CustomSet {
    // items that are only in the original set
    const unsharedItems = this.initial.reduce((acc: number[], thisSetNumber: number) => {
      if (otherSet.initial.indexOf(thisSetNumber) === -1) {
        acc.push(thisSetNumber);
      }
      return acc;
    }, [])
    return new CustomSet(unsharedItems);
  }
}
