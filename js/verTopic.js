var api = {
    url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics'
};

var cargarPagina = function () {
    $(document).on("click", ".respuestas", mostrarRespuestas);
};

var mostrarRespuestas = function (e) {
    e.preventDefault();
    $(".contenedorRespuestas").css("display", "block");
}

var topicId = getParameterByName('topic_id');

//Solo por propositos de debug
if(topicId){
  alert("El topic ID es:"+topicId);
}

$(document).ready(cargarPagina);