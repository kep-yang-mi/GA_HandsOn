(function(){
  // tool switch: Claude / ChatGPT (saved in browser, ?tool= overrides)
  (function(){
    var q=new URLSearchParams(location.search).get('tool');
    var t=(q==='chatgpt'||q==='claude')?q:null;
    if(!t){try{t=localStorage.getItem('tool');}catch(e){}}
    if(t!=='chatgpt') t='claude';
    function set(v){document.body.setAttribute('data-tool',v);try{localStorage.setItem('tool',v);}catch(e){}
      document.querySelectorAll('.toolsw button').forEach(function(b){b.classList.toggle('on',b.dataset.set===v);});(window.__ckUpd||[]).forEach(function(f){f();});}
    document.querySelectorAll('.toolsw button').forEach(function(b){b.addEventListener('click',function(){set(b.dataset.set);});});
    set(t);
  })();

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
    function vis(b){var t=b.closest('[data-tool]');return !t||t.getAttribute('data-tool')===document.body.getAttribute('data-tool');}
    function upd(){var n=0,tot=0;boxes.forEach(function(b){if(!vis(b))return;tot++;if(b.checked)n++;});
      if(out)out.textContent=n+' / '+tot+' 완료 ('+(tot?Math.round(n/tot*100):0)+'%)';
      if(bar)bar.style.width=(tot?n/tot*100:0)+'%';
      if(id){try{localStorage.setItem('ck_'+id,JSON.stringify([].map.call(boxes,function(b){return b.checked;})));}catch(e){}}}
    if(id){try{var s=JSON.parse(localStorage.getItem('ck_'+id)||'[]');boxes.forEach(function(b,i){b.checked=!!s[i];});}catch(e){}}
    boxes.forEach(function(b){b.addEventListener('change',upd);}); (window.__ckUpd=window.__ckUpd||[]).push(upd); upd();
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
      if(!h || h===target.id){ window.scrollTo(0,0); setTimeout(function(){window.scrollTo(0,0);},0); }
      else { var el=document.getElementById(h); if(el) el.scrollIntoView(); }
    }
    window.addEventListener('hashchange',show); show();
  }
})();
