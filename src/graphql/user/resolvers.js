const users = () => {
  return [
    {
      id: '1',
      userName: 'Alisson',
    },
    {
      id: '2',
      userName: 'Rafael',
    },
    {
      id: '3',
      userName: 'Lucas',
    },
  ];
};

const user = () => {
  return {
    id: '1',
    userName: 'Luiz',
  };
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
