---
title: "Social Account"
domain: chatterapi
topic: social-account
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.157Z
estimatedTokens: 233
keywords: [Social, Account, network]
---

# Social Account

> A social account on a social network.

# Social Account

A social account on a social network.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| externalSocial​AccountId | String | ID of the external social account, if available. | Small, 38.0 | 38.0 |
| handle | String | Social handle, screen name, or alias that identifies this account. | Small, 36.0 | 36.0 |
| name | String | Name of the account as defined by the account's owner. | Small, 36.0 | 36.0 |
| profileUrl | String | URL to the account's profile. | Small, 36.0 | 36.0 |
| socialPersonaId | String | ID of the social persona account, if the external social account ID isn’t available. | Small, 39.0 | 39.0 |

#### See Also

-   [Social Post Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_social_post_capability.htm "If a feed element has this capability, it can interact with a social post on a social network.")

## Related Topics

- Social Post Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_social_post_capability.htm)
