---
title: "Access Token"
domain: salesforce-feedback-management-dev-guide
topic: access-token
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:41.586Z
estimatedTokens: 134
keywords: [Access, Token, enable, survey, invitation, creation, gather, feedback, unauthenticated, participants]
---

# Access Token

> Create an access token to enable survey invitation creation, and
      gather feedback from unauthenticated participants.

# Access Token

Create an access token to enable survey invitation creation, and gather feedback from unauthenticated participants.

Resource

```

```

Example

```

```

HTTP methods

POST

Request body for POST

Pass the 18 digit orgId in the request. Make a Query() request on the Organization object to fetch the organization ID. See [Execute a SOQL Query](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/dome_query.htm "HTML (New Window)").

```

```

Response body for POST

JSON example

```

```

## Code Examples

```
/<MyDomainURL>/<AppPrefix>/accessToken
```

```
https://yourInstance.salesforce-scrt.com​/surveys/v1/accessToken
```

```
{
"orgId": "00DSB00000026pJ2AQ"
}
```

```
{
    "accessToken": "eyJraWQiOiIwM2ZiN......-UA",
    "expiresIn": 3600,
    "tokenType": "Bearer"
}
```
