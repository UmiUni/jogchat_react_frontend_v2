/* @flow */

import axios from 'axios';

const client = axios.create({
  baseURL: 'http://178.128.0.108:3001',
});

export default client;
