import { CollectionConfig } from "payload/types";

const Contact: CollectionConfig = {
  slug: "contacts",
  admin: {
    defaultColumns: ['mail', 'subject', 'message','updatedAt'],
    useAsTitle: 'mail'
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "mail",
      required: true,
      type: "text"
    },
    {
      name: "subject",
      required: true,
      type: "text"
    },
    {
        name: "message",
        required: true,
        type: "textarea"
    }
  ]
}

export default Contact