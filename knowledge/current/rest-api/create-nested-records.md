---
title: "Create Nested Records"
domain: rest-api
topic: create-nested-records
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.840Z
estimatedTokens: 428
keywords: [Nested, Records, sObject, Tree, resource, share, root, record, account, along, child, contacts, second, accounts, Once]
---

# Create Nested Records

> Use the sObject Tree resource to create nested records that share a root record type.
        For example, in a single request, you can create an account along with its child contacts,
        and a second account along with its child accounts and contacts. Once the request is
        processed, the records are created and parents and children are automatically linked by ID.
        In the request data, you supply the record hierarchies, required and optional field values,
        each record’s type, and a reference ID for each record, and then use the POST method of the
        resource. The response body will contain the IDs of the created records if the request is
        successful. Otherwise, the response contains only the reference ID of the record that caused
        the error and the error information.

# Create Nested Records

Use the sObject Tree resource to create nested records that share a root record type. For example, in a single request, you can create an account along with its child contacts, and a second account along with its child accounts and contacts. Once the request is processed, the records are created and parents and children are automatically linked by ID. In the request data, you supply the record hierarchies, required and optional field values, each record’s type, and a reference ID for each record, and then use the POST method of the resource. The response body will contain the IDs of the created records if the request is successful. Otherwise, the response contains only the reference ID of the record that caused the error and the error information.

The following example creates two sets of nested records. The first set includes an account and two child contact records. The second set includes an account, one child account record, and one child contact record. The record data is provided in newrecords.json.

Example for creating two new accounts and their child records

```

```

Example request body newrecords.json file for creating two new Accounts and their child records

```

```

Example response body after successfully creating records and relationships

```

```

Once the request is processed, all six records are created with the parent-child relationships specified in the request.

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
    "phone" : "1234567890",
    "website" : "www.salesforce.com",
    "numberOfEmployees" : "100",
    "industry" : "Banking",
    "Contacts" : {
      "records" : [{
         "attributes" : {"type" : "Contact", "referenceId" : "ref2"},
         "lastname" : "Smith",
         "Title" : "President",
         "email" : "sample@salesforce.com"
         },{
         "attributes" : {"type" : "Contact", "referenceId" : "ref3"},
         "lastname" : "Evans",
         "title" : "Vice President",
         "email" : "sample@salesforce.com"
         }]
      }
    },{
    "attributes" : {"type" : "Account", "referenceId" : "ref4"},
    "name" : "SampleAccount2",
    "phone" : "1234567890",
    "website" : "www.salesforce.com",
    "numberOfEmployees" : "52000",
    "industry" : "Banking",
    "childAccounts" : {
      "records" : [{
        "attributes" : {"type" : "Account", "referenceId" : "ref5"},
        "name" : "SampleChildAccount1",
        "phone" : "1234567890",
        "website" : "www.salesforce.com",
        "numberOfEmployees" : "100",
        "industry" : "Banking"
        }]
      },
    "Contacts" : {
      "records" : [{
        "attributes" : {"type" : "Contact", "referenceId" : "ref6"},
        "lastname" : "Jones",
        "title" : "President",
        "email" : "sample@salesforce.com"
        }]
      }
  }]
}
```

```
{
    "hasErrors" : false,
    "results" : [{
     "referenceId" : "ref1",
     "id" : "001D000000K0fXOIAZ"
     },{
     "referenceId" : "ref4",
     "id" : "001D000000K0fXPIAZ"
     },{
     "referenceId" : "ref2",
     "id" : "003D000000QV9n2IAD"
     },{
     "referenceId" : "ref3",
     "id" : "003D000000QV9n3IAD"
     },{
     "referenceId" : "ref5",
     "id" : "001D000000K0fXQIAZ"
     },{
     "referenceId" : "ref6",
     "id" : "003D000000QV9n4IAD"
     }]
}
```

## Related Topics

- sObject Tree (atlas.en-us.api_rest.meta/api_rest/resources_composite_sobject_tree.htm)
