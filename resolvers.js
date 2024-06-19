const { User } = require('./models');

const resolvers = {
    Query: {
        getUser: async (_, { id }) => await User.findById(id),
        getUsers: async () => await User.find({}),
    },
    Mutation: {
        createUser: async (_, { name, email, age }) => {
            const user = new User({ name, email, age });
            await user.save();
            return user;
        },
        updateUser: async (_, { id, name, email, age }) => {
            const user = await User.findById(id);
            if (name) user.name = name;
            if (email) user.email = email;
            if (age) user.age = age;
            await user.save();
            return user;
        },
        deleteUser: async (_, { id }) => {
            const user = await User.findById(id);
            await user.deleteOne();
            return user;
        },
    },
};

module.exports = resolvers;
