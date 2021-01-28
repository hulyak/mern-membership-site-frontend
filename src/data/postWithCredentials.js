import firebase from 'firebase/app';

export const postWithCredentials = async (url, bodyData) => {
 
  const user = firebase.auth().currentUser;
  if (!user) {
    console.log('Error!');
    return;
  }
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(bodyData),
    headers: {
      AuthToken: await user.getIdToken(),
      'Content-Type': 'application/json'
    },
  });
  return response;
};
