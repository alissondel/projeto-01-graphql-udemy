const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts('/' + id);
  const post = await response.json();

  /* Só pra gerar o erro de time out */
  if (Math.random() > 0.5) {
    return {
      statusCode: 500,
      message: 'Post timeout!',
      timeout: 123,
    };
  }

  /* Faz a verificação do erro 404 - Post not Found */
  if (typeof post.id === 'undefined') {
    return {
      statusCode: 404,
      message: 'Post not found!',
      postId: id,
    };
  }
  /* Retorna o post */
  return post;
};

const posts = async (_, { input }, { getPosts }) => {
  const apiFiltersInput = new URLSearchParams(input);
  const response = await getPosts('/?' + apiFiltersInput);
  return response.json();
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
  Post: {
    unixTimestamp: ({ createdAt }) => {
      const timestamp = new Date(createdAt).getTime() / 1000;
      return Math.floor(timestamp);
    },
  },
  PostResult: {
    __resolveType: (obj) => {
      if (typeof obj.postId !== 'undefined') return 'PostNotFoundError';
      if (typeof obj.timeout !== 'undefined') return 'PostTimeoutError';
      if (typeof obj.id !== 'undefined') return 'Post';
      return null; // Faz o graphql retornar o próprio erro
    },
  },
  PostError: {
    __resolveType: (obj) => {
      if (typeof obj.postId !== 'undefined') return 'PostNotFoundError';
      if (typeof obj.timeout !== 'undefined') return 'PostTimeoutError';
      return null; // Faz o graphql retornar o próprio erro
    },
  },
};
