---
title: "Get Field Values from an External Object Record by Using the Salesforce ID"
domain: rest-api
topic: get-field-values-from-an-external-object-record-by-using-the-salesforce-id
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.985Z
estimatedTokens: 228
keywords: [Get, Field, Values, External, Record, Salesforce, sObject, Rows, resource, retrieve, field, values, record., Specify, fields, want, GET, resource.]
---

# Get Field Values from an External Object Record by Using the Salesforce ID

> You use the sObject Rows resource to retrieve field values from a record. Specify the fields
            you want to retrieve in the fields parameter and
            use the GET method of the resource.

# Get Field Values from an External Object Record by Using the Salesforce ID

You use the [sObject Rows](atlas.en-us.api_rest.meta/api_rest/resources_sobject_retrieve.htm "Accesses records based on a specified object and record ID. Retrieves, updates, or deletes records based on the HTTP method. Use the GET method to retrieve records or specific field values, the DELETE method to delete records, or the PATCH method to update records.") resource to retrieve field values from a record. Specify the fields you want to retrieve in the fields parameter and use the GET method of the resource.

In the following example, the Country\_\_c custom field is retrieved from an external object that’s associated with a non-high-data-volume external data source.

Example for retrieving values from fields on the Customer external object

```

```

Example request body

None required

Example response body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Customer__x/x01D0000000002RIAQ?fields=Country__c -H "Authorization: Bearer token"
```

```
{
  "attributes" : {
    "type" : "Customer__x",
    "url" : "/services/data/v66.0/sobjects/Customer__x/x01D0000000002RIAQ"
  },
  "Country__c" : "Argentina",
  "Id" : "x01D0000000002RIAQ"
}
```

## Related Topics

- sObject Rows (atlas.en-us.api_rest.meta/api_rest/resources_sobject_retrieve.htm)
