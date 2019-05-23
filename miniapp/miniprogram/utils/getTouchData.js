const getTouchData = (startX,startY,endX,endY)=>{
  let turn = "";
  if(endX - startX > 20 && Math.abs(endY - startY) < 50){
    turn = "left"
  }
  else if(endX - startX < -20 && Math.abs(endY - startY) < 50){
    turn = "right"
  }
  // else if(endY - startY > 50 && Math.abs(endX - startX) < 50){
  //   turn = "top"
  // }
  // else if(endY - startY < -50 && Math.abs(endX - startX) < 50){
  //   turn = "bottom"
  // }
  return turn;
}

module.exports = getTouchData;