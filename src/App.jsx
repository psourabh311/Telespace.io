import { useState, useEffect } from 'react'
import Starfield from './components/Starfield.jsx'
import { domains, whyUs, approach } from './data.js'

export default function App(){
  const [activeDomain,setActiveDomain]=useState(null)
  const [activeService,setActiveService]=useState(null)
  const [comment,setComment]=useState({name:"",email:"",mobile:"",company:"",query:""})
  const [submitted,setSubmitted]=useState(false)
  const [legalPage,setLegalPage]=useState(null)
  const [comments,setComments]=useState([
    {id:1,name:"Rajesh Kumar",company:"TechVision Solutions",query:"Excellent consulting services. They helped us with complete FTTH infrastructure setup across 3 cities. Highly professional team.",date:"2024-10-20"},
    {id:2,name:"Priya Sharma",company:"CloudNet Systems",query:"Procured 50+ enterprise laptops and networking equipment. Quick delivery and genuine products. Great support!",date:"2024-10-18"},
    {id:3,name:"Amit Patel",company:"SecureBase India",query:"DoT compliance and licensing support was seamless. Saved us months of paperwork. Recommended for telecom licensing.",date:"2024-10-15"}
  ])

  useEffect(()=>{
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in-view')}),{threshold:0.12})
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el))
    return()=>io.disconnect()
  },[activeDomain])

  const active = domains.find(d=>d.id===activeDomain)

  return (
    <div>
      <Starfield />
      <div className="ambient"><div className="grid-lines" style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(var(--line) 1px, transparent 1px),linear-gradient(90deg,var(--line) 1px, transparent 1px)',backgroundSize:'72px 72px',maskImage:'radial-gradient(ellipse at center, black 40%, transparent 75%)',opacity:0.3}}></div></div>

      <header>
        <div className="max-w" style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
          <div style={{display:'flex',alignItems:'center',gap:24}}>
            <div className="space" style={{fontSize:22,fontWeight:700}}>telespace.io <span style={{fontSize:10,letterSpacing:'0.28em',color:'rgba(255,255,255,0.6)',marginLeft:8}}>YOUR ICT PARTNER</span></div>
            <div style={{display:'flex',alignItems:'center',gap:4,padding:4,borderRadius:999,background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.06)'}}>
              <span className="dot" style={{marginLeft:12}}></span>
              <span style={{fontSize:10,letterSpacing:'0.2em',color:'rgba(255,255,255,0.5)',padding:'4px 12px'}}>CONSULTING PROFILE // HYBRID MODEL</span>
            </div>
          </div>
          <nav style={{display:'flex',gap:28,fontSize:11,letterSpacing:'0.18em',color:'rgba(255,255,255,0.6)',alignItems:'center'}}>
            <a href="#why">WHY US</a><a href="#domains">DOMAINS</a><a href="#approach">APPROACH</a>
            <a href="#contact" className="btn btn-white" style={{height:36}}>CONTACT US</a>
          </nav>
        </div>
      </header>

      <section className="max-w" style={{padding:'80px 24px 64px',display:'grid',gridTemplateColumns:'1.15fr 0.85fr',gap:48}}>
        <div className="reveal in-view">
          <div className="badge" style={{marginBottom:24}}><span className="dot"></span> TELECOM // UNIVERSE CLASS CONSULTING</div>
          <h1 className="space" style={{fontSize:'clamp(44px,6vw,84px)',lineHeight:0.9,letterSpacing:'-0.04em',fontWeight:600}}>
            <span style={{display:'block',fontSize:14,letterSpacing:'0.3em',color:'rgba(255,255,255,0.2)',fontWeight:400,marginBottom:12}}>01 / MISSION STATEMENT</span>
            TELECOM is<br/><span className="text-gradient">the Universe.</span><br/>We Navigate It.
          </h1>
          <p style={{marginTop:24,fontSize:16,lineHeight:1.7,color:'rgba(255,255,255,0.6)',maxWidth:560}}>telespace.io is a consulting-first hybrid model serving clients <span style={{color:'var(--cyan)'}}>nationally and internationally</span>. We think like the customer, own the solution completely, and deliver <span style={{color:'#fff'}}>Total Cost of Ownership</span> across Infrastructure, Hardware, Information, Communication & Technology.</p>
          <div style={{marginTop:32,display:'flex',gap:12,flexWrap:'wrap'}}><a href="#domains" className="btn btn-white">EXPLORE 5 DOMAINS</a><a href="#why" className="btn btn-ghost">WHY TELESACE →</a></div>
          <div style={{marginTop:40,display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24,maxWidth:520,borderTop:'1px solid rgba(255,255,255,0.07)',paddingTop:24}}>
            {[{k:"DOMAINS",v:"5 CORE"},{k:"CONTACT",v:"9250002645"},{k:"SERVICE",v:"NATIONAL + INTL"}].map(i=><div key={i.k}><div style={{fontSize:10,letterSpacing:'0.2em',color:'rgba(255,255,255,0.4)'}}>{i.k}</div><div className="space" style={{fontSize:12,marginTop:4,fontWeight:600}}>{i.v}</div></div>)}
          </div>
        </div>
        <div className="reveal in-view">
          <div className="hud" style={{padding:24,borderRadius:28}}>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:24}}><div style={{display:'flex',alignItems:'center',gap:8}}><div style={{width:28,height:28,borderRadius:'50%',background:'rgba(255,255,255,0.1)',display:'grid',placeItems:'center'}}><span style={{width:8,height:8,borderRadius:'50%',background:'var(--cyan)',display:'block'}}></span></div><span style={{fontSize:10,letterSpacing:'0.2em',color:'rgba(255,255,255,0.6)'}}>MISSION CONTROL // OWNERSHIP</span></div><div style={{display:'flex',gap:6}}><span style={{width:8,height:8,borderRadius:'50%',background:'rgba(255,255,255,0.2)'}}></span><span style={{width:8,height:8,borderRadius:'50%',background:'rgba(255,255,255,0.2)'}}></span><span style={{width:8,height:8,borderRadius:'50%',background:'var(--cyan)'}}></span></div></div>
            <div style={{aspectRatio:'1.1/1',borderRadius:20,background:'radial-gradient(80% 80% at 50% 0%,rgba(124,58,237,0.25),transparent 60%),radial-gradient(70% 70% at 80% 100%,rgba(0,217,255,0.18),transparent 60%),#05050A',border:'1px solid rgba(255,255,255,0.1)',position:'relative',display:'grid',placeItems:'center'}}>
              <div style={{width:96,height:96,borderRadius:'50%',background:'#fff',color:'#000',display:'grid',placeItems:'center',fontWeight:700,fontSize:12,textAlign:'center'}}>YOUR ICT<br/>PARTNER</div>
              <div style={{position:'absolute',bottom:12,left:12,right:12,display:'flex',gap:8}}>
                {[{l:"OWNERSHIP",v:"Complete"},{l:"SUPPORT",v:"24*7"},{l:"COMPLIANCE",v:"DoT/MTCTE"}].map(s=><div key={s.l} style={{flex:1,borderRadius:12,background:'rgba(0,0,0,0.6)',border:'1px solid rgba(255,255,255,0.1)',padding:10}}><div style={{fontSize:8,letterSpacing:'0.18em',color:'rgba(255,255,255,0.4)'}}>{s.l}</div><div style={{fontSize:11,fontWeight:700,marginTop:2}}>{s.v}</div></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="max-w" style={{padding:'64px 24px',display:'grid',gridTemplateColumns:'0.9fr 1.1fr',gap:48}}>
        <div className="reveal"><div style={{fontSize:11,letterSpacing:'0.3em',color:'var(--cyan)',marginBottom:16}}>WHY TELESACE</div><h2 className="space" style={{fontSize:50,lineHeight:0.95,fontWeight:600}}>Why Telespace.<br/><span style={{color:'rgba(255,255,255,0.4)'}}>Consulting DNA.</span></h2></div>
        <div style={{display:'grid',gap:16}}>{whyUs.map(w=><div key={w.n} className="reveal hud" style={{padding:24,display:'flex',gap:20}}><div style={{width:44,height:44,borderRadius:'50%',background:'#fff',color:'#000',display:'grid',placeItems:'center',fontWeight:700}}>{w.n}</div><div><div className="space" style={{fontWeight:600}}>{w.t}</div><div style={{fontSize:12,color:'rgba(255,255,255,0.6)',marginTop:8,lineHeight:1.7}}>{w.d}</div></div></div>)}</div>
      </section>

      <section id="domains" className="max-w" style={{padding:'32px 24px 64px'}}>
        <div className="reveal" style={{marginBottom:32}}><div style={{fontSize:11,letterSpacing:'0.3em',color:'var(--cyan)',marginBottom:12}}>02 / DOMAIN ARCHITECTURE</div><h2 className="space" style={{fontSize:56,lineHeight:0.95,fontWeight:600}}>TELECOM is Parent.<br/><span style={{color:'rgba(255,255,255,0.4)'}}>Five child constellations.</span></h2></div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(340px,1fr))',gap:20}}>
          {domains.map(d=><div key={d.id} className="reveal hud hud-glow" style={{padding:28,display:'flex',flexDirection:'column',minHeight:380}}>
            <div style={{display:'flex',justifyContent:'space-between'}}><div><div style={{display:'flex',gap:12,alignItems:'center'}}><span style={{fontSize:10,color:'rgba(255,255,255,0.4)'}}>{d.code}</span><span style={{fontSize:10,color:d.accent}}>OWNERSHIP • COMPLETE</span></div><h3 className="space" style={{marginTop:12,fontSize:24,fontWeight:600}}>{d.title}</h3><p style={{marginTop:8,fontSize:12,color:'rgba(255,255,255,0.5)'}}>{d.tagline}</p></div><div style={{width:32,height:32,borderRadius:'50%',border:'1px solid rgba(255,255,255,0.15)',display:'grid',placeItems:'center'}}>↗</div></div>
            <p style={{marginTop:20,fontSize:12,lineHeight:1.7,color:'rgba(255,255,255,0.6)'}}>{d.intro}</p>
            <div style={{marginTop:'auto',paddingTop:24,display:'flex',gap:8}}><button onClick={()=>setActiveDomain(d.id)} className="btn btn-white" style={{flex:1}}>VIEW COMPLETE DETAILS →</button></div>
          </div>)}
        </div>
      </section>

      <section id="approach" className="max-w" style={{padding:'64px 24px',display:'grid',gridTemplateColumns:'380px 1fr',gap:48}}>
        <div className="reveal"><div style={{fontSize:11,letterSpacing:'0.3em',color:'var(--violet)',marginBottom:12}}>03 / APPROACH VECTOR</div><h2 className="space" style={{fontSize:48,lineHeight:0.95}}>How we work.<br/><span style={{color:'rgba(255,255,255,0.4)'}}>Orbit path.</span></h2></div>
        <div style={{display:'grid',gap:16}}>{approach.map(a=><div key={a.n} className="reveal" style={{display:'flex',gap:24}}><div style={{width:56,height:56,borderRadius:'50%',display:'grid',placeItems:'center',border:'1px solid rgba(255,255,255,0.15)'}} className="hud">{a.n}</div><div className="hud hud-glow" style={{flex:1,padding:20}}><h3 className="space" style={{fontSize:18,fontWeight:600}}>{a.t}</h3><p style={{fontSize:13,color:'rgba(255,255,255,0.6)',marginTop:8,lineHeight:1.7}}>{a.d}</p></div></div>)}</div>
      </section>

      <section id="contact" className="max-w" style={{padding:'64px 24px',borderTop:'1px solid rgba(255,255,255,0.06)'}}>
        <div className="reveal" style={{marginBottom:40,textAlign:'center',maxWidth:800,margin:'0 auto 40px'}}>
          <div style={{fontSize:11,letterSpacing:'0.3em',color:'var(--cyan)',marginBottom:12}}>04 / CONTACT US</div>
          <h2 className="space" style={{fontSize:48,lineHeight:0.95}}>Get in Touch.<br/><span style={{color:'rgba(255,255,255,0.4)'}}>We're here to help.</span></h2>
          <p style={{marginTop:16,fontSize:14,color:'rgba(255,255,255,0.6)'}}>Submit your query below. We'll reach out to you via email or call within 24 hours.</p>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:32}}>
          <div className="reveal">
            <form onSubmit={e=>{e.preventDefault(); if(!comment.name||!comment.email||!comment.mobile||!comment.query) return; const newComment={id:Date.now(),name:comment.name,company:comment.company||'Individual',query:comment.query,date:new Date().toISOString().split('T')[0]}; setComments([newComment,...comments]); setSubmitted(true); setTimeout(()=>setSubmitted(false),5000); setComment({name:"",email:"",mobile:"",company:"",query:""}); }} className="hud" style={{padding:32,position:'relative'}}>
              <div style={{position:'absolute',top:0,left:0,right:0,height:1,background:'linear-gradient(90deg,var(--cyan),var(--violet),transparent)',opacity:0.6}}></div>
              <div style={{fontSize:12,letterSpacing:'0.2em',color:'var(--violet)',marginBottom:20}}>SUBMIT YOUR QUERY</div>
              
              <div style={{marginBottom:16}}><label style={{fontSize:10,letterSpacing:'0.2em',color:'rgba(255,255,255,0.5)'}}>YOUR NAME *</label><input value={comment.name} onChange={e=>setComment({...comment,name:e.target.value})} placeholder="Full name" style={{width:'100%',height:48,marginTop:8,borderRadius:10,background:'#08080F',border:'1px solid rgba(255,255,255,0.1)',padding:'0 14px',color:'#fff',fontSize:13}} required/></div>
              
              <div style={{marginBottom:16}}><label style={{fontSize:10,letterSpacing:'0.2em',color:'rgba(255,255,255,0.5)'}}>EMAIL ADDRESS *</label><input type="email" value={comment.email} onChange={e=>setComment({...comment,email:e.target.value})} placeholder="your.email@company.com" style={{width:'100%',height:48,marginTop:8,borderRadius:10,background:'#08080F',border:'1px solid rgba(255,255,255,0.1)',padding:'0 14px',color:'#fff',fontSize:13}} required/></div>
              
              <div style={{marginBottom:16}}><label style={{fontSize:10,letterSpacing:'0.2em',color:'rgba(255,255,255,0.5)'}}>CONTACT NUMBER *</label><input type="tel" value={comment.mobile} onChange={e=>setComment({...comment,mobile:e.target.value})} placeholder="10-digit mobile number" pattern="[0-9]{10}" style={{width:'100%',height:48,marginTop:8,borderRadius:10,background:'#08080F',border:'1px solid rgba(255,255,255,0.1)',padding:'0 14px',color:'#fff',fontSize:13}} required/></div>
              
              <div style={{marginBottom:16}}><label style={{fontSize:10,letterSpacing:'0.2em',color:'rgba(255,255,255,0.5)'}}>COMPANY / ORGANIZATION</label><input value={comment.company} onChange={e=>setComment({...comment,company:e.target.value})} placeholder="Optional" style={{width:'100%',height:48,marginTop:8,borderRadius:10,background:'#08080F',border:'1px solid rgba(255,255,255,0.1)',padding:'0 14px',color:'#fff',fontSize:13}}/></div>
              
              <div style={{marginBottom:16}}><label style={{fontSize:10,letterSpacing:'0.2em',color:'rgba(255,255,255,0.5)'}}>YOUR QUERY *</label><textarea value={comment.query} onChange={e=>setComment({...comment,query:e.target.value})} placeholder="Describe your requirement, questions, or feedback..." rows={5} style={{width:'100%',marginTop:8,borderRadius:10,background:'#08080F',border:'1px solid rgba(255,255,255,0.1)',padding:14,color:'#fff',fontSize:13,resize:'none'}} required/></div>
              
              <button type="submit" className="btn btn-white" style={{width:'100%',height:52}}>SUBMIT QUERY →</button>
              
              <div style={{marginTop:16,fontSize:10,color:'rgba(255,255,255,0.4)',textAlign:'center',lineHeight:1.6}}>
                Your query will be posted publicly below (name & query only).<br/>
                Email & phone will be sent privately to our team.
              </div>

              {submitted && <div style={{position:'absolute',inset:0,background:'rgba(2,2,8,0.95)',backdropFilter:'blur(12px)',display:'grid',placeItems:'center',padding:32,borderRadius:20}}><div className="hud" style={{padding:32,textAlign:'center',maxWidth:360}}><div style={{width:48,height:48,borderRadius:'50%',background:'var(--cyan)',color:'#000',display:'grid',placeItems:'center',margin:'0 auto',fontWeight:700}}>✓</div><div className="space" style={{marginTop:16,fontSize:18,fontWeight:700}}>QUERY SUBMITTED</div><div style={{marginTop:8,fontSize:12,color:'rgba(255,255,255,0.6)'}}>We've received your request and sent details to our team.<br/>We'll contact you within 24 hours.</div><button onClick={()=>setSubmitted(false)} className="btn btn-ghost" style={{marginTop:16,width:'100%'}}>CLOSE</button></div></div>}
            </form>
          </div>

          <div style={{maxHeight:700,overflowY:'auto',paddingRight:8}}>
            <div style={{marginBottom:20,padding:16,background:'rgba(0,217,255,0.05)',border:'1px solid rgba(0,217,255,0.2)',borderRadius:12}}>
              <div style={{fontSize:11,fontWeight:600,color:'var(--cyan)',marginBottom:8}}>📧 EMAIL & PHONE PRIVACY</div>
              <div style={{fontSize:11,color:'rgba(255,255,255,0.6)',lineHeight:1.6}}>Your email and contact number are sent privately to contact@telespace.in. Only your name, company, and query are displayed publicly below.</div>
            </div>

            {comments.length===0 ? (
              <div className="hud" style={{padding:40,textAlign:'center'}}>
                <div style={{fontSize:12,color:'rgba(255,255,255,0.4)'}}>No queries yet. Be the first!</div>
              </div>
            ) : (
              <div style={{display:'grid',gap:16}}>
                {comments.map(c=>(
                  <div key={c.id} className="reveal hud" style={{padding:20}}>
                    <div style={{display:'flex',justifyContent:'space-between',marginBottom:12}}>
                      <div>
                        <div style={{fontWeight:700,fontSize:14}}>{c.name}</div>
                        <div style={{fontSize:11,color:'var(--cyan)',marginTop:2}}>{c.company}</div>
                      </div>
                      <div style={{fontSize:10,color:'rgba(255,255,255,0.3)'}}>{c.date}</div>
                    </div>
                    <p style={{fontSize:13,lineHeight:1.6,color:'rgba(255,255,255,0.7)'}}>{c.query}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>


      <footer style={{borderTop:'1px solid rgba(255,255,255,0.06)',background:'rgba(1,1,10,0.8)',padding:'40px 0'}}>
        <div className="max-w">
          <div style={{display:'grid',gridTemplateColumns:'1.5fr 1fr 1fr',gap:40,marginBottom:32}}>
            <div>
              <div className="space" style={{fontSize:20,fontWeight:700,marginBottom:8}}>telespace.io</div>
              <div style={{fontSize:11,letterSpacing:'0.22em',color:'rgba(255,255,255,0.6)',marginBottom:16}}>YOUR ICT PARTNER</div>
              <p style={{fontSize:12,color:'rgba(255,255,255,0.5)',lineHeight:1.7,maxWidth:360}}>National & International consulting services across Infrastructure, Hardware, Information, Communication & Technology domains.</p>
              <div style={{marginTop:16,fontSize:11,color:'rgba(255,255,255,0.5)',lineHeight:1.7}}>
                <div style={{fontSize:10,letterSpacing:'0.2em',color:'var(--cyan)',marginBottom:8}}>CORPORATE ADDRESS</div>
                <div>Plot No. 123, Sector 18<br/>Dwarka, New Delhi - 110075<br/>India</div>
              </div>
            </div>
            
            <div>
              <div style={{fontSize:10,letterSpacing:'0.2em',color:'var(--cyan)',marginBottom:16}}>CONTACT</div>
              <div style={{fontSize:12,color:'rgba(255,255,255,0.6)',lineHeight:2}}>
                <div><strong style={{color:'#fff'}}>Email:</strong> contact@telespace.in</div>
                <div><strong style={{color:'#fff'}}>Phone:</strong> 9250002645</div>
                <div style={{marginTop:8,fontSize:10,color:'rgba(255,255,255,0.4)'}}>Available 24×7 for queries</div>
              </div>
            </div>

            <div>
              <div style={{fontSize:10,letterSpacing:'0.2em',color:'var(--cyan)',marginBottom:16}}>LEGAL</div>
              <div style={{fontSize:12,color:'rgba(255,255,255,0.6)',lineHeight:2}}>
                <div><a href="#" onClick={e=>{e.preventDefault();setLegalPage('terms')}} style={{color:'rgba(255,255,255,0.6)',textDecoration:'none',cursor:'pointer',transition:'all 0.2s'}} onMouseEnter={e=>e.target.style.textDecoration='underline'} onMouseLeave={e=>e.target.style.textDecoration='none'}>Terms of Service</a></div>
                <div><a href="#" onClick={e=>{e.preventDefault();setLegalPage('privacy')}} style={{color:'rgba(255,255,255,0.6)',textDecoration:'none',cursor:'pointer',transition:'all 0.2s'}} onMouseEnter={e=>e.target.style.textDecoration='underline'} onMouseLeave={e=>e.target.style.textDecoration='none'}>Privacy Policy</a></div>
                <div><a href="#" onClick={e=>{e.preventDefault();setLegalPage('compliance')}} style={{color:'rgba(255,255,255,0.6)',textDecoration:'none',cursor:'pointer',transition:'all 0.2s'}} onMouseEnter={e=>e.target.style.textDecoration='underline'} onMouseLeave={e=>e.target.style.textDecoration='none'}>Compliance</a></div>
                <div><a href="#" onClick={e=>{e.preventDefault();setLegalPage('refund')}} style={{color:'rgba(255,255,255,0.6)',textDecoration:'none',cursor:'pointer',transition:'all 0.2s'}} onMouseEnter={e=>e.target.style.textDecoration='underline'} onMouseLeave={e=>e.target.style.textDecoration='none'}>Refund Policy</a></div>
              </div>
            </div>
          </div>

          <div style={{borderTop:'1px solid rgba(255,255,255,0.06)',paddingTop:24,display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:16}}>
            <div style={{fontSize:11,color:'rgba(255,255,255,0.4)'}}>© 2024 telespace.io. All rights reserved.</div>
            <div style={{fontSize:10,letterSpacing:'0.18em',color:'rgba(255,255,255,0.3)'}}><span style={{padding:'4px 12px',borderRadius:999,border:'1px solid rgba(255,255,255,0.1)',background:'rgba(255,255,255,0.03)'}}>DoT Registered • MTCTE Certified • GST Compliant</span></div>
          </div>
        </div>
      </footer>

      {active && (
        <div style={{position:'fixed',inset:0,zIndex:80,display:'flex',flexDirection:'column',background:'rgba(2,2,8,0.95)',backdropFilter:'blur(18px)'}}>
          <div style={{height:72,borderBottom:'1px solid rgba(255,255,255,0.1)',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0 24px'}}>
            <div style={{display:'flex',gap:16,alignItems:'center'}}><div style={{width:32,height:32,borderRadius:'50%',background:'#fff',color:'#000',display:'grid',placeItems:'center',fontWeight:700,fontSize:11}}>TS</div><div><div style={{fontSize:12,fontWeight:700}}>{active.title.toUpperCase()} // DEDICATED PAGE</div><div style={{fontSize:10,color:'rgba(255,255,255,0.4)'}}>{active.code}</div></div></div>
            <button onClick={()=>setActiveDomain(null)} className="btn btn-white">CLOSE ✕</button>
          </div>
          <div style={{flex:1,overflow:'auto',padding:40}}><div className="max-w"><div className="badge" style={{marginBottom:16}}>{active.code} • FULL DESCRIPTION</div><h1 className="space" style={{fontSize:56,fontWeight:700}}>{active.title}<br/><span style={{color:'rgba(255,255,255,0.4)',fontSize:28}}>Consulting, Compliance & Ownership</span></h1><p style={{marginTop:24,fontSize:14,color:'rgba(255,255,255,0.7)',maxWidth:800}}>{active.intro}</p>
            <div style={{marginTop:40,display:'grid',gap:12}}>{active.services.map(s=><div key={s.name} onClick={()=>setActiveService(s)} className="hud hud-glow" style={{padding:20,cursor:'pointer'}}><div style={{fontWeight:700,display:'flex',alignItems:'center',justifyContent:'space-between'}}><span>{s.name}</span><span style={{fontSize:18,color:'var(--cyan)'}}>→</span></div><div style={{fontSize:12,color:'rgba(255,255,255,0.6)',marginTop:8}}>{s.desc}</div></div>)}</div>
          </div></div>
        </div>
      )}

      {activeService && (
        <div style={{position:'fixed',inset:0,zIndex:100,display:'flex',flexDirection:'column',background:'rgba(2,2,8,0.98)',backdropFilter:'blur(20px)',overflow:'auto'}}>
          <div style={{height:72,borderBottom:'1px solid rgba(255,255,255,0.1)',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0 24px',position:'sticky',top:0,background:'rgba(2,2,8,0.95)',backdropFilter:'blur(12px)',zIndex:10}}>
            <div style={{display:'flex',gap:16,alignItems:'center'}}>
              <div style={{width:32,height:32,borderRadius:'50%',background:'var(--violet)',color:'#000',display:'grid',placeItems:'center',fontWeight:700,fontSize:11}}>S</div>
              <div><div style={{fontSize:12,fontWeight:700,textTransform:'uppercase'}}>{activeService.name}</div><div style={{fontSize:10,color:'rgba(255,255,255,0.4)'}}>Service Details</div></div>
            </div>
            <button onClick={()=>setActiveService(null)} className="btn btn-white">CLOSE ✕</button>
          </div>
          <div style={{flex:1,overflow:'auto',padding:40}}>
            <div className="max-w" style={{maxWidth:900}}>
              <div className="badge" style={{marginBottom:16}}>SERVICE DETAILS</div>
              <h1 className="space" style={{fontSize:48,fontWeight:700,marginBottom:8}}>{activeService.name}</h1>
              <p style={{fontSize:14,color:'rgba(255,255,255,0.7)',marginBottom:32,lineHeight:1.8}}>{activeService.desc}</p>
              
              <div style={{display:'grid',gap:24}}>
                {activeService.details && activeService.details.map((detail,idx)=>(
                  <div key={idx} className="hud" style={{padding:28}}>
                    <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>{detail.title}</h3>
                    <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}>{detail.description}</p>
                    {detail.points && (
                      <ul style={{listStyle:'none',padding:0,marginTop:16}}>
                        {detail.points.map((point,i)=>(
                          <li key={i} style={{fontSize:13,lineHeight:1.8,color:'rgba(255,255,255,0.6)',marginBottom:8,paddingLeft:20,position:'relative'}}>
                            <span style={{position:'absolute',left:0,color:'var(--cyan)'}}>•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {legalPage && (
        <div style={{position:'fixed',inset:0,zIndex:90,display:'flex',flexDirection:'column',background:'rgba(2,2,8,0.97)',backdropFilter:'blur(18px)',overflow:'auto'}}>
          <div style={{height:72,borderBottom:'1px solid rgba(255,255,255,0.1)',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0 24px',position:'sticky',top:0,background:'rgba(2,2,8,0.95)',backdropFilter:'blur(12px)',zIndex:10}}>
            <div style={{display:'flex',gap:16,alignItems:'center'}}>
              <div style={{width:32,height:32,borderRadius:'50%',background:'var(--cyan)',color:'#000',display:'grid',placeItems:'center',fontWeight:700,fontSize:11}}>TS</div>
              <div><div style={{fontSize:12,fontWeight:700,textTransform:'uppercase'}}>{legalPage==='terms'?'Terms of Service':legalPage==='privacy'?'Privacy Policy':legalPage==='compliance'?'Compliance':legalPage==='refund'?'Refund Policy':''}</div><div style={{fontSize:10,color:'rgba(255,255,255,0.4)'}}>Legal Documentation</div></div>
            </div>
            <button onClick={()=>setLegalPage(null)} className="btn btn-white">CLOSE ✕</button>
          </div>
          <div style={{flex:1,overflow:'auto',padding:40}}>
            <div className="max-w" style={{maxWidth:900}}>
              
              {legalPage==='terms' && (
                <>
                  <div className="badge" style={{marginBottom:16}}>LEGAL • TERMS OF SERVICE</div>
                  <h1 className="space" style={{fontSize:48,fontWeight:700,marginBottom:8}}>Terms of Service</h1>
                  <p style={{fontSize:13,color:'rgba(255,255,255,0.5)',marginBottom:32}}>Last Updated: October 25, 2024</p>
                  
                  <div style={{display:'grid',gap:32}}>
                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>1. Service Agreement</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}>All services provided by telespace.io are subject to a written Master Service Agreement (MSA) or Purchase Order (PO). By engaging our services, you acknowledge and agree to these terms.</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)'}}>Services include but are not limited to: Infrastructure consulting and deployment, Hardware procurement and supply, Information security services, Communication and telecom licensing, Technology consulting and implementation.</p>
                    </div>

                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>2. Pricing and Payment Terms</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}><strong>Quotation Validity:</strong> All pricing quotations are valid for 30 days from the date of issue unless explicitly stated otherwise. Prices are subject to change based on vendor pricing, currency fluctuations, and GST rate revisions.</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}><strong>Hardware Procurement:</strong> 50% advance payment required upon purchase order confirmation. Balance 50% payable upon delivery before installation. Prices exclude transportation, installation, and applicable taxes unless specified.</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}><strong>Consulting Services:</strong> Payment as per milestone completion outlined in the SOW (Statement of Work). Typical structure: 30% on project kickoff, 40% on mid-project milestone, 30% on final delivery.</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)'}}><strong>Telecom Licensing Services:</strong> 50% advance for documentation and application submission, 50% upon license grant or final submission to DoT/TEC.</p>
                    </div>

                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>3. Delivery and Timeline</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}>Delivery timelines are provided as estimates based on OEM availability and project scope. Actual timelines will be confirmed in the signed contract.</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}><strong>Hardware:</strong> Subject to OEM stock availability and lead times. Bulk orders (50+ units) may require 2-4 weeks lead time.</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}><strong>Infrastructure Projects:</strong> Timeline depends on site readiness, RoW permissions, and regulatory approvals.</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)'}}><strong>Force Majeure:</strong> We are not liable for delays caused by circumstances beyond our control including natural disasters, government actions, OEM supply chain disruptions, or pandemic-related restrictions.</p>
                    </div>

                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>4. Ownership and Transfer</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}>Title and ownership of hardware/equipment transfer to the client only upon full and final payment clearance. Until then, equipment remains the property of telespace.io.</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)'}}>For leased or subscription-based services, ownership remains with telespace.io throughout the contract period.</p>
                    </div>

                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>5. Client Responsibilities</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}>Clients are responsible for: Providing accurate requirements and specifications, Timely approval of designs and deliverables, Site readiness for installation (power, space, access), Obtaining internal approvals and clearances, Compliance with applicable laws and regulations in their jurisdiction.</p>
                    </div>

                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>6. Limitation of Liability</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}>telespace.io's liability is limited to the value of the contract or service fee paid. We are not liable for indirect, incidental, or consequential damages including loss of business, revenue, or data.</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)'}}>For hardware, liability is limited to OEM warranty terms. For consulting services, liability is capped at the consulting fee paid for that specific engagement.</p>
                    </div>

                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>7. Intellectual Property</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}>All designs, architectures, methodologies, and documentation created by telespace.io remain our intellectual property unless explicitly transferred in writing.</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)'}}>Client receives a perpetual, non-transferable license to use deliverables for their internal business purposes only.</p>
                    </div>

                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>8. Termination</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}>Either party may terminate the agreement with 30 days written notice. Upon termination, client must pay for all work completed and expenses incurred up to the termination date.</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)'}}>telespace.io reserves the right to suspend services for non-payment beyond 15 days of the due date.</p>
                    </div>

                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>9. Governing Law and Dispute Resolution</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}>These terms are governed by the laws of India. Any disputes shall first be attempted to be resolved amicably through mutual discussion.</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)'}}>If unresolved, disputes shall be referred to arbitration in New Delhi under the Indian Arbitration and Conciliation Act, 1996. The arbitration shall be conducted in English, and the decision shall be final and binding.</p>
                    </div>
                  </div>
                </>
              )}

              {legalPage==='privacy' && (
                <>
                  <div className="badge" style={{marginBottom:16}}>LEGAL • PRIVACY POLICY</div>
                  <h1 className="space" style={{fontSize:48,fontWeight:700,marginBottom:8}}>Privacy Policy</h1>
                  <p style={{fontSize:13,color:'rgba(255,255,255,0.5)',marginBottom:32}}>Last Updated: October 25, 2024 • DPDP Act 2023 Compliant</p>
                  
                  <div style={{display:'grid',gap:32}}>
                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>1. Information We Collect</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}><strong>Personal Data:</strong> When you contact us or request services, we collect:</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Full Name</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Email Address</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Contact Number (Mobile/Landline)</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Company/Organization Name</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Designation/Role</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Query/Requirement Details</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginTop:16}}><strong>Business Data:</strong> During service delivery, we may collect company registration details, GST numbers, project specifications, and technical requirements.</p>
                    </div>

                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>2. How We Use Your Information</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}>Your personal data is used exclusively for:</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• <strong>Service Delivery:</strong> To understand requirements, prepare quotations, and deliver services</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• <strong>Communication:</strong> To respond to queries, provide updates, and send invoices</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• <strong>Documentation:</strong> For contract preparation, compliance records, and service agreements</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• <strong>Support:</strong> Post-sales support, AMC services, and issue resolution</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginTop:16}}>We do NOT use your data for marketing, advertising, or any purpose beyond service delivery without explicit consent.</p>
                    </div>

                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>3. Public vs Private Data</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}><strong>Publicly Displayed on Website:</strong></p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Your Name</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Company/Organization Name</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Your Query/Comment Text</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginTop:16,marginBottom:12}}><strong>Kept Private (Not Displayed):</strong></p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Email Address (sent only to authorized personnel)</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Contact Number (sent only to authorized personnel)</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginTop:16}}>Private data is transmitted securely via email to contact@telespace.in and is accessible only to authorized team members handling your query.</p>
                    </div>

                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>4. Data Sharing and Third Parties</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}>We do NOT sell, rent, or trade your personal information to third parties.</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}><strong>Limited Sharing:</strong> Your data may be shared with:</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• <strong>OEM Partners:</strong> For hardware procurement and warranty registration (under strict NDA)</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• <strong>Logistics Partners:</strong> For delivery of equipment (name, address, phone only)</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• <strong>Government Authorities:</strong> When required for DoT/TEC licensing applications</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginTop:16}}>All third parties are bound by confidentiality agreements and data protection obligations.</p>
                    </div>

                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>5. Data Retention</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}>We retain your personal data for:</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• <strong>Active Engagement:</strong> Duration of service delivery plus warranty period</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• <strong>Post-Completion:</strong> 3 years for compliance, tax, and audit purposes</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• <strong>Public Comments:</strong> Retained indefinitely as testimonials unless deletion requested</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginTop:16}}>After retention period, data is securely deleted or anonymized.</p>
                    </div>

                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>6. Your Rights (DPDP Act 2023)</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}>Under India's Digital Personal Data Protection Act 2023, you have the right to:</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• <strong>Access:</strong> Request a copy of your personal data we hold</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• <strong>Correction:</strong> Request correction of inaccurate or incomplete data</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• <strong>Deletion:</strong> Request deletion of your data post-engagement (subject to legal retention requirements)</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• <strong>Withdrawal:</strong> Withdraw consent for data processing (may impact service delivery)</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginTop:16}}>To exercise your rights, email us at contact@telespace.in with subject "Data Privacy Request".</p>
                    </div>

                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>7. Data Security</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}>We implement industry-standard security measures:</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• SSL/TLS encryption for data transmission</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Access controls and authentication for internal systems</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Regular security audits and vulnerability assessments</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Encrypted backups and secure data storage</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginTop:16}}>In case of a data breach, we will notify affected individuals within 72 hours as per regulatory requirements.</p>
                    </div>

                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>8. Contact for Privacy Concerns</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}>For any privacy-related questions or concerns:</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}><strong>Email:</strong> contact@telespace.in</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}><strong>Phone:</strong> 9250002645</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginTop:16}}>We respond to all privacy requests within 7 business days.</p>
                    </div>
                  </div>
                </>
              )}

              {legalPage==='compliance' && (
                <>
                  <div className="badge" style={{marginBottom:16}}>LEGAL • COMPLIANCE & CERTIFICATIONS</div>
                  <h1 className="space" style={{fontSize:48,fontWeight:700,marginBottom:8}}>Compliance</h1>
                  <p style={{fontSize:13,color:'rgba(255,255,255,0.5)',marginBottom:32}}>Regulatory Certifications and Industry Standards</p>
                  
                  <div style={{display:'grid',gap:32}}>
                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>1. Department of Telecommunications (DoT) Registration</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}>telespace.io is registered with the Department of Telecommunications, Government of India, for providing telecom consulting and licensing services.</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}><strong>Services Authorized:</strong></p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• OSP (Other Service Provider) Registration Consulting</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• ISP (Internet Service Provider) License Consulting - Category A, B, C</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• IP-1 (Infrastructure Provider Category-I) Consulting</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• UL (Unified License) Application Support</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• DoT Compliance Audit and Annual Filing</p>
                    </div>

                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>2. MTCTE (Mandatory Testing & Certification of Telecom Equipment)</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}>We procure and supply only MTCTE-certified telecom equipment as mandated by the Department of Telecommunications.</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}><strong>Equipment Categories Covered:</strong></p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Routers, Switches, and Network Equipment</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• VoIP and IP Telephony Devices</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Optical Fiber and GPON Equipment</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Wireless and Radio Communication Equipment</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginTop:16}}>All hardware is sourced from TEC-approved manufacturers with valid MTCTE certificates, ensuring compliance with Indian telecom standards.</p>
                    </div>

                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>3. TEC (Telecommunication Engineering Centre) Compliance</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}>We assist clients with:</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• <strong>Product Certification:</strong> TEC type approval for telecom products</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• <strong>Trusted Product Portal Listing:</strong> NCCS (National Critical Information Infrastructure Protection Centre) compliance for listing products on the Trusted Telecom Portal</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• <strong>Technical Standards:</strong> Compliance with TEC General Requirements (GR) and Interface Requirements (IR)</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• <strong>Test Lab Coordination:</strong> Liaison with TEC-accredited test labs for equipment testing</p>
                    </div>

                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>4. GST Registration and Tax Compliance</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}>telespace.io is a registered entity under the Goods and Services Tax (GST) Act.</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• GSTIN provided on all invoices and quotations</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• GST-compliant invoicing for hardware supply and services</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Regular GST filing and compliance audits</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Input Tax Credit (ITC) support for B2B clients</p>
                    </div>

                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>5. ISO 9001:2015 Quality Management</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}>Our service delivery follows ISO 9001:2015 quality management standards:</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Documented processes for service delivery</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Quality control at every project stage</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Continuous improvement through client feedback</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Regular internal and external audits</p>
                    </div>

                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>6. Cybersecurity Compliance</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}>Our information security services are aligned with:</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• <strong>DoT-CSIRT Guidelines:</strong> Computer Security Incident Response Team recommendations</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• <strong>CERT-In Directions:</strong> Indian Computer Emergency Response Team compliance</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• <strong>ISO 27001:</strong> Information Security Management System framework</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• <strong>DPDP Act 2023:</strong> Data protection and privacy standards</p>
                    </div>

                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>7. TRAI (Telecom Regulatory Authority of India) Compliance</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}>Our international voice and communication services comply with:</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• TRAI tariff regulations for ILD (International Long Distance) services</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Quality of Service (QoS) norms for voice services</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Interconnection regulations and numbering plans</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• DND (Do Not Disturb) registry compliance</p>
                    </div>

                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>8. International Standards</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}>For international service delivery, we comply with:</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• ITU-T (International Telecommunication Union) standards</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• ETSI (European Telecommunications Standards Institute) norms</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• 3GPP specifications for mobile networks</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• IEEE standards for networking equipment</p>
                    </div>
                  </div>
                </>
              )}

              {legalPage==='refund' && (
                <>
                  <div className="badge" style={{marginBottom:16}}>LEGAL • REFUND & RETURNS POLICY</div>
                  <h1 className="space" style={{fontSize:48,fontWeight:700,marginBottom:8}}>Refund & Returns Policy</h1>
                  <p style={{fontSize:13,color:'rgba(255,255,255,0.5)',marginBottom:32}}>Last Updated: October 25, 2024</p>
                  
                  <div style={{display:'grid',gap:32}}>
                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>1. Consulting Services - Non-Refundable</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}><strong>Policy:</strong> All consulting services are non-refundable once the engagement has begun.</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}><strong>Rationale:</strong> Consulting involves time, expertise, and intellectual effort that cannot be returned. Once work commences, resources are committed.</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}><strong>Advance Payment:</strong> The initial advance (typically 30-50%) is retained as a commitment fee and covers project initiation costs.</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}><strong>Cancellation:</strong> If you cancel before work begins (within 48 hours of agreement signing), 80% of advance will be refunded, with 20% retained as administrative charges.</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)'}}>After work commences, no refund is applicable. Payment for completed work remains due even if project is terminated mid-way.</p>
                    </div>

                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>2. Hardware Procurement - 7-Day DOA Policy</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}><strong>Dead on Arrival (DOA) Replacement:</strong> If hardware is non-functional upon delivery, we offer a 7-day DOA replacement period.</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}><strong>Conditions for DOA:</strong></p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Product must be unopened/unused or fail initial testing</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• All original packaging, accessories, and documentation must be intact</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• No physical damage, liquid damage, or tampering</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• DOA claim must be filed within 7 days of delivery</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginTop:16,marginBottom:12}}><strong>Replacement Process:</strong></p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• We provide an identical or equivalent model replacement</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Defective unit must be returned before replacement is dispatched (or against delivery)</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Refunds are NOT provided; only replacement is offered</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Return shipping costs borne by telespace.io for genuine DOA cases</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginTop:16}}><strong>Post-7-Days:</strong> After 7 days, all hardware issues are covered under OEM warranty only. telespace.io facilitates warranty claims but does not provide direct replacement.</p>
                    </div>

                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>3. Bulk Hardware Orders - Sample Testing Recommended</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}><strong>Policy:</strong> For bulk orders (50+ units), we strongly recommend ordering 1-2 sample units for testing before full deployment.</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}><strong>Why Sample Testing:</strong></p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Verify compatibility with your existing infrastructure</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Test performance under your network conditions</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Ensure it meets your specific requirements</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12,marginTop:16}}><strong>Bulk Order Returns:</strong> Once bulk orders are confirmed and delivered, returns or refunds are NOT accepted except for DOA cases (handled individually for each defective unit).</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)'}}>By skipping sample testing and proceeding directly to bulk order, you accept the product as-is (subject only to DOA policy).</p>
                    </div>

                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>4. Licensed & Cloud Services (Voice, DID, Toll-Free)</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}><strong>No Refund Post-Activation:</strong> Once services like International Voice, DID, or Toll-Free numbers are activated, no refund is provided.</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}><strong>Rationale:</strong> These services involve third-party carrier charges, number allocation, and platform setup costs that are non-recoverable.</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}><strong>Monthly Billing:</strong> Subscription-based services are billed monthly. If you cancel mid-month:</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Pro-rata adjustment for unused days will be applied to next billing cycle (if continuing with other services)</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• If terminating all services, no refund for partial month</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginTop:16}}><strong>Cancellation Notice:</strong> 30 days advance notice required for service termination to avoid next billing cycle.</p>
                    </div>

                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>5. Infrastructure Deployment Projects (FTTH, IDB)</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}><strong>Refund Eligibility:</strong> Refunds are only possible if the project is cancelled BEFORE site mobilization.</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}><strong>Pre-Mobilization Cancellation:</strong></p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• 80% of advance will be refunded</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• 20% retained for design, planning, and administrative costs</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginTop:16,marginBottom:12}}><strong>Post-Mobilization:</strong> Once work begins on-site, no refund is applicable. You are liable to pay for:</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Work completed till termination date</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Materials procured and deployed</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Labor and equipment mobilization/demobilization costs</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)'}}>Partial work will be handed over as-is, and payment must be settled as per work completion percentage.</p>
                    </div>

                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>6. DoT/TEC Licensing Services</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}><strong>Government Fees:</strong> All government fees (application fees, license fees) paid to DoT/TEC are NON-REFUNDABLE under any circumstances, as these are statutory payments.</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}><strong>Consulting Fees:</strong> Our consulting fees for licensing services are:</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• <strong>Refundable:</strong> If application is rejected due to our error or incomplete documentation (100% consulting fee refund, government fees non-refundable)</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• <strong>Non-Refundable:</strong> If application is rejected due to client eligibility issues, incomplete client inputs, or DoT policy changes (no refund of consulting fees)</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginTop:16}}><strong>Approval Timeline:</strong> We cannot guarantee approval timelines as these are subject to DoT/TEC processing. Delays do not entitle clients to refunds.</p>
                    </div>

                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>7. Warranties and Post-Sale Support</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}><strong>Hardware Warranty:</strong> All hardware comes with OEM warranty (typically 1-3 years). After the 7-day DOA period, all issues are resolved through OEM warranty channels.</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}>telespace.io provides warranty facilitation services:</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• RMA (Return Merchandise Authorization) coordination</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Liaison with OEM support</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• Advance replacement (if opted under AMC)</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginTop:16}}><strong>AMC Services:</strong> For comprehensive support, consider our Annual Maintenance Contract (AMC) which includes priority support, advance replacement, and extended warranty.</p>
                    </div>

                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>8. Dispute Resolution</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}><strong>Amicable Resolution Preferred:</strong> We encourage clients to reach out to us directly for any refund or return disputes. Most issues can be resolved through mutual discussion.</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:12}}><strong>Escalation Process:</strong></p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>1. Email your concern to contact@telespace.in with subject "Refund Request"</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>2. We will respond within 7 business days with a resolution</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>3. If unresolved, request a discussion call with senior management</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginTop:16}}><strong>Legal Recourse:</strong> If amicable resolution fails, disputes shall be referred to arbitration in New Delhi as per the Indian Arbitration and Conciliation Act, 1996.</p>
                    </div>

                    <div className="hud" style={{padding:28}}>
                      <h3 style={{fontSize:18,fontWeight:700,marginBottom:12,color:'var(--cyan)'}}>9. Important Notes</h3>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• <strong>Custom Orders:</strong> Custom-configured or specially-procured items are non-returnable and non-refundable</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• <strong>Training Services:</strong> Once training is delivered, no refund is provided</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• <strong>Software Licenses:</strong> Third-party software licenses purchased on your behalf are non-refundable as per vendor policies</p>
                      <p style={{fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.7)',marginBottom:8}}>• <strong>Shipping Costs:</strong> Original shipping costs are non-refundable. Return shipping costs for non-DOA returns (if accepted) are borne by the client</p>
                    </div>
                  </div>
                </>
              )}

            </div>
          </div>
        </div>
      )}
    </div>
  )
}