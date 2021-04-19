function get_data() {
    var email = $("#one").val()
    var senha = $("#two").val()


    $.ajax({
        method: "POST",
        url: "http://localhost:3000/autenticacao",
        data: { "email": email, "senha": senha }


    }).done(function(data) {
        console.log(data)
    })

    

    //window.alert(`User: ${email.value} \nPassword: ${senha.value}`)
}

