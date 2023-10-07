let arr={},images={}
let temp=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

for (let i=15;i>0;i-=2)
{
  let t=Math.floor(Math.random()*i)
  let main=temp[t]
  temp.splice(t,1)
  let l=Math.floor(Math.random()*(i-1))
  arr["temp-"+main]="temp-"+temp[l];
  arr["temp-"+temp[l]]="temp-"+main;
  temp.splice(l,1)
}
let i=8
temp=[1,2,3,4,5,6,7,8,9]
for (const key in arr) {
  let l=Math.floor(Math.random()*(i--))
  if (images[key]==undefined)
  {
    images[key]="image-"+temp[l];
    images[arr[key]]="image-"+temp[l];
    temp.splice(l,1)
  }
  else i++
}

let c=0,prev=0,score=0,prevc
function call(e,current)
{
  let just=document.getElementById('image-10'),first=document.getElementById('one');
    console.log(e);
    c=(c+1)%2;
    if (c) 
    {
      prev=e;
      first.src=document.getElementById(images[e]).src;
      current.src=first.src
      prevc=current
      console.log(images[e]);
      return 0;
    }
    if (prev==e)
    {
      first.src=document.getElementById('image-10').src;
      alert("Your selection same image")
      return 0;
    }
    let b=document.getElementById('two');
    b.src=document.getElementById(images[e]).src;
    current.src=b.src
    console.log(e," ffff ",prev);
    setTimeout(() => {
      if (arr[prev]==e) 
      {
        arr[prev]=arr[e]=undefined
        score+=100;document.getElementById('content').innerHTML=score;
        if (score==800) 
          document.getElementById('conculsion').innerHTML="Congratulations you have won the game "+'<i class="fas fa-glass-cheers"></i>';
      }
      else if (arr[prev]!=undefined)
      {
        prevc.src=just.src
        current.src=just.src
      }
      first.src=just.src
      b.src=just.src
    }, 800);
}
