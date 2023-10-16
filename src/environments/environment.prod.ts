// `.env.ts` is generated by the `npm run env` command
// `npm run env` exposes environment variables as JSON for any usage you might
// want, like displaying the version or getting extra config from your CI bot, etc.
// This is useful for granularity you might need beyond just the environment.
// Note that as usual, any environment variables you expose through it will end up in your
// bundle, and you should not use it for any sensitive information like passwords or keys.
import { env } from './.env';
import { EnvConfig } from '../app/core/models/environment-model';
import envConfig from '../assets/config/env-config.json';

export const config = envConfig as EnvConfig;

export const filteredConfigAuth = config.auth.filter((EnvConfig) => (EnvConfig.baseUrl = getBaseUrl()));

export const environment = {
  production: true,
  version: env['npm_package_version'],
  serverQuoteUrl: 'https://api.chucknorris.io',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US'],
  // Source code for API Project to run on localhost
  // https://github.com/workcontrolgit/TalentManagement-ApiResources-Net7
  // apiEndpoint: 'https://localhost:44378/api/v1',
  apiEndpoint: config.apiEndpoint, //demo API project in azure
  apiMockEndpoint: config.apiMockEndpoint,
  // settings for connection to Duende IdentityServer
  auth: {
    // source code for Duende IdentityServer to run on localhost
    // https://github.com/workcontrolgit/CATTokenService.AdminUI.Duende
    // issuer: 'https://localhost:44310', // running on localhost
    issuer: filteredConfigAuth[0].issuer, // demo IdentityServer in Azure
    clientId: config.auth[0].clientId, // client id setup in IdentityServer4
    responseType: config.auth[0].responseType, //code flow PKCE
    redirectUri: window.location.origin,
    postLogoutRedirectUri: window.location.origin,
    silentRefreshRedirectUri: window.location.origin + config.auth[0].silentRefreshRedirectUri,
    scope: 'openid profile email roles app.api.employeeprofile.read', // Ask offline_access to support refresh token refreshes
    useSilentRefresh: config.auth[0].useSilentRefresh, // Needed for Code Flow to suggest using iframe-based refreshes
    silentRefreshTimeout: config.auth[0].silentRefreshTimeout, // For faster testing
    timeoutFactor: 0.25, // For faster testing
    sessionChecksEnabled: config.auth[0].sessionChecksEnabled,
    showDebugInformation: config.auth[0].showDebugInformation, // Also requires enabling "Verbose" level in devtools
    clearHashAfterLogin: config.auth[0].clearHashAfterLogin, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040,
    nonceStateSeparator: config.auth[0].nonceStateSeparator, // Real semicolon gets mangled by IdentityServer's URI encoding
  },
};

function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}
