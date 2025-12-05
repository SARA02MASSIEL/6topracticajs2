function calcularlasagna() {
    const tiempo = document.getElementById("time");
    const time = tiempo.value;

    const capas = document.getElementById("layers");
    const layer = capas.value;

    const horno = 40 - tiempo

    if (horno < 0) {
        horno = 0
    }

    const prep = 2 * layer

    const total = horno + prep

    console.log(name + age)
    alert("Tiempo restante en el horno: " + horno)
    alert("Tiempo total de preparación: " + prep)
    alert("Tiempo total de trabajo: " + total)
}