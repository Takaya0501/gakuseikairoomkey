// pages/api/button.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getButtonState() {
  const buttonState = await prisma.buttonState.findFirst();
  return buttonState;
}
