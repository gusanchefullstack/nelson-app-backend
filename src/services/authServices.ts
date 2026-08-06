import type { IProfile } from "../interfaces/IProfile";
import { prisma } from "../lib/prisma";
import { UserStatus } from "../../generated/prisma/enums";
import { comparePassword, hashPassword } from "../utils/hashPassword";
import { generateToken } from "../utils/jwt";

const signUpUser = async (
  username: string,
  password: string,
  status: UserStatus,
  profile: IProfile,
) => {
  try {
    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        status,
        profile: {
          create: { ...profile },
        },
      },
      omit: {
        password: true,
      },
      include: {
        profile: true,
      },
    });
    const token = await generateToken({ id: user.id, username: user.username });
    return { user, token };
  } catch (error) {
    throw error;
  }
};

const loginUser = async (username: string, password: string) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        username,
      },
      omit: {
        status: true,
      },
    });
    if (!user) {
      throw Error("Invalid credentials");
    }
    const isValidPassword = await comparePassword(password, user.password);
    if (!isValidPassword) {
      throw Error("Invalid credentials");
    }
    const token = await generateToken({
      id: user.id,
      username: user.username,
    });

    return { user: { id: user.id, username: user.username }, token };
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id: string) => {
  try {
    const user = await prisma.user.delete({
      where: { id },
      omit: { password: true },
    });
    return user;
  } catch (error) {
    throw error;
  }
};

export default { signUpUser, loginUser, deleteUser };
