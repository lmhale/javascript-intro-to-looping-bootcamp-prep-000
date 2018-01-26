function forLoop(array){
  for(var i = 0; i< array.length;i++){
    if(i === 1){
      console.log(`I am ${i} strange loop`);
    }else 
    console.log(`I am ${i} strange loops`);
  }
}
forLoop([1,2,3,4,5,6,7,8]);
