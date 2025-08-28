

function simulador() {



    //Variables que capturan los valores de los campos del formulario

    let nombres = document.getElementById('nombres').value;
    let telefono = document.getElementById('telefono').value;
    let email = document.getElementById('email').value;
    let monto = document.getElementById('monto').value;
    let tiempo = document.getElementById('tiempo').value;

    //Constantes que capturan estiquetas span en las que se muesran los valores, por eso la s de show, mostrar

    const sTiempo = document.getElementById('sTiempo');
    const sInteres = document.getElementById('sInteres');
    const sTotal = document.getElementById('sTotal');
    const sGanancia = document.getElementById('sGanancia');
    const sNombres = document.getElementById('sNombres');
    const sEmail = document.getElementById('sEmail');

    //Variables para realizar los calculos
    let ganancia = 0;
    let total = 0;

    //Con esto ya tendriamos todo el DOM es decir traer todo el html que necesitamos para operar

    if (nombres != '') {
        if (email != '') {
            if (monto != '') {
                //Esta parte de la funcion es la que se encarga de quitar la clase 'disabled' de una clase y agregarla en la otra, pa mostar el estro contenedor y ocultar la imagen
                const contPre = document.getElementById('pre-simulation');
                const contPost = document.getElementById('post-simulation');

                contPost.classList.remove('disabled');

                contPre.classList.add('disabled');

                switch (tiempo) {

                    //En este calculo realizaremos el calculo si el tiempo corresponde a un ano
                    case '1':
                        ganancia = (monto * 0.008) * 12;
                        total = (parseFloat(monto) + parseFloat(ganancia));

                        sInteres.textContent = '0,8%';
                        sTiempo.textContent = '12 MESES';


                        break;

                    case '2':
                        ganancia = (monto * 0.013) * 24;
                        total = (parseFloat(monto) + parseFloat(ganancia));

                        sInteres.textContent = '1,3%';
                        sTiempo.textContent = '24 MESES';

                        break;

                    case '3':
                        ganancia = (monto * 0.017) * 36;
                        total = (parseFloat(monto) + parseFloat(ganancia));

                        sInteres.textContent = '1,7%';
                        sTiempo.textContent = '36 MESES';


                        break;

                    default:
                        alert('Seleccione el tiempo de inversion')
                        break;
                }
            }
            else {
                alert('Escriba el monto a invertir en el campo');
            }
        }
        else {
            alert('Escriba su Email por favor');
        }
    }
    else {
        alert('Llene todos los campos Por favor');
    }

    sTotal.textContent = total.toFixed(2);
    sGanancia.textContent = ganancia.toFixed(2);
    sNombres.textContent = nombres;
    sEmail.textContent = email;










};

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('calcular').addEventListener('click', simulador);
});