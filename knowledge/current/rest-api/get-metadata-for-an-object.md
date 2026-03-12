---
title: "Get Metadata for an Object"
domain: rest-api
topic: get-metadata-for-an-object
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:34.944Z
estimatedTokens: 167
keywords: [Metadata, sObject, Basic, resource]
---

# Get Metadata for an Object

> Use the sObject Basic Information resource to get metadata
            for an object.

# Get Metadata for an Object

Use the sObject Basic Information resource to get metadata for an object.

Example for getting Account metadata

```

```

Example request body for getting Account metadata

none required

Example response body for getting Account metadata

```

```

To get a complete description of an object, including field names and their metadata, see [Get a List of Objects](atlas.en-us.api_rest.meta/api_rest/dome_describeGlobal.htm "Use the Describe Global resource to list the objects available in your org and available to the logged-in user. This resource also returns the org encoding, as well as maximum batch size permitted in queries.").

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Account/ -H "Authorization: Bearer token"
```

```
{
  "objectDescribe" :
  {
    "name" : "Account",
    "updateable" : true,
    "label" : "Account",
    "keyPrefix" : "001",

    ...

    "replicateable" : true,
    "retrieveable" : true,
    "undeletable" : true,
    "triggerable" : true
  },
  "recentItems" :
  [
    {
      "attributes" :
      {
        "type" : "Account",
        "url" : "/services/data/v66.0/sobjects/Account/001D000000INjVeIAL"
      },
      "Id" : "001D000000INjVeIAL",
      "Name" : "asdasdasd"
    },

    ...

  ]
}
```

## Related Topics

- Get a List of Objects (atlas.en-us.api_rest.meta/api_rest/dome_describeGlobal.htm)
