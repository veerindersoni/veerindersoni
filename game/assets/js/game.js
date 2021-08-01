var p1=document.getElementById('icon1');
var p2=document.getElementById('icon2');
var p3=document.getElementById('icon3');

var c=document.getElementById('score');
var p=document.getElementById('score1');
var rand;
var round=0;
var scorec=0;
var scorep=0;

var rank=document.getElementById('rank');
var bank=document.getElementById('bank');
var r=document.getElementById('round');
var r2=document.getElementById('bnt');
p1.addEventListener("click",function(){
	round++;
	r.src="assets/images/hand.jpg";
	random(0);
});
p2.addEventListener("click",function(){
   r.src="assets/images/rock.jpg";
   round++;
   random(1);
});
p3.addEventListener("click",function(){
	r.src="assets/images/scissor.jpg";
	round++;
	random(2);
});
function random(pla)
{
	rand=Math.floor(Math.random() * 3); 
	console.log(rand);
	console.log(pla);
	var s=document.getElementById('rond');
    if(rand==0)
    {
	s.src="assets/images/hand.jpg";
    }
    if(rand ==1)
    {
	s.src="assets/images/rock.jpg";
    }
    if(rand == 2)
    {
	s.src="assets/images/scissor.jpg";
    }
    r2.innerHTML=round;
    
    wincheck(rand,pla);
    p.innerHTML = scorep;
    c.innerHTML = scorec;
}
function wincheck(rand,pla) {
	rank.innerHTML="draw";
	if(rand==pla)
	{
    rank.innerHTML="draw";
    bank.innerHTML="draw";
    }
    else
    {
    	
      let win = true;
      switch (pla) {
        case 0:
          if (rand==2) { win = false; }
          break;
        case 1:
          if (rand==3) { win = false; }
          break;
        case 2:
          if (rand==1) { win = false; }
          break;
      }
      if (win) {
       
        scorep++;
        bank.innerHTML = "You Won";
        rank.innerHTML = "Try Next Time";
        
      } else {
        scorec++;
        bank.innerHTML = "Try Next Time";
        rank.innerHTML = "You Win";
      }
    }
}

 