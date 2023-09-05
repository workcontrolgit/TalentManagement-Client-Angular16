import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '@env/environment';

export const authConfig: AuthConfig = {
  issuer: environment.auth.issuer,
  clientId: environment.auth.clientId,
  responseType: environment.auth.responseType,
  redirectUri: environment.auth.redirectUri,
  postLogoutRedirectUri: environment.auth.postLogoutRedirectUri,
  silentRefreshRedirectUri: environment.auth.silentRefreshRedirectUri,
  scope: environment.auth.scope,
  useSilentRefresh: environment.auth.useSilentRefresh,
  silentRefreshTimeout: environment.auth.silentRefreshTimeout,
  timeoutFactor: environment.auth.timeoutFactor,
  sessionChecksEnabled: environment.auth.sessionChecksEnabled,
  showDebugInformation: environment.auth.showDebugInformation,
  clearHashAfterLogin: environment.auth.clearHashAfterLogin,
  nonceStateSeparator: environment.auth.nonceStateSeparator,
};
