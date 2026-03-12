---
title: "Enhanced CMS Workspaces Resources"
domain: chatterapi
topic: enhanced-cms-workspaces-resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:15.688Z
estimatedTokens: 1381
keywords: [Enhanced, CMS, Workspaces, Resources, managed, content, channels, channel, delivery, collection, items, Experience, Cloud, site, published]
---

# Enhanced CMS Workspaces Resources

> Get managed content channels. Create a managed content channel. Get, update, or delete
    a managed content channel. Get managed content delivery channels. Get collection items for a
    channel or Experience Cloud site. Get a collection of published contents for a channel or Experience
    Cloud site. Get a piece of published content for a channel or Experience Cloud site. Search for
    content in a channel or Experience Cloud site. Get the binary stream of a media node of
    published content in a channel. Get or update the searchable status for managed content types in
    a channel. Get search indexes or trigger search indexing for a channel. Create managed content.
    Get a version of a piece of content. Clone a piece of managed content. Get, add, or remove
    taxonomy term associations from managed content. Get digital asset management (DAM) providers.
    Create, update, or delete a DAM provider instance. Publish and unpublish content. Create,
    update, get, or delete a managed content variant. Get a managed content folder. Get targets that
    a managed content space folder can be shared with. Get or update the targets that a managed
    content space folder is shared with. Search for managed content items, including variants and
    folders, in spaces and folders. Get managed content spaces. Create, get, or update a managed
    content space. Get channels for a managed content space. Add or remove channels from a managed
    content space.

# Enhanced CMS Workspaces Resources

Get managed content channels. Create a managed content channel. Get, update, or delete a managed content channel. Get managed content delivery channels. Get collection items for a channel or Experience Cloud site. Get a collection of published contents for a channel or Experience Cloud site. Get a piece of published content for a channel or Experience Cloud site. Search for content in a channel or Experience Cloud site. Get the binary stream of a media node of published content in a channel. Get or update the searchable status for managed content types in a channel. Get search indexes or trigger search indexing for a channel. Create managed content. Get a version of a piece of content. Clone a piece of managed content. Get, add, or remove taxonomy term associations from managed content. Get digital asset management (DAM) providers. Create, update, or delete a DAM provider instance. Publish and unpublish content. Create, update, get, or delete a managed content variant. Get a managed content folder. Get targets that a managed content space folder can be shared with. Get or update the targets that a managed content space folder is shared with. Search for managed content items, including variants and folders, in spaces and folders. Get managed content spaces. Create, get, or update a managed content space. Get channels for a managed content space. Add or remove channels from a managed content space.

These resources are available for enhanced CMS workspaces. If you don’t have enhanced CMS workspaces, see [CMS Managed Content Resources](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_managed_content_resources.htm "Get published managed content versions for an Experience Cloud site or a channel. Search managed content in an Experience Cloud site or channel. Get managed content delivery channels for the context user. Get published managed content versions for a channel. Search managed content in a channel. Get the binary stream of published managed content. Get or update the searchable status for managed content types in a channel. Get a piece of managed content. Get a managed content folder.").

Available resources:

| Resource | Description |
| --- | --- |
| /connect/cms/channels | Get managed content channels. Create a managed content channel. |
| /connect/cms/channels/channelId | Get, update, and delete a managed content channel. |
| /connect/cms/delivery/channels | Get managed content delivery channels for the context user. |
| /connect/cms/delivery/channels/channelId | Get a managed content delivery channel. |
| /connect/cms/delivery/channels/channelId​/collections/collectionKeyOrId/connect/sites/siteId/cms/delivery/collections​/collectionKeyOrId | Get collection items for a channel or Experience Cloud site. |
| /connect/cms/delivery/channels/channelId​/contents/connect/sites/siteId/cms/delivery​/contents | Get a collection of published contents for a channel or Experience Cloud site. |
| /connect/cms/delivery/channels/channelId​/contents/contentKeyOrId/connect/sites/siteId/cms/delivery​/contents/contentKeyOrId | Get a piece of published content for a channel or Experience Cloud site. |
| /connect/cms/delivery/channels/channelId​/contents/enhanced-search/connect/sites/siteId/cms/delivery​/contents/enhanced-search | Search for content in a channel or an Experience Cloud site. |
| /connect/cms/delivery/channels/channelId​/media/mediaGUID/content | Get the binary stream of a media node of published content in a channel. |
| /connect/cms/channels/channelId​/searchable-content-types | Get or update the searchable status for managed content types in a channel. |
| /connect/cms/channels/channelId​/search/indexes | Get the latest live and non-live search indexes or trigger incremental or full search indexing for a channel. |
| /connect/cms/contents | Create managed content. |
| /connect/cms/contents/contentKeyOrId | Get a piece of managed content. In enhanced CMS workspaces, get a version of a piece of managed content. |
| /connect/cms/contents/contentKeyOrId/clone | Clone a piece of managed content. |
| /connect/cms/contents/contentKeyOrId​/taxonomy-terms | Get, add, or remove taxonomy term associations from managed content. |
| /connect/cms/contents/publish | Publish content. |
| /connect/cms/contents/unpublish | Unpublish content. |
| /connect/cms/contents/variants | Create a managed content variant. |
| /connect/cms/contents/variants/variantId | Get, update, or delete a managed content variant. |
| /connect/cms/digital-asset-management-providers | Get digital asset management (DAM) providers. Create a DAM provider instance. |
| /connect/cms/digital-asset-management-providers​/providerInstanceId | Update or delete a digital asset management (DAM) provider instance. |
| /connect/cms/folders/folderId | Get a managed content folder. |
| /connect/cms/folders/folderId/shares | Get or update the targets that a managed content space folder is shared with. |
| /connect/cms/folders/folderId/share-targets | Get targets that a managed content space folder can be shared with. |
| /connect/cms/items/search | Search for managed content items, including variants, in spaces and folders. |
| /connect/cms/spaces | Get managed content spaces. Create a managed content space. |
| /connect/cms/spaces/contentSpaceId | Get or update a managed content space. |
| /connect/cms/spaces/contentSpaceId​/channels | Get channels for a managed content space. Add or remove channels from a managed content space. |

## Related Topics

- CMS Managed Content Resources (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_managed_content_resources.htm)
- /connect/cms/channels (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_channels.htm)
- /connect/cms/channels/channelId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_channel.htm)
- /connect/cms/delivery/channels (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_managed_content_delivery_channels.htm)
- /connect/cms/delivery/channels/channelId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_delivery_channel.htm)
- /connect/cms/delivery/channels/channelId​/collections/collectionKeyOrId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_delivery_collection.htm)
- /connect/sites/siteId/cms/delivery/collections​/collectionKeyOrId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_delivery_collection.htm)
- /connect/cms/delivery/channels/channelId​/contents (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_delivery_contents.htm)
- /connect/sites/siteId/cms/delivery​/contents (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_delivery_contents.htm)
- /connect/cms/delivery/channels/channelId​/contents/contentKeyOrId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_delivery_content.htm)
