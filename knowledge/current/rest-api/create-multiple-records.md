---
title: "Create Multiple Records"
domain: rest-api
topic: create-multiple-records
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.950Z
estimatedTokens: 298
keywords: [Create, Multiple, Records, While, resource, used, create, nested, records, multiple, unrelated, same, type., single, request, two, hundred, records., data, supply]
---

# Create Multiple Records

> While the  resource can be used to create nested records, you can
        also create multiple, unrelated records of the same type. In a single request, you can
        create up to two hundred records. In the request data, you supply the required and optional
        field values for each record, each record’s type, and a reference ID for each record, and
        then use the POST method of the resource. The response body will contain the IDs of the
        created records if the request is successful. Otherwise, the response contains only the
        reference ID of the record that caused the error and the error information.

# Create Multiple Records

While the resource can be used to create nested records, you can also create multiple, unrelated records of the same type. In a single request, you can create up to two hundred records. In the request data, you supply the required and optional field values for each record, each record’s type, and a reference ID for each record, and then use the POST method of the resource. The response body will contain the IDs of the created records if the request is successful. Otherwise, the response contains only the reference ID of the record that caused the error and the error information.

The following example creates four new accounts. The record data is provided in newrecords.json.

Example for creating four new accounts

```

```

Example request body newrecords.json file for creating four new accounts

```

```

Example response body after successfully creating records

```

```

#### See Also

-   [sObject Tree](atlas.en-us.api_rest.meta/api_rest/resources_composite_sobject_tree.htm "Creates one or more sObject trees with root records of the specified type. An sObject tree is a collection of nested, parent-child records with a single root record.")

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/composite/tree/Account/ -H "Authorization: Bearer token -H "Content-Type: application/json" -d "@newrecords.json"
```

```
{
"records" :[{
    "attributes" : {"type" : "Account", "referenceId" : "ref1"},
    "name" : "SampleAccount1",
    "phone" : "1111111111",
    "website" : "www.salesforce.com",
    "numberOfEmployees" : "100",
    "industry" : "Banking"   
    },{
    "attributes" : {"type" : "Account", "referenceId" : "ref2"},
    "name" : "SampleAccount2",
    "phone" : "2222222222",
    "website" : "www.salesforce2.com",
    "numberOfEmployees" : "250",
    "industry" : "Banking"
    },{
    "attributes" : {"type" : "Account", "referenceId" : "ref3"},
    "name" : "SampleAccount3",
    "phone" : "3333333333",
    "website" : "www.salesforce3.com",
    "numberOfEmployees" : "52000",
    "industry" : "Banking"
    },{
    "attributes" : {"type" : "Account", "referenceId" : "ref4"},
    "name" : "SampleAccount4",
    "phone" : "4444444444",
    "website" : "www.salesforce4.com",
    "numberOfEmployees" : "2500",
    "industry" : "Banking"
    }]
}
```

```
{
    "hasErrors" : false,
    "results" : [{
     "referenceId" : "ref1",
     "id" : "001D000000K1YFjIAN"
     },{
     "referenceId" : "ref2",
     "id" : "001D000000K1YFkIAN"
     },{
     "referenceId" : "ref3",
     "id" : "001D000000K1YFlIAN"
     },{
     "referenceId" : "ref4",
     "id" : "001D000000K1YFmIAN"     
     }]
}
```

## Related Topics

- sObject Tree (atlas.en-us.api_rest.meta/api_rest/resources_composite_sobject_tree.htm)
