---
title: "External Email Services Resource"
domain: chatterapi
topic: external-email-services-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.034Z
estimatedTokens: 166
keywords: [External, Email, Services, Resource, context, user]
---

# External Email Services Resource

> Get information about the external email services available to the
      context user.

# External Email Services Resource

Get information about the external email services available to the context user.

Resource

```

```

Available version

37.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| landingPage | String | The landing page that the user starts on when they are finished with the OAuth authorization process. | Required | 37.0 |

Response body for GET

[OAuth User](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_oauth_info.htm#connect_responses_user_oauth_info "Information about a user’s OAuth status.")

## Code Examples

```
/authenticated-email-service
```

## Related Topics

- OAuth User (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_oauth_info.htm)
