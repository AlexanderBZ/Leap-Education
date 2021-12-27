export default async function submitRating(token, bio, link) {
  var preJSON = {
    token: token,
    bio: bio,
    link: link,
  };

  const formattedJSON = JSON.stringify(preJSON);
  const response = await fetch(
    `https://${process.env.userService}/${process.env.development}/user/updatebio`,
    {
      method: "PATCH",
      body: formattedJSON,
      headers: {
        "Content-Type": "application/json",
        "x-amz-security-token": token,
      },
    }
  );
  return response;
}
