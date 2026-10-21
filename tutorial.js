(function(){
const $=s=>document.querySelector(s);
const home=$('#home'),vk=$('#view-koperasi'),vd=$('#view-dinas'),lb=$('#lightbox'),lbImg=lb.querySelector('img');
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const brand=document.querySelector('#beranda .brand').outerHTML;
const navHtml=a=>`<nav class="tut-nav" aria-label="Navigasi tutorial">${brand}<div class="nav-links"><a href="#beranda">Beranda</a><a href="#tutorial-koperasi" class="${a==='k'?'active':''}">Akun Koperasi</a><a href="#tutorial-dinas" class="${a==='d'?'active':''}">Akun Dinas</a></div></nav>`;
const footHtml=()=>document.querySelector('#home footer').outerHTML;
const CATS=['Mulai','Pengaturan akun','Dokumen','Pengajuan dan laporan','Data koperasi'];
function img(f,wide){return `<figure class="shot${wide?' wide':''}"><img src="${IMG[f]}" alt="Tangkapan layar ODS Mandiri" loading="lazy" decoding="async"${wide?'':' data-zoom="1"'}></figure>`}
function blocks(bs){return bs.map(b=>b.t==='p'?`<p>${esc(b.x)}</p>`:b.t==='note'?`<div class="t-note"><b>${esc(b.x.split(':')[0])}:</b>${esc(b.x.slice(b.x.indexOf(':')+1))}</div>`:b.t==='sub'?`<div class="sub-h">${esc(b.x)}</div>`:img(b.f,b.wide)).join('')}
function renderIndex(){
 vk.innerHTML=`<header class="tut-hero"><div class="wrap">${navHtml('k')}<div class="tut-head"><div class="tut-crumb"><a href="#beranda">Beranda</a><span>/</span><span>Tutorial</span><span>/</span><span>Akun Koperasi</span></div><h1>Tutorial <em>Akun Koperasi</em></h1><p>Panduan langkah demi langkah memakai ODS Mandiri, dari mendaftar akun sampai mengelola data koperasi.</p><div class="tut-meta"><span class="tut-chip lime">${TOPICS.length} panduan</span><span class="tut-chip">Juknis ODS Mandiri</span></div></div></div></header>
 <main class="wrap tut-body"><div class="tut-tools"><label for="tq"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><input id="tq" type="search" placeholder="Cari panduan, misalnya password atau RAT" autocomplete="off"></label><span class="tut-count" id="tcount"></span></div><div id="tlist"></div></main>${footHtml()}`;
 const q=$('#tq');const draw=()=>{const v=q.value.trim().toLowerCase();let n=0;let html='';
  CATS.forEach((c,ci)=>{const its=TOPICS.map((t,i)=>({t,i})).filter(o=>o.t.cat===ci&&(!v||(o.t.title+' '+o.t.steps.map(s=>s.title).join(' ')).toLowerCase().includes(v)));
   if(!its.length)return;n+=its.length;
   html+=`<section class="tut-group"><h2>${c}</h2><div class="tut-grid">${its.map(o=>card(o.t,o.i)).join('')}</div></section>`});
  $('#tlist').innerHTML=n?html:'<div class="tut-empty">Tidak ada panduan yang cocok. Coba kata kunci lain.</div>';
  $('#tcount').textContent=n+' dari '+TOPICS.length+' panduan'};
 q.addEventListener('input',draw);draw();
}
function card(t,i){const ss=t.steps.filter(s=>!s.group);return `<a class="t-card" href="#koperasi-${t.n}"><div class="t-visual v${i%3}"><span>${t.n}</span><b>${esc(t.title)}</b></div><div class="t-body"><small>${CATS[t.cat]}</small><ol class="t-steps">${ss.slice(0,3).map(s=>`<li>${esc(s.title)}</li>`).join('')}</ol><div class="t-more"><span>Selengkapnya</span><i>${VIDEOS[t.n]?'Video · ':''}${ss.length} langkah</i></div></div></a>`}
function renderTopic(i){
 const t=TOPICS[i],prev=TOPICS[i-1],next=TOPICS[i+1];let no=0;
 const steps=t.steps.map((s,k)=>{
  if(s.group){no=0;return `<div class="step-group"><h2>${esc(s.group)}</h2></div>`+(s.blocks.length?`<div class="t-intro">${blocks(s.blocks)}</div>`:'')}
  no++;return `<article class="step" id="langkah-${k+1}"><div class="step-top"><span class="step-no">${no}</span><h3>${esc(s.title)}</h3></div>${blocks(s.blocks)}</article>`}).join('');
 const nsteps=t.steps.filter(s=>!s.group).length;
 vk.innerHTML=`<header class="tut-hero"><div class="wrap">${navHtml('k')}<div class="tut-head"><div class="tut-crumb"><a href="#beranda">Beranda</a><span>/</span><a href="#tutorial-koperasi">Akun Koperasi</a><span>/</span><span>${t.n}</span></div><h1><em>${t.n}</em> ${esc(t.title)}</h1><div class="tut-meta"><span class="tut-chip lime">${CATS[t.cat]}</span><span class="tut-chip">${nsteps} langkah</span></div></div></div></header>
 <main class="wrap tut-body"><div class="step-wrap"><a class="t-back" href="#tutorial-koperasi">&larr; Semua panduan</a>${t.intro.length?`<div class="t-intro">${blocks(t.intro)}</div>`:''}${VIDEOS[t.n]?`<section class="t-video" aria-label="Video panduan"><h2>Video panduan</h2><video controls preload="metadata" playsinline>${Object.entries(VIDEOS[t.n]).map(([k,v])=>`<source src="${v}" type="video/${k}">`).join('')}</video></section>`:''}${steps}</div>
 <nav class="t-pager" aria-label="Panduan lainnya">${prev?`<a href="#koperasi-${prev.n}"><small>&larr; Sebelumnya</small><b>${prev.n} ${esc(prev.title)}</b></a>`:'<span></span>'}${next?`<a class="next" href="#koperasi-${next.n}"><small>Berikutnya &rarr;</small><b>${next.n} ${esc(next.title)}</b></a>`:''}</nav></main>${footHtml()}`;
}
vk.addEventListener('click',e=>{const im=e.target.closest('img[data-zoom]');if(im){lbImg.src=im.src;lb.showModal()}});
lb.addEventListener('click',()=>lb.close());
function renderDinas(){vd.innerHTML=`<header class="tut-hero"><div class="wrap">${navHtml('d')}<div class="tut-head"><div class="tut-crumb"><a href="#beranda">Beranda</a><span>/</span><span>Tutorial</span><span>/</span><span>Akun Dinas</span></div><h1>Tutorial <em>Akun Dinas</em></h1><p>Panduan untuk dinas kabupaten/kota dan dinas provinsi yang memverifikasi data koperasi.</p></div></div></header><main class="wrap tut-body"><div class="soon"><h2>Panduan Dinas sedang disiapkan</h2><p>Langkah-langkah untuk akun Dinas akan ditambahkan di halaman ini. Sementara itu, panduan akun Koperasi sudah tersedia lengkap.</p><a class="button button-primary" href="#tutorial-koperasi">Buka Tutorial Koperasi</a></div></main>${footHtml()}`}
function route(){
 const h=location.hash.slice(1);let m;
 const show=(el)=>{[home,vk,vd].forEach(x=>x.hidden=x!==el)};
 if(h==='tutorial-koperasi'){renderIndex();show(vk);window.scrollTo(0,0)}
 else if((m=/^koperasi-(\d{2})$/.exec(h))&&TOPICS.some(t=>t.n===m[1])){renderTopic(TOPICS.findIndex(t=>t.n===m[1]));show(vk);window.scrollTo(0,0)}
 else if(h==='tutorial-dinas'){renderDinas();show(vd);window.scrollTo(0,0)}
 else{const was=home.hidden;show(home);const el=h&&document.getElementById(h);if(el&&was)requestAnimationFrame(()=>el.scrollIntoView())}
}
window.addEventListener('hashchange',route);route();
})();
