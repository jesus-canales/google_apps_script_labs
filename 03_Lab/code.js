function doGet() {

    return HtmlService.createTemplateFromFile("formulario").evaluate();

}

function doPost(e) {

    var nombre = e.parameter.nombre;
    var apellidos = e.parameter.apellidos;
    var carrera = e.parameter.carrera;
    var consulta = e.parameter.consulta;

    var asunto = "Nueva consulta de " + nombre + " " + apellidos;
    var cuerpo = "Nombre: " + nombre + " " + apellidos + "\n";
    cuerpo += "Carrera: " + carrera + "\n\n";
    cuerpo += "Consulta: \n" + consulta;

    if (carrera === "Gestión Agrícola") {
        MailApp.sendEmail("jesuscanales@outlook.com", asunto, cuerpo);
    } else if (carrera === "Análisis de Sistemas Empresariales") {
        MailApp.sendEmail("jesuscanales@smmah.edu.pe", asunto, cuerpo);
    }

    return HtmlService.createHtmlOutput("<p>Formulario enviado correctamente.</p>")

}