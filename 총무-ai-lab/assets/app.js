(function(){
  // copy buttons
  document.querySelectorAll('.copybox').forEach(function(box){
    var btn=box.querySelector('button'); var pre=box.querySelector('pre');
    if(!btn||!pre) return;
    btn.addEventListener('click',function(){
      var txt=pre.innerText;
      var done=function(){btn.textContent='복사됨';btn.classList.add('done');setTimeout(function(){btn.textContent='복사';btn.classList.remove('done');},1500);};
      if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(txt).then(done);}
      else{var ta=document.createElement('textarea');ta.value=txt;document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove();done();}
    });
  });
  // checklists with progress (saved in browser)
  document.querySelectorAll('.check').forEach(function(ck){
    var id=ck.dataset.id||''; var boxes=ck.querySelectorAll('input[type=checkbox]');
    var out=ck.querySelector('.cnt'); var bar=ck.querySelector('.bar i');
    function upd(){var n=0;boxes.forEach(function(b){if(b.checked)n++;});
      if(out)out.textContent=n+' / '+boxes.length+' 완료 ('+Math.round(n/boxes.length*100)+'%)';
      if(bar)bar.style.width=(n/boxes.length*100)+'%';
      if(id){try{localStorage.setItem('ck_'+id,JSON.stringify([].map.call(boxes,function(b){return b.checked;})));}catch(e){}}}
    if(id){try{var s=JSON.parse(localStorage.getItem('ck_'+id)||'[]');boxes.forEach(function(b,i){b.checked=!!s[i];});}catch(e){}}
    boxes.forEach(function(b){b.addEventListener('change',upd);}); upd();
  });
  // lab tabs (hash based)
  var labs=document.querySelectorAll('.lab');
  if(labs.length){
    function show(){
      var h=(location.hash||'').replace('#','');
      var target=null;
      labs.forEach(function(l){ if(l.id===h || (h && l.querySelector('[id="'+h+'"]'))) target=l; });
      if(!target) target=labs[0];
      labs.forEach(function(l){l.classList.toggle('on',l===target);});
      document.querySelectorAll('.labs a').forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+target.id);});
      document.querySelectorAll('.toc .wrap').forEach(function(t){t.style.display=(t.dataset.lab===target.id)?'flex':'none';});
      if(!h || h===target.id) window.scrollTo(0,0);
      else { var el=document.getElementById(h); if(el) el.scrollIntoView(); }
    }
    window.addEventListener('hashchange',show); show();
  }
})();
