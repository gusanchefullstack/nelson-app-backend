import type { Prisma } from "../../generated/prisma/client.js";
import { prisma } from "../lib/prisma.js";


const getProviders = async (userId: string) => {
  try {
    const validUser = await prisma.user.findFirst({ where: { id: userId } });
    if (!validUser) throw Error("Invalid user");
    const providers = await prisma.provider.findMany({ where: { userId } });
    if (providers.length === 0) throw Error("Items not found");
    return providers;
  } catch (error) {
    throw error;
  }
};

const getSingleProvider = async (userId: string, id: string) => {
  try {
    const validUser = await prisma.user.findFirst({ where: { id: userId } });
    if (!validUser) throw Error("Invalid user");
    const provider = await prisma.provider.findFirstOrThrow({
      where: { id, AND: { userId } },
    });
    return provider;
  } catch (error) {
    throw error;
  }
};

const createProvider = async (
  userId: string,
  fields: Prisma.ProviderCreateInput,
) => {
  try {
    const validUser = await prisma.user.findFirst({ where: { id: userId } });
    if (!validUser) throw Error("Invalid user");
    const provider = await prisma.provider.create({
      data: { ...fields, user: { connect: { id: userId } } },
    });
    return provider;
  } catch (error) {
    throw error;
  }
};

const updateProvider = async (
  userId: string,
  id: string,
  fields: Prisma.ProviderUpdateInput,
) => {
  try {
    const validUser = await prisma.user.findFirst({ where: { id: userId } });
    if (!validUser) throw Error("Invalid user");
    const provider = await prisma.provider.update({
      where: { id, AND: { userId } },
      data: { ...fields, user: { connect: { id: userId } } },
    });
    return provider;
  } catch (error) {
    throw error;
  }
};

const deleteProvider = async (userId: string, id: string) => {
  try {
    const validUser = await prisma.user.findFirst({ where: { id: userId } });
    if (!validUser) throw Error("Invalid user");
    const provider = await prisma.provider.delete({
      where: { id, AND: { userId } },
    });
    return provider;
  } catch (error) {
    throw error;
  }
};

export default { getProviders, getSingleProvider, createProvider, updateProvider, deleteProvider};