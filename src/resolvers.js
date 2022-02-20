import { Cat } from "./models/Cat.js";

export const resolvers = {
    Query: {
        hello: () => "hello",
        cats: async () => Cat.find().clone()
    },
    Mutation: {
        createCat: (_, { name }) => {
            const kitty = new Cat({ name });
            return kitty.save();
        }
    }
};
