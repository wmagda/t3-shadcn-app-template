import { createNextApiHandler } from "@trpc/server/adapters/next";
import { env } from "~/env.mjs";
import { appRouter } from "~/server/api/root";
import { createTRPCContext } from "~/server/api/trpc";

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError(opts) {
    const { error, type, path, input, ctx, req } = opts;

    if( env.NODE_ENV === "development" ) {
      console.error(
        `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
      );
    }

    if (error.code === 'INTERNAL_SERVER_ERROR') {
      // send to bug reporting
    }

    if (error.code === 'UNAUTHORIZED') {
      // redirect to login
      // not sure how to do this...
    }
  },
});
