import Footer from "@/components/Common/Footer"
import Header from "@/components/Common/Header"
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/store/Store';
import { SessionProvider } from "next-auth/react"
import NextTopLoader from "nextjs-toploader";
import { useState } from "react";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [bannerTitle, setBannerTitle] = useState("")
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header bannerTitle={bannerTitle}/>
          <Component {...pageProps} setBannerTitle={setBannerTitle}/>
          <NextTopLoader
            color="linear-gradient(90deg, #e33af2, #c4540a)"
            initialPosition={0.08}
            crawlSpeed={200}
            height={5}
            crawl={true}
            showSpinner={true}
            easing="cubic-bezier(0.25, 0.1, 0.25, 1)"
            speed={950}
            shadow="0 0 10px #FF5733, 0 0 5px #FF5733"
            template={
              // Custom loader elements with transitions and animations
              '<div class="bar" role="bar"><div class="peg"></div></div>' +
              '<div class="spinner" role="spinner"><div class="custom-spinner-icon"></div></div>'
            }
            zIndex={1600}
            showAtBottom={false}
          />
          <Footer />
        </PersistGate>
      </Provider>
    </SessionProvider>
  )
}
