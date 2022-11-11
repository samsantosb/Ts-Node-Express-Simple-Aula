import { UserModel } from "../user/models/user.model";
import { mongoConnect, mongoDisconnect } from "./mongo.connection";

async function seed() {
  const users = [
    {
      name: "John Doe",
      email: "john@gmail.com",
      age: 25,
      cpf: "048.607.240-11",
    },
    {
      name: "Bob Martin",
      email: "bob@gmail.com",
      age: 32,
      cpf: "617.031.910-05",
    },
    {
      name: "Julia Smith",
      email: "jul@hotmail.com",
      age: 44,
      cpf: "560.996.660-44",
    },
  ];

  mongoConnect();

  for (const user of users) {
    const newUser = new UserModel(user);
    try {
      await newUser.save();
    } catch (error) {
      console.log(`failed to seed user ${user.name}`);
      console.log(error);
    }
  }

  console.log("DB successfully seeded");

  mongoDisconnect();
}
seed();
