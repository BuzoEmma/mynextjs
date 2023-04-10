import { defineField, defineType } from "sanity";

export default defineType({
  name: "user",
  title: "User",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",

    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
   
  ]

})