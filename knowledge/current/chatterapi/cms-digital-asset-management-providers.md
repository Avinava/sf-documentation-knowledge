---
title: "CMS Digital Asset Management Providers"
domain: chatterapi
topic: cms-digital-asset-management-providers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.810Z
estimatedTokens: 415
keywords: [CMS, Digital, Asset, Management, Providers, DAM, provider, instance]
---

# CMS Digital Asset Management Providers

> Get digital asset management (DAM) providers. Create a DAM provider
    instance.

# CMS Digital Asset Management Providers

Get digital asset management (DAM) providers. Create a DAM provider instance.

Resource

```

```

Available version

65.0

HTTP methods

GET, POST

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contentSpaceId | String | ID of the managed content space. | Optional | 66.0 |

Response body for GET

[Managed Content Provider Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_provider_collection.htm "Collection of managed content providers.")

Request body for POST

Root XML tag

<ManagedContentProviderInput>

JSON example for creating a managed content provider instance

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| instanceKey | String | Provider instance key. | Required for POSTAt least one property is required for PATCH | 65.0 |
| isDefault | Boolean | Specifies whether the instance is the default instance (true) or not (false). | Required for POSTAt least one property is required for PATCH. | 65.0 |
| name | String | Name of the provider instance. | Required for POSTAt least one property is required for PATCH. | 65.0 |
| providerLightning​ComponentId | String | ID of the provider lightning component. | Required for POSTThis property isn’t supported for PATCH. | 65.0 |

Response body for POST

[Managed Content Provider Instance](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_provider_instance.htm "Information about a managed content provider instance.")

## Code Examples

```
/connect/cms/digital-asset-management-providers
```

```
{
  "instanceKey" : "https://xxxxxx.com",
  "isDefault" : "true",
  "name" : "Bynder-Brand-1",
  "providerLightningComponentId" : "106xxxxxxxxxxx"
}
```

## Related Topics

- Managed Content Provider Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_provider_collection.htm)
- Managed Content Provider Instance (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_provider_instance.htm)
