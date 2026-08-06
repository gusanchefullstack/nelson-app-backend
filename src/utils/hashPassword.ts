import bcrypt from "bcrypt";
import config from "../config";

export const hashPassword = async (password: string): Promise<string> => {
  try {
    const saltRounds = await bcrypt.genSalt(config.saltRounds);
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw error;
  }
};

export const comparePassword = async (
  password: string,
  hashedPassword: string,
): Promise<boolean> => {
  try {
    const isPasswordValid = await bcrypt.compare(password, hashedPassword);
    return isPasswordValid;
  } catch (error) {
    throw error;
  }
};
