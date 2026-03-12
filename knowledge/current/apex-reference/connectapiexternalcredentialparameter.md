---
title: "ConnectApi.ExternalCredentialParameter"
domain: apex-reference
topic: connectapiexternalcredentialparameter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:27.355Z
estimatedTokens: 397
keywords: [ConnectApi.ExternalCredentialParameter, External, credential]
---

# ConnectApi.ExternalCredentialParameter

> External credential parameter.

# ConnectApi.ExternalCredentialParameter

External credential parameter.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| id | String | Parameter ID. | 58.0 |
| parameterDescription | String | Parameter description. | 58.0 |
| parameterName | String | Parameter name. If the parameterType is AuthParameter, valid values are:AwsAccountId—Valid for AwsSv4.AwsProfileArn—Valid for AwsSv4 with RolesAnywhere.AwsRegion—Valid for AwsSv4.AwsService—Valid for AwsSv4.AwsStsDuration—Valid for AwsSv4 with STS or RolesAnywhere.AwsStsExternalId—Valid for AwsSv4 with STS.AwsTrustAnchorArn—Valid for AwsSv4 with RolesAnywhere.Scope—Valid for OAuth.Other parameter types can be any value. | 57.0 |
| parameterType | ConnectApi.​ExternalCredential​ParameterType | Parameter type of the external credential. Values are:AdditionalRefreshStatusCodeAuthParameterAuthProviderAuthProviderUrlAuthProviderUrlQueryParameterJwtBodyClaimJwtHeaderClaimManagedByComponentManagedByFeatureSigningCertificate | 57.0 |
| parameterValue | String | Parameter value. If the parameterType is JwtBodyClaim or JwtHeaderClaim, the parameter value can contain formulas. If the parameterType is AuthProvider or SigningCertificate, the parameter value is the fully qualified entity name of the corresponding entity. | 57.0 |

#### See Also

-   [ConnectApi.ExternalCredential](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_credential.htm "External credential, including the named credentials and principals associated with it and the type and status of each principal.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​ExternalCredential​ParameterType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.ExternalCredential (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_credential.htm)
