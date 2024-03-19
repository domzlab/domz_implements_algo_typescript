function quickSort<T>(arr: T[], p: number, r: number): void {
    
    if(p < r){
        const q = partition(arr, p, r);
        console.log(arr)
        console.log(q)
        quickSort(arr, p, q-1);
        quickSort(arr, q+1, r);
    }
    
} 

function partition<T>(arr: T[], p: number, r: number): number{
    console.log("called paritition")
    const x = arr[r];
    let i = p - 1 ;

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



// call the generic version of quick using an array and string
// let arr_strings = ["b", "z", "h", "a", "d", "p", "l", "o"];

// console.log(`Before sorting arr_strings: ${arr_strings}`);
// quickSort(arr_strings, 0, arr_strings.length-1);
// console.log(`After sorting arr_strings: ${arr_strings}`);


let arr_nums = [2, 8, 7, 3, 5, 6, 4];
console.log(`Before sorting arr_nums: ${arr_nums}`);
quickSort(arr_nums, 0, arr_nums.length-1);
console.log(`After sorting arr_nums: ${arr_nums}`);