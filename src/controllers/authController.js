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
    try {
      res.sendFile(path.join(__dirname, "src/views/formulario.html"));
    } catch (error) {
      console.error(error);
    }
  },
  upload: (req, res) => {
    try {
      //verificamos que el formulario no venga vacio
      if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send("No hay archivos para subir");
      }

      const { foto } = req.files;
      const uploadPath = path.join(__dirname, "src/public/uploads", foto.name);

      foto.mv(uploadPath, (err) => {
        if (err) {
          return res.status(500).send("Error Interno", err);
        }
        res.send("Archivo subido correctamente");
      });
    } catch (error) {
      console.error(error);
    }
  },
};

export default appController;
