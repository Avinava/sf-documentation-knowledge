---
title: "CMS Managed Content Resources"
domain: chatterapi
topic: cms-managed-content-resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:15.693Z
estimatedTokens: 817
keywords: [CMS, Managed, Content, Resources, published, versions, Experience, Cloud, site, channel, Search, delivery, channels, context, user]
---

# CMS Managed Content Resources

> Get published managed content versions for an Experience Cloud site or a channel.
    Search managed content in an Experience Cloud site or channel. Get managed content delivery
    channels for the context user. Get published managed content versions for a channel. Search
    managed content in a channel. Get the binary stream of published managed content. Get or update
    the searchable status for managed content types in a channel. Get a piece of managed content.
    Get a managed content folder.

# CMS Managed Content Resources

Get published managed content versions for an Experience Cloud site or a channel. Search managed content in an Experience Cloud site or channel. Get managed content delivery channels for the context user. Get published managed content versions for a channel. Search managed content in a channel. Get the binary stream of published managed content. Get or update the searchable status for managed content types in a channel. Get a piece of managed content. Get a managed content folder.

If you have enhanced CMS workspaces, see [Enhanced CMS Workspaces Resources](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_managed_content_enhanced_resources.htm "Get managed content channels. Create a managed content channel. Get, update, or delete a managed content channel. Get managed content delivery channels. Get collection items for a channel or Experience Cloud site. Get a collection of published contents for a channel or Experience Cloud site. Get a piece of published content for a channel or Experience Cloud site. Search for content in a channel or Experience Cloud site. Get the binary stream of a media node of published content in a channel. Get or update the searchable status for managed content types in a channel. Get search indexes or trigger search indexing for a channel. Create managed content. Get a version of a piece of content. Clone a piece of managed content. Get, add, or remove taxonomy term associations from managed content. Get digital asset management (DAM) providers. Create, update, or delete a DAM provider instance. Publish and unpublish content. Create, update, get, or delete a managed content variant. Get a managed content folder. Get targets that a managed content space folder can be shared with. Get or update the targets that a managed content space folder is shared with. Search for managed content items, including variants and folders, in spaces and folders. Get managed content spaces. Create, get, or update a managed content space. Get channels for a managed content space. Add or remove channels from a managed content space.").

Available resources are:

| Resource | Description |
| --- | --- |
| /connect/communities/communityId/managed-content​/delivery | Get published managed content versions for an Experience Cloud site. |
| /connect/communities/communityId/managed-content​/delivery/contents/search | Search managed content in an Experience Cloud site. |
| /connect/cms/delivery/channels | Get managed content delivery channels for the context user. |
| /connect/cms/delivery/channels/channelId​/contents/query | Get published managed content versions for a channel. |
| /connect/cms/delivery/channels/channelId​/contents/search | Search managed content in a channel. |
| /connect/cms/delivery/channels/channelId​/media/mediaGUID/content | Get the binary stream of a media node of published content in a channel. |
| /connect/cms/channels/channelId​/searchable-content-types | Get or update the searchable status for managed content types in a channel. |
| /connect/cms/contents/contentKeyOrId | Get a piece of managed content. In enhanced CMS workspaces, get a version of a piece of managed content. |
| /connect/cms/folders/folderId | Get a managed content folder. |

## Related Topics

- Enhanced
        CMS Workspaces Resources (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_managed_content_enhanced_resources.htm)
- /connect/communities/communityId/managed-content​/delivery (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_managed_content_delivery.htm)
- /connect/communities/communityId/managed-content​/delivery/contents/search (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_managed_content_delivery_search.htm)
- /connect/cms/delivery/channels (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_managed_content_delivery_channels.htm)
- /connect/cms/delivery/channels/channelId​/contents/query (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_managed_content_delivery_channel.htm)
- /connect/cms/delivery/channels/channelId​/contents/search (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_managed_content_delivery_search_channel.htm)
- /connect/cms/delivery/channels/channelId​/media/mediaGUID/content (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_managed_content_delivery_content_channel.htm)
- /connect/cms/channels/channelId​/searchable-content-types (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_managed_content_searchable_channel.htm)
- /connect/cms/contents/contentKeyOrId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_contents_content.htm)
- /connect/cms/folders/folderId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_managed_content_cms_folder.htm)
