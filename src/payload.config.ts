import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Projects from './collections/Projects';
import Images from './collections/Images';
import Technologies from './collections/Technologies';
import Resumes from './collections/Resumes';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Projects,
    Images,
    Technologies,
    Resumes
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  cors: '*',
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
