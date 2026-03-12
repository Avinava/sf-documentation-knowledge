---
title: "Get a Record Using an External ID"
domain: rest-api
topic: get-a-record-using-an-external-id
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:36.245Z
estimatedTokens: 173
keywords: [Get, Record, External, GET, sObject, Rows, resource, get, records, specific, external, ID.]
---

# Get a Record Using an External ID

> You can use the GET method of the sObject Rows by External ID resource to get records with a specific external ID.

# Get a Record Using an External ID

You can use the GET method of the [sObject Rows by External ID](atlas.en-us.api_rest.meta/api_rest/resources_sobject_upsert.htm "Creates, retrieves, upserts, or deletes records based on the value of a specified external ID field. By using the PATCH method with this resource, you can send upsert requests to Salesforce.") resource to get records with a specific external ID.

The following example assumes there is a Merchandise\_\_c custom object with a MerchandiseExtID\_\_c external ID field.

Example usage for retrieving a Merchandise\_\_c record using an external ID

```

```

Example request body

none required

Example response body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Merchandise__c/MerchandiseExtID__c/123 -H "Authorization: Bearer token"
```

```
{ 
    "attributes" : {
        "type" : "Merchandise__c",
        "url" : "/services/data/v66.0/sobjects/Merchandise__c/a00D0000008oWP8IAM"
     },
    "Id" : "a00D0000008oWP8IAM",
    "OwnerId" : "005D0000001KyEIIA0",
    "IsDeleted" : false,
    "Name" : "Example Merchandise",
    "CreatedDate" : "2012-07-12T17:49:01.000+0000",
    "CreatedById" : "005D0000001KyEIIA0",
    "LastModifiedDate" : "2012-07-12T17:49:01.000+0000",
    "LastModifiedById" : "005D0000001KyEIIA0",
    "SystemModstamp" : "2012-07-12T17:49:01.000+0000",
    "Description__c" : "Merch with external ID",
    "Price__c" : 10.0,
    "Total_Inventory__c" : 100.0,
    "Distributor__c" : null,
    "MerchandiseExtID__c" : 123.0
}
```

## Related Topics

- sObject Rows by External ID (atlas.en-us.api_rest.meta/api_rest/resources_sobject_upsert.htm)
