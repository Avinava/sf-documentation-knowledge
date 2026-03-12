---
title: "chatter:userPhotoUpload"
domain: pages
topic: chatteruserphotoupload
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.235Z
estimatedTokens: 205
keywords: [chatter, userPhotoUpload, Uploads, user’s, photo, their, profile, component, enable, org, Users, belong, either, Standard, User]
---

# chatter:userPhotoUpload

> Uploads a user’s photo to their Chatter profile page. To use this component, you must enable Chatter in the org. Users must belong to either Standard User, Portal User, High Volume Portal User, or Chatter External User profiles.

# chatter:userPhotoUpload

Uploads a user’s photo to their Chatter profile page. To use this component, you must enable Chatter in the org. Users must belong to either Standard User, Portal User, High Volume Portal User, or Chatter External User profiles.

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |
| showOriginalPhoto | Boolean | Displays the photo in its original format instead of the default cropped format. |  | 28.0 |  |
