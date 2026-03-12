---
title: "Photo"
domain: chatterapi
topic: photo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.345Z
estimatedTokens: 676
keywords: [Photo]
---

# Photo

> Photo.

# Photo

Photo.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| fullEmailPhotoUrl | String | A temporary URL to the large profile picture that expires after 30 days. This URL is available to unauthenticated users. | Medium, 29.0 | 27.0 |
| largePhotoUrl | String | URL to the large profile picture. The default width is 200 pixels, while the length is scaled so the original image proportions are maintained.If a user hasn’t uploaded a photo, this URL points to a default photo. If the user hasn’t uploaded a photo and the request header included X-Connect-Theme: Salesforce1, this URL points to a default photo based on a theme that the admin selected for the org. | Medium, 29.0 | 23.0 |
| mediumPhotoUrl | String | URL to the medium profile picture. The default width is 160 pixels, and the height is scaled so the original image proportions are maintained.If a user hasn’t uploaded a photo, this URL points to a default photo. If the user hasn’t uploaded a photo and the request header included X-Connect-Theme: Salesforce1, this URL points to a default photo based on a theme that the admin selected for the org. | Small, 37.0 | 37.0 |
| photoVersionId | String | 18-character ID to that version of the photo. | Small, 29.0 | 24.0 |
| smallPhotoUrl | String | URL to the small profile picture. The default size is 64x64 pixels.If a user hasn’t uploaded a photo, this URL points to a default photo. If the user hasn’t uploaded a photo and the request header included X-Connect-Theme: Salesforce1, this URL points to a default photo based on a theme that the admin selected for the org. | Small, 29.0 | 23.0 |
| standardEmail​PhotoUrl | String | A temporary URL to the small profile picture that expires after 30 days. This URL is available to unauthenticated users. | Small, 29.0 | 27.0 |
| url | String | URL to a resource that returns a Photo response body: for example, /services/data/v66.0​​/chatter/users/005D0000001LL8OIAW/photo. | Small, 29.0 | 27.0 |

#### See Also

-   [Group Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_detail.htm "Chatter group detail.")

-   [Custom Recommendation Definition](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendation_definition.htm "A custom recommendation definition.")

-   [User Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_detail.htm "User detail. If the context user doesn’t have permission to see a property, the property is set to null.")

-   [User Summary](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm "The User Summary response body is a subset of the User Detail response body.")

## Related Topics

- Group Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_detail.htm)
- Custom Recommendation Definition (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recommendation_definition.htm)
- User Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_detail.htm)
- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
