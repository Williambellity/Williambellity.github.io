function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return parseInt(decodeURIComponent(results[2].replace(/\+/g, " ")), 10);
}
const facebook = getParameterByName("facebook");
const facebookTotal = getParameterByName("facebook") * 5 * 60;
document.getElementById("facebook").innerHTML = facebookTotal;

const twitter = getParameterByName("twitter");
const twitterTotal = getParameterByName("twitter") * 18;
document.getElementById("twitter").innerHTML = twitterTotal;

const instagram_story = getParameterByName("instagram_story");
const instagram_storyTotal = getParameterByName("instagram_story") * 3 * 60;
document.getElementById("instagram_story").innerHTML = instagram_storyTotal;

const instagram_posts = getParameterByName("instagram_posts");
const instagram_postsTotal = getParameterByName("instagram_posts") * 21;
document.getElementById("instagram_posts").innerHTML = instagram_postsTotal;

const snapchat = getParameterByName("snapchat");
const snapchatTotal = getParameterByName("snapchat") * 6 * 60;
document.getElementById("snapchat").innerHTML = snapchatTotal;

const bereal = getParameterByName("bereal");
const berealTotal = getParameterByName("bereal") * 6 * 60;
document.getElementById("bereal").innerHTML = berealTotal;

const tiktok = getParameterByName("tiktok");
const tiktokTotal = getParameterByName("tiktok") * 30;
document.getElementById("tiktok").innerHTML = tiktokTotal;

const moyenne =
  (facebookTotal +
    twitterTotal +
    instagram_storyTotal +
    instagram_postsTotal +
    snapchatTotal +
    berealTotal +
    tiktokTotal) /
  (facebook +
    twitter +
    instagram_story +
    instagram_posts +
    snapchat +
    bereal +
    tiktok);
document.getElementById("moyenne").innerHTML = moyenne;
