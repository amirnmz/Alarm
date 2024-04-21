const selectmenu = document.querySelectorAll('select');
const timebox = document.querySelector('.time');
const setalarmbtn = document.querySelector('button');
const content = document.querySelector('.content');

let  allarmtime, allarmstate ='noset';
const ringtone = new Audio('./ringtone.mp3')



for(let i=23; i>=0; i--){

    i = i <10 ? '0' + i:i; //if(i<10) i = '0'+ i
                           //else i=i

    let option = `<option value="${i}">${i}</option>`;
     selectmenu[0].firstElementChild.insertAdjacentHTML('afterend',option)
    

}
for(let i=59; i>=0; i--){

    i = i <10 ? '0' + i:i; //if(i<10) i = '0'+ i
                           //else i=i

    let option = `<option value="${i}">${i}</option>`;
     selectmenu[1].firstElementChild.insertAdjacentHTML('afterend',option)
    
}


setInterval(() => {
    let date = new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();

    h=h < 10  ? '0' +  h  : h;
    m=m < 10  ? '0' +  m  : m;
    s=s < 10  ? '0' +  s  : s;
    
    timebox.innerHTML = `${h}:${m}:${s}`;
    if(allarmtime == `${h}:${m}` ){
        ringtone.play();
        ringtone.loop = true;
        
      
    }
    
}, 1000);



//ست کردن ساعت مشخص برای الارم

setalarmbtn.addEventListener('click', () => {
    allarmtime = `${selectmenu[0].value}:${selectmenu[1].value}`;
    if(allarmtime.includes('hour')||allarmtime.includes('minute')){
        return alert('زمان هشدار را ب درستی انتخاب کنید!')

    }
    checkstate(allarmstate)
    

})
function checkstate (state){
    if(state == 'noset'){
        content.classList.add('disable')
        setalarmbtn.innerText = 'clear allarm'
        allarmstate ='set'

    }else{
        content.classList.remove('disable')
        allarmtime =''
        ringtone.pause()
        allarmstate ='noset'
        setalarmbtn.innerText = 'set allarm'
    }

}
