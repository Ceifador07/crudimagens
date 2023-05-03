$(document).ready(function(){

    $(document).on("submit",".cadastrar", function(e){
        e.preventDefault();
         $.ajax({
            url:"PHP/cadastrar.php",
            method:"POST",
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false, 
         }).done(function(data){
            alert(data)
         })
    })
})