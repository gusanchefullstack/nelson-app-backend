import { SignJWT, jwtVerify,type JWTPayload} from 'jose'
import { createSecretKey } from 'crypto'
import config from '../config'

export interface JwtPayload extends JWTPayload{
  id: string
  username: string
}

export const generateToken = (payload: JwtPayload): Promise<string> => {
  const secret = config.jwtSecret
  const secretKey = createSecretKey(secret, 'utf-8')

	return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(config.jwtExpiresIn) 
    .sign(secretKey)
};

export const verifyToken = async (token: string): Promise<JwtPayload> => {
  const secretKey = createSecretKey(config.jwtSecret, 'utf-8')
  const { payload } = await jwtVerify(token, secretKey)

  return {
    id: payload.id as string,
    username: payload.username as string,
  }
}