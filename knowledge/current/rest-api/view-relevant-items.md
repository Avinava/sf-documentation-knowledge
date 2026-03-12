---
title: "View Relevant Items"
domain: rest-api
topic: view-relevant-items
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:34.989Z
estimatedTokens: 269
keywords: [View, Relevant, Items, resource, get, list, relevant, records.]
---

# View Relevant Items

> Use the Relevant Items resource to get a list of relevant
        records.

# View Relevant Items

Use the Relevant Items resource to get a list of relevant records.

Example usage for getting a list of the current user’s most relevant records

```

```

Example request body

None required

Example response body

```

```

Example usage for filtering the response to certain objects

```

```

Example request body

None required

Example response body

```

```

Example usage for comparing the user’s current list of relevant records to a previous version

```

```

Example request body

None required

Example response header

```

```

Example response body

```

```

Example usage for comparing the user’s current list of relevant records to a previous version for a particular object

```

```

Example request body

None required

Example response body

```

```

#### See Also

-   [sObject Relevant Items](atlas.en-us.api_rest.meta/api_rest/resources_relevant_items.htm "Gets the current user’s most relevant items. Relevant items include records for objects in the user’s global search scope and also most recently used (MRU) objects.")

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/relevantItems -H "Authorization: Bearer token"
```

```
[ {
    "apiName" : "Contact",
    "key" : "003",
    "label" : "Contacts",
    "lastUpdatedId" : "135866748",
    "recordIds" : [ "003xx000004TxBA" ]
}, {   "apiName" : "Account",
    "key" : "001",
    "label" : "Accounts",
    "lastUpdatedId" : "193640553",
    "recordIds" : [ "001xx000003DWsT" ]
}, {
    "apiName" : "User",
    "key" : "005",
    "label" : "Users",
    "lastUpdatedId" : "-199920321",
    "recordIds" : [ "005xx000001Svqw", "005xx000001SvwK", "005xx000001SvwA" ]
}, {  "apiName" : "Case",
    "key" : "069",
    "label" : "Cases",
    "lastUpdatedId" : "1033471693",
    "recordIds" : [ "069xx0000000006", "069xx0000000001", "069xx0000000002" ]
} ]
```

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/relevantItems?sobjects=Account,User -H "Authorization: Bearer token"
```

```
[ {
    "apiName" : "Account",
    "key" : "001",
    "label" : "Accounts",
    "lastUpdatedId" : "193640553",
    "recordIds" : [ "001xx000003DWsT" ]
}, {
  "apiName" : "User",
    "key" : "005",
    "label" : "Users",
    "lastUpdatedId" : "102959935",
    "recordIds" : [ "005xx000001Svqw", "005xx000001SvwK", "005xx000001SvwA" ]
} ]
```

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/relevantItems?lastUpdatedId=102959935 -H "Authorization: Bearer token"
```

## Related Topics

- sObject Relevant Items (atlas.en-us.api_rest.meta/api_rest/resources_relevant_items.htm)
