import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        blog: resolve(__dirname, "blog.html"),
        contacto: resolve(__dirname, "contacto.html"),
        cursos: resolve(__dirname, "cursos.html"),
        quienesSomos: resolve(__dirname, "quienes-somos.html"),
        avisoLegal: resolve(__dirname, "aviso-legal.html"),
        login: resolve(__dirname, "login.html"),
        registro: resolve(__dirname, "registro.html"),
        noticia1: resolve(__dirname, "noticia-1.html"),
        noticia2: resolve(__dirname, "noticia-2.html"),
        curso1: resolve(__dirname, "curso-1.html"),
        curso2: resolve(__dirname, "curso-2.html"),
        curso3: resolve(__dirname, "curso-3.html"),
        curso4: resolve(__dirname, "curso-4.html"),
        notFound: resolve(__dirname, "404.html"),
      },
    },
  },
});
