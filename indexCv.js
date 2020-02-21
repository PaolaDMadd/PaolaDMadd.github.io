window.addEventListener('scroll', function(event){

    const heroHeight= document.querySelector('.hero').height;
    const bodyScroll = event.target.body.scrollTop;
    if (bodyScroll > heroHeight) {
        document.querySelector('.navbar').classList.add('bg-light');
    } else {
        document.querySelector('.navbar').classList.remove('bg-light')
    }
})


