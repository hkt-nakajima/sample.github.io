
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
