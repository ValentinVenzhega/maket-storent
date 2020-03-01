 $(document).ready(function() {
            var link = $('.menu-link');
            var link_active = $('.menu-link_active');
            var menu = $('.menu');
            var nav_link = $('.menu a')

            link.click(function() {
                link.toggleClass('menu-link_active');
                menu.toggleClass('menu_active');
            });
            nav_link.click(function() {
                link.toggleClass('menu-link_active');
                menu.toggleClass('menu_active');
            });
        });

 $('form').submit(function(event) {
     event.preventDefault();
     var form = $(this);
     $.ajax({
         type: form.attr('method'),
         url: form.attr('action'),
         data: form.serialize()
         }).done(function() {
         $('.js-overlay1-thank-you').fadeIn();
         $(this).find('input').val('');
         $(".form-reset").trigger('reset');
     });
     return false;
 });
 new WOW().init();

 // Закрыть попап «спасибо»
 $('.js-close-thank-you').click(function() { // по клику на крестик
     $('.js-overlay1-thank-you').fadeOut();
 });

 $(document).mouseup(function (e) { // по клику вне попапа
     var popup = $('.popup1');
     if (e.target!=popup[0]&&popup.has(e.target).length === 0){
         $('.js-overlay1-thank-you').fadeOut();
     }
 });

 $(document).ready(function(){
 $(".phone-mask").mask("+7(999) 999-99-99");
});

  $(document).scroll(function(){
        if ($(this).scrollTop()
            );
    });

  $(document).ready(function() {

      $('.header-order').on("click", function(){
          $('.overlay').fadeIn();
      });

      $('.popup-close').on("click", function(){
          $('.overlay').fadeOut();
      });

  });

  $(document).ready(function() {

      $('.form-small-text').on("click", function(){
          $('.overlay2').fadeIn();
      });

      $('.close-popup2').on("click", function(){
          $('.overlay2').fadeOut();
      });

  });


  $('.materials-slider_top').slick({
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<div class="slider-arrow-materials slider-arrow-materials_prod slider-arrow-materials_left"></div>',
      nextArrow: '<div class="slider-arrow-materials slider-arrow-materials_prod slider-arrow-materials_right"></div>',
      responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                          slidesToShow: 3,
                          slidesToScroll: 1,
                        }
                      },
                      {
                      breakpoint: 992,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                      }
                    },
                    {
                      breakpoint: 768,
                     settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      }
                    }
                    ]
  });

  $('.materials-slider_two1').slick({
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      responsive: [
                      {
                      breakpoint: 992,
                      settings: "unslick",

                    }
                    ]
  });

  $('.tools-slider_top').slick({
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<div class="slider-arrow-materials slider-arrow-materials_prod slider-arrow-materials_left"></div>',
      nextArrow: '<div class="slider-arrow-materials slider-arrow-materials_prod slider-arrow-materials_right"></div>',
      responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                          slidesToShow: 3,
                          slidesToScroll: 1,
                        }
                      },
                      {
                      breakpoint: 992,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                      }
                    },
                    {
                      breakpoint: 768,
                     settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      }
                    }
                    ]
      
  });

  $('.tools-slider_two1').slick({
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      responsive: [
                      {
                      breakpoint: 992,
                        settings: "unslick",

                    }
                    ]
      
  });

  $('.prototiping-slider_top').slick({
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<div class="slider-arrow-materials slider-arrow-materials_prod slider-arrow-materials_left"></div>',
      nextArrow: '<div class="slider-arrow-materials slider-arrow-materials_prod slider-arrow-materials_right"></div>',
      responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                          slidesToShow: 3,
                          slidesToScroll: 1,
                        }
                      },
                      {
                      breakpoint: 992,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                      }
                    },
                    {
                      breakpoint: 768,
                     settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      }
                    }
                    ]
      
  });

  $('.prototiping-slider_two1').slick({
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      responsive: [
                      {
                      breakpoint: 992,
                        settings: "unslick",

                    }
                    ]
      
  });




  ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
              center: [55.756406, 37.714492],
              zoom: 18,
              controls: ['zoomControl', 'geolocationControl']
          }, {
              searchControlProvider: 'yandex#search'
          }),

          // Создаём макет содержимого.
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
          ),

          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
              hintContent: 'Maket Storent',
              balloonContent: 'Авиамоторная улица, 4А'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: 'img/icon-map1.png',
              // Размеры метки.
              iconImageSize: [48, 48],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-24, -64]
          });
      myMap.behaviors
          .disable('scrollZoom');
      myMap.geoObjects
          .add(myPlacemark);
  });

  <!-- Yandex.Metrika counter --> <script type="text/javascript" > (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter48973373 = new Ya.Metrika({ id:48973373, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true, trackHash:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks"); </script> <noscript><div><img src="https://mc.yandex.ru/watch/48973373" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter -->
  

  


  


 