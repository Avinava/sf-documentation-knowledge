---
title: "Create Social Named Credential Result"
domain: chatterapi
topic: create-social-named-credential-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.106Z
estimatedTokens: 173
keywords: [Social, Named, Credential, Result, creating, external, channel]
---

# Create Social Named Credential Result

> Result of a creating a named credential for a social external channel.

# Create Social Named Credential Result

Result of a creating a named credential for a social external channel.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| authUrl | String | Authentication URL. | Small, 64.0 | 64.0 |
| externalCredential​DeveloperName | String | Developer name of the external credential that was created. | Small, 64.0 | 64.0 |
| namedCredential​DeveloperName | String | Developer name of the named credential that was created. | Small, 64.0 | 64.0 |
| status | Social Status Response | Status response specifiying whether the Webstore Meta Config was successfully created. | Small, 64.0 | 64.0 |

## Related Topics

- Social Status Response (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_status_response.htm)
- Webstore Meta Config (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_web_store_meta_config.htm)
