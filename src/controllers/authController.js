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
};

export default appController;
