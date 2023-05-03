$(document).ready(function(){
    $(document).on("submit",".Registar",function(e){
        e.preventDefault();
        $.ajax({
            url: 'PHP/insert.php',
            method: 'POST',
            data: new FormData(this), 
            contentType: false,
            cache: false,
            processData: false, 
        }).done(function(data){
            $(".response").html(data)
            // alert(data)
        })
    })
})


