import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Khushboo Goyal',
    email: 'Khushboo@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Ankur Goyal',
    email: 'Ankur@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
