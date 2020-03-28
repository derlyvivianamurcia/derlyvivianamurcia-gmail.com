function getDog() {
    $.getJSON('https://dog.ceo/api/breed/chihuahua/images/random', function(data) {
        $(".json pre").html(JSON.stringify(data, null, 4)); // stringify() convierte un objeto o valor de JavaScript en una cadena de texto
        const img = document.getElementById('My_image');
        img.src = data.message;
    });
}