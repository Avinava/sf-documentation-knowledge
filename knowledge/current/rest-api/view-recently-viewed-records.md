---
title: "View Recently Viewed Records"
domain: rest-api
topic: view-recently-viewed-records
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:34.942Z
estimatedTokens: 157
keywords: [View, Recently, Viewed, Records, Items, resource]
---

# View Recently Viewed Records

> Use the Recently Viewed Items resource to get a list of
            recently viewed records.

# View Recently Viewed Records

Use the [Recently Viewed Items](atlas.en-us.api_rest.meta/api_rest/resources_recent_items.htm "Gets the most recently accessed items that were viewed or referenced by the current user. Salesforce stores information about record views in the interface and uses it to generate a list of recently viewed and referenced records, such as in the sidebar and for the auto-complete options in search.") resource to get a list of recently viewed records.

Example usage for getting the last two most recently viewed records

```

```

Example request body

none required

Example response body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/recent/?limit=2 -H "Authorization: Bearer token"
```

```
{ 
    "attributes" : 
    { 
        "type" : "Account", 
        "url" : "/services/data/v66.0/sobjects/Account/a06U000000CelH0IAJ" 
    }, 
    "Id" : "a06U000000CelH0IAJ", 
    "Name" : "Acme" 
}, 
{ 
    "attributes" : 
    { 
        "type" : "Opportunity", 
        "url" : "/services/data/v66.0/sobjects/Opportunity/a06U000000CelGvIAJ" 
    }, 
    "Id" : "a06U000000CelGvIAJ", 
    "Name" : "Acme - 600 Widgets" 
}
```

## Related Topics

- Recently Viewed Items (atlas.en-us.api_rest.meta/api_rest/resources_recent_items.htm)
