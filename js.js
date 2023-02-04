$(document).ready(function(){

    $("#tel").mask("(00) 00000-0000", {});

    $("form").validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true, 
                email: true
            },
            tel:{
                required: true
            },
            sobrenome:{
                required: true
            },
        },
        messages:{
            name: "Este campo é obrigatório."
        },
        submitHandler: function(form){
            console.log(form)
        },
        inalidHandler: function(event, validad){
            let nincorrect = validad.numberOfInvalids();
            if (nincorrect){
                console.log(`${event} is incorrect due ${nincorrect}`)
            }         

        }
    })
    $("form").on("submit", function(e){
        e.preventDefault();
        $('form').trigger("reset");
    })
});

// mask https://igorescobar.github.io/jQuery-Mask-Plugin/
// validation https://jqueryvalidation.org/