---
title: "External Credential Input"
domain: chatterapi
topic: external-credential-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:11.636Z
estimatedTokens: 610
keywords: [External, Credential, Input]
---

# External Credential Input

> Input used to create or update an external
    credential.

# External Credential Input

Input used to create or update an external credential.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

JSON example for creating an external credential (POST)

```

```

JSON example for updating an external credential (PUT)

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| authentication​Protocol | String | Authentication protocol of the external credential. Values are:AwsSv4BasicCustomJwtOAuth | Required | 58.0 |
| authentication​ProtocolVariant | String | Authentication protocol variant of the external credential. Values are:AwsSv4_STS—AWS Signature Version 4 with Security Token Service.ClientCredentialsClientSecret—OAuth 2.0 Client Credentials client secret. Client secrets are sent in the callout’s request body.ClientCredentialsClientSecretBasic—OAuth 2.0 Client Credentials client secret. Client secrets are sent in the callout’s authorization header, as with Basic authentication.ClientCredentialsJwtAssertion—OAuth 2.0 Client Credentials JSON Web Token assertion.JwtBearer—OAuth 2.0 JSON Web Token bearer flow.NoAuthentication—No authentication.RolesAnywhere—AWS Signature Version 4 with Identity and Access Management (IAM) Roles Anywhere.If specified, the authentication protocol variant must match the actual protocol variant of the external credential. | Optional | 58.0 |
| customHeaders | Credential Custom Header Input[] | List of credential custom headers. | Optional | 58.0 |
| developerName | String | Fully qualified developer name of the external credential. | Required for POSTOptional for PUT | 58.0 |
| masterLabel | String | External credential label. | Required | 58.0 |
| parameters | External Credential Parameter Input[] | List of external credential parameters. | Optional depending on authenticationProtocol and authenticationVariant | 58.0 |
| principals | External Credential Principal Input[] | List of principals the credential has. | Optional | 58.0 |

#### See Also

-   [External Credential Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_external_credential_input.htm "Input used to create or update an external credential.")

## Code Examples

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
- External Credential Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_external_credential_input.htm)
