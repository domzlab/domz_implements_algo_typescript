function quickSort(arr, p, r) {
    if (p < r) {
        var q = partition(arr, p, r);
        console.log(arr);
        quickSort(arr, p, q - 1);
        quickSort(arr, q + 1, r);
    }
}
function partition(arr, p, r) {
    console.log("called paritition");
    var x = arr[r];
    var i = p - 1;
    for (var j = p; j < r; ++j) {
        if (arr[j] <= x) {
            i++;
            var tmp_1 = arr[j];
            arr[j] = arr[i];
            arr[i] = tmp_1;
        }
    }
    var tmp = arr[r];
    arr[r] = arr[i + 1];
    arr[i + 1] = tmp;
    return i + 1;
}
// call the generic version of quick using an array and string
var arr_strings = ["b", "z", "h", "a", "d", "p", "l", "o"];
console.log("Before sorting arr_strings: ".concat(arr_strings));
quickSort(arr_strings, 0, arr_strings.length - 1);
console.log("After sorting arr_strings: ".concat(arr_strings));
var arr_nums = [2, 8, 7, 3, 5, 6, 4];
console.log("Before sorting arr_nums: ".concat(arr_nums));
quickSort(arr_nums, 0, arr_nums.length - 1);
console.log("After sorting arr_nums: ".concat(arr_nums));
