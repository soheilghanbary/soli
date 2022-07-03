import "styles/app.scss";
import type { AppProps } from "next/app";
import { appWithTranslation } from 'next-i18next';
import Layout from "components/layout";
import { ThemeProvider } from "next-themes";
import 'animate.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
