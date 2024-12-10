import { dbURL } from './config.js';
import { connect } from 'mongoose';

export default () => {
  return connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
};
