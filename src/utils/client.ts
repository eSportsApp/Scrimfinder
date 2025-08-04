import { eSportsApp } from '@esportsapp/core';
import { ClientModule } from '@esportsapp/client';
import apikey from './env';


const esportsapp = new eSportsApp({
  plugins: [new ClientModule()],
  auth: {
    apikey: apikey,
  },
});
export default esportsapp;