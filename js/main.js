document.addEventListener("click",function (e){
    if(e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('modalImage'));
        myModal.show();
    }
})


function scrollWin(dest) {
    var position = document.getElementById(dest).offsetTop;
    window.scrollTo(0, position);
}