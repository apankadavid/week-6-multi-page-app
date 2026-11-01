
export function fakeSignUp(values) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        values.email.trim().toLowerCase() === "taken@example.com"
      ) {
        reject(
          new Error("That email is already registered. Try another.")
        );
      } else {
        resolve();
      }
    }, 1500);
  });
}
