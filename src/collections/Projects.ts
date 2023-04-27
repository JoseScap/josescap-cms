import { CollectionConfig } from "payload/types";

const Project: CollectionConfig = {
  slug: "projects",
  admin: {
    defaultColumns: ['name', 'description', 'technologies', 'github', 'demo', 'public', 'mainImage', 'mainImage','images','updatedAt'],
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
      required: true,
      type: "textarea"
    },
    {
      name: "technologies",
      type: "array",
      fields: [
        {
          name: "technology",
          type: "relationship",
          relationTo: "technologies"
        }
      ]
    },
    {
      name: "github",
      required: true,
      type: "array",
      fields: [
        {
          name: "name",
          type: "text"
        },
        {
          name: "url",
          type: "text",
          validate: async (val) => {
            const regex = /^https?:\/\/github\.com\/([a-zA-Z0-9_-]+)\/([a-zA-Z0-9_-]+)$/;
    
            if (regex.test(val)) {
              return true;
            }
    
            return 'Please, write a github repository';
          },
        }
      ]
    },
    {
      name: "demo",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text"
        },
        {
          name: "url",
          type: "text"
        }
      ]
    },
    {
      name: "public",
      label: "Is this project published?",
      type: "checkbox"
    },
    {
      name: "mainImage",
      type: "upload",
      relationTo: "images"
    },
    {
      name: "images",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "images"
        }
      ]
    }
  ]
}

export default Project