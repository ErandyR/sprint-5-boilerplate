var api = {
    url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics'
};

var cargarPagina = function () {
    
    $(document).on("click", ".respuestas", mostrarRespuestas);
    $("#add-form").submit(agregarRespuesta);
};

var plantillaTemaBuscado =
    '<p class="contenido">__contenido__</p>' +
    '<p class="autorParrafo">autor</p>';

var topicId = getParameterByName('topic_id');

//Solo por propositos de debug
if(topicId){
  alert("El topic ID es:"+topicId);
}

var plantillaAgregarRespuesta = 
                '<p>Por: __autor__</p>' +
                '<p class="espacioEntreRespuestas">Respuesta: __contenidoRespuesta__</p>';

var $contenedorAutorRespuesta = $(".contenedorAutorRespuesta");

var mostrarRespuestas = function (e) {
    e.preventDefault();
    $(".contenedorRespuestas").css("display", "block");
    
}

var agregarRespuesta = function () {
    var contenidoRespuesta = $("#contenido-respuesta").val();
    var autor = $("#autor-respuesta").val();
    $contenedorAutorRespuesta.append(
    plantillaAgregarRespuesta.replace("__autor__", autor)
    .replace("__contenidoRespuesta__", contenidoRespuesta)
    );
};

$(document).ready(cargarPagina);