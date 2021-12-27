export default async function signInUser(email, password) {
  const bodyJSON = JSON.stringify({ email, password });
  const response = await fetch(
    `https://${process.env.userService}/${process.env.development}/user/login`,
    {
      method: "POST",
      body: bodyJSON,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response;
}
