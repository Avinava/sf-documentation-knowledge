---
title: "Get the Default Search Scope and Order"
domain: rest-api
topic: get-the-default-search-scope-and-order
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:35.048Z
estimatedTokens: 222
keywords: [Get, Default, Search, Scope, Order, resource, retrieve, default, search, scope, order, logged-in, user, including, any, pinned, objects, user’s, results, page.]
---

# Get the Default Search Scope and Order

> Use the Search Scope and Order resource to retrieve the default
            global search scope and order for the logged-in user, including any pinned objects in
            the user’s search results page.

# Get the Default Search Scope and Order

Use the [Search Scope and Order](atlas.en-us.api_rest.meta/api_rest/resources_search_scope_order.htm "Returns an ordered list of objects in the default global search scope of a logged-in user. Global search keeps track of which objects the user interacts with and how often, and arranges the search results accordingly. Objects used most frequently appear at the top of the list.") resource to retrieve the default global search scope and order for the logged-in user, including any pinned objects in the user’s search results page.

In the following example, the default global search scope of the logged-in user consists of the site, idea, case, opportunity, account, and user objects, in the order in which they are returned in the response body.

Example usage

```

```

Example request body

none required

Example response body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/search/scopeOrder -H "Authorization: Bearer token"
```

```
[
  {
    "type":"Site",
    "url":"/services/data/v66.0/sobjects/Site/describe"
  },
  {
    "type":"Idea",
    "url":"/services/data/v66.0/sobjects/Idea/describe"
  },
  {
    "type":"Case",
    "url":"/services/data/v66.0/sobjects/Case/describe"
  },
  {
    "type":"Opportunity",
    "url":"/services/data/v66.0/sobjects/Opportunity/describe"
  },
  {
    "type":"Account",
    "url":"/services/data/v66.0/sobjects/Account/describe"
  },
  {
    "type":"User",
    "url":"/services/data/v66.0/sobjects/User/describe"
  }
]
```

## Related Topics

- Search Scope and Order (atlas.en-us.api_rest.meta/api_rest/resources_search_scope_order.htm)
