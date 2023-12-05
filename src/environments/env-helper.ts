export function baseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

export function getSubEnvironment() {
  return baseUrl().includes('localhost') ? 'localhost' : 'server';
}

export function stripTrailingSlash(url: string) {
  return url.endsWith('/') ? url.slice(0, -1) : url;
}
