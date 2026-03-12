---
title: "Get Search Result Layouts for Objects"
domain: rest-api
topic: get-search-result-layouts-for-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:34.933Z
estimatedTokens: 155
keywords: [Search, Result, Layouts, Objects, resource, retrieve, layout, configuration, query]
---

# Get Search Result Layouts for Objects

> Use the Search Result Layouts resource to retrieve the search result layout
      configuration for each object specified in the query string.

# Get Search Result Layouts for Objects

Use the [Search Result Layouts](atlas.en-us.api_rest.meta/api_rest/resources_search_layouts.htm "Returns search result layout information for the objects in the query string. For each object, this call returns the list of fields displayed on the search results page as columns, the number of rows displayed on the first page, and the label used on the search results page.") resource to retrieve the search result layout configuration for each object specified in the query string.

Example usage

```

```

Example request body

None required

Example response body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/search/layout/?q=Account,Contact,Lead,Asset "Authorization: Bearer token"
```

```
[ { "label" : "Search Results",
    "limitRows" : 25,
    "searchColumns" : [ { "field" : "Account.Name",
          "format" : null,
          "label" : "Account Name",
          "name" : "Name"
        },
        { "field" : "Account.Site",
          "format" : null,
          "label" : "Account Site",
          "name" : "Site"
        },
        { "field" : "Account.Phone",
          "format" : null,
          "label" : "Phone",
          "name" : "Phone"
        },
        { "field" : "User.Alias",
          "format" : null,
          "label" : "Account Owner Alias",
          "name" : "Owner.Alias"
        }
      ]
  },
  { "label" : "Search Results",
    "limitRows" : 25,
    "searchColumns" : [ { "field" : "Contact.Name",
          "format" : null,
          "label" : "Name",
          "name" : "Name"
        },
        { "field" : "Account.Name",
          "format" : null,
          "label" : "Account Name",
          "name" : "Account.Name"
        },
        { "field" : "Account.Site",
          "format" : null,
          "label" : "Account Site",
          "name" : "Account.Site"
        },
        { "field" : "Contact.Phone",
          "format" : null,
          "label" : "Phone",
          "name" : "Phone"
        },
        { "field" : "Contact.Email",
          "format" : null,
          "label" : "Email",
          "name" : "Email"
        },
        { "field" : "User.Alias",
          "format" : null,
          "label" : "Contact Owner Alias",
          "name" : "Owner.Alias"
        }
      ]
  },
  { "label" : "Search Results",
    "limitRows" : 25,
    "searchColumns" : [ { "field" : "Lead.Name",
          "format" : null,
          "label" : "Name",
          "name" : "Name"
        },
        { "field" : "Lead.Title",
          "format" : null,
          "label" : "Title",
          "name" : "Title"
        },
        { "field" : "Lead.Phone",
          "format" : null,
          "label" : "Phone",
          "name" : "Phone"
        },
        { "field" : "Lead.Company",
          "format" : null,
          "label" : "Company",
          "name" : "Company"
        },
        { "field" : "Lead.Email",
          "format" : null,
          "label" : "Email",
          "name" : "Email"
        },
        { "field" : "Lead.Status",
          "format" : null,
          "label" : "Lead Status",
          "name" : "toLabel(Status)"
        },
        { "field" : "Name.Alias",
          "format" : null,
          "label" : "Owner Alias",
          "name" : "Owner.Alias"
        }
      ]
  },
]
```

## Related Topics

- Search Result Layouts (atlas.en-us.api_rest.meta/api_rest/resources_search_layouts.htm)
