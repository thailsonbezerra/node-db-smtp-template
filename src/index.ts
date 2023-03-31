import AppDataSource from "./database";

(async () => {
    await AppDataSource.initialize();
    if (!AppDataSource.isInitialized) {
        console.log("\nOcorreu um erro na inicialização do banco de dados!");
        process.exit();
    }

    console.log("\nBanco de dados iniciado!");

})();
