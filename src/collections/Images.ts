import { CollectionConfig } from "payload/types";

const Images: CollectionConfig = {
  slug: "images",
  admin: {
    defaultColumns: ['name', 'updatedAt'],
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
    }
  ],
  upload: {
    staticURL: "/media/images",
    staticDir: "media/images",
    mimeTypes: ["image/jpeg", "image/jpg", "image/png"],
  }
}

export default Images