---
title: "Files Connect Repository Authentication"
domain: chatterapi
topic: files-connect-repository-authentication
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.007Z
estimatedTokens: 278
keywords: [Files, Connect, Repository, Authentication]
---

# Files Connect Repository Authentication

> Authentication information for a repository.

# Files Connect Repository Authentication

Authentication information for a repository.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| authFlowUrl | String | Depends on the authProtocol.NoAuthentication—null.Oauth—URL to start the OAuth flow.Password—URL to the authentication settings for external systems. | Small, 40.0 | 40.0 |
| authProtocol | String | Authentication protocol used for the repository. Values are:NoAuthentication—Repository doesn’t require authentication.Oauth—Repository uses OAuth authentication protocol.Password—Repository uses user name and password authentication protocol. | Small, 40.0 | 40.0 |
| userHas​AuthSettings | Boolean | Specifies whether the user has credentials or the administrator configured the external data source to use the same set of credentials for every user (true). Otherwise, false. | Small, 40.0 | 40.0 |

#### See Also

-   [Files Connect Repository](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_ContentHubRepository.htm "Information about a Files Connect repository.")

## Related Topics

- Files Connect Repository (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_ContentHubRepository.htm)
