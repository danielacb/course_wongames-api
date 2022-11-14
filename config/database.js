module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "wongames"),
        username: env("DATABASE_USERNAME", "wongames"),
        password: env("DATABASE_PASSWORD", "wongames1234"),
        ssl: env.bool("DATABASE_SSL")
          ? {
              require: true,
              rejectUnauthorized: false,
            }
          : false,
      },
      options: {},
    },
  },
});
