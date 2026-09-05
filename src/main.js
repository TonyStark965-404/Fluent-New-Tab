import './style.css'
const API_KEY=import.meta.env.VITE_NASA_API_KEY
document.querySelector("#app").innerHTML=`
<main class="app">
<div class="wall" id="wallp"></div>
<aside class="left">
<button id="set" class="bi set" type="button">
<span class="tit">Settings</span>
<svg class="ic" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 64 64">
<path fill="currentColor" d="M 29.054688 10 C 27.715688 10 26.571703 10.964203 26.345703 12.283203 L 25.763672 15.664062 C 25.457672 15.781062 25.152469 15.902156 24.855469 16.035156 L 22.058594 14.058594 C 20.830594 13.209594 19.383344 13.520328 18.527344 14.361328 L 14.361328 18.525391 C 13.414328 19.472391 13.288547 20.962641 14.060547 22.056641 L 16.035156 24.855469 C 15.901156 25.152469 15.781063 25.455719 15.664062 25.761719 L 12.283203 26.34375 C 10.963203 26.57075 10 27.715688 10 29.054688 L 10 34.945312 C 10 36.284312 10.964203 37.428297 12.283203 37.654297 L 15.664062 38.236328 C 15.781062 38.542328 15.902156 38.847531 16.035156 39.144531 L 14.058594 41.941406 C 13.286594 43.034406 13.414328 44.525656 14.361328 45.472656 L 18.525391 49.638672 C 19.609391 50.698672 21.124641 50.614453 22.056641 49.939453 L 24.855469 47.964844 C 25.152469 48.098844 25.455719 48.218938 25.761719 48.335938 L 26.34375 51.716797 C 26.57075 53.036797 27.715688 54 29.054688 54 L 34.945312 54 C 36.284312 54 37.428297 53.035797 37.654297 51.716797 L 38.236328 48.335938 C 38.542328 48.218937 38.847531 48.097844 39.144531 47.964844 L 41.941406 49.941406 C 42.766406 50.549406 44.343656 50.768672 45.472656 49.638672 L 49.638672 45.474609 C 50.585672 44.527609 50.711453 43.037359 49.939453 41.943359 L 47.964844 39.144531 C 48.098844 38.847531 48.218938 38.544281 48.335938 38.238281 L 51.716797 37.65625 C 53.036797 37.42925 54 36.284312 54 34.945312 L 54 29.054688 C 54 27.715688 53.035797 26.571703 51.716797 26.345703 L 48.335938 25.763672 C 48.218937 25.457672 48.097844 25.152469 47.964844 24.855469 L 49.941406 22.058594 C 50.713406 20.965594 50.585672 19.474344 49.638672 18.527344 L 45.474609 14.361328 C 44.417609 13.329328 42.952359 13.351547 41.943359 14.060547 L 39.144531 16.035156 C 38.847531 15.901156 38.544281 15.781063 38.238281 15.664062 L 37.65625 12.283203 C 37.42925 10.963203 36.284312 10 34.945312 10 L 29.054688 10 z M 30.214844 14 L 33.787109 14 C 33.848109 14 33.900156 14.043516 33.910156 14.103516 L 34.681641 18.589844 C 36.449641 19.224844 38.104844 19.894141 39.589844 20.619141 L 43.302734 17.996094 C 43.352734 17.961094 43.421844 17.966766 43.464844 18.009766 L 45.990234 20.537109 C 46.033234 20.580109 46.040859 20.647266 46.005859 20.697266 L 43.380859 24.412109 C 44.139859 26.017109 44.824156 27.649359 45.410156 29.318359 L 49.896484 30.091797 C 49.956484 30.101797 50 30.153844 50 30.214844 L 50 33.787109 C 50 33.848109 49.955531 33.900156 49.894531 33.910156 L 45.410156 34.681641 C 44.825156 36.350641 44.148859 37.985844 43.380859 39.589844 L 46.005859 43.304688 C 46.040859 43.354688 46.033234 43.421844 45.990234 43.464844 L 43.464844 45.992188 C 43.421844 46.035187 43.352734 46.040859 43.302734 46.005859 L 39.589844 43.382812 C 37.949844 44.153812 36.313641 44.829109 34.681641 45.412109 L 33.908203 49.896484 C 33.898203 49.956484 33.846156 50 33.785156 50 L 30.212891 50 C 30.151891 50 30.099844 49.955531 30.089844 49.894531 L 29.318359 45.410156 C 27.709359 44.851156 26.075156 44.184859 24.410156 43.380859 L 20.695312 46.005859 C 20.645312 46.040859 20.578156 46.033234 20.535156 45.990234 L 18.007812 43.464844 C 17.964813 43.421844 17.959141 43.352734 17.994141 43.302734 L 20.617188 39.589844 C 19.838187 37.924844 19.161891 36.288641 18.587891 34.681641 L 14.103516 33.908203 C 14.043516 33.898203 14 33.846156 14 33.785156 L 14 30.212891 C 14 30.151891 14.043516 30.100844 14.103516 30.089844 L 18.589844 29.316406 C 19.170844 27.680406 19.837141 26.045156 20.619141 24.410156 L 17.994141 20.695312 C 17.959141 20.645312 17.966766 20.578156 18.009766 20.535156 L 20.535156 18.007812 C 20.578156 17.964813 20.647266 17.959141 20.697266 17.994141 L 24.410156 20.617188 C 25.958156 19.874187 27.599359 19.201891 29.318359 18.587891 L 30.091797 14.103516 C 30.101797 14.043516 30.153844 14 30.214844 14 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z M 32 27 C 34.761 27 37 29.239 37 32 C 37 34.761 34.761 37 32 37 C 29.239 37 27 34.761 27 32 C 27 29.239 29.239 27 32 27 z"></path>
</svg>
</button>
<section class="rs">
<span class="head">Recent</span>
<div class="rsl">
</div>
</section>
</aside>
<div class="set-pan" aria-hidden="true">
<div class="sethead">
<span class="settit">Settings</span>
</div>
<div class="setcon">
<section class="setit">
<span class="setn">Appearance</span>
<div class="setbtn-row"><button id="tb" class="setbtn" type="button">Dark Mode</button><button id="aw" class="setbtn" type="button">APOD Wall</button></div>
<button id="sww" class="setbtn" type="button">
<span>Swap Recent and Widgets</span></button>
</section>
<section class="setit">
<span class="setn">Background</span>
<div class="bgr">
<label id="bglb" for="bgin" class="setbtn" >Choose your own</label>
<input id="bgin" type="file" accept="image/*" hidden>
<button id="wd" class="wd" type="button" title="Remove custom wallpaper"><img width="24" height="24" src="https://img.icons8.com/sf-regular/24/trash.png" alt="trash"/></button>
</div></section>
<section class="setit wig-set">
<span class="setn">Widgets</span>
<div class="wtr">
<button class="setbtn wig-tog" data-wg="cl" title="Clock"><img width="24" height="24" src="https://img.icons8.com/sf-regular/24/present.png" alt="present"/></button>
<button class="setbtn wig-tog" data-wg="cal" title="Calendar"><img width="24" height="24" src="https://img.icons8.com/sf-regular/24/calendar-31.png" alt="calendar-31"/></button>
<button class="setbtn wig-tog" data-wg="ap" title="APOD"><img width="24" height="24" src="https://img.icons8.com/sf-regular/24/telescope.png" alt="telescope"/></button>
</div></div></section>
<section class="setit rc-set">
<span class="setn">Recent Sites</span>
<div class="rl-wr">
<button id="ren" class="rl" type="button">
<span id="ren-n">4</span>
<span class="rlar">▾</span>
</button>
<div class="remn" id="remn">
<button type="button" data-value="0">0 (Disabled)</button>
<button type="button" data-value="1">1</button>
<button type="button" data-value="2">2</button>
<button type="button" data-value="3">3</button>
<button type="button" data-value="4">4 (Default)</button>
<button type="button" data-value="5">5</button>
</div></div>
</section>
<section class="setit">
<span class="setn">Search Engine</span>
<div class="sl-wr">
<button id="sen" class="sl" type="button">
<span id="sen-n">Google</span>
<span class="slar">▾</span>
</button>
<div class="sem" id="sem">
<button type="button" data-value="ggl">Google</button>
<button type="button" data-value="bi">Bing</button>
<button type="button" data-value="yh">Yahoo</button>
<button type="button" data-value="ddg">DuckDuckGo</button>
</div></div>
</section>
<section class="setit">
<span class="setn">Accent color</span>
<input id="acc" type="text" value="#4f8cff" maxlength="7" placeholder="Enter hex (Default:#4f8cff);" spellcheck="false">
</section>
<section class="setit">
<span class="setn">Weather</span>
<input id="wthcit" type="text" placeholder="Enter a city" spellcheck="false"></section>
</div>
</div>
<section class="mcon">
<div class="gm">
<h1>Good morning</h1>
<p class="wth">Loading...</p>
</div>
<div class="sw">
<div class="sb">
<svg class="si" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 64 64">
<path fill="currentColor" d="M 27 9 C 17.075 9 9 17.075 9 27 C 9 36.925 17.075 45 27 45 C 31.129213 45 34.9263 43.587367 37.966797 41.240234 L 51.048828 54.322266 C 51.952828 55.226266 53.418266 55.226266 54.322266 54.322266 C 55.226266 53.418266 55.226266 51.952828 54.322266 51.048828 L 41.240234 37.966797 C 43.587367 34.9263 45 31.129213 45 27 C 45 17.075 36.925 9 27 9 z M 27 13 C 34.719 13 41 19.281 41 27 C 41 34.719 34.719 41 27 41 C 19.281 41 13 34.719 13 27 C 13 19.281 19.281 13 27 13 z"></path>
</svg>
<input
type="text"
placeholder="Search the web (Ctrl+K to start typing)"
aria-label="Search the web (Ctrl+K to start typing)"
>
</div>
<div class="srp" aria-hidden="true"></div></div>
</section>
<aside class="wigr">
<section class="wig cl-wig" data-wg="cl">
<span class="wig-tit">Clock</span>
<div class="an-cl">
<div class="hand hr"></div>
<div class="hand min"></div>
<div class="cc"></div>
</div>
</section>
<section class="wig cal-wig" data-wg="cal">
<span class="wig-tit">Calendar</span>
<div class="calc">
<span class="cal-mon">August 2026</span>
<span class="cal-d">21</span>
<span class="cal-wd">Friday</span>
</div>
</section>
<section class="wig wall-wig" data-wg="ap">
<span class="wig-tit" id="wall-tit">Today's APOD</span>
<div class="wallc">
<span class="walln" id="walltit">Loading...</span>
</div>
<a class="wall-lk" href="https://science.nasa.gov/apod/" target="_blank" rel="noopener noreferrer">View More</a>
</section>
</aside>
<nav id="booty" class="booty" aria-label="Pinned Sites">
<button id="ditadd" class="dit add" type="button">
<svg id="dic" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 64 64">
<path fill="currentColor" d="M 32 10 C 19.85 10 10 19.85 10 32 C 10 44.15 19.85 54 32 54 C 44.15 54 54 44.15 54 32 C 54 19.85 44.15 10 32 10 z M 32 14 C 41.941 14 50 22.059 50 32 C 50 41.941 41.941 50 32 50 C 22.059 50 14 41.941 14 32 C 14 22.059 22.059 14 32 14 z M 32 22 C 30.895 22 30 22.896 30 24 L 30 30 L 24 30 C 22.896 30 22 30.895 22 32 C 22 33.105 22.896 34 24 34 L 30 34 L 30 40 C 30 41.104 30.895 42 32 42 C 33.105 42 34 41.104 34 40 L 34 34 L 40 34 C 41.104 34 42 33.105 42 32 C 42 30.895 41.104 30 40 30 L 34 30 L 34 24 C 34 22.896 33.105 22 32 22 z"></path>
</svg></button>
</nav>
<div id="sm" class="sm" aria-hidden="true">
<button id="newt" type="button">Open in New Tab</button>
<button id="cp" type="button">Copy Link</button>
<button id="ed" type="button">Edit</button>
<button id="del" type="button">Delete</button>
</div>
<div id="wm" class="wm" aria-hidden="true">
<button id="mu" type="button">Move up</button>
<button id="md" type="button">Move down</button>
</div>
<div id="rm" class="rm" aria-hidden="true">
<button id="rnt" type="button">Open in New Tab</button>
<button id="rcp" type="button">Copy Link</button>
<button id="rem" type="button">Remove</button>
</div>
<div id="pm" class="pm" aria-hidden="true">
<button id="rr" type="button">Refresh</button>
</div>
</main>
`;
const lW=new Image()
lW.src=`${import.meta.env.BASE_URL}"/walls/wall1.jpg`
const waLL=document.querySelector(".wall")
const wallTit=document.querySelector("#wall-tit")
const aw=document.querySelector("#aw")
const wI=document.querySelector("#bgin")
const bgLb=document.querySelector("#bglb")
const wd=document.querySelector("#wd")
wI.addEventListener("change",()=>{
    const fl=wI.files[0]
    if(!fl)return
    if(!fl.type.startsWith("image/")){
        alert("Please select an image file.")
        return
    }
    if(fl.size>5*1024*1024){
        alert("Please select an image smaller than 5MB.")
        return
    }
    const rd=new FileReader()
    rd.onload=()=>{
        localStorage.setItem("cusWa",rd.result)
        waLL.style.backgroundImage=`url("${rd.result}")`
        bgLb.textContent="Using own image, change?"
        bgLb.classList.add("active")
        aw.classList.remove("active")
        localStorage.setItem("apod","off")
        wd.style.display="flex"
    }
    rd.readAsDataURL(fl)
})
wd.addEventListener("click",()=>{
    localStorage.removeItem("cusWa")
    wd.style.display="none"
    bgLb.classList.remove("active")
    bgLb.textContent="Choose your own"
    waLL.style.backgroundImage=`url("${lW.src}")`
})
const APCK="apC"
function gCAP(){
    const cch=localStorage.getItem(APCK)
    if(!cch) return null
    try{
        return JSON.parse(cch)
    }catch(error){
        console.error("Invalid APOD Cache:",error)
        localStorage.removeItem(APCK)
        return null
    }
}
function sAP(data){
    const ap={date:data.date,title:data.title,explanation:data.explanation||"",media_type:data.media_type,url:data.url||"",thumbnail_url:data.thumbnail_url||""}
    localStorage.setItem(APCK,JSON.stringify(ap))    
    return ap
}
function gAPI(ap){
    if(ap.media_type==="video"){
        return ap.thumbnail_url||""
    }
    return ap.url||""
}
function apAP(ap){
    if(!ap) return false
    const imgUR=gAPI(ap)
    if(!imgUR) return false
    document.querySelector("#walltit").textContent=ap.title
    if(ap.media_type==="image"){
            wallTit.textContent="Today's APOD (Wallpaper)"
        }
        else if(ap.media_type==="video"){
            wallTit.textContent="Today's APOD (Video) (Static WP)"
        }else return false
    const img=new Image()
    img.onload=()=>{
            if(ap.media_type==="image"){
            waLL.style.backgroundImage=`url("${ap.url}")`
            wallTit.textContent="Today's APOD (Wallpaper)"
        }
        else if(ap.media_type==="video"){
            waLL.style.backgroundImage=`url("${ap.thumbnail_url}")`
            wallTit.textContent="Today's APOD (Video) (Static WP)"
        }
    }
    img.onerror=()=>{
             if(ap.media_type==="image"){
            waLL.style.backgroundImage=`url("${ap.url}")`
            wallTit.textContent="Today's APOD (Wallpaper)"
        }
        else if(ap.media_type==="video"){
            waLL.style.backgroundImage=`url("${ap.thumbnail_url}")`
            wallTit.textContent="Today's APOD (Video) (Static WP)"
        }
    }
    img.src=imgUR
    return true
}
async function fahPOD(){
    try{
        const res=await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
    if(!res.ok){
        throw new Error(`NASA API returned ${res.status}`)
    }
    const dt=await res.json()
    console.log("New APOD received",dt)
    return sAP(dt)
    }catch(error){
        console.error("APOD request failed:",error)
        const chd=gCAP();
        if(chd){
            console.log("Using cached APOD")
            return chd
        }
        return null
    }
}   
async function lAP(){
        const chad=gCAP()
        const td=new Date().toISOString().split("T")[0]
        if(chad && chad.date===td){
            console.log("Using today's cached APOD")
            apAP(chad)
            return chad
        }
        console.log("Fetching today's APOD...")
        const apd=await fahPOD()
        if(apd){
            apAP(apd)
        }
        return apd
    }
