---
title: "Credential Input"
domain: chatterapi
topic: credential-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.455Z
estimatedTokens: 638
keywords: [Credential, Input]
---

# Credential Input

> Credential input.

# Credential Input

Credential input.

Root XML tag

<credential>

JSON example for creating a credential (POST)

```

```

JSON example for replacing a credential (PUT)

In this example. assume the credential has two values: apiKey and apiSecret. When this request body is used with PUT, apiKey is updated and apiSecret is deleted.

```

```

JSON example for updating a custom credential (PATCH)

PATCH is supported only for custom credentials. Only the credentials included in the request body are updated. In this example. assume the credential has two values: apiKey and apiSecret. When this request body is used with PATCH, apiKey is updated and apiSecret remains the same.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| authentication​Protocol | String | Authentication protocol of the external credential. Values are:AwsSv4BasicCustomJwtOAuth | Required | 56.0 |
| authentication​ProtocolVariant | String | Authentication protocol variant of the external credential. Values are:AwsSv4_STS—AWS Signature Version 4 with Security Token Service.ClientCredentialsClientSecret—OAuth 2.0 Client Credentials client secret. Client secrets are sent in the callout’s request body.ClientCredentialsClientSecretBasic—OAuth 2.0 Client Credentials client secret. Client secrets are sent in the callout’s authorization header, as with Basic authentication.ClientCredentialsJwtAssertion—OAuth 2.0 Client Credentials JSON Web Token assertion.JwtBearer—OAuth 2.0 JSON Web Token bearer flow.NoAuthentication—No authentication.RolesAnywhere—AWS Signature Version 4 with Identity and Access Management (IAM) Roles Anywhere.If specified, the authentication protocol variant must match the actual protocol variant of the external credential. | Optional | 57.0 |
| credentials | Map<String, Credential Value Input> | Map of protocol-specific credentials.Authentication protocols have credential allowlists and encryption rules.AwsSv4—awsAccessKeyId (not encrypted), awsSecretAccessKey (encrypted), awsRoleArn (not encrypted)Custom—Any credential name is valid (user sets encryption rules) | Required | 56.0 |
| externalCredential | String | Fully qualified developer name of the external credential. | Required | 56.0 |
| principalName | String | Name of the external credential named principal. | Required if principalType is NamedPrincipal | 56.0 |
| principalType | String | Type of credential principal. Values are:AwsStsPrincipalNamedPrincipalPerUserPrincipal | Required | 56.0 |

## Code Examples

```
{
externalCredential: "ecNameAws",
authenticationProtocol: "AwsSv4",
principalName: "principalA",
principalType: "NamedPrincipal",
credentials: {
   awsAccessKeyId: {
      value: "00000000000",
      encrypted: false
   },
   awsSecretAccessKey: {
      value: "aws-secret-value",
      encrypted: true
   },
   awsRoleArn: {
      value: "arn:partition:service:region:account-id:resource-id",
      encrypted: false
   }
}
}
```

```apex
{
   authenticationProtocol: String : "Custom",
   externalCredential: String : "medicalIntegrationExternalCredential",
   principalName: String : "customerSupportGroup", 
   principalType: String : "NamedPrincipal",
   // Map<String, ConnectApi.CredentialValue>
   credentials: { 
       apiKey: { 
           value: String : "00000000",
           encrypted: Boolean : false
       }
   }
}
```

```apex
{
   authenticationProtocol: String : "Custom",
   externalCredential: String : "medicalIntegrationExternalCredential",
   principalName: String : "customerSupportGroup", 
   principalType: String : "NamedPrincipal",
   // Map<String, ConnectApi.CredentialValue>
   credentials: { 
       apiKey: { 
           value: String : "00000000",
           encrypted: Boolean : false
       }
   }
}
```

## Related Topics

- Credential Value Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_credential_value_input.htm)
