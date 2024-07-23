import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promisePhoto = uploadPhoto();
  const promiseUser = createUser();
  Promise.all([promisePhoto, promiseUser]).then((values) => {
    console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
