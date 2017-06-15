//url del api que voy a usar
var api = {
    url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics'
};

//funcion para cargar pagina
var cargarPagina = function () {
    cargarTemas();
    $("#add-form").submit(agregarTema);
    $("#buscarTema").submit(filtrarTemas);
};

//variable que guarda mi lista a traves del id
var $listaDeTemas = $("#tasks-list");

//plantilla de nuevo tema o tema a mostrar
var plantillaTemas =
    '<tr>' +
    '<td><a href="verTopic.html">__contenido__</a></td>' +
    '<td>__autor__</td>' +
    '<td>' +
    '<a href="verTopic.html">respuestas: __numeroDeRespuestas__</a>' +
    '</td>' +
    '</tr>';

//funcion ajax
var cargarTemas = function () {
    $.getJSON(api.url, function (temas) {
        console.log(temas);
        temas.forEach(crearTema);

    });
};

//funcion para crear un nuevo tema
var crearTema = function (tema) {

    var contenido = tema.content;
    var autor = tema.author_name;
    var respuestas = tema.responses_count;

    console.log(contenido + " " + autor + " " + respuestas);

    $listaDeTemas.append(
        plantillaTemas.replace("__contenido__", contenido)
        .replace("__autor__", autor)
        .replace("__numeroDeRespuestas__", respuestas)
    );

};

//funcion que agrega el nuevo tema
var agregarTema = function (e) {
    e.preventDefault();
    var contenido = $("#contenido-tema").val();
    var autor = $("#autor-tema").val();
    $.post(api.url, {
        author_name: autor,
        content: contenido,
    }, function (tema) {
        crearTema(tema);
        $("#mymodal").modal("hide");
        
    });

};

//funcion para filtrar temas
var filtrarTemas = function (e) {
	e.preventDefault();
	var criterioBusqueda = $("#busqueda").val().toLowerCase();
    $.getJSON(api.url, function (temas) {
        var temasFiltrados = temas.filter(function (tema) {
		  return tema.content.toLowerCase().indexOf(criterioBusqueda) >= 0;
        });
        console.log(temasFiltrados);
        mostrarTemas(temasFiltrados);
	});
	
};

//funcion que muestra tema filtrado
var mostrarTemas = function (temas) {
    var plantillaTemaBuscado = "";
	temas.forEach(function (tema) {
        console.log(tema);
		plantillaTemaBuscado += plantillaTemas.replace("__contenido__", tema.content)
			.replace("__autor__", tema.author_name)
            .replace("__numeroDeRespuestas__", tema.responses_count);
	});
    console.log(plantillaTemaBuscado);
	$("#tasks-list").html(plantillaTemaBuscado);
    
};


$(document).ready(cargarPagina);