function uAP(){
    const chd=gCAP()
    if(chd){
        document.querySelector("#walltit").textContent=chd.title
    }
}
aw.addEventListener("click", async () => {
    const ebl = localStorage.getItem("apod") !== "off";
    const neS = !ebl;
    localStorage.setItem("apod", neS? "on" : "off");
    aw.classList.toggle("active", neS);
    if (neS) {
        bgLb.classList.remove("active");
        bgLb.textContent = "APOD on, choose new?";
            await lAP();
    } else {
        const cw=localStorage.getItem("cusWa")
        waLL.style.backgroundImage = cw?`url("${cw}")`:`url('${lW.src}')`;
        wallTit.textContent = "Today's APOD";
        if(cw){
            bgLb.textContent="Using own image, change?"
            bgLb.classList.add("active")
        }else{
            bgLb.classList.remove("active")
            bgLb.textContent="Choose your own"
        }
    }
});

if(localStorage.getItem("apod")=="on"){
    aw.classList.add("active")
    setTimeout(()=>{lAP();},1000);
}
const cusWa=localStorage.getItem("cusWa")
wd.style.display=cusWa?"flex":"none"
if(cusWa && localStorage.getItem("apod")!=="on"){
    waLL.style.backgroundImage=`url("${cusWa}")`
}
if(cusWa){
    bgLb.textContent="Using own image, change?"
    bgLb.classList.add("active")
}
const seT=document.querySelector("#set")
const setPan=document.querySelector(".set-pan")
seT.addEventListener("click",()=>{
    const isOpen=setPan.classList.toggle("open")
    setPan.setAttribute("aria-hidden",String(!isOpen))
})
const DM=document.querySelector("#tb")
DM.addEventListener("click",()=>{
    const d=document.body.classList.toggle("dk")
    localStorage.setItem("th",d?"dk":"lt")
    DM.classList.toggle("active",d)

})
const Th=localStorage.getItem("th")
if(Th==="dk"){
    document.body.classList.add("dk")
    DM.classList.add("active")
}
const sIn=document.querySelector(".sb input")
let rs=JSON.parse(localStorage.getItem("rs")||"[]")
const sRP=document.querySelector(".srp")
function rS(){
    sRP.innerHTML=""
    if(!rs.length){
        sRP.classList.remove("open")
        sRP.setAttribute("aria-hidden","true")
        return
    }
    rs.slice(0,4).forEach(q=>{
        const b=document.createElement("button")
        b.className="sri"
        b.textContent=q
        b.addEventListener("click",()=>{
            sIn.value=q
            sIn.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter"}))
        })
        sRP.appendChild(b)
    })
    sRP.classList.add("open")
    sRP.setAttribute("aria-hidden","false")
}
function aS(q){
    q=q.trim()
    if(!q) return
    rs=rs.filter(item=>item.toLowerCase() !==q.toLowerCase())
    rs.unshift(q)
    localStorage.setItem("rs",JSON.stringify(rs))
}
sIn.addEventListener("focus",()=>{
    if(sIn.value.trim()){
        sSu(sIn.value)
    }else{rS()}
})
document.addEventListener("click",(event)=>{
    if(!event.target.closest(".sb")){
        sRP.classList.remove("open")
        sRP.setAttribute("aria-hidden","true")
    }
})
sIn.addEventListener("keydown",(e)=>{
    if(e.key==="Escape"){
        sIn.blur();
        sRP?.classList.remove("open")
    }
})
const sU={ggl:"https://www.google.com/search?q=",bi:"https://www.bing.com/search?q=",yh:"https://search.yahoo.com/search?p=",ddg:"https://www.duckduckgo.com/search?q="}
sIn.addEventListener("keydown",(event)=>{
    if(event.key!=="Enter")return
    const q=sIn.value.trim()
    if(!q)return
    aS(q)
    rS()
    const eng=localStorage.getItem("sEng")||"ggl"
    window.location.href=`${sU[eng]}${encodeURIComponent(q)}`
})
function uSP(){
    if(window.innerWidth<=700){
        sIn.placeholder="Search the web"
    } else{
        sIn.placeholder="Search the web (Ctrl+K to start typing)"
    }
}
uSP()
window.addEventListener("resize",uSP)
window.addEventListener("pageshow",()=>{
    sIn.value=""})
