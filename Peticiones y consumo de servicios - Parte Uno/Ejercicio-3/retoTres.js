/* function getInfo() {
    $.getJSON('https://api.github.com/users/gootyfer', function(data) {
        $(".json pre").html(JSON.stringify(data, null, 4)); // stringify() convierte un objeto o valor de JavaScript en una cadena de texto
        const img = document.getElementById('avatar_url');
        img.src = data.avatar_url;
        const name = document.getElementById('name');
        name.innerHTML = data.name;
        const repo = document.getElementById('repo');
        repo.innerHTML = data.public_repos;
    });
} */

function getInfoUsu() {
    $.getJSON('https://api.github.com/users/', function(data1) {
        $(".json pre").html(JSON.stringify(data1, null, 4)); // stringify() convierte un objeto o valor de JavaScript en una cadena de texto
        var input = document.getElementById('input').value;
        var entrada = data1.login;
        if (input === entrada) {
            const login = document.getElementById('login');
            login.innerHTML = data.name;
            const img = document.getElementById('avatar_url');
            img.src = data.avatar_url;
            /*  const img = document.getElementById('avatar_url');
             img.src = data.avatar_url;
             const name = document.getElementById('name');
             name.innerHTML = data.name;
             const repo = document.getElementById('repo');
             repo.innerHTML = data.public_repos; */
        }


    });
}