function quickSort(arr: number[], p: number, r: number): void {

    if(p < r){
        const q = partition(arr, p, r);
        quickSort(arr, p, q-1);
        quickSort(arr, q+1, r);
    }

}

function partition(arr: number[], p: number, r: number): number{
    const x = arr[r];
    let i = p -1 ;

    for(let j = p; j < r; ++j){
        if(arr[j] <= x){
            i++;
            const tmp = arr[j];
            arr[j] = arr[i];
            arr[i]  = tmp;
        }
    }

    const tmp = arr[r];
    arr[r] = arr[i+1];
    arr[i+1]  = tmp;        

    return i+1;
}


let arr = [2, 8, 7, 3, 5, 6, 4];
quickSort(arr, 0, arr.length - 1);

console.log(arr);