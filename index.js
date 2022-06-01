import { app } from "./App.js";

const main = async () => {
  try {
    const llenartabla = await app();
    llenartabla();
  } catch (error) {
    console.log(error);
  }
};

main();
