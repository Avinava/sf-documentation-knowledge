---
title: "Named Credentials"
domain: chatterapi
topic: named-credentials
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.454Z
estimatedTokens: 435
keywords: [Named, Credentials, org, credential]
---

# Named Credentials

> Get a list of named credentials in the org. Create a named
      credential.

# Named Credentials

Get a list of named credentials in the org. Create a named credential.

Resource

```

```

Available version

58.0

HTTP methods

GET, POST

Response body for GET

[Named Credential List](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_named_credential_list.htm "List of named credentials.")

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| calloutOptions | Named Credential Callout Options Input | Callout options. | Required | 58.0 |
| calloutUrl | String | URL of the named credential in a callout. | Required | 58.0 |
| customHeaders | Credential Custom Header Input[] | Custom HTTP headers. | Optional | 58.0 |
| description | String | Description of the named credential. | Optional | 64.0 |
| developerName | String | Named credential developer name. | Required for POSTOptional for PUT | 58.0 |
| external​Credentials | External Credential Input[] | External credentials used by the named credential. In version 58.0 and later, only one external credential is supported. | Required | 58.0 |
| masterLabel | String | Named credential label. | Required | 58.0 |
| network​Connection | Network Connection Input | PrivateConnect outbound network connection. | Optional depending on type | 58.0 |
| parameters | Named Credential Parameter Input[] | Named credential parameters. | Optional | 58.0 |
| type | String | Type of named credential. Values are:PrivateEndpointSecuredEndpoint | Required | 58.0 |

Response body for POST

[Named Credential](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_named_credential.htm "Named credential associated with an external credential.")

## Code Examples

```
/named-credentials/named-credential-setup
```

```
{
   "developerName": "SamplePrivate",
   "masterLabel": "SamplePrivateLabel",
   "type": "PrivateEndpoint",
   "calloutUrl": "https://www.salesforce.com",
   "externalCredentials": [
      {
         "developerName": "SampleAws"
      }
   ],
   "networkConnection": {
      "developerName": "SampleOutboundConnection"
   },
   "customHeaders": [
      {
         "headerName": "SampleHeader",
         "headerValue": "SampleValue",
         "sequenceNumber": 1
      },
      {
         "headerName": "SampleHeader2",
         "headerValue": "SampleValue2",
         "sequenceNumber": 2
      }
   ],
   "calloutOptions": {
      "allowMergeFieldsInBody": false,
      "allowMergeFieldsInHeader": true,
      "generateAuthorizationHeader": true
   },
   "parameters": [
      {
         "parameterName": "NamespaceOne",
         "parameterType": "AllowedManagedPackageNamespaces",
         "parameterValue": "namespace1",
         "parameterDescription": "This is a description"
      },
      {
         "parameterName": "NamespaceTwo",
         "parameterType": "AllowedManagedPackageNamespaces",
         "parameterValue": "namespace2"
      },
      {
         "parameterName": "ClientCertificate",
         "parameterType": "ClientCertificate",
         "parameterValue": "SampleCertificate"
      }
   ]
}
```

## Related Topics

- Named Credential List (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_named_credential_list.htm)
- Named Credential Callout Options Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_named_credential_callout_options_input.htm)
- Credential Custom Header Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_credential_custom_header_input.htm)
- External Credential Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_external_credential_input.htm)
- Network Connection Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_network_connection_input.htm)
- Named Credential Parameter Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_named_credential_parameter_input.htm)
- Named Credential (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_named_credential.htm)
