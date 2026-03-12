---
title: "Experience Cloud Site Preview URL"
domain: chatterapi
topic: experience-cloud-site-preview-url
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.706Z
estimatedTokens: 187
keywords: [Experience, Cloud, Site, Preview, URL]
---

# Experience Cloud Site Preview URL

> Get a preview URL for an Experience Cloud site page.

# Experience Cloud Site Preview URL

Get a preview URL for an Experience Cloud site page.

Resource

```

```

The pageApiName is the API name of a page, such as Product\_Detail or Home.

Available version

61.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| urlParameters | String | URL-encoded string of key-value pairs, such as recordName%3Example-record-​name%26recordId%3D01txx0000006i7IAAQ. | Optional unless required by the page URL | 61.0 |

Response body for GET

[Community Preview URL](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_community_preview_url.htm "Preview URL for an Experience Cloud site page.")

## Code Examples

```
/connect/communities/communityId/preview-url/pages/pageApiName
```

## Related Topics

- Community Preview URL (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_community_preview_url.htm)
