// Seleccionar todos los elementos del DOM
var elements = document.getElementsByTagName('*');

// Iterar sobre cada elemento
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    // Iterar sobre cada nodo hijo del elemento
    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        // Verificar si el nodo es un texto
        if (node.nodeType === 3) {
            // Reemplazar el texto 'leche' por 'leche vegana'
            var text = node.nodeValue;
            var replacedText = text.replace(/hombre/gi, 'persona');
            var replacedText = text.replace(/mujer/gi, 'persona');
            var replacedText = text.replace(/padre/gi, 'progenitor');
            var replacedText = text.replace(/madre/gi, 'progenitor');
            var replacedText = text.replace(/esposo/gi, 'cónyugue');
            var replacedText = text.replace(/esposa/gi, 'cónyugue');
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
