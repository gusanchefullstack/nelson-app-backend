import type { IProfile } from "../interfaces/IProfile.js";
import { prisma } from "../lib/prisma.js";

const getUserProfile = async (userId: string) => {
  try {
    const user = await prisma.user.findFirst({
      where: { id: userId },
      include: { profile: true },
      omit: { password: true },
    });
    if (!user) throw Error("User profile not found");
    return user;
  } catch (error) {
    throw error;
  }
};

const updateUserProfile = async (userId: string, fields: IProfile) => {
  try {
    const user = await prisma.user.update({
      where: { id: userId },
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
