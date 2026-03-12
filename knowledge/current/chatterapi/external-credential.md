---
title: "External Credential"
domain: chatterapi
topic: external-credential
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.863Z
estimatedTokens: 707
namespace: String
keywords: [External, Credential, including, named, credentials, principals, associated, status, principal]
---

# External Credential

> External credential, including the named credentials and principals
      associated with it and the type and status of each principal.

**Namespace:** `String`

# External Credential

External credential, including the named credentials and principals associated with it and the type and status of each principal.

If you don’t have the View Setup and Configuration permission, some properties are empty or show limited information.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| authentication​Protocol | String | Authentication protocol of the external credential. Values are:AwsSv4BasicCustomJwtOAuth | Small, 56.0 | 56.0 |
| authentication​ProtocolVariant | String | Authentication protocol variant of the external credential. Values are:AwsSv4_STS—AWS Signature Version 4 with Security Token Service.ClientCredentialsClientSecret—OAuth 2.0 Client Credentials client secret. Client secrets are sent in the callout’s request body.ClientCredentialsClientSecretBasic—OAuth 2.0 Client Credentials client secret. Client secrets are sent in the callout’s authorization header, as with Basic authentication.ClientCredentialsJwtAssertion—OAuth 2.0 Client Credentials JSON Web Token assertion.JwtBearer—OAuth 2.0 JSON Web Token bearer flow.NoAuthentication—No authentication.RolesAnywhere—AWS Signature Version 4 with Identity and Access Management (IAM) Roles Anywhere. | Small, 57.0 | 57.0 |
| authentication​Status | String | Status of the credential authentication. Values are:Configured—Credential has all required credentials for at least one principal.NotConfigured—Credential isn’t configured.Unknown—Credential status can’t be determined because the authentication protocol is custom. | Small, 56.0 | 56.0 |
| createdBy​Namespace | String | Namespace of the package that created the external credential. | Small, 59.0 | 59.0 |
| customHeaders | Credential Custom Header[] | List of custom headers. | Medium, 57.0 | 57.0 |
| developerName | String | Fully qualified developer name of the external credential. | Small, 56.0 | 56.0 |
| id | String | External credential ID. | Small, 58.0 | 58.0 |
| masterLabel | String | External credential label. | Small, 56.0 | 56.0 |
| parameters | External Credential Parameter[] | List of parameters of the external credential. | Medium, 57.0 | 57.0 |
| principals | External Credential Principal[] | List of principals the credential has. | Medium, 56.0 | 56.0 |
| relatedNamed​Credentials | Named Credential[] | List of named credentials associated to the external credential. | Medium, 56.0 | 56.0 |
| url | String | Connect REST API URL for the external credential. | Small, 58.0 | 58.0 |

#### See Also

-   [External Credential List](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_external_credential_list.htm "List of external credentials.")

-   [Named Credential](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_named_credential.htm "Named credential associated with an external credential.")

## Code Examples

```
/named-credentials/external-credentials/developerName
```

```
{
   "developerName": "SampleAws",
   "masterLabel": "SampleAwsLabel",
   "authenticationProtocol": "AwsSv4",
   "authenticationProtocolVariant": "AwsSv4_STS",
   "parameters": [
      {
         "parameterName": "AwsService",
         "parameterType": "AuthParameter",
         "parameterValue": "dynamodb"
      },
      {
         "parameterName": "AwsRegion",
         "parameterType": "AuthParameter",
         "parameterValue": "us-west-2"
      },
      {
         "parameterName": "AwsAccountId",
         "parameterType": "AuthParameter",
         "parameterValue": "sampleAccountId"
      },
      {
         "parameterName": "AwsStsExternalId",
         "parameterType": "AuthProviderUrlQueryParameter",
         "parameterValue": "sampleExternalId"
      },
      {
         "parameterName": "AwsStsDuration",
         "parameterType": "AuthProviderUrlQueryParameter",
         "parameterValue": "1000"
      }
   ],
   "principals": [
      {
         "principalName": "SamplePrincipal",
         "principalType": "NamedPrincipal",
         "sequenceNumber": 1
      }
   ],
   "customHeaders": [
      {
         "headerName": "SampleHeader",
         "headerValue": "SampleHeaderValue",
         "sequenceNumber": 1
      }
   ]
}
```

```
{
   "developerName": "SampleOAuth",
   "masterLabel": "SampleOAuthLabel",
   "authenticationProtocol": "OAuth",
   "authenticationProtocolVariant": "JwtBearer",
   "parameters": [
      {
         "id": "0puxxxxxxxxxxxxxxx",
         "parameterName": "SigningCertificate",
         "parameterType": "SigningCertificate",
         "parameterValue": "SampleCertificate"
      },
      {
         "parameterName": "AuthProviderUrl",
         "parameterType": "AuthProviderUrl",
         "parameterValue": "www.identityprovider.com"
      },
      {
         "parameterDescription": "Expiration Time",
         "parameterName": "exp",
         "parameterType": "JwtBodyClaim",
         "parameterValue": "{!Text(FLOOR((NOW() - DATETIMEVALUE( "1970-01-01 00:00:00" )) * 86400 + 120))}"
      },
      {
         "parameterName": "Scope",
         "parameterType": "AuthParameter",
         "parameterValue": "SampleScope"
      }
   ],
   "principals": [
      {
         "principalName": "SamplePerUserPrincipal",
         "principalType": "PerUserPrincipal",
         "sequenceNumber": 1,
         "parameters": [
            {
               "parameterName": "Scope",
               "parameterType": "AuthParameter",
               "parameterValue": "SamplePrincipalGroupScope"
            }
         ]
      }
   ],
   "customHeaders": [
      {
         "headerName": "SampleHeader",
         "headerValue": "SampleHeaderValue",
         "sequenceNumber": 1
      }
   ]
}
```

## Related Topics

- Credential Custom Header Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_credential_custom_header_input.htm)
- External Credential Parameter Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_external_credential_parameter_input.htm)
- External Credential Principal Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_external_credential_principal_input.htm)
- External Credential (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_external_credential.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
- Credential Custom Header (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_credential_custom_header.htm)
- External Credential Parameter (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_external_credential_parameter.htm)
- External Credential Principal (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_external_credential_principal.htm)
- Named Credential (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_named_credential.htm)
- External Credential List (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_external_credential_list.htm)
