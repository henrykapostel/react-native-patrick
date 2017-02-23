export const RequestApi = (url, body = '', method = 'GET') => {
  let header;
  if (method === 'GET') {
    header = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
  } else {
    header = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    };
  }

  return new Promise((resolve, reject) => {
    fetch(url, header)
      .then(response => {
        if (response.status === 200) {
          resolve(null);
        } else {
          resolve(response.json());
        }
      })
      .catch(error => reject(error));
  });
};

export const SignUp = (email, password, confirmPassword, firstName, lastName, phoneNumber) => (
  RequestApi('https://api.birdienow.com/api/account/register', {email, password, confirmPassword, firstName, lastName, phoneNumber}, 'POST')
);
