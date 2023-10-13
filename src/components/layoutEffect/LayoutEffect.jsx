import React from "react";
import Box from "./Box";

function LayoutEffect() {
  return (
    <div>
      <h1>le layout effect</h1>
      <p>
        La hauteur et la couleur de la div rouge changent à chaque
        rafraichissement.
        <br />
        Une anomalie est visible avec l'utilisation de useEffect. le phénomène
        est imperceptible avec useLayoutEffect{" "}
      </p>
      <Box></Box>
    </div>
  );
}

export default LayoutEffect;
