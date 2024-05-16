import React from "react";
import { AppProps } from "next/app";
import Inter from "@next/font/local";
import "../styles/globals.css";

export const interFont = Inter({
  src: [
    { path: "../assets/fonts/Inter/static/thin.ttf", weight: "100" },
    { path: "../assets/fonts/Inter/static/light.ttf", weight: "200" },
    { path: "../assets/fonts/Inter/static/regular.ttf", weight: "300" },
    { path: "../assets/fonts/Inter/static/medium.ttf", weight: "400" },
    { path: "../assets/fonts/Inter/static/semiBold.ttf", weight: "500" },
    { path: "../assets/fonts/Inter/static/bold.ttf", weight: "600" },
    { path: "../assets/fonts/Inter/static/extraBold.ttf", weight: "700" },
    { path: "../assets/fonts/Inter/static/black.ttf", weight: "800" },
    { path: "../assets/fonts/Inter/static/extraLight.ttf", weight: "900" },
  ],
  display: "block",
});
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <main className={interFont.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