document.addEventListener("keydown",(event)=>{
    if(event.ctrlKey&&event.key.toLocaleLowerCase()==="k"){
        event.preventDefault()
        sIn.focus()
    }
})
const piSS=document.querySelector("#booty")
const adS=document.querySelector("#ditadd")
let s=JSON.parse(localStorage.getItem("piSS")||"[]")
let r=JSON.parse(localStorage.getItem("r")||"[]")
let rC=Number(localStorage.getItem("rect")??4)
const rCS=document.querySelector("#ren")
const rCN=document.querySelector("#ren-n")
const rCM=document.querySelector("#remn")
const rCO=rCM.querySelectorAll("button")
rCN.textContent=rC
let drS=null
function rpiSS(){
    piSS.querySelectorAll(".stit").forEach(s=>s.remove())
    s.forEach((st,index)=>{
        const lk=document.createElement("a")
        lk.className="dit stit"
        lk.href=st.url
        lk.title=st.name
        lk.draggable=true
        lk.addEventListener("click",()=>{
            aR(st)
        })
        const ic=document.createElement("img")
        ic.className="dic"
        ic.src=`https://www.google.com/s2/favicons?domain=${new URL(st.url).hostname}&sz=64`
        ic.alt=""
        lk.appendChild(ic)
        lk.addEventListener("contextmenu",(event)=>{
            event.preventDefault()
            oSM(event,index)
        })
        lk.addEventListener("dragstart",(event)=>{
            drS=index
        event.dataTransfer.setData("text/plain",index)})
        lk.addEventListener("dragend",(event)=>{
            drS=null})
        lk.addEventListener("dragover",(event)=>{
            event.preventDefault()})
        lk.addEventListener("drop",(event)=>{
            event.preventDefault()
            const fIh=Number(event.dataTransfer.getData("text/plain"))
            if(Number.isNaN(fIh) || fIh===index)return
            const mvd=s.splice(fIh,1)[0]
            s.splice(index,0,mvd)
            localStorage.setItem("piSS",JSON.stringify(s))
            drS=null
            rpiSS()
        })
        piSS.insertBefore(lk,adS)
    })
}
adS.addEventListener("click",()=>{
    const n=prompt("Site name:")
    if(!n)return
    const ur=prompt("Site URL:")
    if(!ur)return
    const hur=ur.startsWith("http")?ur:`https://${ur}`
    s.push({
        name,url:hur})
    localStorage.setItem("piSS",JSON.stringify(s))
    rpiSS()
})
rpiSS()
const sM=document.querySelector("#sm")
const eS=document.querySelector("#ed")
const dS=document.querySelector("#del")
const nT=document.querySelector("#newt")
const cP=document.querySelector("#cp")
const wM=document.querySelector("#wm")
const mU=document.querySelector("#mu")
const mD=document.querySelector("#md")
const rM=document.querySelector("#rm")
const reM=document.querySelector("#rem")
const rNt=document.querySelector("#rnt")
const rCp=document.querySelector("#rcp")
const pM=document.querySelector("#pm")
const rRr=document.querySelector("#rr")
let reS=null
let wS=null
let sS=null
function oSM(event,index){
    cA()
    sS=index
    sM.style.left=`${event.clientX}px`
    sM.style.top=`${event.clientY}px`
    sM.classList.add("open")
    sM.setAttribute("aria-hidden","false")
}
function cSM(){
    sS=null
    sM.classList.remove("open")
    sM.setAttribute("aria-hidden","true")
}
nT.addEventListener("click",()=>{
    if(sS===null)return
    const si=s[sS]
    aR(si)
    window.open(si.url,"_blank")
    cSM()
})
cP.addEventListener("click",()=>{
    if(!sS)return
    const si=s[sS]
    navigator.clipboard.writeText(si.url).then(()=>{
        alert("Link copied to clipboard")
    })
    cSM()
})
eS.addEventListener("click",()=>{
    if(sS===null)return
    const si=s[sS]
    const n=prompt("Site name:")
    if(!n)return
    const ur=prompt("Site URL:")
    if(!ur)return
    const hur=ur.startsWith("http")?ur:`https://${ur}`
    si.name=n
    si.url=hur 
    localStorage.setItem("piSS",JSON.stringify(s))
    cSM()
    rpiSS()
})
dS.addEventListener("click",()=>{
    if(sS===null)return
    s.splice(sS,1)
    localStorage.setItem("piSS",JSON.stringify(s))
    cSM()
    rpiSS()
})
document.addEventListener("click",(event)=>{
    if(!sM.contains(event.target)){
        cSM()
    }
    if(!wM.contains(event.target)){
        cWM()
    }
    if(!rM.contains(event.target)){
        cRM()
    }
    if(!pM.contains(event.target)){
        cPM()
    }
})
document.addEventListener("click",(event)=>{
    if(!setPan.contains(event.target) && !seT.contains(event.target)){
        setPan.classList.remove("open")
        setPan.setAttribute("aria-hidden","true")
    }
})
function rR(){
    const rSl=document.querySelector(".rsl")
    const rSc=document.querySelector(".rs")
    rSl.innerHTML=""
    rSc.style.display=rC===0?"none":""
    r.slice(0,rC).forEach(s=>{
        const lk=document.createElement("a")
        lk.className="ri"
        lk.href=s.url
        lk.title=s.name
        lk.addEventListener("contextmenu", (event) => {
            cA()
            event.preventDefault()
            reS = s
            rM.style.left = `${event.clientX}px`
            rM.style.top = `${event.clientY}px`
            rM.classList.add("open")
            rM.setAttribute("aria-hidden", "false")
        })
        const ic=document.createElement("img")
        ic.className="dic"
        ic.src=`https://www.google.com/s2/favicons?domain=${new URL(s.url).hostname}&sz=64`
        ic.alt=""
        lk.appendChild(ic)
        rSl.appendChild(lk)
    })
}
function aR(s){
    const ex=r.findIndex(item=>item.url===s.url)
    if(ex!==-1){
        r.splice(ex,1)
    }
    r.unshift(s)
    if (r.length>5){
        r.splice(5)
    }
    localStorage.setItem("r",JSON.stringify(r))
    rR()
}
rR()
function gD(){
    const now=new Date()
    return{
        hr:now.getHours(),mon:now.toLocaleDateString(undefined,{month:"long"}),yr:now.getFullYear(),dy:now.getDate(),wd:now.toLocaleDateString(undefined,{weekday:"long"})
    }
}
function uGh(){
    const da=gD()
    let grr
    if(da.hr>=5 && da.hr<12){
        grr="Good morning"
    }
    else if(da.hr>=12 && da.hr<17){
        grr="Good afternoon"
    }
    else if(da.hr>=17 && da.hr<21){
        grr="Good evening"
    }
    else{
        grr="Good night"
    }
    document.querySelector(".gm h1").textContent=grr
}
    uGh()
