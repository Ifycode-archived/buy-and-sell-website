

$(function() {

   
    /*----- General behaviour -------*/

    $('a[href^="#"]').on( 'click', function(e) {
        e.preventDefault();

        var target =this.hash;
        var $target = $(target);

        $('html, body').animate({
            'scrollTop': $target.offset().top}, 1000, 'swing');

       
    });

    $('html, body').animate({
        'scrollTop': '0'
    }, 500, 'swing');


    $('.case').css({
               
        'opacity' : '0'
    });

       $(window).scroll(function(){
        
        if ( $(this).scrollTop() > 300 ){
            $('.BackToTop').fadeIn();
            $('.case').css({
                'opacity' : '1',
                'transform' : 'rotateY(180deg)',
                 'display': 'block'
            });

        }

        else {
           $('.BackToTop').fadeIn();
            $('.case').css({
                'opacity' : '0',
                'transform' : 'rotateY(0deg)'
            });
        }
        
    });

    $('.BackToTop').on( 'click', function(e) {
        e.preventDefault();
    $('html, body').animate({
        'scrollTop': '0'
    }, 1000, 'swing');
    });

 $(window).scroll(function(){
        
        if ( $(window).scrollTop() + $(window).height() == $(document).height()) {
           // $(window).unbind('scroll');
            $('.svgShare1, .svgShare2, .svgShare3, .svgShare4').css({
                'width':'33px',
                'height': '33px',
                'opacity': '1'
            });
        }

 });


   $('.menuSeller, .menuBuyer, .join').on( 'click', function(e) {
    $('nav, main, #product, article, .BackToTop').css({
        'filter' : 'blur(1px)'
    });
   });

   $('.MenuForSmallScreenXform').on( 'click', function(e) {
    $('nav, main, #product, article, .BackToTop').css({
        'filter' : 'none'
    });
   });


    /*---- below width 900px -----*/
   

    $('.MenuForSmallScreen').on( 'click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            'scrollTop': '0'
        }, 300, 'swing');


        $(".MenuForSmallScreen").css({
            'display' : 'none'
        });

        $(".MenuForSmallScreenX").css({
            'display' : 'block'
        });
      
       
        $(".hideEverywhere").css({
            'display' : 'block'
        });

        $(window).resize(function(){

            $(".MenuForSmallScreen").css({
                'display' : 'none'
            });
    
            $(".MenuForSmallScreenX").css({
                'display' : 'block'
            });
          
           
            $(".hideEverywhere").css({
                'display' : 'block'
            });


            if ($(window).width() >= 900 && $(window).width() <= 1024) {
                
                $(".MenuFors900px").css({
                    'display': 'block'
                 });

                 $(".MenuForSmallScreenX").css({
                    'display' : 'none'
                });
        
                 $(".s900pxButton").css({
                    'display': 'none'
                 });
              
               
                $(".hideEverywhere").css({
                    'display' : 'block'
                });
            
            }

            else if ($(window).width() > 1024) {

                $(".MenuForSmallScreenX").css({
                    'display' : 'none'
                });
        
               
        
                $(".hideEverywhere").css({
                    'display' : 'none'
                });
                
        
            }


        });

    });


    $('.MenuForSmallScreenX').on( 'click', function(e) { 
        e.preventDefault();
        $('html, body').animate({
            'scrollTop': '0'
        }, 300, 'swing');


        $(".MenuForSmallScreenX").css({
            'display' : 'none'
        });

        $(".MenuForSmallScreen").css({
            'display' : 'block'
        });
      
       
        $(".hideEverywhere").css({
            'display' : 'none'
        });


        $(window).resize(function(){


            if ($(window).width() >= 900 && $(window).width() <= 1024) {
                
               
                 $(".s900pxButton").css({
                    'display': 'block'
                 });
        
        
                 $(".MenuFors900px").css({
                    'display': 'none'
                 });
        
                 $(".hideEverywhere").css({
                    'display': 'none'
                 });
                
            
            }

            else if ($(window).width() > 1024) {

                $(".MenuForSmallScreenX").css({
                    'display' : 'none'
                });
        
               
        
                $(".hideEverywhere").css({
                    'display' : 'none'
                });
                
        
            }

            else {

                $(".MenuForSmallScreenX").css({
                    'display' : 'none'
                });
        
                $(".MenuForSmallScreen").css({
                    'display' : 'block'
                });
              
               
                $(".hideEverywhere").css({
                    'display' : 'none'
                });

            }

        });

    


    });



    $('.menuHome').on( 'click', function(e) {

        $(".MenuForSmallScreenX").css({
            'display' : 'none'
        });

        $(".MenuForSmallScreen").css({
            'display' : 'block'
        });
      
       
        $(".hideEverywhere").css({
            'display' : 'none'
        });

       


        $(window).resize(function(){

            if ($(window).width() >= 900 && $(window).width() <= 1024) {

                
                $(".s900pxButton").css({
                    'display': 'block'
                 });
        
        
                 $(".MenuFors900px").css({
                    'display': 'none'
                 });
        
                
                
                $(".hideEverywhere").css({
                    'display' : 'none'
                });

            }


            else if ($(window).width() > 1024) {

                $(".hideEverywhere").css({
                    'display' : 'none'
                });
                
        
            }

            else {

                $(".MenuForSmallScreenX").css({
                    'display' : 'none'
                });
        
                $(".MenuForSmallScreen").css({
                    'display' : 'block'
                });

                $(".hideEverywhere").css({
                    'display' : 'none'
                });

            }
           
        });

    });

    $('.menuProduct').on( 'click', function(e) {

        $(".MenuForSmallScreenX").css({
            'display' : 'none'
        });

        $(".MenuForSmallScreen").css({
            'display' : 'block'
        });
      
       
        $(".hideEverywhere").css({
            'display' : 'none'
        });

        $(window).resize(function(){

            if ($(window).width() >= 900 && $(window).width() <= 1024) {

                
                $(".s900pxButton").css({
                    'display': 'block'
                 });
        
        
                 $(".MenuFors900px").css({
                    'display': 'none'
                 });
        
                
                
                $(".hideEverywhere").css({
                    'display' : 'none'
                });

            }


            else if ($(window).width() > 1024) {

                $(".hideEverywhere").css({
                    'display' : 'none'
                });
                
        
            }

            else {

                $(".MenuForSmallScreenX").css({
                    'display' : 'none'
                });
        
                $(".MenuForSmallScreen").css({
                    'display' : 'block'
                });

                $(".hideEverywhere").css({
                    'display' : 'none'
                });

            }
           
        });


    });

    $('.menuAbout').on( 'click', function(e) {

        $(".MenuForSmallScreenX").css({
            'display' : 'none'
        });

        $(".MenuForSmallScreen").css({
            'display' : 'block'
        });
      
       
        $(".hideEverywhere").css({
            'display' : 'none'
        });


        $(window).resize(function(){

            if ($(window).width() >= 900 && $(window).width() <= 1024) {

                
                $(".s900pxButton").css({
                    'display': 'block'
                 });
        
        
                 $(".MenuFors900px").css({
                    'display': 'none'
                 });
        
                
                
                $(".hideEverywhere").css({
                    'display' : 'none'
                });

            }


            else if ($(window).width() > 1024) {

                $(".hideEverywhere").css({
                    'display' : 'none'
                });
                
        
            }

            else {

                $(".MenuForSmallScreenX").css({
                    'display' : 'none'
                });
        
                $(".MenuForSmallScreen").css({
                    'display' : 'block'
                });

                $(".hideEverywhere").css({
                    'display' : 'none'
                });

            }
           
        });


    });

    $('.menuContact').on( 'click', function(e) {

        $(".MenuForSmallScreenX").css({
            'display' : 'none'
        });

        $(".MenuForSmallScreen").css({
            'display' : 'block'
        });
      
       
        $(".hideEverywhere").css({
            'display' : 'none'
        });


        $(window).resize(function(){

            if ($(window).width() >= 900 && $(window).width() <= 1024) {

                
                $(".s900pxButton").css({
                    'display': 'block'
                 });
        
        
                 $(".MenuFors900px").css({
                    'display': 'none'
                 });
        
                
                
                $(".hideEverywhere").css({
                    'display' : 'none'
                });

            }


            else if ($(window).width() > 1024) {

                $(".hideEverywhere").css({
                    'display' : 'none'
                });
                
        
            }

            else {

                $(".MenuForSmallScreenX").css({
                    'display' : 'none'
                });
        
                $(".MenuForSmallScreen").css({
                    'display' : 'block'
                });

                $(".hideEverywhere").css({
                    'display' : 'none'
                });

            }
           
        });


    });


    /* ------ 900px to 1024px device width */


    $('.s900pxButton').on( 'click', function(e) {

        e.preventDefault();
        $('html, body').animate({
            'scrollTop': '0'
        }, 300, 'swing');

        $(".s900pxButton").css({
            'display': 'none'
         });


         $(".MenuFors900px").css({
            'display': 'block'
         });

         $(".hideEverywhere").css({
            'display': 'block'
         });



         $(window).resize(function(){


            if ($(window).width() >= 900 && $(window).width() <= 1024) {
                
               
                $(".s900pxButton").css({
                    'display': 'none'
                 });
        
        
                 $(".MenuFors900px").css({
                    'display': 'block'
                 });
        
                 $(".hideEverywhere").css({
                    'display': 'block'
                 });

                 $(".MenuForSmallScreenX").css({
                    'display' : 'none'
                });
                
            
            }

            else if ($(window).width() > 1024) {

                $(".MenuForSmallScreenX").css({
                    'display' : 'none'
                });
        
               
        
                $(".hideEverywhere").css({
                    'display' : 'none'
                });
                
        
            }

            else {

                $(".MenuForSmallScreen").css({
                    'display' : 'none'
                });

                 $(".MenuForSmallScreenX").css({
                    'display' : 'block'
                });
              
               
                $(".hideEverywhere").css({
                    'display' : 'block'
                });

            }


        });

        

    });



    $('.MenuFors900px').on( 'click', function(e) {

        e.preventDefault();
        $('html, body').animate({
            'scrollTop': '0'
        }, 300, 'swing');

        $(".MenuFors900px").css({
            'display': 'none'
         });


         $(".s900pxButton").css({
            'display': 'block'
         });

         $(".hideEverywhere").css({
            'display': 'none'
         });


         $(window).resize(function(){

            if ($(window).width() >= 900 && $(window).width() <= 1024) {

                
                $(".s900pxButton").css({
                    'display': 'block'
                 });
        
        
                 $(".MenuFors900px").css({
                    'display': 'none'
                 });


                 $(".MenuForSmallScreen").css({
                    'display' : 'none'
                });
        
                
                
                $(".hideEverywhere").css({
                    'display' : 'none'
                });

            }


            else if ($(window).width() > 1024) {

                $(".MenuForSmallScreen").css({
                    'display' : 'none'
                });
                
                $(".hideEverywhere").css({
                    'display' : 'none'
                });
                
        
            }

            else {

                $(".MenuForSmallScreenX").css({
                    'display' : 'none'
                });
        
                $(".MenuForSmallScreen").css({
                    'display' : 'block'
                });

                $(".hideEverywhere").css({
                    'display' : 'none'
                });

            }
           
        });

    });




    $('#LargeDeviceHome').on( 'click', function(e) { //resize this too
        $(".MenuFors900px").css({
            'display': 'none'
         });


         $(".s900pxButton").css({
            'display': 'block'
         });

         $(".hideEverywhere").css({
            'display': 'none'
         });


         $(window).resize(function(){

            if ($(window).width() >= 900 && $(window).width() <= 1024) {

                
                $(".s900pxButton").css({
                    'display': 'block'
                 });
        
        
                 $(".MenuFors900px").css({
                    'display': 'none'
                 });


                 $(".MenuForSmallScreen").css({
                    'display' : 'none'
                });
        
                
                
                $(".hideEverywhere").css({
                    'display' : 'none'
                });

            }


            else if ($(window).width() > 1024) {

                $(".MenuForSmallScreen").css({
                    'display' : 'none'
                });
                
                $(".hideEverywhere").css({
                    'display' : 'none'
                });
                
        
            }

            else {

                $(".MenuForSmallScreenX").css({
                    'display' : 'none'
                });
        
                $(".MenuForSmallScreen").css({
                    'display' : 'block'
                });

                $(".hideEverywhere").css({
                    'display' : 'none'
                });

            }
           
        });


    });



    $('#LargeDeviceProduct').on( 'click', function(e) { //this too
        $(".MenuFors900px").css({
            'display': 'none'
         });


         $(".s900pxButton").css({
            'display': 'block'
         });

         $(".hideEverywhere").css({
            'display': 'none'
         });


         $(window).resize(function(){

            if ($(window).width() >= 900 && $(window).width() <= 1024) {

                
                $(".s900pxButton").css({
                    'display': 'block'
                 });
        
        
                 $(".MenuFors900px").css({
                    'display': 'none'
                 });


                 $(".MenuForSmallScreen").css({
                    'display' : 'none'
                });
        
                
                
                $(".hideEverywhere").css({
                    'display' : 'none'
                });

            }


            else if ($(window).width() > 1024) {

                $(".MenuForSmallScreen").css({
                    'display' : 'none'
                });
                
                $(".hideEverywhere").css({
                    'display' : 'none'
                });
                
        
            }

            else {

                $(".MenuForSmallScreenX").css({
                    'display' : 'none'
                });
        
                $(".MenuForSmallScreen").css({
                    'display' : 'block'
                });

                $(".hideEverywhere").css({
                    'display' : 'none'
                });

            }
           
        });


    });


    $('#LargeDeviceAbout').on( 'click', function(e) { //this too
        $(".MenuFors900px").css({
            'display': 'none'
         });


         $(".s900pxButton").css({ //this too
            'display': 'block'
         });

         $(".hideEverywhere").css({
            'display': 'none'
         });


         $(window).resize(function(){

            if ($(window).width() >= 900 && $(window).width() <= 1024) {

                
                $(".s900pxButton").css({
                    'display': 'block'
                 });
        
        
                 $(".MenuFors900px").css({
                    'display': 'none'
                 });


                 $(".MenuForSmallScreen").css({
                    'display' : 'none'
                });
        
                
                
                $(".hideEverywhere").css({
                    'display' : 'none'
                });

            }


            else if ($(window).width() > 1024) {

                $(".MenuForSmallScreen").css({
                    'display' : 'none'
                });
                
                $(".hideEverywhere").css({
                    'display' : 'none'
                });
                
        
            }

            else {

                $(".MenuForSmallScreenX").css({
                    'display' : 'none'
                });
        
                $(".MenuForSmallScreen").css({
                    'display' : 'block'
                });

                $(".hideEverywhere").css({
                    'display' : 'none'
                });

            }
           
        });


    });



    $('#LargeDeviceContact').on( 'click', function(e) {
        $(".MenuFors900px").css({
            'display': 'none'
         });


         $(".s900pxButton").css({
            'display': 'block'
         });

         $(".hideEverywhere").css({
            'display': 'none'
         });


         $(window).resize(function(){

            if ($(window).width() >= 900 && $(window).width() <= 1024) {

                
                $(".s900pxButton").css({
                    'display': 'block'
                 });
        
        
                 $(".MenuFors900px").css({
                    'display': 'none'
                 });


                 $(".MenuForSmallScreen").css({
                    'display' : 'none'
                });
        
                
                
                $(".hideEverywhere").css({
                    'display' : 'none'
                });

            }


            else if ($(window).width() > 1024) {

                $(".MenuForSmallScreen").css({
                    'display' : 'none'
                });
                
                $(".hideEverywhere").css({
                    'display' : 'none'
                });
                
        
            }

            else {

                $(".MenuForSmallScreenX").css({
                    'display' : 'none'
                });
        
                $(".MenuForSmallScreen").css({
                    'display' : 'block'
                });

                $(".hideEverywhere").css({
                    'display' : 'none'
                });

            }
           
        });


    });


    
    
});

