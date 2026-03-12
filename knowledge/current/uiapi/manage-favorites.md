---
title: "Manage Favorites"
domain: uiapi
topic: manage-favorites
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:20.036Z
estimatedTokens: 550
keywords: [Manage, Favorites, let, users, access, frequently, pages, Salesforce, User, API, resources]
---

# Manage Favorites

> Favorites let users access frequently used pages in Salesforce. Use
      User Interface API Favorites resources to manage favorites.

# Manage Favorites

Favorites let users access frequently used pages in Salesforce. Use User Interface API Favorites resources to manage favorites.

You can create, get, delete, and update favorites, update all favorites at once, and update favorite usage information, for example, the number of times a favorite was clicked. Responses return all fields required to render favorites.

This request returns all the favorites of the context user.

```

```

```

```

Adding a favorite to the top of the list is as easy as knowing what type of favorite it is and how to identify it. For example, to add an Account as a favorite, add it as a Record favorite using its ID. To insert it at the beginning of the list, explicitly set the sortOrder to 1, otherwise it’s inserted at the end of the list.

```

```

To track how often a user accesses a particular favorite, make a patch request using the favorite's ID and see the accessCount increment and the lastAccessDate update.

```

```

Removing a favorite is as easy and requires using the favorite's ID again.

```

```

To reorder or rename your favorites, you have some options. The first option is to individually update each favorite one by one. When reordering this way, the server automatically updates the sort order of affected favorites in the list so the sort order stays consistent. The second and more useful option is to reorder, rename, and delete favorites in a single request. This option is useful for building an edit dialog where the user can rename some favorites, delete others, and reorder whichever they choose. All these changes can then be made in a single request.

```

```

Here’s the input for the PUT request:

```

```

Here’s the response for the PUT request:

```

```

In this single request, we deleted our contact John Doe, moved Leads to Follow Up to the top of the list, and we renamed My Best Opportunities to Top Opportunities.

#### See Also

-   [Favorites](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_favorites.htm "Use these resources to create and update a single favorite or a collection of favorites, and to get favorites usage information. These resources make it easy to build UI for favorites.")

## Code Examples

```
GET /ui-api/favorites
```

```
{
  "favorites" : [ {
    "accessCount" : 1,
    "iconColor" : "FCB95B",
    "iconUrl" : "https://.../img/icon/t4v35/standard/opportunity_120.png",
    "id" : "0MVR00000004GGlOAM",
    "lastAccessDate" : "2017-08-07T18:51:54.000Z",
    "name" : "My Best Opportunities",
    "objectType" : "Opportunity",
    "sortOrder" : 1,
    "subtitle" : "Opportunities",
    "target" : "00BR0000000tTTwMAM",
    "targetType" : "ListView"
  }, {
    "accessCount" : 1,
    "iconColor" : "A094ED",
    "iconUrl" : "https://.../img/icon/t4v35/standard/contact_120.png",
    "id" : "0MVR00000004FOPOA2",
    "lastAccessDate" : "2017-07-21T21:35:27.000Z",
    "name" : "John Doe",
    "objectType" : "Contact",
    "sortOrder" : 2,
    "subtitle" : "Contact",
    "target" : "003R0000001bivAIAQ",
    "targetType" : "Record"
  }, {
    "accessCount" : 1,
    "iconColor" : "f6707b",
    "iconUrl" : "https://.../img/icon/t4v35/custom/custom84_120.png",
    "id" : "0MVR000000004D5OAI",
    "lastAccessDate" : "2017-08-11T17:24:01.000Z",
    "name" : "Trend Board",
    "objectType" : "TabDefinition",
    "sortOrder" : 3,
    "subtitle" : "Tab",
    "target" : "Trend_Board",
    "targetType" : "Tab"
  }, {
    "accessCount" : 1,
    "iconColor" : "F88962",
    "iconUrl" : "https://.../img/icon/t4v35/standard/lead_120.png",
    "id" : "0MVR00000004GOpOAM",
    "lastAccessDate" : "2017-08-11T17:24:24.000Z",
    "name" : "Leads to Follow Up on",
    "objectType" : "Lead",
    "sortOrder" : 4,
    "subtitle" : "Leads",
    "target" : "Lead",
    "targetType" : "ListView"
  } ]
}
```

```
POST /ui-api/favorites?target=001R0000002LBXUIA4&targetType=Record&sortOrder=1
{
  "accessCount" : 1,
  "iconColor" : "7F8DE1",
  "iconUrl" : "https://.../img/icon/t4v35/standard/account_120.png",
  "id" : "0MVR000000004DFOAY",
  "lastAccessDate" : "2017-08-11T19:26:04.000Z",
  "name" : "Global Media",
  "objectType" : "Account",
  "sortOrder" : 1,
  "subtitle" : "Account",
  "target" : "001R0000002LBXUIA4",
  "targetType" : "Record"
}
```

```
PATCH /ui-api/favorites/0MVR000000004DFOAY/usage
{
  "accessCount" : 2,
  "iconColor" : "7F8DE1",
  "iconUrl" : "https://.../img/icon/t4v35/standard/account_120.png",
  "id" : "0MVR000000004DFOAY",
  "lastAccessDate" : "2017-08-11T19:31:17.416Z",
  "name" : "Global Media",
  "objectType" : "Account",
  "sortOrder" : 1,
  "subtitle" : "Account",
  "target" : "001R0000002LBXUIA4",
  "targetType" : "Record"
}
```

```
DELETE /ui-api/favorites/0MVR000000004DFOAY
```

## Related Topics

- Favorites (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_favorites.htm)
