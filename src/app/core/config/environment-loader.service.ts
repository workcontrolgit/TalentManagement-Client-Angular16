import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { EnvConfig } from './env-config';

@Injectable()
export class EnvironmentLoaderService {
  private envConfig!: EnvConfig;

  constructor(private readonly http: HttpClient) {}

  async loadEnvConfig(configPath: string): Promise<void> {
    console.log('Loading environment config!');
    this.envConfig = await lastValueFrom(this.http.get<EnvConfig>(configPath));
  }

  getEnvConfig(): EnvConfig {
    return this.envConfig;
  }
}
