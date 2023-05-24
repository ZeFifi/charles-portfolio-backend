module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "dpg-chkvf6jhp8uej70katug-a"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi_4rdd"),
      user: env("DATABASE_USERNAME", "strapi"),
      password: env("DATABASE_PASSWORD", "0T5usF3cHk78luIezC067G4zEYjMGma7"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl: {
        ca: env(DATABASE_CA),
      },
    },
    debug: false,
  },
});
