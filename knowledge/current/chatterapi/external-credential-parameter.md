---
title: "External Credential Parameter"
domain: chatterapi
topic: external-credential-parameter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.561Z
estimatedTokens: 409
keywords: [External, Credential]
---

# External Credential Parameter

> External credential parameter.

# External Credential Parameter

External credential parameter.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | Parameter ID. | Small, 58.0 | 58.0 |
| parameter​Description | String | Parameter description. | Small, 58.0 | 58.0 |
| parameterName | String | Parameter name. If the parameterType is AuthParameter, valid values are:AwsAccountId—Valid for AwsSv4.AwsProfileArn—Valid for AwsSv4 with RolesAnywhere.AwsRegion—Valid for AwsSv4.AwsService—Valid for AwsSv4.AwsStsDuration—Valid for AwsSv4 with STS or RolesAnywhere.AwsStsExternalId—Valid for AwsSv4 with STS.AwsTrustAnchorArn—Valid for AwsSv4 with RolesAnywhere.Scope—Valid for OAuth.Other parameter types can be any value. | Small, 57.0 | 57.0 |
| parameterType | String | Parameter type of the external credential. Values are:AdditionalRefreshStatusCodeAuthParameterAuthProviderAuthProviderUrlAuthProviderUrlQueryParameterJwtBodyClaimJwtHeaderClaimManagedByComponentManagedByFeatureSigningCertificate | Small, 57.0 | 57.0 |
| parameterValue | String | Parameter value. If the parameterType is JwtBodyClaim or JwtHeaderClaim, the parameter value can contain formulas. If the parameterType is AuthProvider or SigningCertificate, the parameter value is the fully qualified entity name of the corresponding entity. | Small, 57.0 | 57.0 |

#### See Also

-   [External Credential](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_external_credential.htm "External credential, including the named credentials and principals associated with it and the type and status of each principal.")

## Related Topics

- External Credential (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_external_credential.htm)
