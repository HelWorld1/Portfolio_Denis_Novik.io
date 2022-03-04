let active_menu_item = 'nav a';

$(document).ready(async function(){
    $('.menu_activation_btn').click(function(){
        $('ul').toggleClass('hide_menu');
        $('.menu_activation_btn').toggleClass('cancel');
        $('.change_lang').toggleClass('hide_change_lang');
        $('.nav_menu').toggleClass('hide_menu_2');
        $('.nav_menu').toggleClass('show_menu');
        $('.Home').toggleClass('noactive_block');
    })
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        let target = $(this.hash);
        $('html, body').stop().animate({
            'scrollTop': target.offset().top
        }, 1000);
    });

    $(active_menu_item).on('click', function(){
        $(active_menu_item).removeClass('active_menu_item');
        $(this).addClass('active_menu_item');
    })
    $(document).on('click', '.photoshop_skills_block .btn_star', function(){
        let index = $(this).index();
        let next_child = index + 1;
        let previous_child = index - 1;
        let nth_child1 = $('.photoshop_skills_block button:nth-child(1)').index();
        let nth_child2 = $('.photoshop_skills_block button:nth-child(2)').index();
        let nth_child3 = $('.photoshop_skills_block button:nth-child(3)').index();
        let nth_child4 = $('.photoshop_skills_block button:nth-child(4)').index();
        let nth_child5 = $('.photoshop_skills_block button:nth-child(5)').index();
        // alert(next_child);
        if($(this).hasClass("btn_active_star")) {
            if(next_child == nth_child5) {
                if($('.photoshop_skills_block button:nth-child(5)').hasClass("btn_active_star")){
                    alert('Неее, брат, так дело не пойдет! Сначала нажми предыдущую звёздочку');
                }
                else {
                    if(index = nth_child4) {
                        $('.photoshop_skills_block button:nth-child(4)').removeClass('btn_active_star');
                    }

                    else {
                        $('.photoshop_skills_block button:nth-child(5)').removeClass('btn_active_star');
                    }
                }
            }

            else {
                if(next_child == nth_child4) {
                    if($('.photoshop_skills_block .btn_active_star:nth-child(4)').hasClass("btn_active_star")){
                        alert('Неее, брат, так дело не пойдет! Сначала нажми предыдущую звёздочку');
                    }
                    else {
                       $('.photoshop_skills_block button:nth-child(3)').removeClass('btn_active_star'); 
                    }
                }
                else {
                    if(next_child == nth_child3) {
                        if($('.photoshop_skills_block .btn_active_star:nth-child(3)').hasClass("btn_active_star")){
                            alert('Неее, брат, так дело не пойдет! Сначала нажми предыдущую звёздочку');
                        }
                        else {
                            $('.photoshop_skills_block button:nth-child(2)').removeClass('btn_active_star');
                        }
                    }
                    else {
                        if(next_child == nth_child2) {
                            if($('.photoshop_skills_block .btn_active_star:nth-child(2)').hasClass("btn_active_star")){
                                alert('Неее, брат, так дело не пойдет! Сначала нажми предыдущую звёздочку');
                            }
                            else {
                                $('.photoshop_skills_block button:nth-child(1)').removeClass('btn_active_star');
                            }
                        }
                        else {
                            $(this).removeClass('.photoshop_skills_block btn_active_star');
                        }
                    }
                }
            }
        }

        else {
            if(!$(this).hasClass("btn_active_star")) {
                if(previous_child == nth_child4) {
                    if($('.photoshop_skills_block button:nth-child(4)').hasClass("btn_active_star")){
                        $('.photoshop_skills_block button:nth-child(5)').addClass('btn_active_star');
                    }
                    else {
                        alert('Неее, брат, так дело не пойдет! Сначала нажми звёздочку перед этой');
                    }
                }

                else {
                    if(previous_child == nth_child3) {
                        if($('.photoshop_skills_block .btn_active_star:nth-child(3)').hasClass("btn_active_star")){
                            $('.photoshop_skills_block button:nth-child(4)').addClass('btn_active_star'); 
                        }
                        else {
                            alert('Неее, брат, так дело не пойдет! Сначала нажми звёздочку перед этой');
                        }
                    }
                    else {
                        if(previous_child == nth_child2) {
                            if($('.photoshop_skills_block .btn_active_star:nth-child(2)').hasClass("btn_active_star")){
                                $('.photoshop_skills_block button:nth-child(3)').addClass('btn_active_star');
                            }
                            else {
                                alert('Неее, брат, так дело не пойдет! Сначала нажми звёздочку перед этой');
                            }
                        }
                        else {
                            if(previous_child == nth_child1) {
                                if($('.photoshop_skills_block .btn_active_star:nth-child(1)').hasClass("btn_active_star")){
                                    $('.photoshop_skills_block button:nth-child(2)').addClass('btn_active_star');
                                }
                                else {
                                    alert('Неее, брат, так дело не пойдет! Сначала нажми звёздочку перед этой');
                                }
                            }
                            else {
                                if(previous_child == -1){
                                    $('.photoshop_skills_block button:nth-child(1)').addClass('btn_active_star');
                                }

                                else {
                                    alert('Неее, брат, так дело не пойдет! Сначала нажми звёздочку перед этой');
                                }
                            }
                        }
                    }
                }
            }
        }
    });
    $(document).on('click', '.illustrator_skills_block .btn_star', function(){
        let index = $(this).index();
        let next_child = index + 1;
        let previous_child = index - 1;
        let nth_child1 = $('.illustrator_skills_block button:nth-child(1)').index();
        let nth_child2 = $('.illustrator_skills_block button:nth-child(2)').index();
        let nth_child3 = $('.illustrator_skills_block button:nth-child(3)').index();
        let nth_child4 = $('.illustrator_skills_block button:nth-child(4)').index();
        let nth_child5 = $('.illustrator_skills_block button:nth-child(5)').index();
        // alert(next_child);
        if($(this).hasClass("btn_active_star")) {
            if(next_child == nth_child5) {
                if($('.illustrator_skills_block button:nth-child(5)').hasClass("btn_active_star")){
                    alert('Неее, брат, так дело не пойдет! Сначала нажми предыдущую звёздочку');
                }
                else {
                    if(index = nth_child4) {
                        $('.illustrator_skills_block button:nth-child(4)').removeClass('btn_active_star');
                    }

                    else {
                        $('.illustrator_skills_block button:nth-child(5)').removeClass('btn_active_star');
                    }
                }
            }

            else {
                if(next_child == nth_child4) {
                    if($('.illustrator_skills_block .btn_active_star:nth-child(4)').hasClass("btn_active_star")){
                        alert('Неее, брат, так дело не пойдет! Сначала нажми предыдущую звёздочку');
                    }
                    else {
                       $('.illustrator_skills_block button:nth-child(3)').removeClass('btn_active_star'); 
                    }
                }
                else {
                    if(next_child == nth_child3) {
                        if($('.illustrator_skills_block .btn_active_star:nth-child(3)').hasClass("btn_active_star")){
                            alert('Неее, брат, так дело не пойдет! Сначала нажми предыдущую звёздочку');
                        }
                        else {
                            $('.illustrator_skills_block button:nth-child(2)').removeClass('btn_active_star');
                        }
                    }
                    else {
                        if(next_child == nth_child2) {
                            if($('.illustrator_skills_block .btn_active_star:nth-child(2)').hasClass("btn_active_star")){
                                alert('Пошёл нафиг 1');
                            }
                            else {
                                $('.illustrator_skills_block button:nth-child(1)').removeClass('btn_active_star');
                            }
                        }
                        else {
                            $(this).removeClass('.illustrator_skills_block btn_active_star');
                        }
                    }
                }
            }
        }

        else {
            if(!$(this).hasClass("btn_active_star")) {
                if(previous_child == nth_child4) {
                    if($('.illustrator_skills_block button:nth-child(4)').hasClass("btn_active_star")){
                        $('.illustrator_skills_block button:nth-child(5)').addClass('btn_active_star');
                    }
                    else {
                        alert('Неее, брат, так дело не пойдет! Сначала нажми звёздочку перед этой');
                    }
                }

                else {
                    if(previous_child == nth_child3) {
                        if($('.illustrator_skills_block .btn_active_star:nth-child(3)').hasClass("btn_active_star")){
                            $('.illustrator_skills_block button:nth-child(4)').addClass('btn_active_star'); 
                        }
                        else {
                            alert('Неее, брат, так дело не пойдет! Сначала нажми звёздочку перед этой');
                        }
                    }
                    else {
                        if(previous_child == nth_child2) {
                            if($('.illustrator_skills_block .btn_active_star:nth-child(2)').hasClass("btn_active_star")){
                                $('.illustrator_skills_block button:nth-child(3)').addClass('btn_active_star');
                            }
                            else {
                                alert('Неее, брат, так дело не пойдет! Сначала нажми звёздочку перед этой');
                            }
                        }
                        else {
                            if(previous_child == nth_child1) {
                                if($('.illustrator_skills_block .btn_active_star:nth-child(1)').hasClass("btn_active_star")){
                                    $('.illustrator_skills_block button:nth-child(2)').addClass('btn_active_star');
                                }
                                else {
                                    alert('Неее, брат, так дело не пойдет! Сначала нажми звёздочку перед этой');
                                }
                            }
                            else {
                                if(previous_child == -1){
                                    $('.illustrator_skills_block button:nth-child(1)').addClass('btn_active_star');
                                }

                                else {
                                    alert('Неее, брат, так дело не пойдет! Сначала нажми звёздочку перед этой');
                                }
                            }
                        }
                    }
                }
            }
        }
    });
    $(document).on('click', '.effects_skills_block .btn_star', function(){
        let index = $(this).index();
        let next_child = index + 1;
        let previous_child = index - 1;
        let nth_child1 = $('.effects_skills_block button:nth-child(1)').index();
        let nth_child2 = $('.effects_skills_block button:nth-child(2)').index();
        let nth_child3 = $('.effects_skills_block button:nth-child(3)').index();
        let nth_child4 = $('.effects_skills_block button:nth-child(4)').index();
        let nth_child5 = $('.effects_skills_block button:nth-child(5)').index();
        // alert(next_child);
        if($(this).hasClass("btn_active_star")) {
            if(next_child == nth_child5) {
                if($('.effects_skills_block button:nth-child(5)').hasClass("btn_active_star")){
                    alert('Неее, брат, так дело не пойдет! Сначала нажми предыдущую звёздочку');
                }
                else {
                    if(index = nth_child4) {
                        $('.effects_skills_block button:nth-child(4)').removeClass('btn_active_star');
                    }

                    else {
                        $('.effects_skills_block button:nth-child(5)').removeClass('btn_active_star');
                    }
                }
            }

            else {
                if(next_child == nth_child4) {
                    if($('.effects_skills_block .btn_active_star:nth-child(4)').hasClass("btn_active_star")){
                        alert('Неее, брат, так дело не пойдет! Сначала нажми предыдущую звёздочку');
                    }
                    else {
                       $('.effects_skills_block button:nth-child(3)').removeClass('btn_active_star'); 
                    }
                }
                else {
                    if(next_child == nth_child3) {
                        if($('.effects_skills_block .btn_active_star:nth-child(3)').hasClass("btn_active_star")){
                            alert('Неее, брат, так дело не пойдет! Сначала нажми предыдущую звёздочку');
                        }
                        else {
                            $('.effects_skills_block button:nth-child(2)').removeClass('btn_active_star');
                        }
                    }
                    else {
                        if(next_child == nth_child2) {
                            if($('.effects_skills_block .btn_active_star:nth-child(2)').hasClass("btn_active_star")){
                                alert('Неее, брат, так дело не пойдет! Сначала нажми предыдущую звёздочку');
                            }
                            else {
                                $('.effects_skills_block button:nth-child(1)').removeClass('btn_active_star');
                            }
                        }
                        else {
                            $(this).removeClass('.effects_skills_block btn_active_star');
                        }
                    }
                }
            }
        }

        else {
            if(!$(this).hasClass("btn_active_star")) {
                if(previous_child == nth_child4) {
                    if($('.effects_skills_block button:nth-child(4)').hasClass("btn_active_star")){
                        $('.effects_skills_block button:nth-child(5)').addClass('btn_active_star');
                    }
                    else {
                        alert('Неее, брат, так дело не пойдет! Сначала нажми звёздочку перед этой');
                    }
                }

                else {
                    if(previous_child == nth_child3) {
                        if($('.effects_skills_block .btn_active_star:nth-child(3)').hasClass("btn_active_star")){
                            $('.effects_skills_block button:nth-child(4)').addClass('btn_active_star'); 
                        }
                        else {
                            alert('Неее, брат, так дело не пойдет! Сначала нажми звёздочку перед этой');
                        }
                    }
                    else {
                        if(previous_child == nth_child2) {
                            if($('.effects_skills_block .btn_active_star:nth-child(2)').hasClass("btn_active_star")){
                                $('.effects_skills_block button:nth-child(3)').addClass('btn_active_star');
                            }
                            else {
                                alert('Неее, брат, так дело не пойдет! Сначала нажми звёздочку перед этой');
                            }
                        }
                        else {
                            if(previous_child == nth_child1) {
                                if($('.effects_skills_block .btn_active_star:nth-child(1)').hasClass("btn_active_star")){
                                    $('.effects_skills_block button:nth-child(2)').addClass('btn_active_star');
                                }
                                else {
                                    alert('Неее, брат, так дело не пойдет! Сначала нажми звёздочку перед этой');
                                }
                            }
                            else {
                                if(previous_child == -1){
                                    $('.effects_skills_block button:nth-child(1)').addClass('btn_active_star');
                                }

                                else {
                                    alert('Неее, брат, так дело не пойдет! Сначала нажми звёздочку перед этой');
                                }
                            }
                        }
                    }
                }
            }
        }
    });
    $(document).on('click', '.figma_skills_block .btn_star', function(){
        let index = $(this).index();
        let next_child = index + 1;
        let previous_child = index - 1;
        let nth_child1 = $('.figma_skills_block button:nth-child(1)').index();
        let nth_child2 = $('.figma_skills_block button:nth-child(2)').index();
        let nth_child3 = $('.figma_skills_block button:nth-child(3)').index();
        let nth_child4 = $('.figma_skills_block button:nth-child(4)').index();
        let nth_child5 = $('.figma_skills_block button:nth-child(5)').index();
        // alert(next_child);
        if($(this).hasClass("btn_active_star")) {
            if(next_child == nth_child5) {
                if($('.figma_skills_block button:nth-child(5)').hasClass("btn_active_star")){
                    alert('Неее, брат, так дело не пойдет! Сначала нажми предыдущую звёздочку');
                }
                else {
                    if(index = nth_child4) {
                        $('.figma_skills_block button:nth-child(4)').removeClass('btn_active_star');
                    }

                    else {
                        $('.figma_skills_block button:nth-child(5)').removeClass('btn_active_star');
                    }
                }
            }

            else {
                if(next_child == nth_child4) {
                    if($('.figma_skills_block .btn_active_star:nth-child(4)').hasClass("btn_active_star")){
                        alert('Неее, брат, так дело не пойдет! Сначала нажми предыдущую звёздочку');
                    }
                    else {
                       $('.figma_skills_block button:nth-child(3)').removeClass('btn_active_star'); 
                    }
                }
                else {
                    if(next_child == nth_child3) {
                        if($('.figma_skills_block .btn_active_star:nth-child(3)').hasClass("btn_active_star")){
                            alert('Неее, брат, так дело не пойдет! Сначала нажми предыдущую звёздочку');
                        }
                        else {
                            $('.figma_skills_block button:nth-child(2)').removeClass('btn_active_star');
                        }
                    }
                    else {
                        if(next_child == nth_child2) {
                            if($('.figma_skills_block .btn_active_star:nth-child(2)').hasClass("btn_active_star")){
                                alert('Неее, брат, так дело не пойдет! Сначала нажми предыдущую звёздочку');
                            }
                            else {
                                $('.figma_skills_block button:nth-child(1)').removeClass('btn_active_star');
                            }
                        }
                        else {
                            $(this).removeClass('.figma_skills_block btn_active_star');
                        }
                    }
                }
            }
        }

        else {
            if(!$(this).hasClass("btn_active_star")) {
                if(previous_child == nth_child4) {
                    if($('.figma_skills_block button:nth-child(4)').hasClass("btn_active_star")){
                        $('.figma_skills_block button:nth-child(5)').addClass('btn_active_star');
                    }
                    else {
                        alert('Неее, брат, так дело не пойдет! Сначала нажми звёздочку перед этой');
                    }
                }

                else {
                    if(previous_child == nth_child3) {
                        if($('.figma_skills_block .btn_active_star:nth-child(3)').hasClass("btn_active_star")){
                            $('.figma_skills_block button:nth-child(4)').addClass('btn_active_star'); 
                        }
                        else {
                            alert('Неее, брат, так дело не пойдет! Сначала нажми звёздочку перед этой');
                        }
                    }
                    else {
                        if(previous_child == nth_child2) {
                            if($('.figma_skills_block .btn_active_star:nth-child(2)').hasClass("btn_active_star")){
                                $('.figma_skills_block button:nth-child(3)').addClass('btn_active_star');
                            }
                            else {
                                alert('Неее, брат, так дело не пойдет! Сначала нажми звёздочку перед этой');
                            }
                        }
                        else {
                            if(previous_child == nth_child1) {
                                if($('.figma_skills_block .btn_active_star:nth-child(1)').hasClass("btn_active_star")){
                                    $('.figma_skills_block button:nth-child(2)').addClass('btn_active_star');
                                }
                                else {
                                    alert('Неее, брат, так дело не пойдет! Сначала нажми звёздочку перед этой');
                                }
                            }
                            else {
                                if(previous_child == -1){
                                    $('.figma_skills_block button:nth-child(1)').addClass('btn_active_star');
                                }

                                else {
                                    alert('Неее, брат, так дело не пойдет! Сначала нажми звёздочку перед этой');
                                }
                            }
                        }
                    }
                }
            }
        }
    });
    // $(document).scroll(function() {
    //     if ($(this).scrollTop() > 100) {
    //         if (!$('.top_arrow_btn').hasClass('active_top_arrow_btn')) {
    //             $('.top_arrow_btn').toggleClass('active_top_arrow_btn').fadeIn('slow');
    //         }
    //     } 
    //     else { 
    //         $('.top_arrow_btn').stop(true, false).fadeOut('fast');
    //     }
    // });
    // $('.top_arrow_btn').on('click', function() {
    //     $('html, body').stop().animate({scrollTop : 0}, 300);
    // });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.top_arrow_btn').fadeIn();
        } else {
            $('.top_arrow_btn').fadeOut();
        }
    });
    $('.top_arrow_btn').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        $(active_menu_item).removeClass('active_menu_item');
        $('.home').addClass('active_menu_item');
        return false;
    });
});