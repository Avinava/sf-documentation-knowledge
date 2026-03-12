---
title: "Managed Content Provider Instance"
domain: chatterapi
topic: managed-content-provider-instance
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.529Z
estimatedTokens: 343
keywords: [Managed, Content, Provider, Instance]
---

# Managed Content Provider Instance

> Information about a managed content provider instance.

# Managed Content Provider Instance

Information about a managed content provider instance.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| instanceKey | String | Provider instance key. | Small, 65.0 | 65.0 |
| isDefault | Boolean | Specifies whether the instance is the default instance (true) or not (false). | Small, 65.0 | 65.0 |
| isEnabledForSpace | Boolean | Specifies whether the provider instance is enabled for the managed content space (true) or not (false). If there isn't a managed content space context, defaults to false. | Small, 66.0 | 66.0 |
| name | String | Name of the provider instance. | Small, 65.0 | 65.0 |
| providerInstanceId | String | ID of the provider instance. | Small, 65.0 | 65.0 |

#### See Also

-   [CMS Digital Asset Management Providers](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_dam_providers.htm "Get digital asset management (DAM) providers. Create a DAM provider instance.")

-   [CMS Digital Asset Management Provider](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_dam_provider.htm "Update or delete a digital asset management (DAM) provider instance.")

-   [Managed Content Provider](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_provider.htm "Information about a managed content provider.")

## Related Topics

- CMS Digital Asset Management Providers (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_dam_providers.htm)
- CMS Digital Asset Management Provider (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_dam_provider.htm)
- Managed Content Provider (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_provider.htm)
