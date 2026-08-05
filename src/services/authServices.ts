import type { IProfile } from "../interfaces/IProfile";
import { prisma } from "../lib/prisma";
import { UserStatus } from "../../generated/prisma/enums";
import { hashPassword } from "../utils/hashPassword";
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

export default { signUpUser };
