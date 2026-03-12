---
title: "ConnectApi.SocialAccount"
domain: apex-reference
topic: connectapisocialaccount
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:29.050Z
estimatedTokens: 212
keywords: [ConnectApi.SocialAccount, social, account, network]
---

# ConnectApi.SocialAccount

> A social account on a social network.

# ConnectApi.SocialAccount

A social account on a social network.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| externalSocial​AccountId | String | ID of the external social account, if available. | 38.0 |
| handle | String | Social handle, screen name, or alias that identifies this account. | 36.0 |
| name | String | Name of the account as defined by the account's owner. | 36.0 |
| profileUrl | String | URL to the account's profile. | 36.0 |
| socialPersonaId | String | ID of the social persona account, if the external social account ID isn’t available. | 39.0 |

#### See Also

-   [ConnectApi.SocialPostCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_social_post_capability.htm "If a feed element has this capability, it can interact with a social post on a social network.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.SocialPostCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_social_post_capability.htm)
