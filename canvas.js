(function(){
  const canvas = document.getElementById('starfield');
  if(!canvas) return;
  const ctx = canvas.getContext('2d',{alpha:true});
  let W=canvas.width=innerWidth, H=canvas.height=innerHeight;
  let mx=0,my=0,scroll=0;
  const layers=[
    {count:100,speed:0.06,size:[0.5,1.2],color:"255,255,255"},
    {count:140,speed:0.18,size:[0.8,1.6],color:"180,220,255"},
    {count:60,speed:0.35,size:[1.2,2.2],color:"124,58,237"}
  ];
  let stars=[];
  layers.forEach((L,li)=>{for(let i=0;i<L.count;i++){stars.push({x:Math.random()*W,y:Math.random()*H,r:L.size[0]+Math.random()*(L.size[1]-L.size[0]),o:0.2+Math.random()*0.8,tw:Math.random()*Math.PI*2,speed:L.speed+Math.random()*0.15,layer:li})}});
  addEventListener('mousemove',e=>{mx=(e.clientX/W-0.5)*14;my=(e.clientY/H-0.5)*14});
  addEventListener('scroll',()=>scroll=scrollY,{passive:true});
  addEventListener('resize',()=>{W=canvas.width=innerWidth;H=canvas.height=innerHeight});
  (function loop(){
    ctx.clearRect(0,0,W,H);
    stars.forEach(s=>{
      s.tw+=0.012;
      const a=Math.sin(s.tw)*0.3+0.7;
      const ox=mx*(s.layer+1)*0.4, oy=my*(s.layer+1)*0.4+scroll*s.speed*0.04;
      const x=(s.x+ox)%W, y=(s.y+oy)%H;
      ctx.beginPath(); ctx.arc(x,y,s.r*a,0,Math.PI*2);
      ctx.fillStyle=`rgba(${layers[s.layer].color},${s.o*a})`;
      if(s.layer===2){ctx.shadowBlur=6;ctx.shadowColor=`rgba(124,58,237,${s.o})`} else ctx.shadowBlur=0;
      ctx.fill();
    });
    requestAnimationFrame(loop);
  })();
})();