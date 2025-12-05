function calcularlasagna() {
    const tiempo = document.getElementById("time");
    const time = tiempo.value;

    const capas = document.getElementById("layers");
    const layer = capas.value;

    if (horno < 0 || layer < 1) {
        alert("Valores invalidos")
    }
    else{
        const horno = 40 - time

        if (horno < 0) {
            horno = 0
        }

        const prep = 2 * layer

        const total = horno + prep

        console.log("holaaa")
        alert("Tiempo restante en el horno: " + horno)
        alert("Tiempo total de preparación: " + prep)
        alert("Tiempo total de trabajo: " + total)
    }
}