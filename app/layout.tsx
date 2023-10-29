import type { Metadata } from 'next'
import {  Urbanist } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import Footer from '@/components/footer'
import Head from 'next/head'
import Link from 'next/link'
import "./assets/css/theme.css"
import "./assets/css/loopple/loopple.css"
import Navbar from '@/components/navbar'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store',
}

export default function RootLayout({
  children,
}: {
  children: any
}) :any {
  return (
    <html lang="en">
       <Head>
       
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <title>Flowers Shop Ecommerce Website</title>
    <Link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
    <Link href="https://demos.creative-tim.com/soft-ui-design-system/assets/css/nucleo-icons.css" rel="stylesheet" />
    <Link href="https://demos.creative-tim.com/soft-ui-design-system/assets/css/nucleo-svg.css" rel="stylesheet" />
    

       
       </Head>
      <body className={font.className}>
        <Navbar/>
        {children}
        <Footer />
       
        <div className="loopple-badge">Made with<img src="https://www.loopple.com/img/loopple-logo.png" className="loopple-ml-1" style={{ width: '55px' }} /></div>
        
        <Script src="https://loopple.s3.eu-west-3.amazonaws.com/soft-ui-design-system/js/core/bootstrap.min.js" type="text/javascript"/>
        <Script src="https://demos.creative-tim.com/soft-ui-design-system/assets/js/soft-design-system.min.js?v=1.0.5" type="text/javascript"/>
        <Script src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/js/plugins/countup.min.js" type="text/javascript"/>
        <Script src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/js/plugins/flatpickr.min.js" type="text/javascript"/>
        <Script src="https://kit.fontawesome.com/42d5adcbca.js" crossOrigin="anonymous"/>

        <Script
          id="custom-js" 
        >
          {`
            if (document.getElementById("state1")) {
              const countUp = new CountUp("state1", document.getElementById("state1").getAttribute("countTo"));
              if (!countUp.error) {
                countUp.start();
              } else {
                console.error(countUp.error);
              }
            }
            if (document.getElementById("state2")) {
              const countUp1 = new CountUp("state2", document.getElementById("state2").getAttribute("countTo"));
              if (!countUp1.error) {
                countUp1.start();
              } else {
                console.error(countUp1.error);
              }
            }
            if (document.getElementById("state3")) {
              const countUp2 = new CountUp("state3", document.getElementById("state3").getAttribute("countTo"));
              if (!countUp2.error) {
                countUp2.start();
              } else {
                console.error(countUp2.error);
              }
            }
            if (document.querySelector('.datepicker-1')) {
              flatpickr('.datepicker-1', {});
            }
            if (document.querySelector('.datepicker-2')) {
              flatpickr('.datepicker-2', {});
            }
          `}
        </Script>
      
      </body>
    </html>
  )
}
