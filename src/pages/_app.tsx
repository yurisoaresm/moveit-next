import { useState } from 'react';
import type { AppProps } from 'next/app';

import { ChallengesProvider } from '../contexts/ChallengesContext';

import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChallengesProvider>
        <Component {...pageProps} />
    </ChallengesProvider>
  )
}
