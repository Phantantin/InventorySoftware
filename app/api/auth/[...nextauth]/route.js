import NextAuth from "next-auth";
import { authOptions } from "@/lib/authOptions";

// To obtain handlers & auth
const { handlers } = NextAuth(authOptions);

export const { GET, POST } = handlers;
