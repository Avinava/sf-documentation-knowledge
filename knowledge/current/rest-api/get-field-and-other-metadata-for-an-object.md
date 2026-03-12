---
title: "Get Field and Other Metadata for an Object"
domain: rest-api
topic: get-field-and-other-metadata-for-an-object
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:34.953Z
estimatedTokens: 205
keywords: [Metadata, sObject, Describe, resource, retrieve, including, URLs, child, relationships]
---

# Get Field and Other Metadata for an Object

> Use the sObject Describe resource to retrieve all the metadata for an object, including
            information about each field, URLs, and child relationships.

# Get Field and Other Metadata for an Object

Use the [sObject Describe](atlas.en-us.api_rest.meta/api_rest/resources_sobject_describe.htm "Completely describes the individual metadata at all levels for the specified object. For example, this can be used to retrieve the fields, URLs, and child relationships for the Account object.") resource to retrieve all the metadata for an object, including information about each field, URLs, and child relationships.

Example

```

```

Example request body

none required

Example response body

```

```

For more information about the items in the request body, see [DescribesObjectResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_describesobjects_describesobjectresult.htm "HTML (New Window)") in the SOAP API Developers Guide.

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Account/describe/ -H "Authorization: Bearer token"
```

```
{
  "name" : "Account",
  "fields" :
  [
    {
      "length" : 18,
      "name" : "Id",
      "type" : "id",
      "defaultValue" : {    "value" : null  },
      "updateable" : false,
      "label" : "Account ID",
      ...
    },

    ...

  ],


  "updateable" : true,
  "label" : "Account",
  "keyPrefix" : "001",
  "custom" : false,

  ...

  "urls" :
  {
    "uiEditTemplate" : "https://MyDomainName.my.salesforce.com/{ID}/e",
    "sobject" : "/services/data/v66.0/sobjects/Account",
    "uiDetailTemplate" : "https://MyDomainName.my.salesforce.com/{ID}",
    ...
  },

  "childRelationships" :
  [
    {
      "field" : "ParentId",
      "deprecatedAndHidden" : false,
      ...
    }, 

    ....

  ],

  "createable" : true,
  "customSetting" : false,
  ...
}
```

## Related Topics

- sObject Describe (atlas.en-us.api_rest.meta/api_rest/resources_sobject_describe.htm)
