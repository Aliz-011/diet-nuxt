import mongoose from 'mongoose';

export default async (_nitroApp) => {
  const config = useRuntimeConfig();

  mongoose
    .connect(config.MONGO_URI)
    .then(() => console.log('connected to MongoDb'))
    .catch((e) => console.log(e.message));
};
