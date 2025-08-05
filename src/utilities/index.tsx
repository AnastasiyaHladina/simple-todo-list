export function isEqualArrays(arr1: string[], arr2: string[]): boolean {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((el: string, index:  number) => el === arr2[index]);
}