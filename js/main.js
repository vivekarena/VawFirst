$("#bannerSlider").owlCarousel({
    margin: 0,
    loop: true,
    autoplay: true,
    autoplayTimeout:2000,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        1024: {
            items: 1
        }
    }
});
$("#TrustedPartners").owlCarousel({
    margin: 0,
    nav: true,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout:2000,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1024: {
            items: 4
        }
    }
});
$("#TrendingPlans").owlCarousel({
    margin: 20,
    loop: true,
    autoPlay: true,
    smartSpeed: 1000,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1024: {
            items: 3
        }

    }
});
