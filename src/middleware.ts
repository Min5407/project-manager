import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/clerk-webhook',
  //   '/api/drive-activity/',
]);

export default clerkMiddleware(
  (auth, req) => {
    if (!isPublicRoute(req)) {
      auth().protect();
      //   return NextResponse.redirect(new URL('/404', req.url));
    }
  },
  { debug: true },
);

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
