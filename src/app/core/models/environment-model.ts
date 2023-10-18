export interface AppSetting {
  subEnvironment: string;
  apiEndpoint: string;
  apiMockEndpoint: string;
  issuer: string;
  clientId: string;
  responseType: string;
  silentRefreshRedirectUri: string;
  scope: string;
  useSilentRefresh: boolean;
  silentRefreshTimeout: number;
  timeoutFactor: number;
  sessionChecksEnabled: boolean;
  showDebugInformation: boolean;
  clearHashAfterLogin: boolean;
  nonceStateSeparator: string;
}

export interface EnvConfig {
  cloudApiUrl: string;
  appSetting: AppSetting[];
}
