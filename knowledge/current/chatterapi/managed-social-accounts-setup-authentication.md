---
title: "Managed Social Accounts Setup Authentication"
domain: chatterapi
topic: managed-social-accounts-setup-authentication
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.724Z
estimatedTokens: 230
keywords: [Managed, Social, Accounts, Setup, Authentication, data, relevant, networks]
---

# Managed Social Accounts Setup Authentication

> Get data relevant to authentication for social
    networks.

# Managed Social Accounts Setup Authentication

Get data relevant to authentication for social networks.

Resource

```

```

Available version

44.0–61.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| callbackUrl | String | Landing page after you authenticate with a social network. | Required | 44.0 |
| socialNetwork | String | Social network that this account belongs to. Values are:FacebookTwitterInstagram (if your org supports it)YouTube (if your org supports it)To see which networks are available on your org, check with your Salesforce representative. | Required | 44.0 |

Response body for GET

[Managed Social Account Setup Authentication](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_social_network_authentication_output.htm "Current configuration of Social Customer Service.")

## Code Examples

```
/connect/social-engagement/setup/managed-social-accounts/authentication
```

## Related Topics

- Managed Social Account Setup Authentication (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_social_network_authentication_output.htm)
