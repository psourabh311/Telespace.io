const {useState,useEffect,useRef} = React;
const DATA = window.TELESPACE_DATA;

function App(){
  const [mobileOpen,setMobileOpen]=useState(false);
  const [activeDomain,setActiveDomain]=useState(null);
  const [form,setForm]=useState({name:"",address:"",mobile:"",query:""});
  const [sent,setSent]=useState(false);

  useEffect(()=>{
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in-view')}),{threshold:0.12});
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
    return()=>io.disconnect();
  },[activeDomain]);

  const openDomain=(id)=>{setActiveDomain(id); document.body.style.overflow='hidden'; location.hash=`page-${id}`;}
  const closeDomain=()=>{setActiveDomain(null); document.body.style.overflow=''; history.replaceState(null,'',location.pathname);}

  const active = DATA.domains.find(d=>d.id===activeDomain);

  return (
    <div>
      {/* HEADER */}
      <header>
        <div className="max-w" style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
          <div style={{display:'flex',alignItems:'center',gap:24}}>
            <div className="space" style={{fontSize:22,fontWeight:700,letterSpacing:'-0.02em'}}>telespace.io <span style={{fontSize:10,letterSpacing:'0.28em',color:'rgba(255,255,255,0.6)',marginLeft:8}}>YOUR ICT PARTNER</span></div>
            <div style={{display:'flex',alignItems:'center',gap:4,padding:4,borderRadius:999,background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.06)'}} className="hide-mob">
              <span className="dot" style={{marginLeft:12}}></span>
              <span style={{fontSize:10,letterSpacing:'0.2em',color:'rgba(255,255,255,0.5)',padding:'4px 12px'}}>CONSULTING PROFILE // HYBRID MODEL</span>
            </div>
          </div>
          <nav style={{display:'flex',gap:28,fontSize:11,letterSpacing:'0.18em',color:'rgba(255,255,255,0.6)',alignItems:'center'}}>
            <a href="#why" style={{color:'inherit',textDecoration:'none'}}>WHY US</a>
            <a href="#domains" style={{color:'inherit',textDecoration:'none'}}>DOMAINS</a>
            <a href="#approach" style={{color:'inherit',textDecoration:'none'}}>APPROACH</a>
            <a href="#contact" className="btn btn-white" style={{height:36}}>CONTACT</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w" style={{padding:'64px 24px 64px',display:'grid',gridTemplateColumns:'1.15fr 0.85fr',gap:48}}>
        <div className="reveal in-view">
          <div className="badge" style={{marginBottom:24}}><span className="dot"></span> TELECOM // UNIVERSE CLASS CONSULTING</div>
          <h1 className="space" style={{fontSize:'clamp(44px,6vw,84px)',lineHeight:0.9,letterSpacing:'-0.04em',fontWeight:600}}>
            <span style={{display:'block',fontSize:14,letterSpacing:'0.3em',color:'rgba(255,255,255,0.2)',fontWeight:400,marginBottom:12}}>01 / MISSION STATEMENT</span>
            TELECOM is<br/><span className="text-gradient">the Universe.</span><br/>We Navigate It.
          </h1>
          <p style={{marginTop:24,fontSize:16,lineHeight:1.7,color:'rgba(255,255,255,0.6)',maxWidth:560,fontWeight:300}}>
            telespace.io is a consulting-first hybrid model. We think like the customer, own the solution completely, and deliver <span style={{color:'#fff'}}>Total Cost of Ownership</span> across Infrastructure, Hardware, Information, Communication & Technology.
          </p>
          <div style={{marginTop:32,display:'flex',gap:12,flexWrap:'wrap'}}>
            <a href="#domains" className="btn btn-white">EXPLORE 5 DOMAINS</a>
            <a href="#why" className="btn btn-ghost">WHY TELESACE →</a>
          </div>
          <div style={{marginTop:40,display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24,maxWidth:520,borderTop:'1px solid rgba(255,255,255,0.07)',paddingTop:24}}>
            {[{k:"DOMAINS",v:"5 CORE"},{k:"CONTACT",v:"9250002645"},{k:"MODEL",v:"HYBRID CONSULT"}].map(i=>(
              <div key={i.k}><div style={{fontSize:10,letterSpacing:'0.2em',color:'rgba(255,255,255,0.4)'}}>{i.k}</div><div className="space" style={{fontSize:12,marginTop:4,fontWeight:600}}>{i.v}</div></div>
            ))}
          </div>
        </div>

        <div className="reveal in-view">
          <div className="hud" style={{padding:24,borderRadius:28,position:'relative',overflow:'hidden'}}>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:24}}>
              <div style={{display:'flex',alignItems:'center',gap:8}}><div style={{width:28,height:28,borderRadius:'50%',background:'rgba(255,255,255,0.1)',display:'grid',placeItems:'center'}}><span style={{width:8,height:8,borderRadius:'50%',background:'var(--cyan)',display:'block'}}></span></div><span style={{fontSize:10,letterSpacing:'0.2em',color:'rgba(255,255,255,0.6)'}}>MISSION CONTROL // OWNERSHIP</span></div>
              <div style={{display:'flex',gap:6}}><span style={{width:8,height:8,borderRadius:'50%',background:'rgba(255,255,255,0.2)'}}></span><span style={{width:8,height:8,borderRadius:'50%',background:'rgba(255,255,255,0.2)'}}></span><span style={{width:8,height:8,borderRadius:'50%',background:'var(--cyan)'}}></span></div>
            </div>
            <div style={{aspectRatio:'1.1/1',borderRadius:20,overflow:'hidden',background:'radial-gradient(80% 80% at 50% 0%,rgba(124,58,237,0.25),transparent 60%),radial-gradient(70% 70% at 80% 100%,rgba(0,217,255,0.18),transparent 60%),#05050A',border:'1px solid rgba(255,255,255,0.1)',position:'relative'}}>
              <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}><div style={{width:96,height:96,borderRadius:'50%',background:'#fff',color:'#000',display:'grid',placeItems:'center',fontWeight:700,fontSize:12,textAlign:'center',boxShadow:'0 0 30px rgba(0,217,255,0.32)'}}>YOUR ICT<br/>PARTNER</div></div>
              <div style={{position:'absolute',bottom:12,left:12,right:12,display:'flex',gap:8}}>
                {[{l:"OWNERSHIP",v:"Complete"},{l:"SUPPORT",v:"24*7"},{l:"COMPLIANCE",v:"DoT/MTCTE"}].map(s=>(
                  <div key={s.l} style={{flex:1,borderRadius:12,background:'rgba(0,0,0,0.6)',border:'1px solid rgba(255,255,255,0.1)',padding:10,backdropFilter:'blur(10px)'}}>
                    <div style={{fontSize:8,letterSpacing:'0.18em',color:'rgba(255,255,255,0.4)'}}>{s.l}</div><div style={{fontSize:11,fontWeight:700,marginTop:2}}>{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{marginTop:16,display:'flex',justifyContent:'space-between',fontSize:10,letterSpacing:'0.18em',color:'rgba(255,255,255,0.4)'}}><span>SYSTEM STATUS // OWNERSHIP ACTIVE</span><span style={{color:'var(--cyan)'}}>● contact@telespace.in</span></div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="max-w" style={{padding:'64px 24px'}}>
        <div style={{display:'grid',gridTemplateColumns:'0.9fr 1.1fr',gap:48}}>
          <div className="reveal"><div style={{fontSize:11,letterSpacing:'0.3em',color:'var(--cyan)',marginBottom:16}}>WHY TELESACE // VOICE SOLUTIONS</div><h2 className="space" style={{fontSize:50,lineHeight:0.95,letterSpacing:'-0.03em',fontWeight:600}}>Why Telespace.<br/><span style={{color:'rgba(255,255,255,0.4)'}}>Consulting DNA.</span></h2><p style={{marginTop:24,fontSize:13,lineHeight:1.8,color:'rgba(255,255,255,0.6)',maxWidth:440}}>We are not a vendor portal. We are a network of professionals who cover general management & technology consultancy across sectors.</p></div>
          <div style={{display:'grid',gap:16}}>{DATA.whyUs.map(w=>(
            <div key={w.n} className="reveal hud" style={{padding:24,display:'flex',gap:20}}><div style={{width:44,height:44,borderRadius:'50%',background:'#fff',color:'#000',display:'grid',placeItems:'center',fontWeight:700,flexShrink:0}}>{w.n}</div><div><div className="space" style={{fontSize:15,fontWeight:600}}>{w.t}</div><div style={{fontSize:12,lineHeight:1.7,color:'rgba(255,255,255,0.6)',marginTop:8}}>{w.d}</div></div></div>
          ))}</div>
        </div>
      </section>

      {/* DOMAINS */}
      <section id="domains" className="max-w" style={{padding:'32px 24px 64px'}}>
        <div className="reveal" style={{marginBottom:32}}><div style={{fontSize:11,letterSpacing:'0.3em',color:'var(--cyan)',marginBottom:12}}>02 / DOMAIN ARCHITECTURE</div><h2 className="space" style={{fontSize:56,lineHeight:0.95,letterSpacing:'-0.03em',fontWeight:600}}>TELECOM is Parent.<br/><span style={{color:'rgba(255,255,255,0.4)'}}>Five child constellations.</span></h2></div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',gap:20}}>
          {DATA.domains.map(d=>(
            <div key={d.id} className="reveal hud hud-glow" style={{padding:28,display:'flex',flexDirection:'column'}}>
              <div style={{display:'flex',justifyContent:'space-between'}}><div><div style={{display:'flex',gap:12,alignItems:'center'}}><span style={{fontSize:10,letterSpacing:'0.22em',color:'rgba(255,255,255,0.4)'}}>{d.code}</span><span style={{width:4,height:4,borderRadius:'50%',background:'rgba(255,255,255,0.3)'}}></span><span style={{fontSize:10,color:d.accent}}>OWNERSHIP • COMPLETE</span></div><h3 className="space" style={{marginTop:12,fontSize:24,fontWeight:600}}>{d.title}</h3><p style={{marginTop:8,fontSize:12,color:'rgba(255,255,255,0.5)'}}>{d.tagline}</p></div><div style={{width:32,height:32,borderRadius:'50%',border:'1px solid rgba(255,255,255,0.15)',display:'grid',placeItems:'center'}}>↗</div></div>
              <p style={{marginTop:20,fontSize:12,lineHeight:1.7,color:'rgba(255,255,255,0.6)'}}>{d.intro}</p>
              <div style={{marginTop:'auto',paddingTop:24,display:'flex',gap:8}}><button onClick={()=>openDomain(d.id)} className="btn btn-white" style={{flex:1}}>VIEW COMPLETE DETAILS →</button><a href={`#page-${d.id}`} className="btn btn-ghost">PAGE</a></div>
            </div>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="max-w" style={{padding:'64px 24px'}}>
        <div style={{display:'flex',gap:48}} className="approach-wrap">
          <div className="reveal" style={{width:380,flexShrink:0}}><div style={{fontSize:11,letterSpacing:'0.3em',color:'var(--violet)',marginBottom:12}}>03 / APPROACH VECTOR</div><h2 className="space" style={{fontSize:48,lineHeight:0.95}}>How we work.<br/><span style={{color:'rgba(255,255,255,0.4)'}}>Orbit path.</span></h2><p style={{marginTop:20,fontSize:13,color:'rgba(255,255,255,0.5)',lineHeight:1.7}}>Requirement to TCO is not linear. It's orbital mechanics — each burn must be precise, compliant, and owned.</p></div>
          <div style={{flex:1,display:'grid',gap:16}}>{DATA.approach.map((a,i)=>(
            <div key={a.n} className="reveal" style={{display:'flex',gap:24}}><div style={{width:56,height:56,borderRadius:'50%',display:'grid',placeItems:'center',border:'1px solid rgba(255,255,255,0.15)'}} className="hud">{a.n}</div><div className="hud hud-glow" style={{flex:1,padding:20}}><h3 className="space" style={{fontSize:18,fontWeight:600}}>{a.t}</h3><p style={{fontSize:13,color:'rgba(255,255,255,0.6)',marginTop:8,lineHeight:1.7}}>{a.d}</p></div></div>
          ))}</div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w" style={{padding:'64px 24px',display:'grid',gridTemplateColumns:'0.95fr 1.05fr',gap:48,borderTop:'1px solid rgba(255,255,255,0.06)'}}>
        <div className="reveal"><div style={{fontSize:11,letterSpacing:'0.3em',color:'var(--violet)',marginBottom:12}}>05 / MISSION LOG // CONTACT</div><h2 className="space" style={{fontSize:48,lineHeight:0.95}}>Send transmission.<br/><span style={{color:'rgba(255,255,255,0.4)'}}>We decode.</span></h2>
          <div style={{marginTop:32,display:'grid',gap:16}}>
            <div className="hud" style={{padding:20}}><div style={{fontSize:10,letterSpacing:'0.2em',color:'rgba(255,255,255,0.4)'}}>EMAIL // REGISTERED MAIL</div><div style={{fontSize:16,fontWeight:600,marginTop:4}}>contact@telespace.in</div><div style={{fontSize:11,color:'rgba(255,255,255,0.5)',marginTop:8}}>All queries forwarded to this mailbox with subject: "There is a client/user which commented a query"</div></div>
            <div className="hud" style={{padding:20,display:'flex',justifyContent:'space-between'}}><div><div style={{fontSize:10,letterSpacing:'0.2em',color:'rgba(255,255,255,0.4)'}}>CONTACT NUMBER</div><div className="space" style={{fontSize:18,fontWeight:700,marginTop:4}}>9250002645</div></div><div style={{width:40,height:40,borderRadius:'50%',background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',display:'grid',placeItems:'center'}}>◍</div></div>
          </div>
        </div>
        <div className="reveal">
          <form onSubmit={(e)=>{e.preventDefault(); if(!form.name||!form.mobile||!form.query) return; setSent(true); setTimeout(()=>setSent(false),5000); setForm({name:"",address:"",mobile:"",query:""})}} className="hud" style={{padding:32,position:'relative',overflow:'hidden'}}>
            <div style={{position:'absolute',top:0,left:0,right:0,height:1,background:'linear-gradient(90deg,var(--cyan),var(--violet),transparent)',opacity:0.6}}></div>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:24}}><div style={{display:'flex',gap:12,alignItems:'center'}}><div style={{width:32,height:32,borderRadius:'50%',background:'#fff',color:'#000',display:'grid',placeItems:'center',fontWeight:700,fontSize:11}}>TX</div><div><div style={{fontSize:12,letterSpacing:'0.18em',fontWeight:600}}>MISSION LOG ENTRY</div><div style={{fontSize:10,color:'rgba(255,255,255,0.4)'}}>ROUTES TO contact@telespace.in</div></div></div><div style={{display:'flex',gap:6,alignItems:'center'}}><span style={{width:6,height:6,borderRadius:'50%',background:'#34d399'}}></span><span style={{fontSize:10,letterSpacing:'0.18em',color:'#6ee7b7'}}>LINK SECURE</span></div></div>
            {[
              {k:'name',label:'Name',ph:'Registered full name'},
              {k:'address',label:'Registered Address',ph:'Official address'},
              {k:'mobile',label:'Mobile Number',ph:'9250002645 format'},
            ].map(f=>(
              <div key={f.k} style={{marginBottom:16}}><label style={{fontSize:10,letterSpacing:'0.2em',color:'rgba(255,255,255,0.5)'}}>{f.label.toUpperCase()}</label><input value={form[f.k]} onChange={e=>setForm({...form,[f.k]:e.target.value})} placeholder={f.ph} style={{width:'100%',height:48,marginTop:8,borderRadius:12,background:'#08080F',border:'1px solid rgba(255,255,255,0.1)',padding:'0 16px',color:'#fff',fontSize:13}} required={f.k!=='address'}/></div>
            ))}
            <div style={{marginBottom:16}}><label style={{fontSize:10,letterSpacing:'0.2em',color:'rgba(255,255,255,0.5)'}}>YOUR QUERY</label><textarea value={form.query} onChange={e=>setForm({...form,query:e.target.value})} placeholder="Describe requirement..." rows={4} style={{width:'100%',marginTop:8,borderRadius:12,background:'#08080F',border:'1px solid rgba(255,255,255,0.1)',padding:16,color:'#fff',fontSize:13,resize:'none'}} required/></div>
            <button type="submit" className="btn btn-white" style={{width:'100%',height:52}}>TRANSMIT TO MISSION CONTROL →</button>
            {sent && <div style={{position:'absolute',inset:0,background:'rgba(2,2,8,0.9)',backdropFilter:'blur(12px)',display:'grid',placeItems:'center',padding:32}}><div className="hud" style={{padding:32,textAlign:'center',maxWidth:360,borderColor:'rgba(0,217,255,0.3)'}}><div style={{width:48,height:48,borderRadius:'50%',background:'var(--cyan)',color:'#000',display:'grid',placeItems:'center',margin:'0 auto',fontWeight:700}}>✓</div><div className="space" style={{marginTop:16,fontSize:18,fontWeight:700}}>TRANSMISSION SENT</div><div style={{marginTop:8,fontSize:12,color:'rgba(255,255,255,0.6)'}}>Your query has been forwarded to contact@telespace.in</div><button onClick={()=>setSent(false)} className="btn btn-ghost" style={{marginTop:16,width:'100%'}}>CLOSE CHANNEL</button></div></div>}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{borderTop:'1px solid rgba(255,255,255,0.06)',background:'rgba(1,1,10,0.8)',backdropFilter:'blur(10px)',padding:'32px 0'}}>
        <div className="max-w" style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:16}}>
          <div style={{display:'flex',gap:24,alignItems:'center'}}><span className="space" style={{fontSize:16,fontWeight:700}}>telespace.io</span><span style={{fontSize:11,letterSpacing:'0.22em',fontWeight:600}}>YOUR ICT PARTNER</span><span style={{fontSize:10,color:'rgba(255,255,255,0.4)'}}>Consulting Profile // Hybrid Model // Complete Ownership • TCO</span></div>
          <div style={{display:'flex',gap:12,fontSize:10,letterSpacing:'0.18em',color:'rgba(255,255,255,0.3)',alignItems:'center'}}><span>© 2026 TELESACE.IO</span><span style={{padding:'4px 12px',borderRadius:999,border:'1px solid rgba(255,255,255,0.1)',background:'rgba(255,255,255,0.03)'}}>TEC IN TELECOM • contact@telespace.in • 9250002645</span></div>
        </div>
        <div style={{height:2,marginTop:24,background:'linear-gradient(90deg,transparent,rgba(0,217,255,0.4),transparent)'}}></div>
      </footer>

      {/* DOMAIN OVERLAY */}
      {active && (
        <div style={{position:'fixed',inset:0,zIndex:80,display:'flex',flexDirection:'column',background:'rgba(2,2,8,0.95)',backdropFilter:'blur(18px)'}}>
          <div style={{height:72,borderBottom:'1px solid rgba(255,255,255,0.1)',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0 24px',background:'rgba(2,2,8,0.8)'}}>
            <div style={{display:'flex',gap:16,alignItems:'center'}}><div style={{width:32,height:32,borderRadius:'50%',background:'#fff',color:'#000',display:'grid',placeItems:'center',fontWeight:700,fontSize:11}}>TS</div><div><div style={{fontSize:12,letterSpacing:'0.18em',fontWeight:700}}>{active.title.toUpperCase()} // DEDICATED PAGE</div><div style={{fontSize:10,color:'rgba(255,255,255,0.4)'}}>{active.code} • OWNERSHIP COMPLETE</div></div></div>
            <button onClick={closeDomain} className="btn btn-white">CLOSE ✕</button>
          </div>
          <div style={{flex:1,overflow:'auto',padding:'40px 24px'}}>
            <div className="max-w"><div className="badge" style={{marginBottom:16}}>{active.code} • FULL DESCRIPTION</div><h1 className="space" style={{fontSize:56,lineHeight:0.9,fontWeight:700}}>{active.title}<br/><span style={{color:'rgba(255,255,255,0.4)',fontSize:28}}>Consulting, Compliance & Ownership</span></h1><p style={{marginTop:24,fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',maxWidth:800}}>{active.intro}</p><p style={{marginTop:16,fontSize:13,lineHeight:1.7,color:'rgba(255,255,255,0.5)'}}>{active.tagline} At Telespace, we don't sell products — we own solutions.</p>
              <div style={{marginTop:40,display:'grid',gap:12}}>{active.services.map(s=>(
                <div key={s.name} className="hud" style={{padding:20}}><div style={{fontSize:13,fontWeight:700}}>{s.name}</div><div style={{fontSize:12,color:'rgba(255,255,255,0.6)',marginTop:8,lineHeight:1.6}}>{s.desc}</div></div>
              ))}</div>
              <div style={{marginTop:40}}><button onClick={closeDomain} className="btn btn-white">BACK TO ORBIT</button></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
window.App = App;