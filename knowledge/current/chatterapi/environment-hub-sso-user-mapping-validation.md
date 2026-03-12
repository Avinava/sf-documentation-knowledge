---
title: "Environment Hub SSO User Mapping Validation"
domain: chatterapi
topic: environment-hub-sso-user-mapping-validation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:18.470Z
estimatedTokens: 307
keywords: [Environment, Hub, SSO, User, Mapping, Validation, Results, validating, potential, member, org]
---

# Environment Hub SSO User Mapping Validation

> Results from validating a potential SSO user mapping between a user
      in an Environment Hub and a user in a hub member org.

# Environment Hub SSO User Mapping Validation

Results from validating a potential SSO user mapping between a user in an Environment Hub and a user in a hub member org.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorFieldNames | String[] | If the parameters were invalid, this property contains the names of fields with errors. | Small, 36.0 | 36.0 |
| errorMessage | String | If the parameters were invalid, this property contains the error string. | Small, 36.0 | 36.0 |
| hubUserId | String | The ID of a user in an Environment Hub organization. | Small, 36.0 | 36.0 |
| memberUsername | String | The username of a user in an Environment Hub member organization. | Small, 36.0 | 36.0 |
| userMappingId | String | The ID of the new SSO user mapping. | Small, 36.0 | 36.0 |

#### See Also

-   [Environment Hub SSO User Mapping Generator](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_environment_hub_sso_mapping.htm "Creates an SSO mapping between an Environment Hub user and a user in a hub member org. An SSO user mapping lets the Environment Hub user log in as the mapped user in the member org without having to re-authenticate.")

## Related Topics

- Environment Hub SSO User Mapping Generator (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_environment_hub_sso_mapping.htm)
