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
    imageSizes: [
      {
        name: 'thumbnail',
        height: 225,
        width: 400,
        position: 'centre',
      },
      {
        name: 'small',
        width: 768,
        height: 432,
        position: 'centre',
      },
      {
        name: 'medium',
        width: 1024,
        height: 576,
        position: 'centre',
      },
      {
        name: 'large',
        width: 1440,
        height: 810,
        position: 'centre',
      },
      {
        name: 'xlarge',
        width: 1920,
        height: 1080,
        position: 'centre',
      },
    ],
    resizeOptions: {
      fit: "contain"
    }
  }
}

export default Images