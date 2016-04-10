 function start(){
    var rawData = $("#inputData").val();
    var input = rawData.trim().split(',');
    console.log(input);// LOL //console lol
    bestFit(input);
    print();
    
  }


  function firstFit(input) {
		$(input).each(function (i, val) {
    	$(memory).each(function (j, m) {
      	if( (m.size - m.allocated) >= val ) { //&& m.allocated == 0){
        	m.allocated += val;
          return false;
        }
      });
    });
  }

  function bestFit(input) {
		$(input).each(function (i, val) {
    	//the smallest fitting memory  
    	minSize = 9999;
      minIndex = 0;
    	$(memory).each(function (j,m) {
      	//doesn't work, because wrong conditions
        freeMemory = memory[j].size - memory[j].allocated;
        if(freeMemory - val <= minSize && freeMemory - val >= 0) {
        	minIndex = j;
        }
      });
      memory[minIndex].allocated += val; 
    });
  }

  function worstFit(input) {
		$(input).each(function (i, val) {
    	largestIndex = getLargestIndex(memory)
      freeMemory = memory[largestIndex].size - memory[largestIndex].allocated;
    	if(val <= freeMemory) {
      	memory[largestIndex].allocated += val;
      }
    });
  }

	function getLargestIndex(a) {
    var largestVal = 0;
    var largestIndex = 0;
		$(a).each(function (i, val) {
    	if(val.size > largestVal) {
      	largestIndex = i;
        largestVal = val;
      }
    });
    return largestIndex;
  }

  function nextFit(input) {
		
  }

  function cycleFit(input) {

  }
  
  function print () {
  	$(memory).each(function (i, val) {
    console.log(val);
    });
  }
  
  $(document).on('click', 'button', function() {
    start();
  });