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
      res.sendFile(path.join(__dirname, "src/views/formularioMultiple.html"));
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

      const { cancion } = req.files;
      const { nombre, artista, album} = req.body

      //validar que no vengan vacios
      if (!nombre || !artista || !album) {
        return res
          .status(400)
          .send("Faltan campos obligatorios: nombre, artista o album.");
      }
      
      //const name = `${nombre}-${artista}-${album}${path.extname(cancion.name)}`
      const timestamp = Date.now()
      const name = `${timestamp}${path.extname(cancion.name)}`;
      const uploadPath = path.join(__dirname, "src/public/uploads", name);

     cancion.mv(uploadPath, (err) => {
        if (err) {
          return res.status(500).send(err);
        }
        res.send("File uploaded!");
      });
    } catch (error) {
      console.error(error);
    }
  },
};

export default appController;
