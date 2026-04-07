---
title: "Privacy Batch API"
domain: mc-apis
topic: privacy-batch-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:22.910Z
estimatedTokens: 183
keywords: [Privacy, Batch, API, Change, settings, Einstein, Recommendations, profile, identifies, profiles, actions, perform]
---

# Privacy Batch API

> Change privacy settings for a Einstein Recommendations profile using the privacy batch API. The batch identifies the profiles and specifies which privacy actions to perform on each profile.

# Privacy Batch API

Change privacy settings for a Einstein Recommendations profile using the privacy batch API. The batch identifies the profiles and specifies which privacy actions to perform on each profile.

The privacy batch API includes these resources:

-   [Create a Batch](atlas.en-us.noversion.mc-apis.meta/mc-apis/pb-create-batch.htm). This API resource creates a batch of privacy setting changes. The call returns a batch\_id you then use to GET the status of the batch changes.
-   [Get Batch Status](atlas.en-us.noversion.mc-apis.meta/mc-apis/pb-get-batch-status.htm). This API resource checks the status of a batch of privacy settings changes. The call returns the status of each change being made to the profiles.

## Related Topics

- Create a Batch (atlas.en-us.noversion.mc-apis.meta/mc-apis/pb-create-batch.htm)
- Get Batch Status (atlas.en-us.noversion.mc-apis.meta/mc-apis/pb-get-batch-status.htm)
