export const formatString = (text: string) => text.toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "-");

export const getHref = (port: string, path: string) => {
  const protocol = window.location.protocol;
  const hostname = window.location.hostname;

  // Change port === 80 to whatever the SHELL_PORT is in the backend
  const urlPort = process.env.NODE_ENV === 'development' && port === '80' ? 3000 : port;

  return `${protocol}//${hostname}:${urlPort}${path}`;
}

export const getAnchorProps = (port: string, path: string) => {
  if (port !== window.location.port && port !== '80') {
    return {
      to: {
        pathname: getHref(port, path),
      },
      target: '_blank',
      rel: 'noopener noreferrer',
    };
  }

  return { to: path };
}
