## Beatly Music

Hello and welcome to the Beatly Music github repo! Beatly Music is essentially the "Rotten Tomatoes for Music". We combine critics' reviews to create a single average critic score for the 30,000 albums that we have in our database. Beatly Music's overarching goal is simple - community. The users are by and far the most important part of this company. To achieve future goals like becoming a music NFT platform and a Netflix show, we must have a fanatical fanbase. You may ask, how will we know our community is avid enough? That answer is simple as well, when fans are getting face tattoos of the logo I will say we are on the right track. You can see additional information about the project below.

## Pages

| Page               | Description                                                                         |
| ------------------ | ----------------------------------------------------------------------------------- |
| about              | Describe Beatly Music Score and Company                                             |
| album/[slug]       | Album description page                                                              |
| contact            | Contact the company for submitting music, advertising, profile problems, etc.       |
| forgot-password    | Forgot password page                                                                |
| genre              | See home page for all genres                                                        |
| genre/[genreName]  | See specific home page for rap, pop, rock, and country genres                       |
| login              | Login a user to their profile. This page is also the location for users to sign up. |
| news               | Home page for seeing all of the news articles                                       |
| news/[slug]        | News article page for reading an article                                            |
| privacy-policy     | Privacy policy for the website                                                      |
| profile            | Profile page for an user. Uses the user's token to find profile                     |
| profile/[username] | Profile page for an user. Uses an username to find profile                          |
| reset-password     | Reset password page                                                                 |
| terms-conditions   | Terms and conditions page                                                           |
| welcome            | Welcome page used to onboard users after signing up                                 |

## APIs Used

Beatly Music uses four APIs: lastFM, Contentful, Algolia and the Beatly Music API. The lastFM API is used to get the album or artist details in the website. Contentful is used for getting the article data. Algolia is used for scalable search. Finally the Beatly Music API is the main API used for getting album data from the database. The Beatly Music API is comprised of five mircoservices: albumService, criticService, featuredArtistService, userReviewService, userService. You can see some of the routes used from each API below.

## lastFM API

- lastFM (album description) - https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=ec92e125438f6137cd37c26c3a11ecc7&artist=${formattedArtist}&album=${formattedAlbum}&format=json
- lastFM (artist description) - https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&api_key=ec92e125438f6137cd37c26c3a11ecc7&artist=${formattedArtist}&format=json

## Algolia

- Algolia (get album by album name or artist) - https://${process.env.applicationID}-dsn.algolia.net/1/indexes/beatly_index?query=${formattedSearch}&hitsPerPage=7

## Beatly Music API

- Beatly-Music-Api (get album by its slug) - https://{albumService}/{development}/album/slug/${slug}
- Beatly-Music-Api (get editors picks) - https://{albumService}/{development}/featured/albums/${genre}
- Beatly-Music-Api (get new albums) - https://{albumService}/{development}/newalbums/${genre}
- Beatly-Music-Api (get featured artist albums) - https://{featuredArtistService}/{development}/featured/artist/${genre}
- Beatly-Music-Api (get new albums) - https://beatly-music-api.herokuapp.com/{development}/albums/new/${genre}
- Beatly-Music-Api (get critic reviews for album) - https://{criticService}/{development}/album/criticreviews/${id}
- Beatly-Music-Api (get user reviews for album) - https://{userReviewService}/{development}/album/userreviews/${slug}
- Beatly-Music-Api (submit rating) - https://{userReviewService}/{development}/userreview
- Beatly-Music-Api (login user) - https://{userService}/{development}/user/login
- Beatly-Music-Api (sign up user) - https://{userService}/{development}/user/register
- Beatly-Music-Api (forgot password) - https://{userService}/{development}/user/forgot-password
- Beatly-Music-Api (reset password) - https://{userService}/{development}/user/reset-password
- Beatly-Music-Api (get featured user) - https://{userService}/{development}/featured/users
- Beatly-Music-Api (get profile of logged in user) - https://{userService}/{development}/user/profile
- Beatly-Music-Api (get profile of user) - https://{userService}/{development}/user/{username}
- Beatly-Music-Api (update user bio) - https://{userService}/{development}/user/updatebio

## Contentful

Contentful is a little different from the other APIs as with the website we use their custom SDK to get all of the entries which means there's no real URL routes that can be seen in the code.
