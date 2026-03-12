---
title: "Named Credential"
domain: chatterapi
topic: named-credential
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.447Z
estimatedTokens: 473
namespace: String
keywords: [Named, Credential, associated, external]
---

# Named Credential

> Named credential associated with an external
    credential.

**Namespace:** `String`

# Named Credential

Named credential associated with an external credential.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| calloutOptions | Named Credential Callout Options | Callout options for the named credential. | Big, 58.0 | 58.0 |
| calloutStatus | String | Indicates whether a named credential is enabled for callout. Values are:DisabledEnabled | Small, 59.0 | 59.0 |
| calloutUrl | String | URL of the named credential in a callout. | Small, 58.0 | 58.0 |
| createdBy​Namespace | String | Namespace of the package that created the named credential. | Small, 59.0 | 59.0 |
| customHeaders | Credential Custom Header[] | Custom HTTP headers for the named credential. | Big, 58.0 | 58.0 |
| description | String | Description of the named credential. | Small, 64.0 | 64.0 |
| developerName | String | Fully qualified developer name of the named credential. | Small, 56.0 | 56.0 |
| external​Credentials | External Credential[] | External credentials used by the named credential. | Big, 58.0 | 58.0 |
| id | String | Named credential ID. | Small, 58.0 | 58.0 |
| masterLabel | String | Named credential label. | Small, 56.0 | 56.0 |
| network​Connection | Network Connection | PrivateConnect outbound network connection for the named credential. | Big, 58.0 | 58.0 |
| parameters | Named Credential Parameter[] | Named credential parameters. | Big, 58.0 | 58.0 |
| type | String | Type of named credential. Values are:PrivateEndpointSecuredEndpoint | Small, 58.0 | 58.0 |
| url | String | Connect REST API URL of the named credential. | Small, 58.0 | 58.0 |

#### See Also

-   [External Credential](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_external_credential.htm "External credential, including the named credentials and principals associated with it and the type and status of each principal.")

-   [Named Credential List](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_named_credential_list.htm "List of named credentials.")

## Code Examples

```
/named-credentials/named-credential-setup/developerName
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

- Named Credential Callout Options Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_named_credential_callout_options_input.htm)
- Credential Custom Header Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_credential_custom_header_input.htm)
- External Credential Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_external_credential_input.htm)
- Network Connection Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_network_connection_input.htm)
- Named Credential Parameter Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_named_credential_parameter_input.htm)
- Named Credential (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_named_credential.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
- Named Credential Callout Options (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_named_credential_callout_options.htm)
- Credential Custom Header (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_credential_custom_header.htm)
- External Credential (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_external_credential.htm)
