import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get("host") || "";

  // Routing de subdominios para Cloudflare DNS & Vercel
  if (hostname.startsWith("pos.")) {
    if (!url.pathname.startsWith("/pos")) {
      url.pathname = `/pos${url.pathname === "/" ? "" : url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  if (hostname.startsWith("it.")) {
    if (!url.pathname.startsWith("/it")) {
      url.pathname = `/it${url.pathname === "/" ? "" : url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  if (hostname.startsWith("licencias.")) {
    if (!url.pathname.startsWith("/licencias")) {
      url.pathname = `/licencias${url.pathname === "/" ? "" : url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
