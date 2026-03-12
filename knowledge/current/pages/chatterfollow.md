---
title: "chatter:follow"
domain: pages
topic: chatterfollow
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:22.225Z
estimatedTokens: 330
keywords: [chatter, follow, Renders, button, user, unfollow, record, components, unavailable, Visualforce, pages, Force.com, sites, Ext, versions]
---

# chatter:follow

> Renders a button for a user to follow or unfollow a Chatter record. Note that Chatter components are unavailable for Visualforce pages on Force.com sites. Ext JS versions less than 3 should not be included on pages that use this component.

# chatter:follow

Renders a button for a user to follow or unfollow a Chatter record. Note that Chatter components are unavailable for Visualforce pages on Force.com sites. Ext JS versions less than 3 should not be included on pages that use this component.

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| entityId | id | Entity ID of the record for which to display the follow or unfollow button; for example, Contact.Id | Yes | 20.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| onComplete | String | The JavaScript function to call after the follow/unfollow event completes |  | 20.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |
| reRender | Object | The ID of one or more components that are redrawn when the result of the action method returns to the client. This value can be a single ID, a comma-separated list of IDs, or a merge field expression for a list or collection of IDs. |  | 20.0 |  |

#### See Also

-   [chatter:followers](atlas.en-us.pages.meta/pages/pages_compref_chatter_followers.htm)

## Related Topics

- chatter:followers (atlas.en-us.pages.meta/pages/pages_compref_chatter_followers.htm)
