import React from 'react';
export function onRenderBody({ setHeadComponents }) {
setHeadComponents([
    <script
      id='cookieyes'
      type='text/javascript'
      src='https://cdn-cookieyes.com/client_data/XXXXXXXX/script.js'
    ></script>,
 ]);
}