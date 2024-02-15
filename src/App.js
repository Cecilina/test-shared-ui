import { Molecules, Pages } from "@craincode/crain-web-mono-ui";
import { useState } from "react";
import { mockedData } from "./mock-article-data";
import { titles, industries } from "./mockOptions";
import { newsletterSelection } from "./mockConfig";
import { ReactComponent as Logo } from './Logo.svg';
import './App.css';

export default function App() {
  // const [isOpen, setIsOpen] = useState(true);
  const props = {
    ...mockedData,
    newsletter: newsletterSelection,
    titles,
    industries,
  };
  return (
    <Molecules.ScrollBar id="main-scroll-bar" className="u-min-h-screen">
      <div className="App">
        {/* {<Molecules.ModalPaywall
          {...{
            buttons: [
              {
                variant: 'filled',
                text: 'Subscribe',
                href: '/subscribe?q=1&w-2#hash=1',
              },
              {
                variant: 'outlined',
                text: 'Get a Corporate Plan now',
                href: '/subscribe',
              },
              {
                variant: 'text',
                label: 'Need a free account?',
                text: 'Register now',
                href: '/register',
              },
              {
                variant: 'text',
                label: 'Already registered?',
                text: 'Login now',
                href: '/login',
                as: 'a',
              },
            ],
            image: {
              src: 'http://go.pardot.com/l/201082/2020-09-11/9h16bf/201082/133172/CCB_CorpSubs_Webform_Header.png',
              alt: 'Subscribe now',
              width: 400,
              height: 400,
              base64: 'yyyy'
            },
            heading: 'Want more Chicago Business news?',
            subHeading: 'Want more Chicago Business news? subheading',
            message: 'Become a subscriber to unlock access to all of our exclusive content.',
          }}
        /> } */}
        {/* <Pages.Checkout 
          navigation={{
            logo: {
              src: '',
              url: ''
            }
          }}
          logo = {<Logo />}
          {...props}
        /> */}
        <Molecules.UrlTriggeredModals />
        <Molecules.Pelcro />
        {/* <Organisms.Modals.LoginModal isOpen={isOpen} onLoginSuccess={() => setIsOpen(false)} buttonLabel="login" /> */}
        {/* <Organisms.Modals.RegisterModal isOpen={isOpen} onSuccess={() => null} onLoginSuccess={() => null}  /> */}
        {/* <Pages.Checkout {...props} logo={<Logo />} /> */}
        
      </div>
    </Molecules.ScrollBar>
  );
}

