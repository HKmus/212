'use client';
import { useRouter } from 'next/navigation';
import { Btn } from '../../components/UI';

const LOGO = typeof window !== 'undefined' ? window.LOGO_URI : '';

export default function AdminPortal() {
  const router = useRouter();
  return (
    <div style={{ background:"var(--bg)", minHeight:"100vh", display:"flex", flexDirection:"column" }}>
      <header style={{ padding:"16px 24px", background:"var(--surface)", borderBottom:"1px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <div style={{ display:"flex", alignItems:"center", gap:16 }}>
          <img src={LOGO} alt="212" width="32" style={{ marginRight:8 }} />
          <div style={{ fontWeight:600 }}>Dispatcher</div>
        </div>
        <Btn kind="soft" style={{ padding:"8px 14px", fontSize:13 }} onClick={() => router.push('/')}>Exit to site</Btn>
      </header>
      <div style={{ padding:"24px", display:"grid", gridTemplateColumns:"320px 1fr", gap:24, flex:1 }}>
        <div style={{ background:"var(--surface)", border:"1px solid var(--border)", borderRadius:12, padding:16, display:"flex", flexDirection:"column", gap:8 }}>
          <div style={{ fontSize:11, color:"var(--muted)", textTransform:"uppercase", letterSpacing:1, marginBottom:8 }} className="mono">Incoming requests (2)</div>
          <div style={{ padding:12, background:"var(--surface-2)", borderLeft:"3px solid var(--urgent)", borderRadius:6 }}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}><div style={{ fontWeight:500, fontSize:14 }}>Lock change</div><div style={{ fontSize:11, color:"var(--fg-2)" }}>Just now</div></div>
            <div style={{ fontSize:13, color:"var(--fg-2)" }}>SE1 9SG • 07700 900381</div>
            <div style={{ display:"flex", gap:8, marginTop:10 }}><Btn kind="primary" style={{ padding:"6px 12px", fontSize:12, flex:1, justifyContent:"center" }}>Assign</Btn></div>
          </div>
          <div style={{ padding:12, background:"var(--surface-2)", borderLeft:"3px solid var(--accent)", borderRadius:6 }}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}><div style={{ fontWeight:500, fontSize:14 }}>Courier (Wait & Return)</div><div style={{ fontSize:11, color:"var(--fg-2)" }}>4m ago</div></div>
            <div style={{ fontSize:13, color:"var(--fg-2)" }}>NW1 6XE • Acc: Stirling Ackroyd</div>
            <div style={{ display:"flex", gap:8, marginTop:10 }}><Btn kind="primary" style={{ padding:"6px 12px", fontSize:12, flex:1, justifyContent:"center" }}>Assign</Btn></div>
          </div>
        </div>
        <div style={{ background:"var(--surface)", border:"1px solid var(--border)", borderRadius:12, position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", inset:0, background:"var(--bg-2) url(\"data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L0 20M-2 2l4-4M18 22l4-4' stroke='rgba(74,208,92,0.05)' stroke-width='1' fill='none'/%3E%3C/svg%3E\")" }}/>
          <div style={{ position:"absolute", top:24, left:32, background:"var(--surface)", border:"1px solid var(--accent-soft)", borderRadius:12, padding:16, width:260, boxShadow:"0 8px 32px rgba(0,0,0,0.5)" }}>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}><span style={{ width:8, height:8, borderRadius:99, background:"var(--accent-2)" }}/><div style={{ fontWeight:500, fontSize:14 }}>Driver 04 (Marcus)</div></div>
            <div style={{ fontSize:13, color:"var(--fg-2)", marginBottom:12 }}>Status: En route to delivery<br/>ETA: 14:20</div>
            <Btn kind="soft" style={{ width:"100%", padding:"6px 0", fontSize:12, justifyContent:"center" }}>Message</Btn>
          </div>
        </div>
      </div>
    </div>
  );
}
