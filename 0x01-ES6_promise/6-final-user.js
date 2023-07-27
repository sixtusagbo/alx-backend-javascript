import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => {
    const response = [];

    results.forEach((result) => {
      response.push({
        status: result.status,
        value: result.value,
      });
    });

    return response;
  });
}
