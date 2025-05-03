function decimalToBinary(num) {
  //Write you code here
	let binery = '';
	if(num === 0){
			return '0';
	}
	for(let i=num;i>0;i=math.floor(i/2)){
			binery = (i%2)  +  binery;
	}
	return binery;
  
}

window.decimalToBinary = decimalToBinary;
