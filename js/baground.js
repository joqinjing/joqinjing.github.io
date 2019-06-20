// JavaScript Document
	var skiscr = document.getElementById('a');
	var baground1 = document.getElementById('baground1'),
		baground2 = document.getElementById('baground2'),
		baground3 = document.getElementById('baground3'),
		baground4 = document.getElementById('baground4'),
	timer1 = null;
	
	skiscr.onscroll = function(){
		clearInterval(timer1);
		if(getScrollTop() > 1400){
		timer1 = setInterval(function(){
				straScroll(baground1,370);
				straScroll(baground2,350);
				straScroll(baground3,300);
				straScroll(baground4,240);
			},30)		
		}
	}
function straScroll(obj,sum){
	if(obj.offsetWidth == sum){
		clearInterval(obj.timerOne);
	}else{
		obj.style.width = obj.offsetWidth+10+'px';	
	}	
}
function getScrollTop()
{
  var scrollTop=0;
  if(document.documentElement&&document.documentElement.scrollTop)
  {
  scrollTop=document.documentElement.scrollTop;
  }
  else if(document.body)
  {
  scrollTop=document.body.scrollTop;
  }
  return scrollTop;
}