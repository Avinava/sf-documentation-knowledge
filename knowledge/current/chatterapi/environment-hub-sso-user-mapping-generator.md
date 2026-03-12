---
title: "Environment Hub SSO User Mapping Generator"
domain: chatterapi
topic: environment-hub-sso-user-mapping-generator
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.990Z
estimatedTokens: 384
keywords: [Environment, Hub, SSO, User, Mapping, Generator, Creates, member, org, lets, log, mapped, having, re-authenticate]
---

# Environment Hub SSO User Mapping Generator

> Creates an SSO mapping between an Environment Hub user and a user in
      a hub member org. An SSO user mapping lets the Environment Hub user log in as the mapped user
      in the member org without having to re-authenticate.

# Environment Hub SSO User Mapping Generator

Creates an SSO mapping between an Environment Hub user and a user in a hub member org. An SSO user mapping lets the Environment Hub user log in as the mapped user in the member org without having to re-authenticate.

User mappings can be many-to-one but not one-to-many. In other words, you can associate multiple users in the hub org with the same user in a member org.

Resource

```

```

Available version

36.0

HTTP methods

POST

Request body for POST

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

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| hubUserId | String | The ID of a user in an Environment Hub organization. | Required | 36.0 |
| memberUsername | String | The username of a user in an Environment Hub member organization. | Required | 36.0 |

Response body for POST

[Environment Hub SSO User Mapping Validation](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_environment_hub_sso_user_mapping.htm "Results from validating a potential SSO user mapping between a user in an Environment Hub and a user in a hub member org.")

## Code Examples

```
/connect/environment-hub/sso-user-mappings/hubMemberId
```

```
{
  "hubUserId":"005B0000000F6SNIA0",
  "memberUsername":"jeanSmith"
}
```

## Related Topics

- Environment Hub SSO User Mapping
            Validation (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_environment_hub_sso_user_mapping.htm)