function uC(){
    const da=gD()
    const now=new Date()
    document.querySelector(".cal-mon").textContent=`${da.mon} ${da.yr}`
    document.querySelector(".cal-d").textContent=`${da.dy}`
    document.querySelector(".cal-wd").textContent=`${da.wd}`
    const secs=now.getSeconds()
    const mins=now.getMinutes()
    const hrs=now.getHours()
    const minang=mins*6+secs*0.1
    const hrang=(hrs%12)*30+mins*0.5
    document.querySelector(".min").style.transform=`translateX(-50%) rotate(${minang}deg)`
    document.querySelector(".hr").style.transform=`translateX(-50%) rotate(${hrang}deg)`
}
async function gCL(city) {
    try {
        const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error("Location request failed");
        }
        const da = await res.json();
        if (!da.results || da.results.length === 0) {
            throw new Error("City not found");
        }
        const pl = da.results[0];
        return {
            lat: pl.latitude, lon: pl.longitude, name: pl.name, country: pl.country};} catch (error) {
        console.error("Location error:", error);
        return null;}
}
const wEl=document.querySelector(".wth")
async function fetchWeather(lat,lon,locationName){
    try{
        const url= `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&timezone=auto`;
        const res=await fetch(url);
        if(!res.ok){
            throw new Error("Weather request failed")
        }
        const da=await res.json();
        const tem=Math.round(da.current.temperature_2m);
        const cd=da.current.weather_code;
        const cond={0: "Clear",
            1: "Mostly Clear",
            2:  "Partly Cloudy ",
            3:  "Overcast ",
            45:  "Foggy ",
            48:  "Foggy ",
            51:  "Light Drizzle ",
            53:  "Drizzle ",
            55:  "Heavy Drizzle ",
            61:  "Light Rain ",
            63:  "Rain ",
            65:  "Heavy Rain ",
            71:  "Light Snow ",
            73:  "Snow ",
            75:  "Heavy Snow ",
            80:  "Rain Showers ",
            81:  "Rain Showers ",
            82:  "Heavy Rain Showers ",
            95:  "Thunderstorm ",
            96:  "Thunderstorm ",
            99:  "Thunderstorm "};
            const con=cond[cd]|| "Unknown ";
            wEl.textContent=`${tem}°C • ${con} • ${locationName}`
    }catch (error){
        console.error("WTH error:",error);
        wEl.textContent="Weather unavailable"
    }
}
const wthcit=document.querySelector("#wthcit")
if (wthcit) {
    wthcit.value=localStorage.getItem("wthLoc")||"Los Angeles"
    wthcit.addEventListener("change", async () => {
        const cit = wthcit.value.trim();
        if (!cit) return;
        const loc = await gCL(cit);
        if (!loc) {
            wEl.textContent = "Location not found!";
            return;
        }
        localStorage.setItem("wthLoc", cit);
        await fetchWeather(loc.lat, loc.lon, loc.name);
    });
}
async function uW(){
    const svd=localStorage.getItem("wthLoc")||"Los Angeles"
    const loc=await gCL(svd)
    if(!loc){
        const flb=await gCL("Los Angeles")
    if(!flb){
        wEl.textContent="Weather unavailable"
        return
    }
    await fetchWeather(flb.lat,flb.lon,flb.name)
    return
}
await fetchWeather(loc.lat, loc.lon,loc.name)
}
const sEng = document.querySelector("#sen")
const seM = document.querySelector(".sem")
const seN = document.querySelector("#sen-n")
const seO = seM.querySelectorAll("button")
const svEng = localStorage.getItem("sEng") || "ggl"
const seNames = {
    ggl: "Google",
    bi: "Bing",
    yh: "Yahoo",
    ddg: "DuckDuckGo"
}
function updateSearchEngine() {
    seN.textContent = seNames[svEng]
    seO.forEach(btn => {
        btn.classList.toggle(
            "active",
            btn.dataset.value === svEng
        )
    })
}
updateSearchEngine()
sEng.addEventListener("click", (event) => {
    event.stopPropagation()
    const isOpen = seM.classList.toggle("open")
    sEng.classList.toggle("open", isOpen)
    seM.setAttribute("aria-hidden", String(!isOpen))
})
seO.forEach(btn => {
    btn.addEventListener("click", () => {
        const val = btn.dataset.value
        localStorage.setItem("sEng", val)
        seN.textContent = seNames[val]
        seO.forEach(b => {
            b.classList.remove("active")
        })
        btn.classList.add("active")
        seM.classList.remove("open")
        sEng.classList.remove("open")
        seM.setAttribute("aria-hidden", "true")
    })
})
document.addEventListener("click", (event) => {
    if (!event.target.closest(".sl-wr")) {
        seM.classList.remove("open")
        sEng.classList.remove("open")
        seM.setAttribute("aria-hidden", "true")
    }
    if(!event.target.closest(".rl-wr")){
        rCM.classList.remove("open")
        rCS.classList.remove("open")
        rCM.setAttribute("aria-hidden","true")
    }
})
const acc=document.querySelector("#acc")
const defacc="#4f8cff"
function iVH(val){
    return /^#[0-9A-Fa-f]{6}$/.test(val)
}
function setacc(clr){
    document.documentElement.style.setProperty("--accent",clr)
    acc.value=clr.toUpperCase()
    localStorage.setItem("act",clr)
}
const svacc=localStorage.getItem("act")
if(svacc && iVH(svacc)){
        setacc(svacc)
    }else{ setacc(defacc)}
