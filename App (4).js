const SECTIONS=[
{title:"1 — Picture of God",verse:"“See, what great love the Father has lavished on us, that we should be called children of God!” — 1 John 3:1",opts:[
{t:"God feels more like a strict boss I must not disappoint than a Father I can run to.",s:25},
{t:"Even on my worst day, I know my Father still delights in me and wants me close.",s:100},
{t:"Some days God feels close and loving, other days He feels distant — it depends on how my week is going.",s:50},
{t:"I mostly picture God waiting to correct me. I have to get myself together before I can approach Him.",s:0},
{t:"I’m learning to see God as a loving Father, even though the old picture of a harsh master still shows up sometimes.",s:75}]},
{title:"2 — Theology",verse:"“You did not receive a spirit that makes you a slave again to fear, but you received the Spirit of sonship.” — Romans 8:15",opts:[
{t:"I try to obey because I’m already loved, though I still catch myself trying to earn points sometimes.",s:75},
{t:"Deep down I feel my standing with God goes up when I’m good and down when I fail.",s:0},
{t:"I know grace is true in my head, but my heart still swings between rest and striving.",s:50},
{t:"I live from this: Jesus already made me fully accepted. Obedience is my ‘thank You,’ not my payment.",s:100},
{t:"Rules help me feel safe. If I keep them well enough, maybe God will be pleased with me.",s:25}]},
{title:"3 — Motive for Service",verse:"“We love because he first loved us.” — 1 John 4:19",opts:[
{t:"Sometimes I serve out of joy, sometimes out of guilt or habit — it honestly depends on the day.",s:50},
{t:"If I stop serving, I feel useless and afraid God will forget about me.",s:0},
{t:"Mostly I serve because I’m grateful, though I still like being noticed more than I’d like to admit.",s:75},
{t:"I serve because I’m already loved. If no one sees it, it still feels worth it.",s:100},
{t:"I say yes to serving even when I’m exhausted, because saying no feels like letting God down.",s:25}]},
{title:"4 — Motive Behind Christian Disciplines",verse:"“One thing I ask… that I may dwell in the house of the LORD… to gaze on the beauty of the LORD.” — Psalm 27:4",opts:[
{t:"Prayer and reading the Word feel like sitting with my Father — I go because I want to, not to earn favour.",s:100},
{t:"I do my devotions mainly from duty. If I miss them, I feel guilty all day.",s:25},
{t:"Some mornings my time with God feels sweet, other mornings it just feels like another task to tick off.",s:50},
{t:"I use prayer, fasting and Bible reading to try to get God to approve of me or answer me.",s:0},
{t:"I’m beginning to enjoy being with God, not just doing things for God — it’s still a work in progress.",s:75}]},
{title:"5 — Sense of God’s Presence",verse:"“Where can I go from your Spirit? Where can I flee from your presence?” — Psalm 139:7",opts:[
{t:"God feels close when church is good, but far away when life gets hard.",s:25},
{t:"God’s presence feels near sometimes and silent sometimes — I’m learning to trust He’s there either way.",s:50},
{t:"Even in silence and struggle, I know I’m not alone. My Father is near.",s:100},
{t:"I feel like an outsider in God’s presence, like I’m intruding and don’t really belong.",s:0},
{t:"More and more, I feel at home with God. I can be honest with Him about how I really feel.",s:75}]},
{title:"6 — Position",verse:"“So you are no longer a slave, but God’s child; and since you are his child, God has made you also an heir.” — Galatians 4:7",opts:[
{t:"I feel like a servant on probation — always having to prove I deserve a place in the family.",s:0},
{t:"I’m starting to believe I truly belong, though I still sometimes feel I have to earn my place.",s:75},
{t:"I know I’m called a child of God, but I don’t always feel like one.",s:50},
{t:"I am a beloved son/daughter. My place in the family is given, not earned.",s:100},
{t:"I can receive from others, but receiving from God without paying Him back feels uncomfortable.",s:25}]},
{title:"7 — Vision",verse:"“Seek first his kingdom and his righteousness, and all these things will be given to you as well.” — Matthew 6:33",opts:[
{t:"I want to be known for loving God, though being recognised still matters to me more than I’d like.",s:75},
{t:"My deepest desire is simply to enjoy my Father’s love every day — being seen by people is not what drives me.",s:100},
{t:"I need a title, a platform, or people noticing me to feel significant in God’s kingdom.",s:0},
{t:"Part of me wants intimacy with God, part of me still chases being seen and affirmed.",s:50},
{t:"I find it hard to celebrate when others are blessed, because it feels like there’s less left for me.",s:25}]},
{title:"8 — Future",verse:"“We know that in all things God works for the good of those who love him.” — Romans 8:28",opts:[
{t:"Some days I trust God for the future, other days I try to control everything myself.",s:50},
{t:"I face tomorrow as a child with a good Father — my inheritance is secure, I don’t have to fight for it.",s:100},
{t:"I worry that if I don’t strive hard enough, I’ll miss out on what God has for me.",s:25},
{t:"The future feels like a fight. I have to grab what I can, because no one — not even God — will hand it to me.",s:0},
{t:"I’m learning to wait and trust my Father’s timing, instead of forcing things to happen.",s:75}]}
];
const ZONES=[[85,"Rooted Sonship","#2E7D32","Living deeply rooted in your identity as God’s beloved child."],[70,"Flourishing Sonship","#7CB87C","Growing strong in sonship. Old patterns still visit, but they no longer rule."],[55,"Emerging Awareness","#E8B923","Awakening to the Father’s love. Awareness is growing."],[40,"Identity Tension","#E67E22","Feeling the pull between orphan thinking and sonship."],[0,"Identity Renewal Needed","#C0392B","Carrying heavy orphan thinking. This does NOT change who you are in Christ."]];
const NEXT={ "Rooted Sonship":"Affirm & release — consider mentoring or praying for others. Keep receiving through Sabbath rest.",
"Flourishing Sonship":"Strengthen & steady — name 1–2 lower sections and pray into them. Daily declaration: ‘I am a beloved child.’",
"Emerging Awareness":"Encourage & normalize — 5 minutes of ‘being’ before ‘doing.’ Sit with God with no agenda.",
"Identity Tension":"Listen & hold space — you don’t have to fix yourself to come to the Father. Breath prayer: ‘Father… I am Yours.’",
"Identity Renewal Needed":"Tenderness & long-term care — your position is secure (Romans 8:38–39). Small daily receiving: ‘Father, I receive Your love today.’ Consider ongoing pastoral care."};
let step=-1, answers=Array(8).fill(null), chosen=null;
function esc(s){return s.replace(/&/g,"&amp;")}
function render(){
 const el=document.getElementById("app");
 if(step===-1){
  el.innerHTML=`<div class="card"><span class="pill">SONSHIP • JOHN 14:18</span><h1>Sonship: Self-Discovery Journey</h1><p class="verse">“I will not leave you as orphans; I will come to you.” — John 14:18</p><p>This is a reflective exercise, not a test of your worth or salvation. If you are a born-again believer, your <b>position in Christ is secure</b> — you <i>are</i> a son/daughter of God (John 1:12, Romans 8:15–16, Galatians 4:6–7). This journey simply helps you notice where your experience may still feel like an orphan, so you can grow into enjoying the Father’s love you already have.</p><p><b>How it works:</b> 8 sections, 5 statements each. In each section, pick <b>ONE</b> statement that sounds most like you most days. No right or wrong answers.</p><button class="btn" onclick="step=0;chosen=null;render()">Begin My Journey →</button><p class="small">Private — nothing is sent to a server. Your answers stay in your browser.</p></div>`;
 } else if(step<8){
  const sec=SECTIONS[step];
  el.innerHTML=`<div class="card"><span class="pill">SECTION ${step+1} OF 8</span><div class="progress"><div style="width:${step/8*100}%"></div></div><h2 style="margin:4px 0">${sec.title}</h2><p class="verse">${sec.verse}</p><p class="small"><b>Pick ONE</b> — the statement that sounds most like you most days.</p>${sec.opts.map((o,i)=>`<button class="opt ${chosen===i?'sel':''}" onclick="chosen=${i};render()">“${o.t}”</button>`).join("")}<div class="sticky"><button class="btn" ${chosen===null?'disabled':''} onclick="answers[${step}]=SECTIONS[${step}].opts[chosen].s;step++;chosen=null;render()">${step===7?'See My Results →':'Continue →'}</button></div></div>`;
 } else {
  const avg=Math.round(answers.reduce((a,b)=>a+b,0)/8);
  const z=ZONES.find(z=>avg>=z[0]);
  el.innerHTML=`<div class="card"><span class="pill">YOUR RESULT</span><h1 style="text-align:center;font-size:52px;margin:10px 0">${avg}%</h1><p style="text-align:center"><span class="zone" style="color:${z[2]}">● ${z[1]}</span></p><p style="text-align:center">${z[3]}</p><p><b>Next step:</b> ${NEXT[z[1]]}</p><h2>Your 8 Sections</h2>${SECTIONS.map((s,i)=>`<div style="margin:10px 0"><div style="display:flex;justify-content:space-between"><b>${s.title}</b><span>${answers[i]}%</span></div><div class="bar"><div style="width:${answers[i]}%;background:${answers[i]>=85?'#2E7D32':answers[i]>=70?'#7CB87C':answers[i]>=55?'#E8B923':answers[i]>=40?'#E67E22':'#C0392B'}"></div></div></div>`).join("")}<p class="small">Reflective only — not a diagnosis. Your position in Christ is secure if you are born again. Share this result with a trusted pastor or friend for prayer.</p><button class="btn" onclick="step=-1;answers=Array(8).fill(null);chosen=null;render()">Retake Journey</button></div>`;
 }
}
render();
