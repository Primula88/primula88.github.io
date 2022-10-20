/*GLOBAL CONCERNS*/
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

/*UP BUTTON */
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
/*UP BUTTON */

/* HOVERING ON SQUARES */
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
            }
        });
        if (id != '#blabla-caption-content') {
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
/* HOVERING ON SQUARES */

/* BIO SQUARE ACTION */
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
                        "z-index": "1002",
                        "transition": "350ms filter ease-in-out, 350ms transform ease-in-out, 350ms border-radius ease-in-out, 750ms top ease-out, 750ms left ease-out, 500ms width ease-out, 750ms height ease-out, 350ms background-size ease-in-out"
                        })
            $bio.addClass('clicked');
            const contentBio = () => {
                if ($bio.hasClass('clicked')) { // Checks if the coast is clear
                    $('.content.bio').addClass('clicked');
                    $('.content.bio').css({ "display": "flex"});
                }
            }
            setTimeout(contentBio, 550);
        }
    }
/*BIO SQUARE ACTION */


/* GITHUB SQUARE ACTION */
const github = () => {
    let $github = $('#github');
    if($github.hasClass('clicked')) {
        /* IF CLICKED ALREADY */
        $github.removeClass('clicked');
        $github.css({  "border-radius": "",
                    "background-size": "",
                    "top": "",
                    "width": "",
                    "height": "",
                    "left": "",
                    "z-index": "",
                    "transition": "350ms filter ease-in-out, 350ms transform ease-in-out, 350ms border-radius ease-in-out, 750ms top ease-out, 750ms left ease-out, 500ms width ease-out, 750ms height ease-out, 750ms background-size ease-in-out"
                });
    const contentGithub = () => {
        $('.content.github').removeClass('clicked');
        $('.content.github').css({ "display": "none"});
    }
    setTimeout(contentGithub, 0);

    } else {
                /* IF NOT CLICKED ALREADY */
            $github.css({  "border-radius": "15px",
                        "background-size": "26vw",
                        "width": "65vw",
                        "height": "25vw",
                        "top": "14vh",
                        "left": "15vw",
                        "z-index": "1002",
                        "transition": "350ms filter ease-in-out, 350ms transform ease-in-out, 350ms border-radius ease-in-out, 750ms top ease-out, 750ms left ease-out, 500ms width ease-out, 750ms height ease-out, 350ms background-size ease-in-out"
                        })
            $github.addClass('clicked');
            const contentGithub = () => {
                if ($github.hasClass('clicked')) { // Checks if the coast is clear
                    $('.content.github').addClass('clicked');
                    $('.content.github').css({ "display": "flex"});
                }
            }
            setTimeout(contentGithub, 550);
        }
    }
/*GITHUB SQUARE ACTION */

/* CONTACT SQUARE ACTION */
const contact = () => {
    let $contact = $('#contact');
    if($contact.hasClass('clicked')) {
        /* IF CLICKED ALREADY */
        $contact.removeClass('clicked');
        $contact.css({  "border-radius": "",
                    "background-size": "",
                    "top": "",
                    "width": "",
                    "height": "",
                    "left": "",
                    "z-index": "",
                    "transition": "350ms filter ease-in-out, 350ms transform ease-in-out, 350ms border-radius ease-in-out, 750ms top ease-out, 750ms left ease-out, 500ms width ease-out, 750ms height ease-out, 750ms background-size ease-in-out"
                });
    const contentContact = () => {
        $('.content.contact').removeClass('clicked');
        $('.content.contact').css({ "display": "none"});
    }
    setTimeout(contentContact, 0);

    } else {
                /* IF NOT CLICKED ALREADY */
            $contact.css({  "border-radius": "15px",
                        "background-size": "15vw",
                        "width": "40vw",
                        "height": "25vw",
                        "top": "14vh",
                        "left": "15vw",
                        "z-index": "1002",
                        "transition": "350ms filter ease-in-out, 350ms transform ease-in-out, 350ms border-radius ease-in-out, 750ms top ease-out, 750ms left ease-out, 500ms width ease-out, 750ms height ease-out, 350ms background-size ease-in-out"
                        })
            $contact.addClass('clicked');
            const contentContact = () => {
                if ($contact.hasClass('clicked')) { // Checks if the coast is clear
                    $('.content.contact').addClass('clicked');
                    $('.content.contact').css({ "display": "flex"});
                }
            }
            setTimeout(contentContact, 550);
        }
    }
/*CONTACT SQUARE ACTION */

/* BOBA HEART */ 

const boba = () => {
    let $boba = $('#boba');
    if($boba.hasClass('clicked')) {
        /* IF CLICKED ALREADY */
        $boba.removeClass('clicked');
        $boba.css({  "border-radius": "",
                    "background-size": "",
                    "top": "",
                    "width": "",
                    "height": "",
                    "left": "",
                    "z-index": "",
                    "transition": "350ms filter ease-in-out, 350ms transform ease-in-out, 350ms border-radius ease-in-out, 750ms top ease-out, 750ms left ease-out, 500ms width ease-out, 750ms height ease-out, 750ms background-size ease-in-out"
                });
    const contentBoba = () => {
        $('.content.boba').removeClass('clicked');
        $('.content.boba').css({ "display": "none"});
    }
    setTimeout(contentBoba, 0);

    } else {
                /* IF NOT CLICKED ALREADY */
            $boba.css({  "border-radius": "15px",
                        "background-size": "15vw",
                        "width": "90vw",
                        "height": "30vw",
                        "top": "-40vh",
                        "left": "30vw",
                        "z-index": "1000",
                        "transition": "350ms filter ease-in-out, 350ms transform ease-in-out, 350ms border-radius ease-in-out, 750ms top ease-out, 750ms left ease-out, 500ms width ease-out, 750ms height ease-out, 350ms background-size ease-in-out"
                        })
            $boba.addClass('clicked');
            const contentBoba = () => {
                if ($boba.hasClass('clicked')) { // Checks if the coast is clear
                    $('.content.boba').addClass('clicked');
                    $('.content.boba').css({ "display": "flex"});
                }
            }
            setTimeout(contentBoba, 550);
        }
    }

    /* END BOBA HEART */

/* FUNCTION CALLS */
assignIDs();
hover();
/* END FUNCTION CALLS */