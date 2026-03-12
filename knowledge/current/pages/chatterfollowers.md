---
title: "chatter:followers"
domain: pages
topic: chatterfollowers
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.229Z
estimatedTokens: 227
keywords: [chatter, followers, Displays, record, components, unavailable, Visualforce, pages, Force.com, sites, Ext, versions, less, included, component]
---

# chatter:followers

> Displays the list of Chatter followers for a record. Note that Chatter components are unavailable for Visualforce pages on Force.com sites. Ext JS versions less than 3 should not be included on pages that use this component.

# chatter:followers

Displays the list of Chatter followers for a record. Note that Chatter components are unavailable for Visualforce pages on Force.com sites. Ext JS versions less than 3 should not be included on pages that use this component.

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| entityId | id | Entity ID of the record for which to display the list of followers; for example, Contact.Id | Yes | 20.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |

#### See Also

-   [chatter:follow](atlas.en-us.pages.meta/pages/pages_compref_chatter_follow.htm)

## Related Topics

- chatter:follow (atlas.en-us.pages.meta/pages/pages_compref_chatter_follow.htm)