acc.addEventListener("change",()=>{
    let clr=acc.value.trim()
    if(!clr.startsWith("#")){clr="#"+clr}
    if(iVH(clr)){setacc(clr)}
    else{const crt=getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()
    acc.value=crt.toUpperCase()
    }
})
function sSu(q){
    const query = q.trim().toLowerCase();
    if(!query){
        rS();
        return;
    }
    const sugg = rs.filter(item =>
        item.toLowerCase().includes(query)
    );
    sRP.innerHTML = "";
    if(!sugg.length){
        sRP.classList.remove("open");
        sRP.setAttribute("aria-hidden","true");
        return;
    }
    sugg.slice(0,4).forEach(item => {
        const b = document.createElement("button");
        b.className = "sri";
        b.textContent = item;
        b.addEventListener("click",()=>{
            sIn.value = item;
            sIn.dispatchEvent(
                new KeyboardEvent("keydown",{key:"Enter"})
            );
        });
        sRP.appendChild(b);
    });
    sRP.classList.add("open");
    sRP.setAttribute("aria-hidden","false");
}
sIn.addEventListener("input",()=>{
    sSu(sIn.value)
})
const wigTog=document.querySelectorAll(".wig-tog");
wigTog.forEach(btn=>{

    const wg=document.querySelector(`.wig[data-wg="${btn.dataset.wg}"]`);
    wg.addEventListener("contextmenu",(event)=>{
        cA()
            event.preventDefault()
            wS=wg
            wM.style.left=`${event.clientX}px`
            wM.style.top=`${event.clientY}px`
            wM.classList.add("open")
            wM.setAttribute("aria-hidden","false")
        })
    const ebl=localStorage.getItem(`wg-${btn.dataset.wg}`)!=="off";
    btn.classList.toggle("active",ebl);
    wg.style.display=ebl?"":"none";
    btn.addEventListener("click",()=>{
        const iE=btn.classList.toggle("active");
        localStorage.setItem(`wg-${btn.dataset.wg}`,iE?"on":"off");
        wg.style.display=iE?"":"none";
    })
})
mU.addEventListener("click",()=>{
    if(!wS)return
    const prev=wS.previousElementSibling
    if(prev) {wS.parentNode.insertBefore(wS,prev)
        sWO()}else{
    alert("Can't move! Already at the top")}
    cWM()
})
mD.addEventListener("click",()=>{
    if(!wS)return
    const next=wS.nextElementSibling
    if(next) {wS.parentNode.insertBefore(next,wS)
        sWO()}else{
    alert("Can't move! Already at the bottom")}
    cWM()
})
function cWM(){
    wS=null
    wM.classList.remove("open")
    wM.setAttribute("aria-hidden","true")
}
function sWO(){
    const wigs=[...document.querySelectorAll(".wig")]
    .map(wg=>wg.dataset.wg)
    localStorage.setItem("wgord",JSON.stringify(wigs))
}
function lWO(){
    const svd=JSON.parse(localStorage.getItem("wgord")||"[]")
    if(!svd)return
    const wigr=document.querySelector(".wigr")
    svd.forEach(id=>{
        const wg=document.querySelector(`.wig[data-wg="${id}"]`)
        if(wg) wigr.appendChild(wg)
    })
}
function cRM(){
    reS=null
    rM.classList.remove("open")
    rM.setAttribute("aria-hidden","true")
}
rNt.addEventListener("click",()=>{
    if(reS===null)return
    aR(reS)
    window.open(reS.url,"_blank")
    cSM()
})
rCp.addEventListener("click",()=>{
    if(!reS)return
    navigator.clipboard.writeText(reS.url).then(()=>{
        alert("Link copied to clipboard")
    })
    cSM()
})
reM.addEventListener("click",()=>{
    if(!reS)return
    r=r.filter(item=>item.url!==reS.url)
    localStorage.setItem("r",JSON.stringify(r))
    rR()
    cRM()
})
rRr.addEventListener("click",()=>{
    location.reload()
})
function cPM(){
    pM.classList.remove("open")
    pM.setAttribute("aria-hidden","true")
}
waLL.addEventListener("contextmenu",(event)=>{
    event.preventDefault()
    cA()
    pM.style.left=`${event.clientX}px`
    pM.style.top=`${event.clientY}px`
    pM.classList.add("open")
    pM.setAttribute("aria-hidden","false")
})
function cA(){
    cSM()
    cWM()
    cRM()
    cPM()
}
document.addEventListener("contextmenu",(event)=>{
    const tg=event.target
    if(tg.closest(".dit")|| tg.closest(".ri")||tg.closest(".wig")){return}
    if(
        tg.closest("button") ||
        tg.closest("textarea") ||
        tg.closest("#booty") ||
        tg.closest(".rsl")
    ){
        event.preventDefault()
        cA()
        return
    }
})
adS.addEventListener("contextmenu",(event)=>{
    event.preventDefault()
})
document.addEventListener("keydown",(event)=>{
    if(event.key==="Escape"){
        cA()
        setPan.classList.remove("open")
        setPan.setAttribute("aria-hidden","true")
    }
})
rCS.addEventListener("click",(event)=>{
    event.stopPropagation()
    const iO=rCM.classList.toggle("open")
    rCS.classList.toggle("open",iO)
    rCM.setAttribute("aria-hidden",String(!iO))
})
rCO.forEach(btn=>{
    btn.addEventListener("click",()=>{
        rC=Number(btn.dataset.value)
        localStorage.setItem("rC",rC)
        rCN.textContent=rC
        rCO.forEach(b=>b.classList.remove("active"))
        btn.classList.toggle("active",Number(btn.dataset.value)===rC)
        rCM.classList.remove("open")
        rCS.classList.remove("open")
        rCM.setAttribute("aria-hidden","true")
        rR()
    }
)})
const sW=document.querySelector("#sww")
const app = document.querySelector(".app")
function uSW(){
    const en=localStorage.getItem("sW")==="on"
    document.querySelector(".app").classList.toggle("ssd",en)
    app.classList.remove("ssd")
    void app.offsetWidth
    if(en){
        app.classList.add("ssd")
    }
    sW.classList.toggle("active",en)
}
sW.addEventListener("click",()=>{
    const en=localStorage.getItem("sW")==="on"
    localStorage.setItem("sW",en?"off":"on")
    uSW()
})
uSW()
uW()
uC()
uAP()
lWO()
setInterval(uC,1000)