import { AppProps } from 'next/app';

import '../../public/assets/css/global.css';

const MyApp = function ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
};

export default MyApp;
