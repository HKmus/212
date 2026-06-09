'use client';
import { useState } from 'react';
import { Pill, PortalCard, Btn, APill } from '../../components/UI';
import { Nav, Footer } from '../../components/Layout';

export default function CustomerPortal() {
  const [act, setAct] = useState("jobs");
  return (
    <div style={{ background:"var(--bg)", minHeight:"100vh" }}>
      <Nav />
      <div style={{ padding:"80px 48px", maxWidth:1020, margin:"0 auto" }} className="page-pad">
        <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:48 }}>
          <div>
            <div className="mono" style={{ fontSize:11, color:"var(--muted)", letterSpacing:1, textTransform:"uppercase", marginBottom:12 }}>Client Portal</div>
            <h1 style={{ fontSize:32, fontWeight:500, letterSpacing:-1 }}>Stirling Ackroyd</h1>
          </div>
          <Btn kind="soft">Book new job</Btn>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"220px 1fr", gap:48 }}>
          <nav style={{ display:"flex", flexDirection:"column", gap:6 }}>
            {[["jobs","Active jobs",3],["history","History",null],["invoices","Invoices",2],["users","Team",null]].map(([id,l,n])=>(
              <button key={id} onClick={()=>setAct(id)} style={{ border: 'none', display:"flex", alignItems:"center", justifyContent:"space-between", padding:"10px 14px", borderRadius:8, background:act===id?"var(--surface-2)":"transparent", color:act===id?"var(--fg)":"var(--fg-2)", fontSize:14, fontWeight:450, transition:"all .15s ease", cursor: "pointer" }}
              onMouseEnter={e=>{if(act!==id)e.currentTarget.style.color="var(--fg)"}} onMouseLeave={e=>{if(act!==id)e.currentTarget.style.color="var(--fg-2)"}}>
                {l}
                {n&&<span className="mono" style={{ fontSize:10, padding:"2px 6px", borderRadius:99, background:act===id?"var(--surface)":"var(--surface-2)" }}>{n}</span>}
              </button>
            ))}
            <div style={{ height:1, background:"var(--border)", margin:"8px 0" }}/>
            <button style={{ border: 'none', background: 'transparent', cursor:'pointer', padding:"10px 14px", borderRadius:8, color:"var(--muted)", fontSize:14, textAlign:"left" }}>Settings</button>
            <button style={{ border: 'none', background: 'transparent', cursor:'pointer', padding:"10px 14px", borderRadius:8, color:"var(--urgent-2)", fontSize:14, textAlign:"left" }}>Sign out</button>
          </nav>
          <div>
            {act==="jobs" && (
              <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
                <PortalCard title="#212-0941" action={<Pill tone="live" dot="pulse">En route</Pill>}>
                  <div style={{ fontSize:14, color:"var(--fg-2)", marginBottom:16 }}>Keys to branch—collect from Shoreditch</div>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, padding:"16px", background:"var(--surface-2)", borderRadius:8, fontSize:13 }}>
                    <div><div className="mono" style={{ color:"var(--muted)", fontSize:10, marginBottom:4, textTransform:"uppercase" }}>ETA</div><div style={{ color:"var(--fg)", fontWeight:500 }}>14:20 (12 mins)</div></div>
                    <div><div className="mono" style={{ color:"var(--muted)", fontSize:10, marginBottom:4, textTransform:"uppercase" }}>Driver</div><div style={{ color:"var(--fg)", fontWeight:500 }}>Marcus (M/cycle)</div></div>
                  </div>
                </PortalCard>
                <PortalCard title="#212-0940" action={<Pill tone="default" dot={true}>Awaiting driver</Pill>}>
                  <div style={{ fontSize:14, color:"var(--fg-2)", marginBottom:16 }}>Contract delivery to EC1</div>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, padding:"16px", background:"var(--surface-2)", borderRadius:8, fontSize:13 }}>
                    <div><div className="mono" style={{ color:"var(--muted)", fontSize:10, marginBottom:4, textTransform:"uppercase" }}>Ready</div><div style={{ color:"var(--fg)", fontWeight:500 }}>14:30</div></div>
                    <div><div className="mono" style={{ color:"var(--muted)", fontSize:10, marginBottom:4, textTransform:"uppercase" }}>Vehicle</div><div style={{ color:"var(--fg)", fontWeight:500 }}>S-Van required</div></div>
                  </div>
                </PortalCard>
              </div>
            )}
            {act==="history" && <PortalCard>History content goes here.</PortalCard>}
            {act==="invoices" && (
              <div style={{ display:"grid", gap:16 }}>
                <PortalCard pad={14}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><div style={{fontSize:14,fontWeight:500}}>INV-40291 <span style={{fontSize:13,color:"var(--fg-2)",fontWeight:400,marginLeft:8}}>May 2026</span></div><div style={{display:"flex",alignItems:"center",gap:16}}><div style={{fontSize:14}}>£492.50</div><APill tone="warn">DUE 14 JUN</APill></div></div></PortalCard>
                <PortalCard pad={14}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><div style={{fontSize:14,fontWeight:500}}>INV-39810 <span style={{fontSize:13,color:"var(--fg-2)",fontWeight:400,marginLeft:8}}>Apr 2026</span></div><div style={{display:"flex",alignItems:"center",gap:16}}><div style={{fontSize:14,color:"var(--fg-2)"}}>£812.00</div><APill tone="default">PAID 02 MAY</APill></div></div></PortalCard>
              </div>
            )}
            {act==="users" && (
              <PortalCard pad={0}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 20px",borderBottom:"1px solid var(--border)"}}><div style={{fontWeight:500,fontSize:14}}>James C.</div><div style={{color:"var(--fg-2)",fontSize:13}}>j.c@stirling.co.uk</div><Btn kind="soft" style={{padding:"6px 12px",fontSize:12}}>Revoke</Btn></div>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 20px"}}><div style={{fontWeight:500,fontSize:14}}>Sarah T.</div><div style={{color:"var(--fg-2)",fontSize:13}}>s.t@stirling.co.uk</div><Btn kind="soft" style={{padding:"6px 12px",fontSize:12}}>Revoke</Btn></div>
              </PortalCard>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
