import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]/route"

export function auth(...args) {
  return getServerSession(...args, authOptions)
}