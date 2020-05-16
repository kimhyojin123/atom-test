var burger = new Array(3);
var drink = new Array(2);
var minb=2000;
var mind=2000;
for(var i=0;i<3;i++){
  burger[i]=prompt("햄버거"+ (i+1)+"가격을 정하세요","가격");
}
drink[0]=prompt("콜라의 가격을 정하세요","콜라 가격");
drink[1]=prompt("사이다의 가격을 정하세요", "사이다 가격");
if(drink[0]<drink[1]){
  mind=drink[0];
}
else{
  mind=drink[1];
}

for(var i=0;i<3;i++){
  if(burger[i]<minb){
    minb=burger[i];
  }
}
var result=parseInt(minb)+parseInt(mind);
document.write('가장 싼 세트 메뉴 가격'+(result-50));
