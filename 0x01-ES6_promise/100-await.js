import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const uploadPromise = await uploadPhoto();
  const userPromise = await createUser();
  try {
    return { photo: uploadPromise, user: userPromise };
  } catch (error) {
    return { photo: null, user: null };
  }
}
