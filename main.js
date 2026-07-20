(function(){
  var nav=document.getElementById('nav');
  if(nav) window.addEventListener('scroll',function(){nav.classList.toggle('raised',window.scrollY>30)},{passive:true});
  var hbg=document.getElementById('hbg'),drawer=document.getElementById('drawer');
  function close(){if(!hbg||!drawer)return;hbg.classList.remove('open');drawer.classList.remove('open');hbg.setAttribute('aria-expanded','false');document.body.style.overflow='';}
  if(hbg&&drawer){
    hbg.addEventListener('click',function(){var o=drawer.classList.toggle('open');hbg.classList.toggle('open',o);hbg.setAttribute('aria-expanded',String(o));document.body.style.overflow=o?'hidden':'';});
    drawer.querySelectorAll('a').forEach(function(a){a.addEventListener('click',close);});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
    window.addEventListener('resize',function(){if(window.innerWidth>1024)close();});
  }
  var obs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}});},{threshold:0.07,rootMargin:'0px 0px -20px 0px'});
  document.querySelectorAll('.reveal').forEach(function(el){obs.observe(el);});
  var yr=document.getElementById('yr');if(yr)yr.textContent=new Date().getFullYear();
})();
