import express from 'express';
import mongoose from 'mongoose';
import graphQLHttp from 'express-graphql';
import schema from './schema';


const PORT = 7000;
const dbName = 'test';
const mongoUri = `mongodb://127.0.0.1:27017/${dbName}`;
const app = express();
mongoose.Promise = global.Promise;
mongoose.connect(mongoUri, { useNewUrlParser: true });

app.use('/graphql', graphQLHttp({
  schema,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`express server listen ${PORT}`);
});