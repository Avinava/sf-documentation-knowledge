---
title: "Get a List of Objects"
domain: rest-api
topic: get-a-list-of-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:34.852Z
estimatedTokens: 82
keywords: [Objects, Describe, resource, org, logged-in, user, encoding, well, maximum, batch, size, permitted, queries]
---

# Get a List of Objects

> Use the Describe Global resource to list the objects available in your org and
    available to the logged-in user. This resource also returns the org encoding, as well as maximum
    batch size permitted in queries.

# Get a List of Objects

Use the Describe Global resource to list the objects available in your org and available to the logged-in user. This resource also returns the org encoding, as well as maximum batch size permitted in queries.

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
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/ -H "Authorization: Bearer token"
```

```
{ 
  "encoding" : "UTF-8", 
  "maxBatchSize" : 200, 
  "sobjects" : [ { 
    "activateable" : false, 
    "custom" : false,
    "customSetting" : false, 
    "createable" : true, 
    "deletable" : true, 
    "deprecatedAndHidden" : false, 
    "feedEnabled" : true, 
    "keyPrefix" : "001", 
    "label" : "Account", 
    "labelPlural" : "Accounts", 
    "layoutable" : true, 
    "mergeable" : true, 
    "mruEnabled" : true, 
    "name" : "Account", 
    "queryable" : true, 
    "replicateable" : true, 
    "retrieveable" : true, 
    "searchable" : true, 
    "triggerable" : true, 
    "undeletable" : true,
    "updateable" : true, 
    "urls" : { 
      "sobject" : "/services/data/v66.0/sobjects/Account", 
      "describe" : "/services/data/v66.0/sobjects/Account/describe", 
      "rowTemplate" : "/services/data/v66.0/sobjects/Account/{ID}" 
    },
  }, 
  ...
  ]
}
```
