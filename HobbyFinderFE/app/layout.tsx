import '@mantine/core/styles.css';
import "./globals.css";
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';

import type { Metadata } from "next";
import { Inter } from "next/font/google";


import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '@/theme';
import MyAppShell from './components/Layout/MyAppShell';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hobby finder",
  description: "An app to let you find more easily your hobbies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} >
          <MyAppShell>
              {children}
          </MyAppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
