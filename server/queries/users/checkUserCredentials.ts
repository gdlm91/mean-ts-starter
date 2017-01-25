export function checkUserCredentials(username: string, password: string): Promise<boolean> {

  const p = new Promise((resolve, reject) => {
    if(username == "user" && password == "password") {
      return resolve(true);
    }

    resolve(false);
  });

  return p;
}
