function arrayConcat(arr1, arr2){
	var newarr = [];

    for (var i = 0; i < arr1.length; i++)
	{
	    newarr[i] = arr1[i];
	}

    for (var j = 0; j < arr2.length; j++)
    {
        newarr.push(arr2[j]);
    }

	return newarr; 
}

var array1 = ['a','b'], array2 = [1, 2];
console.log(arrayConcat(array1, array2));