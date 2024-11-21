import { describe, expect, it } from "vitest";

import * as routes from "./routeConstants";

describe("routeConstants", () => {
  it("exports the correct routes", () => {
    expect(routes.HOME_ROUTE).toBe("/");

    // Firebase client auth routes.
    expect(routes.FB_CLIENT_HOME_ROUTE).toBe("/firebase-client-auth");
    expect(routes.FB_CLIENT_DASHBOARD_ROUTE).toBe(
      "/firebase-client-auth/dashboard"
    );
    expect(routes.FB_CLIENT_SIGN_IN_ROUTE).toBe("/firebase-client-auth/signin");
    expect(routes.FB_CLIENT_VERIFY_ROUTE).toBe("/firebase-client-auth/verify");

    // Firebase admin auth routes.
    expect(routes.FB_ADMIN_HOME_ROUTE).toBe("/firebase-admin-auth");
    expect(routes.FB_ADMIN_DASHBOARD_ROUTE).toBe(
      "/firebase-admin-auth/dashboard"
    );
    expect(routes.FB_ADMIN_SIGN_IN_ROUTE).toBe("/firebase-admin-auth/signin");

    // Debug routes.
    expect(routes.DEBUG_ROUTE).toBe("/debug");
  });

  it("matches the snapshot", () => {
    expect(routes).toMatchSnapshot();
  });
});
