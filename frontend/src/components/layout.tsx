import React from "react";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import moment from "moment";
import { useIntl } from "react-intl";

function PickFontFamily(lang_current: string): React.CSSProperties {
  if (lang_current == "zh-TW")
    return {
      fontFamily: "'Noto Sans TC', 'Noto Sans', sans-serif",
      fontOpticalSizing: "auto",
      fontStyle: "normal",
    };

  if (lang_current == "zh-CN")
    return {
      fontFamily: "'Noto Sans SC', 'Noto Sans', sans-serif",
      fontOpticalSizing: "auto",
      fontStyle: "normal",
    };

  if (lang_current == "ja-JP")
    return {
      fontFamily: "'Noto Sans JP', 'Noto Sans', sans-serif",
      fontOpticalSizing: "auto",
      fontStyle: "normal",
    };

  return { fontFamily: "'Noto Sans'" };
}

function PickGoogleFont({ lang_current }: { lang_current: string }) {
  if (lang_current == "zh-TW")
    return (
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap"
        rel="stylesheet"
      />
    );

  if (lang_current == "zh-CN")
    return (
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100..900&display=swap"
        rel="stylesheet"
      />
    );

  if (lang_current == "ja-JP")
    return (
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap"
        rel="stylesheet"
      />
    );

  return <></>;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const { locale } = useIntl();

  return (
    <>
      <main>{children}</main>
    </>
  );
}
