// selection sort - increasing order
function selection_sort(unsortedList){
  for(var i=0;i<unsortedList.length-1;i++)
	{
		min = i
		for(var j=i+1;j<unsortedList.length;j++) 
		{
			if (unsortedList[min]>unsortedList[j])
			    {
				  min = j
				}
		}
		tmp = unsortedList[i]
		unsortedList[i] = unsortedList[min]
		unsortedList[min] = tmp
	}
	return unsortedList
}
//end