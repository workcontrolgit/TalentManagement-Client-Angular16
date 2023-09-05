export interface Auth {
  issuer: string;
  clientId: string;
  responseType: string;
}

export interface EnvConfig {
  environment: string;
  npm_package_version: string;
  auth: Auth;
}
