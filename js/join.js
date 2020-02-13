$(function() {

  

    $('.fixedContainer').hide();
   

    if ($(window).width() >= 900 && $(window).width() <= 1024) {
                
               
        $('.menuSeller, .menuBuyer').click(function(){

            $('.fixedContainer').show();
    
            $('.fixedContainer').css({
                'opacity' : "1"
            });
    
            $('.hideEverywhere').hide();
    
            
            $(".MenuFors900px").css({
                'display' : 'none'
            });
    
            $(".s900pxButton").css({
                'display' : 'block'
            });


            $(window).resize(function(){

               
                if ($(window).width() >= 900 && $(window).width() <= 1024) {
                    
                   
                    $('.hideEverywhere').hide();
    
                    $(".MenuFors900px").css({
                        'display': 'none'
                     });
    
                    $(".s900pxButton").css({
                        'display': 'block'
                     });
            
                     $(".MenuForSmallScreen").css({//
                        'display' : 'none'
                    });
                    
                
                }
    
                else if ($(window).width() > 1024) {
    
                    $('.hideEverywhere').hide();

                    $(".MenuForSmallScreen").css({//
                        'display' : 'none'
                    });
            
                }
    
                else {
    
                    $('.hideEverywhere').hide();
    
                    $(".MenuForSmallScreenX").css({
                        'display' : 'none'
                    });
    
                    $(".MenuForSmallScreen").css({
                        'display' : 'block'
                    });
                }
    
            });

            $('.MenuForSmallScreenXform').click(function(){

                $('.fixedContainer').hide();
        
                $('.fixedContainer').css({
                    'opacity' : "0"
                });
        
                $('.hideEverywhere').show();
        
                $('.hideEverywhere').css({
                    'display' : "none"
                });
        
                //e.preventDefault();
                $('html, body').animate({
                    'scrollTop': '0'
                }, 300, 'swing');
        
                
            });
    
    
        });  
        
    }



        else if ($(window).width() < 900) {

           
            $('.menuSeller, .menuBuyer').click(function(){

                $('.fixedContainer').show();
        
                $('.fixedContainer').css({
                    'opacity' : "1"
                });
        
                $('.hideEverywhere').hide();
        
                
                $(".MenuForSmallScreenX").css({
                    'display' : 'none'
                });
        
                $(".MenuForSmallScreen").css({
                    'display' : 'block'
                });

                
                $(window).resize(function(){

                
                
                    if ($(window).width() >= 900 && $(window).width() <= 1024) {
                        
                       
                        $('.hideEverywhere').hide();
        
                        $(".MenuFors900px").css({
                            'display': 'none'
                         });
        
                        $(".s900pxButton").css({
                            'display': 'block'
                         });
                
                
                        
                    
                    }
        
                    else if ($(window).width() > 1024) {
        
                        $('.hideEverywhere').hide();
                
                    }
        
                    else {
            
        
                        $('.hideEverywhere').hide();
        
                        $(".MenuForSmallScreenX").css({
                            'display' : 'none'
                        });
        
                        $(".MenuForSmallScreen").css({
                            'display' : 'block'
                        });
                    }
        
                });

                $('.MenuForSmallScreenXform').click(function(){

                    $('.fixedContainer').hide();
            
                    $('.fixedContainer').css({
                        'opacity' : "0"
                    });
            
                    $('.hideEverywhere').show();
            
                    $('.hideEverywhere').css({
                        'display' : "none"
                    });
            
                    //e.preventDefault();
                    $('html, body').animate({
                        'scrollTop': '0'
                    }, 300, 'swing');
            
                });
        

            });
        
        

        }  
        
        
        



    $('.MenuForSmallScreenXform').click(function(){

        $('.fixedContainer').hide();

        $('.fixedContainer').css({
            'opacity' : "0"
        });

        $('.hideEverywhere').show();

        $('.hideEverywhere').css({
            'display' : "none"
        });

        //e.preventDefault();
        $('html, body').animate({
            'scrollTop': '0'
        }, 300, 'swing');



        $(window).resize(function(){

            if ($(window).width() >= 900 && $(window).width() <= 1024) {
                
               
                $('.menuSeller, .menuBuyer').click(function(){
        
                    $('.fixedContainer').show();
            
                    $('.fixedContainer').css({
                        'opacity' : "1"
                    });
            
                    $('.hideEverywhere').hide();
            
                    
                    $(".MenuFors900px").css({
                        'display' : 'none'
                    });
            
                    $(".s900pxButton").css({
                        'display' : 'block'
                    });

                    $(".MenuForSmallScreen").css({
                        'display' : 'none'
                    });
        

                });

            }  
            
            
            else if ($(window).width() < 900) {


                $('.menuSeller, .menuBuyer').click(function(){
    
                    $('.fixedContainer').show();
            
                    $('.fixedContainer').css({
                        'opacity' : "1"
                    });
            
                    $('.hideEverywhere').hide();
            
                    
                    $(".MenuForSmallScreenX").css({
                        'display' : 'none'
                    });
            
                    $(".MenuForSmallScreen").css({
                        'display' : 'block'
                    });
                });
            }   
            
            
            else {
                $('.hideEverywhere').hide();

                $(".MenuForSmallScreen").css({
                    'display' : 'none'
                });
            }
    
        });


        $('.menuSeller, .menuBuyer').click(function(){

            if ($(window).width() >= 900 && $(window).width() <= 1024) {
                
        
                    $('.fixedContainer').show();
            
                    $('.fixedContainer').css({
                        'opacity' : "1"
                    });
            
                    $('.hideEverywhere').hide();
            
                    
                    $(".MenuFors900px").css({
                        'display' : 'none'
                    });
            
                    $(".s900pxButton").css({
                        'display' : 'block'
                    });
                }

                
                else if ($(window).width() < 900) {

        
                        $('.fixedContainer').show();
                
                        $('.fixedContainer').css({
                            'opacity' : "1"
                        });
                
                        $('.hideEverywhere').hide();
                
                        
                        $(".MenuForSmallScreenX").css({
                            'display' : 'none'
                        });
                
                        $(".MenuForSmallScreen").css({
                            'display' : 'block'
                        });

                    }

        });

        
    });

    
    $('.join').click(function(){
        $('.fixedContainer').show();
    
        $('.fixedContainer').css({
            'opacity' : "1"
        });

        $('.hideEverywhere').hide();

        if ($(window).width() >= 900 && $(window).width() <= 1024) {
       
            $(".MenuFors900px").css({
                'display' : 'none'
            });
    
            $(".s900pxButton").css({
                'display' : 'block'
            });
        }

        else if ($(window).width() < 900) {
            $(".MenuForSmallScreenX").css({
                'display' : 'none'
            });
    
            $(".MenuForSmallScreen").css({
                'display' : 'block'
            });
        }


        $(window).resize(function(){

            $('.hideEverywhere').hide();

            if ($(window).width() >= 900) {

                $(".MenuFors900px").css({
                    'display' : 'none'
                });
        
                $(".s900pxButton").css({
                    'display' : 'block'
                });
            
            
                $(".MenuForSmallScreen").css({
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

                $(".MenuForSmallScreen").css({
                    'display' : 'block'
                });
            }



        });
 
    });



    $('.s1024pxAndup').click(function(){
        $('.fixedContainer').show();
    
        $('.fixedContainer').css({
            'opacity' : "1"
        });

        $('.hideEverywhere').hide();

        $(window).resize(function(){//

            if ($(window).width() < 900) {

                $(".MenuForSmallScreen").css({
                    'display' : 'block'
                });
            }

            else {
                $(".MenuForSmallScreen").css({
                    'display' : 'none'
                });
            }
        });


        $('.menuSeller, .menuBuyer').click(function(){

          
            $(window).resize(function(){

                $('.hideEverywhere').hide();

                if ($(window).width() >= 900 && $(window).width() <= 1024) {
                   
                    $(".MenuFors900px").css({
                        'display' : 'none'
                    });
            
                    $(".s900pxButton").css({
                        'display' : 'block'
                    });
                }

                else if ($(window).width() < 900) {
                    $(".MenuForSmallScreenX").css({
                        'display' : 'none'
                    });
            
                    $(".MenuForSmallScreen").css({
                        'display' : 'block'
                    });
                }

            });

        });

       
        
    
    });

});