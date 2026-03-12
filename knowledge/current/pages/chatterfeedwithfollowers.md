---
title: "chatter:feedWithFollowers"
domain: pages
topic: chatterfeedwithfollowers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.221Z
estimatedTokens: 399
keywords: [chatter, feedWithFollowers, integrated, component, displays, feed, record, well, followers, components, unavailable, Visualforce, pages, Force.com, sites]
---

# chatter:feedWithFollowers

> An integrated UI component that displays the Chatter feed for a record, as well as its list of followers. Note that Chatter components are unavailable for Visualforce pages on Force.com sites. Ext JS versions less than 3 should not be included on pages that use this component. Do not include this co

# chatter:feedWithFollowers

An integrated UI component that displays the Chatter feed for a record, as well as its list of followers. Note that Chatter components are unavailable for Visualforce pages on Force.com sites. Ext JS versions less than 3 should not be included on pages that use this component. Do not include this component inside an <apex:form\> tag.

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| entityId | id | Entity ID of the record for which to display the feed; for example, Contact.Id | Yes | 20.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| onComplete | String | The JavaScript invoked when the result of an AJAX update request completes on the client |  | 20.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |
| reRender | Object | The ID of one or more components that are redrawn when the result of the action method returns to the client. This value can be a single ID, a comma-separated list of IDs, or a merge field expression for a list or collection of IDs. |  | 20.0 |  |
| showHeader | Boolean | Shows a metabar header that includes UI tags, a Show/Hide button, and a Follow/Unfollow button |  | 20.0 |  |

#### See Also

-   [chatter:feed](atlas.en-us.pages.meta/pages/pages_compref_chatter_feed.htm "Displays the Chatter feed for a record or a user.")

## Related Topics

- chatter:feed (atlas.en-us.pages.meta/pages/pages_compref_chatter_feed.htm)
