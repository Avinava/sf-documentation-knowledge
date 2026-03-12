---
title: "Environment Hub SSO User Mapping Input"
domain: chatterapi
topic: environment-hub-sso-user-mapping-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.599Z
estimatedTokens: 227
keywords: [Environment, Hub, SSO, User, Mapping, Input, Creates, org, member]
---

# Environment Hub SSO User Mapping Input

> Creates an SSO mapping between a user in an Environment Hub org and
      a user in an Environment Hub member org.

# Environment Hub SSO User Mapping Input

Creates an SSO mapping between a user in an Environment Hub org and a user in an Environment Hub member org.

Root XML tag

<ssoUserMapping>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| hubUserId | String | The ID of a user in an Environment Hub organization. | Required | 36.0 |
| memberUsername | String | The username of a user in an Environment Hub member organization. | Required | 36.0 |

#### See Also

-   [Environment Hub SSO User Mapping Generator](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_environment_hub_sso_mapping.htm "Creates an SSO mapping between an Environment Hub user and a user in a hub member org. An SSO user mapping lets the Environment Hub user log in as the mapped user in the member org without having to re-authenticate.")

## Code Examples

```
{
  "hubUserId":"005B0000000F6SNIA0",
  "memberUsername":"jeanSmith"
}
```

## Related Topics

- Environment Hub SSO User Mapping Generator (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_environment_hub_sso_mapping.htm)
