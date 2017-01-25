export function checkUserPayload(payload: any): Promise<boolean> {

  const p = new Promise((resolve, reject) => {
    if(payload.username == "user") {
      return resolve(true);
    }

    resolve(false);
  });

  return p;
}
