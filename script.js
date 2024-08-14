let hrs=document.getElementById("hrs");
let min=document.getElementById("min");
let sec=document.getElementById("sec");
let timZone=document.getElementById("time-zone");




function  clock(){
    let time=new Date();

    let H=time.getHours();
    let M=time.getMinutes();
    let S=time.getSeconds();
     timZone.textContent="AM";
    if (H > 12) {
        H = H - 12;
        timZone.textContent = "PM";
      }
    
      H = H < 10 ? "0" + H : H;
      M = M < 10 ? "0" + M : M;
      S = S < 10 ? "0" + S : S;
    

    hrs.textContent=H;
    min.textContent=M;
    sec.textContent=S;
    setTimeout(() => {
        clock();
      }, 1000);
}

clock();