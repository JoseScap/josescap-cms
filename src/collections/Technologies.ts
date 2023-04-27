import { CollectionConfig } from "payload/types";

const Technology: CollectionConfig = {
  slug: "technologies",
  admin: {
    defaultColumns: ['name', 'description', 'updatedAt'],
    useAsTitle: 'name'
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "name",
      required: true,
      type: "text"
    },
    {
      name: "description",
      required: false,
      type: "textarea"
    }
  ]
}

export default Technology