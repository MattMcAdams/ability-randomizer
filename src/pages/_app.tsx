import "@/styles/boilerplate.css";
import "@/styles/globals.css";
import "@/styles/fontawesome.css";
import { themes } from "@/themes";
import Provider from "@/context";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import { init } from "@plausible-analytics/tracker";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {

  useEffect(() => {
    init({
      domain: "abilityrng.mcdms.dev",
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider>
        <div id="app">
          <header className="container--wide" style={{ width: "100%" }}>
            <div className="header__content layout--level">
              <h1>Pokemon Ability Randomizer</h1>
              <p>
                v1.0.0 &middot;{" "}
                <a
                  href="https://github.com/MattMcAdams/ability-randomizer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Source
                </a>
              </p>
            </div>
          </header>
          <Component {...pageProps} />
        </div>
      </Provider>
    </>
  );
}
