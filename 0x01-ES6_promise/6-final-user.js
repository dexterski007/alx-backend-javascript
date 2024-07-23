import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup([firstName, lastName, fileName]) {
  const promiseUser = signUpUser([firstName, lastName]);
  const promisePhoto = uploadPhoto(fileName);

  return Promise
    .allSettled([promiseUser, promisePhoto])
    .then((results) => {
      results.map(({ status, value, reason }) => ({
        status,
        value: status === 'fulfilled' ? value : reason.toString(),
      }));
    });
}
