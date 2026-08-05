import { SignJWT, type JWTPayload} from 'jose'
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
}