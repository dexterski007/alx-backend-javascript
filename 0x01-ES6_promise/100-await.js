import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const [uploadPromise, userPromise] = await Promise.all([uploadPhoto(), createUser()]);
  try {
    return { photo: uploadPromise, user: userPromise };
  } catch (error) {
    return { photo: null, user: null };
  }
}
