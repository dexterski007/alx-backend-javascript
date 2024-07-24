import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup([firstName, lastName, fileName]) {
  const promiseUser = signUpUser([firstName, lastName]);
  const promisePhoto = uploadPhoto(fileName);

  return Promise.allSettled([promiseUser, promisePhoto])
    .then((results) => {
      results.map((result) => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason,
      }));
    });
}
