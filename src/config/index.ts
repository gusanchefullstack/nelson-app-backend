interface Config {
  port: number;
  nodeEnv: string;
  saltRounds: number;
  jwtSecret: string;
  jwtExpiresIn: string;
}

const config: Config = {
  port: Number(process.env.EXPRESS_PORT) || 3002,
  nodeEnv: process.env.NODE_ENV || "development",
  saltRounds: Number(process.env.BCRYPT_SALT_ROUNDS) || 10,
  jwtSecret: process.env.JWT_SECRET!,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "1d"
};

export default config;
