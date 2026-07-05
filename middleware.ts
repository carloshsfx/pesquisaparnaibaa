import { NextResponse, type NextRequest } from "next/server";

const protectedRoutes = ["/dashboard", "/documentos", "/historico", "/configuracoes", "/referencias"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("sb-access-token")?.value;
  const isProtected = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route));

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (request.nextUrl.pathname === "/" && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/documentos/:path*", "/historico/:path*", "/configuracoes/:path*", "/referencias/:path*"]
};
