---
title: "ConnectApi.Photo"
domain: apex-reference
topic: connectapiphoto
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:28.372Z
estimatedTokens: 574
keywords: [ConnectApi.Photo, Profile, photo.]
---

# ConnectApi.Photo

> Profile photo.

# ConnectApi.Photo

Profile photo.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| fullEmailPhotoUrl | String | A temporary URL to the large profile picture. The URL expires after 30 days and is available to unauthenticated users. | 28.0 |
| largePhotoUrl | String | URL to the large profile picture. The default width is 200 pixels, and the height is scaled so the original image proportions are maintained.If a user hasn’t uploaded a photo, this URL points to a default photo. If the user hasn’t uploaded a photo and the request header included X-Connect-Theme: Salesforce1, this URL points to a default photo based on a theme that the admin selected for the org. | 28.0 |
| mediumPhotoUrl | String | URL to the medium profile picture. The default width is 160 pixels, and the height is scaled so the original image proportions are maintained.If a user hasn’t uploaded a photo, this URL points to a default photo. If the user hasn’t uploaded a photo and the request header included X-Connect-Theme: Salesforce1, this URL points to a default photo based on a theme that the admin selected for the org. | 37.0 |
| photoVersionId | String | 18–character ID to that version of the photo | 28.0 |
| smallPhotoUrl | String | URL to the small profile picture. The default size is 64x64 pixels.If a user hasn’t uploaded a photo, this URL points to a default photo. If the user hasn’t uploaded a photo and the request header included X-Connect-Theme: Salesforce1, this URL points to a default photo based on a theme that the admin selected for the org. | 28.0 |
| standardEmail​PhotoUrl | String | A temporary URL to the small profile. The URL expires after 30 days and is available to unauthenticated users. | 28.0 |
| url | String | A resource that returns a Photo object: for example, /services/data/v66.0/chatter/users/005D0000001LL8OIAW/photo. | 28.0 |

#### See Also

-   [ConnectApi.ChatterGroup](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_chatter_group.htm "Chatter group.")

-   [ConnectApi.RecommendationDefinition](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_definition.htm "Represents a custom recommendation definition.")

-   [ConnectApi.User](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_User.htm "User.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.ChatterGroup (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_chatter_group.htm)
- ConnectApi.RecommendationDefinition (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recommendation_definition.htm)
- ConnectApi.User (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_User.htm)
