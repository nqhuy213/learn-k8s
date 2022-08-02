import app from "./app";
import config from "config";
import { connectToMongo } from "./database/connect";
const port = config.get("port");
async function bootstrap() {
  app.listen(port, async () => {
    console.log("Server is running on port 3000");
  });
  connectToMongo()
}

bootstrap();
