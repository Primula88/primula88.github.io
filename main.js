/* 1 -- GLOBAL CONCERNS*/
// GLOBAL VARIABLES
let $squares = $('.square');

const assignIDs = () => {
    let $idsArr = [];
    let z = $squares.length;
    for(let i=0; i<z; i++) {
        $idsArr.push($squares.eq(i).attr('id'));
    }
    console.log($idsArr);
}

/* 1-A -- UP BUTTON */
// Function for Up-Button
const upBtn = document.getElementById('upBtn');

const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For real browsers
}

const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        upBtn.style.display = "block";
    } else {
        upBtn.style.display = "none";
    }
}

window.onscroll = () => { scrollFunction() };
/* END 1-A -- UP BUTTON */

/* 2-B -- HOVERING ON SQUARES */
const hover = () => {

    $squares.each( function(){
        let $id = $(this).attr('id');
        let id = $(`#${$id}-caption-content`);
        
        $(this).mouseenter(() => {
            if ( $('#bio.square').hasClass('clicked')) {
                return;
            } else if (!$(this).hasClass('clicked')) {
                id.addClass('active');
                $(this).css({"z-index": "11"});
                $('#contact-caption-content p').css('display', 'none');
            }
        });
        if (id != '#contact-caption-content') {
            console.log('TEST OF SOME KIND')
            $(this).mouseleave(() => {
                id.removeClass('active');
                $(this).css({"z-index": ""});
                
            }) 
        } else {
            return;
        }
    })  
}
/* END 2-B -- HOVERING ON SQUARES */

/* 2-E -- BIO SQUARE ACTION */
const bio = () => {
    let $bio = $('#bio');
    if($bio.hasClass('clicked')) {
        /* IF CLICKED ALREADY */
        $bio.removeClass('clicked');
        $bio.css({  "border-radius": "",
                    "background-size": "",
                    "top": "",
                    "width": "",
                    "height": "",
                    "left": "",
                    "z-index": "",
                    "transition": "350ms filter ease-in-out, 350ms transform ease-in-out, 350ms border-radius ease-in-out, 750ms top ease-out, 750ms left ease-out, 500ms width ease-out, 750ms height ease-out, 750ms background-size ease-in-out"
                });
    const contentBio = () => {
        $('.content.bio').removeClass('clicked');
        $('.content.bio').css({ "display": "none"});
    }
    setTimeout(contentBio, 0);

    } else {
                /* IF NOT CLICKED ALREADY */
            $bio.css({  "border-radius": "15px",
                        "background-size": "26vw",
                        "width": "65vw",
                        "height": "25vw",
                        "top": "14vh",
                        "left": "15vw",
                        "z-index": "1000",
                        "transition": "350ms filter ease-in-out, 350ms transform ease-in-out, 350ms border-radius ease-in-out, 750ms top ease-out, 750ms left ease-out, 500ms width ease-out, 750ms height ease-out, 350ms background-size ease-in-out"
                        })
            $bio.addClass('clicked');
            $('#contact').css({ "z-index": "1" });
            const contentBio = () => {
                if ($bio.hasClass('clicked')) { // Checks if the coast is clear
                    $('.content.bio').addClass('clicked');
                    $('.content.bio').css({ "display": "flex"});
                }
            }
            setTimeout(contentBio, 550);
        }
    }
/* END 2-E -- BIO CIRCLE ACTION */

/* FUNCTION CALLS */
assignIDs();
hover();
/* END FUNCTION CALLS */