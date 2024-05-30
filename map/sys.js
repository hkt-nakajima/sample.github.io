
const pin = document.getElementById('pin');
const contentimage = document.getElementById('image');
const dtale = document.getElementById('detail');

pin.addEventListener('mouseover',(e)=>{
    pin.classList.add('pin-hover');
});
pin.addEventListener('mouseleave',(e)=>{
    pin.classList.remove('pin-hover');
});

pin.addEventListener('click',(e)=>{
    pin.classList.add('pin-click');
});
document.addEventListener('click',(e)=>{
    if(!e.target.closest('.pin-click')) {
        pin.classList.remove('pin-click');
      }
});

contentimage.addEventListener('click',()=>{
    dtale.classList.add('visible');

})


dtale.addEventListener('click',(e)=>{
    e.stopPropagation();
    e.target.classList.remove('visible');
})

let lock = false;
const pinDetailArea = document.getElementById('pinDetailArea');
pinDetailArea.addEventListener('click',(e)=>{
    if(!e.target.closest('.pin-detail-content-comment') && !lock){
        lock = true;
        const pointX = e.offsetX;
        const pointY = e.offsetY;
        const pinDetailContentComment = document.createElement('div');
        pinDetailContentComment.classList.add('pin-detail-content-comment');

        const input = document.createElement('input');
        input.setAttribute('placeholder',"コメントを追加");
        input.classList.add('comment-input')
        pinDetailContentComment.style.top = pointY + "px";
        pinDetailContentComment.style.left = pointX + "px";
        pinDetailArea.appendChild(pinDetailContentComment);
        pinDetailContentComment.appendChild(input);
        input.focus();
        // document.addEventListener('click',(el)=>{
        //     console.log(el.target.closest('.comment-input'));
        //     if(!el.target.closest('.comment-input') && input.value==""){
        //         pinDetailContentComment.innerHTML="";
        //         pinDetailContentComment.remove();
        //     }
        // })
        input.addEventListener('keyup',(ek)=>{
            console.log(ek.key)
            if(ek.key==="Enter" && input.value!==''){
                const comment = input.value;
                input.remove();
                pinDetailContentComment.innerHTML=
                `
                <img src="pin-type2.svg">
                <p>${comment}</p>                
                `;
                lock = false;
            }else if(input.value===''){
                pinDetailContentComment.innerHTML="";
                pinDetailContentComment.remove();
                lock = false;
            }
        })

        input.addEventListener('focusout',(e)=>{
            if(input.value===""){
                pinDetailContentComment.innerHTML="";
                pinDetailContentComment.remove();
                lock = false;
            }
        })

    }
})
