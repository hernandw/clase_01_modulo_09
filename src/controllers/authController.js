import path from "path";

const __dirname = path.resolve();

const appController = {
  home: (req, res) => {
    try {
      res.send("Hello desde Controller");
    } catch (error) {
      console.log(error);
      res.status(500).send("Error al cargar la página principal");
    }
  },
  carga: (req, res) => {
    res.sendFile(path.join(__dirname, "src/views/formulario.html"));
    try {
      res.resenFile(path.join(__dirname));
    } catch (error) {
      console.error(error);
    }
  },
};

export default appController;
