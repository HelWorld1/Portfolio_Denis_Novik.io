let active_menu_item = 'nav a';

$(document).ready(function(){
    $('.menu_activation_btn').click(function(){
        $('ul').toggleClass('hide_menu');
        $('.menu_activation_btn').toggleClass('cancel');
        $('.change_lang').toggleClass('hide_change_lang');
        $('.nav_menu').toggleClass('hide_menu_2');
        $('.nav_menu').toggleClass('show_menu');
        $('.Home').toggleClass('noactive_block');
    })

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
                    alert('Братан, если хочешь убрать эту звёздочку, нажми звёздочки после неё.');
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
                        alert('Братан, если хочешь убрать эту звёздочку, нажми звёздочки после неё.');
                    }
                    else {
                       $('.photoshop_skills_block button:nth-child(3)').removeClass('btn_active_star'); 
                    }
                }
                else {
                    if(next_child == nth_child3) {
                        if($('.photoshop_skills_block .btn_active_star:nth-child(3)').hasClass("btn_active_star")){
                            alert('Братан, если хочешь убрать эту звёздочку, нажми звёздочки после неё.');
                        }
                        else {
                            $('.photoshop_skills_block button:nth-child(2)').removeClass('btn_active_star');
                        }
                    }
                    else {
                        if(next_child == nth_child2) {
                            if($('.photoshop_skills_block .btn_active_star:nth-child(2)').hasClass("btn_active_star")){
                                alert('Братан, если хочешь убрать эту звёздочку, нажми звёздочки после неё.');
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
                        alert('Братан, если хочешь поставить эту звёздочку, нажми звёздочки перед ней.');
                    }
                }

                else {
                    if(previous_child == nth_child3) {
                        if($('.photoshop_skills_block .btn_active_star:nth-child(3)').hasClass("btn_active_star")){
                            $('.photoshop_skills_block button:nth-child(4)').addClass('btn_active_star'); 
                        }
                        else {
                            alert('Братан, если хочешь поставить эту звёздочку, нажми звёздочки перед ней.');
                        }
                    }
                    else {
                        if(previous_child == nth_child2) {
                            if($('.photoshop_skills_block .btn_active_star:nth-child(2)').hasClass("btn_active_star")){
                                $('.photoshop_skills_block button:nth-child(3)').addClass('btn_active_star');
                            }
                            else {
                                alert('Братан, если хочешь поставить эту звёздочку, нажми звёздочки перед ней.');
                            }
                        }
                        else {
                            if(previous_child == nth_child1) {
                                if($('.photoshop_skills_block .btn_active_star:nth-child(1)').hasClass("btn_active_star")){
                                    $('.photoshop_skills_block button:nth-child(2)').addClass('btn_active_star');
                                }
                                else {
                                    alert('Братан, если хочешь поставить эту звёздочку, нажми звёздочки перед ней.');
                                }
                            }
                            else {
                                if(previous_child == -1){
                                    $('.photoshop_skills_block button:nth-child(1)').addClass('btn_active_star');
                                }

                                else {
                                    alert('Братан, если хочешь поставить эту звёздочку, нажми звёздочки перед ней.');
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
                    alert('Пошёл нафиг');
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
                        alert('Пошёл нафиг 1');
                    }
                    else {
                       $('.illustrator_skills_block button:nth-child(3)').removeClass('btn_active_star'); 
                    }
                }
                else {
                    if(next_child == nth_child3) {
                        if($('.illustrator_skills_block .btn_active_star:nth-child(3)').hasClass("btn_active_star")){
                            alert('Пошёл нафиг 1');
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
                        alert('Пошёл нафиг 1');
                    }
                }

                else {
                    if(previous_child == nth_child3) {
                        if($('.illustrator_skills_block .btn_active_star:nth-child(3)').hasClass("btn_active_star")){
                            $('.illustrator_skills_block button:nth-child(4)').addClass('btn_active_star'); 
                        }
                        else {
                            alert('Пошёл нафиг 2');
                        }
                    }
                    else {
                        if(previous_child == nth_child2) {
                            if($('.illustrator_skills_block .btn_active_star:nth-child(2)').hasClass("btn_active_star")){
                                $('.illustrator_skills_block button:nth-child(3)').addClass('btn_active_star');
                            }
                            else {
                                alert('Пошёл нафиг 3');
                            }
                        }
                        else {
                            if(previous_child == nth_child1) {
                                if($('.illustrator_skills_block .btn_active_star:nth-child(1)').hasClass("btn_active_star")){
                                    $('..illustrator_skills_block button:nth-child(2)').addClass('btn_active_star');
                                }
                                else {
                                    alert('Пошёл нафиг 4');
                                }
                            }
                            else {
                                if(previous_child == -1){
                                    $('.illustrator_skills_block button:nth-child(1)').addClass('btn_active_star');
                                }

                                else {
                                    alert('Пошёл нафиг 5');
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
                    alert('Пошёл нафиг');
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
                        alert('Пошёл нафиг 1');
                    }
                    else {
                       $('.effects_skills_block button:nth-child(3)').removeClass('btn_active_star'); 
                    }
                }
                else {
                    if(next_child == nth_child3) {
                        if($('.effects_skills_block .btn_active_star:nth-child(3)').hasClass("btn_active_star")){
                            alert('Пошёл нафиг 1');
                        }
                        else {
                            $('.effects_skills_block button:nth-child(2)').removeClass('btn_active_star');
                        }
                    }
                    else {
                        if(next_child == nth_child2) {
                            if($('.effects_skills_block .btn_active_star:nth-child(2)').hasClass("btn_active_star")){
                                alert('Пошёл нафиг 1');
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
                        alert('Пошёл нафиг 1');
                    }
                }

                else {
                    if(previous_child == nth_child3) {
                        if($('.effects_skills_block .btn_active_star:nth-child(3)').hasClass("btn_active_star")){
                            $('.effects_skills_block button:nth-child(4)').addClass('btn_active_star'); 
                        }
                        else {
                            alert('Пошёл нафиг 2');
                        }
                    }
                    else {
                        if(previous_child == nth_child2) {
                            if($('.effects_skills_block .btn_active_star:nth-child(2)').hasClass("btn_active_star")){
                                $('.effects_skills_block button:nth-child(3)').addClass('btn_active_star');
                            }
                            else {
                                alert('Пошёл нафиг 3');
                            }
                        }
                        else {
                            if(previous_child == nth_child1) {
                                if($('.effects_skills_block .btn_active_star:nth-child(1)').hasClass("btn_active_star")){
                                    $('.effects_skills_block button:nth-child(2)').addClass('btn_active_star');
                                }
                                else {
                                    alert('Пошёл нафиг 4');
                                }
                            }
                            else {
                                if(previous_child == -1){
                                    $('.effects_skills_block button:nth-child(1)').addClass('btn_active_star');
                                }

                                else {
                                    alert('Пошёл нафиг 5');
                                }
                            }
                        }
                    }
                }
            }
        }
    });
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
                    alert('Пошёл нафиг');
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
                        alert('Пошёл нафиг 1');
                    }
                    else {
                       $('.photoshop_skills_block button:nth-child(3)').removeClass('btn_active_star'); 
                    }
                }
                else {
                    if(next_child == nth_child3) {
                        if($('.photoshop_skills_block .btn_active_star:nth-child(3)').hasClass("btn_active_star")){
                            alert('Пошёл нафиг 1');
                        }
                        else {
                            $('.photoshop_skills_block button:nth-child(2)').removeClass('btn_active_star');
                        }
                    }
                    else {
                        if(next_child == nth_child2) {
                            if($('.photoshop_skills_block .btn_active_star:nth-child(2)').hasClass("btn_active_star")){
                                alert('Пошёл нафиг 1');
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
                        alert('Пошёл нафиг 1');
                    }
                }

                else {
                    if(previous_child == nth_child3) {
                        if($('.photoshop_skills_block .btn_active_star:nth-child(3)').hasClass("btn_active_star")){
                            $('.photoshop_skills_block button:nth-child(4)').addClass('btn_active_star'); 
                        }
                        else {
                            alert('Пошёл нафиг 2');
                        }
                    }
                    else {
                        if(previous_child == nth_child2) {
                            if($('.photoshop_skills_block .btn_active_star:nth-child(2)').hasClass("btn_active_star")){
                                $('.photoshop_skills_block button:nth-child(3)').addClass('btn_active_star');
                            }
                            else {
                                alert('Пошёл нафиг 3');
                            }
                        }
                        else {
                            if(previous_child == nth_child1) {
                                if($('.photoshop_skills_block .btn_active_star:nth-child(1)').hasClass("btn_active_star")){
                                    $('.photoshop_skills_block button:nth-child(2)').addClass('btn_active_star');
                                }
                                else {
                                    alert('Пошёл нафиг 4');
                                }
                            }
                            else {
                                if(previous_child == -1){
                                    $('.photoshop_skills_block button:nth-child(1)').addClass('btn_active_star');
                                }

                                else {
                                    alert('Пошёл нафиг 5');
                                }
                            }
                        }
                    }
                }
            }
        }
    });
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
                    alert('Пошёл нафиг');
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
                        alert('Пошёл нафиг 1');
                    }
                    else {
                       $('.photoshop_skills_block button:nth-child(3)').removeClass('btn_active_star'); 
                    }
                }
                else {
                    if(next_child == nth_child3) {
                        if($('.photoshop_skills_block .btn_active_star:nth-child(3)').hasClass("btn_active_star")){
                            alert('Пошёл нафиг 1');
                        }
                        else {
                            $('.photoshop_skills_block button:nth-child(2)').removeClass('btn_active_star');
                        }
                    }
                    else {
                        if(next_child == nth_child2) {
                            if($('.photoshop_skills_block .btn_active_star:nth-child(2)').hasClass("btn_active_star")){
                                alert('Пошёл нафиг 1');
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
                        alert('Пошёл нафиг 1');
                    }
                }

                else {
                    if(previous_child == nth_child3) {
                        if($('.photoshop_skills_block .btn_active_star:nth-child(3)').hasClass("btn_active_star")){
                            $('.photoshop_skills_block button:nth-child(4)').addClass('btn_active_star'); 
                        }
                        else {
                            alert('Пошёл нафиг 2');
                        }
                    }
                    else {
                        if(previous_child == nth_child2) {
                            if($('.photoshop_skills_block .btn_active_star:nth-child(2)').hasClass("btn_active_star")){
                                $('.photoshop_skills_block button:nth-child(3)').addClass('btn_active_star');
                            }
                            else {
                                alert('Пошёл нафиг 3');
                            }
                        }
                        else {
                            if(previous_child == nth_child1) {
                                if($('.photoshop_skills_block .btn_active_star:nth-child(1)').hasClass("btn_active_star")){
                                    $('.photoshop_skills_block button:nth-child(2)').addClass('btn_active_star');
                                }
                                else {
                                    alert('Пошёл нафиг 4');
                                }
                            }
                            else {
                                if(previous_child == -1){
                                    $('.photoshop_skills_block button:nth-child(1)').addClass('btn_active_star');
                                }

                                else {
                                    alert('Пошёл нафиг 5');
                                }
                            }
                        }
                    }
                }
            }
        }
    });
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
                    alert('Пошёл нафиг');
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
                        alert('Пошёл нафиг 1');
                    }
                    else {
                       $('.photoshop_skills_block button:nth-child(3)').removeClass('btn_active_star'); 
                    }
                }
                else {
                    if(next_child == nth_child3) {
                        if($('.photoshop_skills_block .btn_active_star:nth-child(3)').hasClass("btn_active_star")){
                            alert('Пошёл нафиг 1');
                        }
                        else {
                            $('.photoshop_skills_block button:nth-child(2)').removeClass('btn_active_star');
                        }
                    }
                    else {
                        if(next_child == nth_child2) {
                            if($('.photoshop_skills_block .btn_active_star:nth-child(2)').hasClass("btn_active_star")){
                                alert('Пошёл нафиг 1');
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
                        alert('Пошёл нафиг 1');
                    }
                }

                else {
                    if(previous_child == nth_child3) {
                        if($('.photoshop_skills_block .btn_active_star:nth-child(3)').hasClass("btn_active_star")){
                            $('.photoshop_skills_block button:nth-child(4)').addClass('btn_active_star'); 
                        }
                        else {
                            alert('Пошёл нафиг 2');
                        }
                    }
                    else {
                        if(previous_child == nth_child2) {
                            if($('.photoshop_skills_block .btn_active_star:nth-child(2)').hasClass("btn_active_star")){
                                $('.photoshop_skills_block button:nth-child(3)').addClass('btn_active_star');
                            }
                            else {
                                alert('Пошёл нафиг 3');
                            }
                        }
                        else {
                            if(previous_child == nth_child1) {
                                if($('.photoshop_skills_block .btn_active_star:nth-child(1)').hasClass("btn_active_star")){
                                    $('.photoshop_skills_block button:nth-child(2)').addClass('btn_active_star');
                                }
                                else {
                                    alert('Пошёл нафиг 4');
                                }
                            }
                            else {
                                if(previous_child == -1){
                                    $('.photoshop_skills_block button:nth-child(1)').addClass('btn_active_star');
                                }

                                else {
                                    alert('Пошёл нафиг 5');
                                }
                            }
                        }
                    }
                }
            }
        }
    });
});

$(window).on('scroll', function(){
    if ($(this).scrollTop() > 300){
        if($())
    }
})

$('#upbutton').on('click', function() {
    $('html, body').stop().animate({scrollTop : 0}, 300);
});