---
title: "Engagement Channel Type Result"
domain: chatterapi
topic: engagement-channel-type-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.075Z
estimatedTokens: 276
keywords: [Engagement, Channel, Result, Output, representation]
---

# Engagement Channel Type Result

> Output representation of the details of the engagement channel
      type.

# Engagement Channel Type Result

Output representation of the details of the engagement channel type.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contactPoint | String | The contact point for the engagement channel type. | Small, 56.0 | 56.0 |
| contactPointType | String | The contact point type for the engagement channel type.Possible values are:InPersonNonePhone—Available in API version 57.0 and later.Video—Available in API version 57.0 and later. | Small, 56.0 | 56.0 |
| id | String | The ID of the engagement channel type record. | Small, 56.0 | 56.0 |
| name | String | The name of the engagement channel type. | Small, 56.0 | 56.0 |
| workTypeGroupIds | String[] | The work type group IDs for the engagement channel type.NoteWhen workTypeID is specified in the API request, this property is unspecified. | Small, 56.0 | 56.0 |
| workTypeIds | String[] | The work type Ids for the engagement channel type.NoteWhen workTypeGroupID is specified in the API request, this property is unspecified. | Small, 56.0 | 56.0 |
