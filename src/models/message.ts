import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("Message", {
    fields: t => ({
        id: t.exposeID("id"),
        body: t.exposeString("body"),
        //messages: t.relation("messages")
        createdAt: t.expose("createdAt", {
            type: "Date",
          }),
    })
})

/*
type Message {
  body: String!
  createdAt: Date!
  id: ID!
}
*/