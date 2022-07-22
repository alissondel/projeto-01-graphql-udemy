const post = () => {
  return {
    id: '1',
    title: 'Esse é o titulo',
  };
};

const posts = () => {
  return [
    {
      id: '1',
      title: 'Esse é o titulo um',
    },
    {
      id: '2',
      title: 'Esse é o titulo dois',
    },
    {
      id: '3',
      title: 'Esse é o titulo três',
    },
  ];
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
