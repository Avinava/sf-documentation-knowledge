---
title: "chatter:feed"
domain: pages
topic: chatterfeed
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.217Z
estimatedTokens: 508
keywords: [chatter, feed, Displays, record, user, Usage, Limitations, Attributes]
---

# chatter:feed

> Displays the Chatter feed for a record or a user.

# chatter:feed

Displays the Chatter feed for a record or a user.

## Usage Limitations

-   Chatter components are unavailable for Visualforce pages on Experience Cloud sites.
-   Ext JS version 3.0 and earlier can’t be included on pages that use this component.
-   The chatter:feed component doesn't support feedItemType when the entityId is a user.
-   The chatter:feed component doesn’t support the creation of hyperlinks in Chatter posts through the rich text editor. In Salesforce Classic, users can still attach a link to a Chatter post. See [Attach a Link to a File or Other Content to a Post](https://help.salesforce.com/s/articleView?id=experience.collab_attach_link.htm&type=5&language=en_US).

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| entityId | id | ID of the record for which to display the feed; for example, {!Contact.Id}. To display the Chatter feed of the current user, use {!$User.Id}. | Yes | 20.0 |  |
| feedItemType | String | The feed item type on which the record or user feed is filtered. For accepted values, see the type field for the FeedItem object. |  | 20.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| onComplete | String | The JavaScript function to call after a post or comment is added to the feed |  | 20.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |
| reRender | Object | The ID of one or more components that are redrawn when the result of the action method returns to the client. This value can be a single ID, a comma-separated list of IDs, or a merge field expression for a list or collection of IDs. |  | 20.0 |  |
| showPublisher | Boolean | Displays the Chatter publisher. In archived groups, the publisher is hidden regardless of the value specified. |  | 20.0 |  |
