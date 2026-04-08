import express from "express";
import appRoutes from "./routes/authRoutes.js";
import expressFileupload from "express-fileupload";
import path from "path";

const __dirname = path.resolve();

const app = express();

const PORT = process.env.PORT || 3007;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "src/public")));

//Configuración de Express-FileUpload
app.use(
  expressFileupload({
    limits: { fileSize: 50000000 },
    abortOnLimit: true,
    responseOnLimit:
      "El peso del archivo que intentas subir supera el limite permitido",
  }),
);

//Rutas
app.use("/", appRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port http://localhost:${PORT}`);
});
