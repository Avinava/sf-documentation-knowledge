---
title: "CMS Digital Asset Management Provider"
domain: chatterapi
topic: cms-digital-asset-management-provider
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.804Z
estimatedTokens: 441
keywords: [CMS, Digital, Asset, Management, Provider, DAM, instance]
---

# CMS Digital Asset Management Provider

> Update or delete a digital asset management (DAM) provider instance.

# CMS Digital Asset Management Provider

Update or delete a digital asset management (DAM) provider instance.

Resource

```

```

Available version

65.0

HTTP methods

PATCH, DELETE

PATCH is available in version 66.0 and later.

You can’t delete a DAM provider instance that’s in use. Delete managed content that’s associated with a DAM provider instance before deleting the instance.

Request body for PATCH

Root XML tag

<ManagedContentProviderInput>

JSON example for updating a managed content provider instance

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| instanceKey | String | Provider instance key. | Required for POSTAt least one property is required for PATCH | 65.0 |
| isDefault | Boolean | Specifies whether the instance is the default instance (true) or not (false). | Required for POSTAt least one property is required for PATCH. | 65.0 |
| name | String | Name of the provider instance. | Required for POSTAt least one property is required for PATCH. | 65.0 |
| providerLightning​ComponentId | String | ID of the provider lightning component. | Required for POSTThis property isn’t supported for PATCH. | 65.0 |

Response body for PATCH

[Managed Content Provider Instance](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_provider_instance.htm "Information about a managed content provider instance.")

Response for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

## Code Examples

```
/connect/cms/digital-asset-management-providers/providerInstanceId
```

```
{
  "instanceKey" : "https://xxxxxx.com",
  "isDefault" : "true",
  "name" : "Bynder-Brand-1"
}
```

## Related Topics

- Managed Content Provider Instance (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_provider_instance.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
