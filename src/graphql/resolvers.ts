import { prisma } from "@/services/prisma";

export const resolvers = {
  Query: {
    posts: (_parent: any, _args: any, _context: any) => {
      return prisma.post.findMany();
    },
  },

  Mutation: {
    addPost: (_parent: any, { content, author, likes }: any, _context: any) => {
      return prisma.post.create({ data: { content, author, likes } });
    },
    editPost: (_parent: any, { id, content, author }: any, _context: any) => {
      return prisma.post.update({ where: { id }, data: { content, author } });
    },
    deletePost: (_parent: any, { id }: any, _context: any) => {
      return prisma.post.delete({ where: { id } });
    },
    addLike: (_parent: any, { id }: any, _context: any) => {
      return prisma.post.update({
        where: { id },
        data: { likes: { increment: 1 } },
      });
    },
  },
};
