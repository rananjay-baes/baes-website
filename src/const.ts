export { COOKIE_NAME, ONE_YEAR_MS } from "../shared/const.ts";

export const APP_TITLE = (import.meta.env as unknown as { VITE_APP_TITLE: string }).VITE_APP_TITLE || "BAES Solutions";

export const APP_LOGO = "/logo.png";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = (import.meta.env as unknown as { VITE_OAUTH_PORTAL_URL: string }).VITE_OAUTH_PORTAL_URL || "https://oauth.manus.computer";
  const appId = (import.meta.env as unknown as { VITE_APP_ID: string }).VITE_APP_ID || "1234567890";
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};
