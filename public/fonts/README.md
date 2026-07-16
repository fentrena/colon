# Fuentes — Monument Extended

Monument Extended es una fuente **comercial** de [Pangram Pangram Foundry](https://pangrampangram.com/products/monument-extended).
Requiere licencia web. **No** subir archivos sin la licencia correspondiente.

## Cómo activarla

1. Compra/obtén la licencia web y descarga los archivos.
2. Conviértelos a `.woff2` si vienen en `.otf`/`.ttf` (recomendado: https://cloudconvert.com o `fonttools`).
3. Colócalos en esta carpeta (`/public/fonts/`) con estos nombres EXACTOS:

   - `MonumentExtended-Regular.woff2`   (peso 400)
   - `MonumentExtended-Ultrabold.woff2` (peso 800)

4. Listo. Los headings (`h1`, `h2`, `h3`) usarán Monument Extended automáticamente.

## ¿Cómo funciona?

Las declaraciones `@font-face` están en `app/globals.css` y la variable
`--font-display` define el stack `"Monument Extended", Inter, system-ui, sans-serif`.

Mientras estos archivos no existan, el navegador cae en **Inter** sin romper nada.
En cuanto los coloques con los nombres correctos, Monument Extended se activa.

## Uso explícito (opcional)

Además de los headings, puedes forzar la fuente en cualquier elemento con la clase
`font-display` de Tailwind. Ejemplo: `<span className="font-display">IVOR</span>`.
