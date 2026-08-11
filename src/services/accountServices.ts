import type { Prisma } from "../../generated/prisma/client.js";
import { prisma } from "../lib/prisma.js";

const getAccounts = async (userId: string) => {
  try {
    const validUser = await prisma.user.findFirst({ where: { id: userId } });
    if (!validUser) throw Error("Invalid user");
    const accounts = await prisma.account.findMany({ where: { userId } });
    if (!accounts) throw Error("User accounts not found");
    return accounts;
  } catch (error) {
    throw error;
  }
};

const getSingleAccount = async (userId: string, id: string) => {
  try {
    const validUser = await prisma.user.findFirst({ where: { id: userId } });
    if (!validUser) throw Error("Invalid user");
    const account = await prisma.account.findFirst({
      where: { id, AND: { userId } },
    });
    if (!account) throw Error("User account not found");
    return account;
  } catch (error) {
    throw error;
  }
};

const createAccount = async (
  userId: string,
  fields: Prisma.AccountCreateInput,
) => {
  try {
    const validUser = await prisma.user.findFirst({ where: { id: userId } });
    if (!validUser) throw Error("Invalid user");
    const account = await prisma.account.create({
      data: { ...fields, user: { connect: { id: userId } } },
    });
    return account;
  } catch (error) {
    throw error;
  }
};

const updateAccount = async (
  userId: string,
  id: string,
  fields: Prisma.AccountUpdateInput,
) => {
  try {
    const validUser = await prisma.user.findFirst({ where: { id: userId } });
    if (!validUser) throw Error("Invalid user");
    const account = await prisma.account.update({
      where: { id, AND: { userId } },
      data: { ...fields, user: { connect: { id: userId } } },
    });
    return account;
  } catch (error) {
    throw error;
  }
};

const deleteAccount = async (userId: string, id: string) => {
  try {
    const validUser = await prisma.user.findFirst({ where: { id: userId } });
    if (!validUser) throw Error("Invalid user");
    const account = await prisma.account.delete({
      where: { id, AND: { userId } },
    });
    return account;
  } catch (error) {
    throw error;
  }
};

export default { getAccounts, getSingleAccount, createAccount, updateAccount, deleteAccount};
