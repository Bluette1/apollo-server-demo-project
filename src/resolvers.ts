import { IResolvers } from 'graphql-tools';
let links: Object[] = [
  {
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL',
  },
];
let idCount: number = links.length;

const resolvers: IResolvers = {
  Query: {
    helloWorld: () => 'Hello world from Apollo Server',
  },
  Mutation: {
    post: (_parent, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      };
      links.push(link);
      console.log(links);
      return link;
    },
  },
};

export default resolvers;
