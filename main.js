let productImg = document.getElementById('product-img');
let galleryControlBtn = document.getElementsByClassName('gallery-control-btn');

galleryControlBtn[0].onclick = function() {
    productImg.src = 'img/image1.png';

    for(bt of galleryControlBtn) {
        bt.classList.remove('active');
    }
    this.classList.add('active');
}

galleryControlBtn[1].onclick = function() {
    productImg.src = 'img/image2.png';

    for(bt of galleryControlBtn) {
        bt.classList.remove('active');
    }
    this.classList.add('active');
}

galleryControlBtn[2].onclick = function() {
    productImg.src = 'img/image3.png';

    for(bt of galleryControlBtn) {
        bt.classList.remove('active');
    }
    this.classList.add('active');
}