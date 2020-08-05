//open on click 
$('.js-btn').click(function() {
    $('main').css('filter','blur(5px)');
    $('.js-overlay').fadeIn();
    $('.js-overlay').addClass('disabled');
});


//close window on click 
$('.js-close').click(function() {
    $('.js-overlay').fadeOut();
    $('main').css('filter','none');
});


//close window out
$(document).mouseup(function(e) {
    var popup = $('.js-popup');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay').fadeOut();
        $('main').css('filter','none');
    };
})


//slick slider
$(document).ready(function(){
    $('.slick__slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1, 
      dots: false,
      infinite: true,
      centerMode: true,
      arrows: false,
      centerPadding: '120px',
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
          }
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            centerMode: false,
            autoplay: false,
            centerPadding: '0px',
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }); 

  //google map 
  function initMap(){

    var element = document.getElementById('map'); 

    var options = { 
        zoom: 5, 
        center: {lat: 51.501476, lng: -0.140634}
    };

    var myMap = new google.maps.Map(element, options);

    $.getJSON("../js/map_style.json", function(data) {
      myMap.setOptions({styles: data});
    });
    
    var markers= [
        { 
            coordinates: {lat: 37.769722, lng: -122.476944},
            info: '<div class="contact__info"><h3>Contact</h3><div id="phone-num"><p>Phone:<br>0 800 123 45 67</p></div><div id="hours-work"><p>Hours available:<br>11AM — 8PM</p></div><div id="m-email"><p>Email:<br>support@yoursite.com</p></div></div>'
        },

        { 
            coordinates: {lat: 51.501476, lng: -0.140634},
            info: '<div class="contact__info"><h3>Contact</h3><div id="phone-num"><p>Phone:<br>0 800 123 45 67</p></div><div id="hours-work"><p>Hours available:<br>11AM — 8PM</p></div><div id="m-email"><p>Email:<br>support@yoursite.com</p></div></div>'
        }
    ]

    for (var i = 0; i < markers.length; i++) 
    {
        addMarker(markers[i]);
    }

    

    function addMarker(properties){ 

        var marker = new google.maps.Marker({
            position: properties.coordinates,
            animation: google.maps.Animation.DROP,
            map: myMap, 
        });

        if(properties.info)
            {
                var InfoWindow = new google.maps.InfoWindow({
                    content: properties.info,
                });
        
                marker.addListener('click', function(){
                InfoWindow.open(myMap, marker);
                myMap.setZoom(18);
                myMap.setCenter(marker.getPosition());
                });
            } 
      }   
      
  }