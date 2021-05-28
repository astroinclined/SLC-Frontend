export const formatString = (text: string) => text.toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "-");

export const openInNewTab = (port: string, path: string) => {
  const protocol = window.location.protocol;
  const hostname = window.location.hostname;
  const link = `${protocol}//${hostname}:${port}${path}`;

  window.open(link, '_blank', 'noreferrer');
}
