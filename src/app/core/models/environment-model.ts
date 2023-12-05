export interface AppSetting {
  subEnvironment: string;
  apiEndpoint: string;
  apiMockEndpoint: string;
  issuer: string;
}

export interface EnvironmentConfig {
  externalApiUrl: string;
  clientId: string;
  responseType: string;
  silentRefreshRedirectUri: string;
  scope: string;
  useSilentRefresh: boolean;
  silentRefreshTimeout: number;
  timeoutFactor: number;
  strictDiscoveryDocumentValidation: boolean;
  sessionChecksEnabled: boolean;
  showDebugInformation: boolean;
  clearHashAfterLogin: boolean;
  nonceStateSeparator: string;
  appSetting: AppSetting[];
}
