window.onload=function(){
  waterfall('main','box');


}

function waterfall(parent,box){
  var oParent=document.getElementById(parent);
    var boxs = getByClass(oParent,box);
    var boxw =boxs[0].offsetWidth;
    var cols = Math.floor(document.documentElement.clientWidth/boxw);
    //main的寬度
    oParent.style.cssText = 'width:'+cols*boxw+'px;margin:0 auto;';
    var hArr =[];//存放每一列
    for(var i=0,j=boxs.length;i<j;i++){
      if(i<cols){
        hArr.push(boxs[i].offsetHeight);

      }else{
        var minH = Math.min.apply(null,hArr);

        var index =getMinIndex(hArr,minH);
        boxs[i].style.position='absolute';
        boxs[i].style.top=minH+'px';
        //boxs[i].style.left=boxw*index+'px';
        boxs[i].style.left=boxs[index].offsetLeft+'px';

        hArr[index]=minH+boxs[i].offsetHeight;//
          console.log(hArr[index]);
      }
    }


}

//根據class獲取元素
function getByClass(parent,clsName){
  var boxArr = new Array(),
      oElement =parent.getElementsByTagName('*');//取到子元素而非孫元素
      for(var i = 0,j=oElement.length;i<j;i++){
        if(oElement[i].className==clsName){
          boxArr.push(oElement[i]);
        }
      }
      return boxArr;

}


function getMinIndex(arr,val){
    for(var i in arr){
      if(arr[i] == val){
        return i;
      }
    }

}
