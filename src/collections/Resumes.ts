import { CollectionConfig } from "payload/types";

const Resumes: CollectionConfig = {
  slug: "resumes",
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
    staticURL: "/media/resume",
    staticDir: "media/resume",
    mimeTypes: ["application/pdf"]
  }
}

export default Resumes