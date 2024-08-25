const dotenv = require("dotenv");
const path = require("path");

const envFile =
  process.env.NODE_ENV !== "prod"
    ? path.resolve(__dirname, "../../.env.dev")
    : path.resolve(__dirname, "../../.env");

// Load environment variables from the .env file
const result = dotenv.config({ path: envFile });

if (result.error) {
  console.error(
    `Failed to load environment variables from ${envFile}`,
    result.error
  );
} else {
  console.log(`Loaded environment variables from ${envFile}`);
}
// Export the necessary configurations
module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  APP_SECRET: process.env.APP_SECRET,
};
