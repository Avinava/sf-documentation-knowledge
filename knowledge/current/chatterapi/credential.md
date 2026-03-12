---
title: "Credential"
domain: chatterapi
topic: credential
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.836Z
estimatedTokens: 1262
keywords: [Credential, refresh, replace]
---

# Credential

> Get, create, refresh, update, replace, or delete a
    credential.

# Credential

Get, create, refresh, update, replace, or delete a credential.

Resource

```

```

Available version

56.0

HTTP methods

GET, POST, PUT, PATCH, DELETE

PATCH is supported in version 59.0 and later only for custom protocols.

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| externalCredential | String | Fully qualified developer name of the external credential. | Required | 56.0 |
| principalName | String | Name of the external credential named principal. | Required if principalType is NamedPrincipal | 56.0 |
| principalType | String | Type of credential principal. Values are:AwsStsPrincipalNamedPrincipalPerUserPrincipal | Required | 56.0 |

Response body for GET

[Credential](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_credential.htm "Credential.")

Request parameters for POST

Use this request parameter to refresh an OAuth or AWS Roles Anywhere credential.

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| action | String | Action to take when creating the credential. Value is:Refresh | Optional | 58.0 |

Request body for POST, PUT, and PATCH

Use this request body to create (POST), replace (PUT), and update (PATCH) a credential.

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

Response body for POST, PATCH, and PUT

[Credential](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_credential.htm "Credential.")

Request parameters for DELETE

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| authentication​Parameters | String[] | List of authentication parameters only for custom protocols, for example myApiKey,myApiSecret. If unspecified, all credentials are deleted. | Optional | 59.0 |
| externalCredential | String | Fully qualified developer name of the external credential. | Required | 56.0 |
| principalName | String | Name of the external credential named principal. | Required if principalType is NamedPrincipal | 56.0 |
| principalType | String | Type of credential principal. Values are:AwsStsPrincipalNamedPrincipalPerUserPrincipal | Required | 56.0 |

Response for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

## Code Examples

```
/named-credentials/credential
```

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

## Related Topics

- Credential (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_credential.htm)
- Credential Value Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_credential_value_input.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
- Credential Value (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_credential_value.htm)
