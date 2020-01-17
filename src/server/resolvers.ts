import User from './models/User';

export const resolvers = {
  Query: {
    async allUser() {
      return await User.find();
    },
  },

  Mutation: {
    async createUser(root, { input }) {
      return await User.create(input);
    },
  },
};