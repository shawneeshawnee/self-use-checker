/*
stats.fm：https://apps.apple.com/app/id1526912392

[rewrite_local]
^https?:\/\/api\.stats\.fm\/api\/v1\/me$ url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/statsfm.js

[MITM]
hostname = api.stats.fm

*/

// Parse the API response body
const responseObj = JSON.parse($response.body);

// Ensuring the 'item' object exists in the response
if (responseObj && responseObj.item) {
    // Updating properties of the 'item' object
    responseObj.item.isPro = true;
    responseObj.item.isPlus = true;
    responseObj.item.hasSwipefy = true;
    responseObj.item.displayName = "AA";
    responseObj.item.customId = "https://t.me/Guding88";

    // Ensuring the 'profile' object exists in the 'item'
    if (responseObj.item.profile) {
        responseObj.item.profile.bio = "!";
        responseObj.item.profile.theme = "pink";
    }

    // Updating the image URL
    responseObj.item.image = "https://cdn.stats.fm/file/statsfm/images/users/31tkfv4thwwc5czcbq24uyyjbtzq/83be2cc47a458ffb84f0ad8a1ba3bba4.webp";
}

// Finalize the response modification
$done({ body: JSON.stringify(responseObj) });