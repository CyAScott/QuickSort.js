/*jslint
browser:    true,
passfail:   false,
ass:        false,
bitwise:    true,
continue:   false,
debug:      false,
eqeq:       false,
evil:       true,
forin:      true,
newcap:     false,
plusplus:   true,
unparam:    true,
regexp:     true,
sloppy:     true,
stupid:     false,
sub:        false,
todo:       false,
vars:       false,
white:      true
*/
(function()
{
	var
	defaultCompare,
	defaultSwap,
	partition,
	quickSort;
	
	Array.prototype.quickSort = function(compare, swap)
	{
		if (typeof compare !== "function")
		{
			compare = defaultCompare;
		}
		if (typeof swap !== "function")
		{
			swap = defaultSwap;
		}
		quickSort(this, 0, this.length - 1, compare, swap);
	};
	defaultCompare = function(value1, value2)
	{
		return value1 < value2;
	};
	defaultSwap = function(array, index1, index2)
	{
		var temp = array[index1];
		array[index1] = array[index2];
		array[index2] = temp;
	};
	partition = function(array, start, stop, compare, swap)
	{
		var pivot = array[stop], storeIndex = start - 1;

		while (start < stop)
		{
			if (compare(array[start], pivot))
			{
				storeIndex++;
				swap(array, storeIndex, start);
			}
			start++;
		}
		if (array[storeIndex + 1] !== array[stop])
		{
			swap(array, storeIndex + 1, stop);
		}
		return storeIndex + 1;
	};
	quickSort = function(array, startIndex, stopIndex, compare, swap)
	{
		var pivot, stack, start, top;
		
		stack = new Array(stopIndex - startIndex + 1);
		top = -1;
		
		stack[++top] = startIndex;
		stack[++top] = stopIndex;

		while (top > -1)
		{
			stopIndex = stack[top--];
			startIndex = stack[top--];

			pivot = partition(array, startIndex, stopIndex, compare, swap);
			
			if (pivot - 1 > startIndex)
			{
				stack[++top] = startIndex;
				stack[++top] = pivot - 1;
			}

			if (pivot + 1 < stopIndex)
			{
				stack[++top] = pivot + 1;
				stack[++top] = stopIndex;
			}
		}
	};
}());
