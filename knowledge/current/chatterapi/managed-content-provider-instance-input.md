---
title: "Managed Content Provider Instance Input"
domain: chatterapi
topic: managed-content-provider-instance-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.038Z
estimatedTokens: 348
keywords: [Managed, Content, Provider, Instance, Input]
---

# Managed Content Provider Instance Input

> Create or update a managed content provider instance.

# Managed Content Provider Instance Input

Create or update a managed content provider instance.

Root XML tag

<ManagedContentProviderInput>

JSON example for creating a managed content provider instance

```

```

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

#### See Also

-   [CMS Digital Asset Management Providers](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_dam_providers.htm "Get digital asset management (DAM) providers. Create a DAM provider instance.")

-   [CMS Digital Asset Management Provider](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_dam_provider.htm "Update or delete a digital asset management (DAM) provider instance.")

## Code Examples

```
{
  "instanceKey" : "https://xxxxxx.com",
  "isDefault" : "true",
  "name" : "Bynder-Brand-1",
  "providerLightningComponentId" : "106xxxxxxxxxxx"
}
```

```
{
  "instanceKey" : "https://xxxxxx.com",
  "isDefault" : "true",
  "name" : "Bynder-Brand-1"
}
```

## Related Topics

- CMS Digital Asset Management Providers (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_dam_providers.htm)
- CMS Digital Asset Management Provider (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_dam_provider.htm)
