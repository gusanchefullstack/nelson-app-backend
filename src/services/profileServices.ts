import type { IProfile } from "../interfaces/IProfile.js";
import { prisma } from "../lib/prisma.js";

const getUserProfile = async (id: string) => {
  try {
    const user = await prisma.user.findFirst({
      where: { id },
      include: { profile: true },
      omit: { password: true },
    });
    if (!user) throw Error("User profile not found");
    return user;
  } catch (error) {
    throw error;
  }
};

const updateUserProfile = async (id: string, fields: IProfile) => {
  try {
    const user = await prisma.user.update({
      where: { id },
      data: {
        profile: {
          update: { ...fields },
        },
      },
      omit: { password: true },
      include: { profile: true },
    });

    if (!user) throw Error("User profile not found");
    return user;
  } catch (error) {
    throw error;
  }
};

export default {
  getUserProfile,
  updateUserProfile,
};
