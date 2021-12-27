export default async function createUser(username, email, password) {
  const bodyJSON = JSON.stringify({ username, email, password });
  const response = await fetch(
    `https://${process.env.userService}/${process.env.development}/user/create`,
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
