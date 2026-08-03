interface Config {
  port: number;
  nodeEnv: string;
}

const config: Config = {
  port: Number(process.env.EXPRESS_PORT) || 3002,
  nodeEnv: process.env.NODE_ENV || "development",
};

export default config;
