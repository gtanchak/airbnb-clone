import { AppProps } from 'next/app';

import '../assets/css/global.css';

const MyApp =  ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default MyApp;
