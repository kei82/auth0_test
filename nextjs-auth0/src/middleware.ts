import { NextResponse, NextMiddleware } from "next/server";
import {
  withMiddlewareAuthRequired,
  getSession,
} from "@auth0/nextjs-auth0/edge";

const middleware: NextMiddleware = async (req) => {
  console.log(
    "@@@@@@@@@@@@@@@@@@@@@@@@@ NextMiddleware @@@@@@@@@@@@@@@@@@@@@@@@@"
  );

  const res = NextResponse.next();

  const session = await getSession(req, res);
  console.log(session?.user);

  return res;
};

export default withMiddlewareAuthRequired(middleware);
