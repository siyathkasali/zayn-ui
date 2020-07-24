import React from 'react';
import { PrimaryButton, SecondaryButton, TertiaryButton } from './components/Buttons';
import { GlobalStyle } from './utils/Global';

export default function App() {
  return (
    <div>
      <PrimaryButton modifiers="small">Hello World</PrimaryButton>
      <SecondaryButton modifiers={["large", "warning", "secondaryButtonWarning"]}>Hello World</SecondaryButton>
      <TertiaryButton>Hello World</TertiaryButton>
      <GlobalStyle />
    </div>
  );
}
