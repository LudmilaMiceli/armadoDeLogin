/* req.session.colorSeleccionado = (req.body.inputColor); */


module.exports = {
    index: (req, res) => {

        return res.render('index', {
            message: ''
        })
    },

    respuesta: (req, res) => {
        const nombreUsuario = req.body.inputName;
        const colorSeleccionado = req.body.inputColor;
        const emailUsuario = req.body.inputEmail;
        const edadUsuario = req.body.inputEdad;

        const message = ("Hola " + nombreUsuario + ", " + "elegiste el color " + colorSeleccionado + ". " + "Tu email es: " + emailUsuario + " y tu edad es: " + edadUsuario);

        return res.render('index', {
            message,
        })
    }
}
