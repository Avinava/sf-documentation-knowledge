---
title: "Delete a Record"
domain: rest-api
topic: delete-a-record
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.955Z
estimatedTokens: 153
keywords: [Delete, Record, sObject, Rows, resource, delete, records., Specify, record, DELETE, record.]
---

# Delete a Record

> Use the sObject Rows resource to delete records. Specify the record ID and use the DELETE method of
   the resource to delete a record.

# Delete a Record

Use the [sObject Rows](atlas.en-us.api_rest.meta/api_rest/resources_sobject_retrieve.htm "Accesses records based on a specified object and record ID. Retrieves, updates, or deletes records based on the HTTP method. Use the GET method to retrieve records or specific field values, the DELETE method to delete records, or the PATCH method to update records.") resource to delete records. Specify the record ID and use the DELETE method of the resource to delete a record.

Example for deleting an Account record

```

```

Example request body

None needed

Example response body

None returned

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Account/001D000000INjVe -H "Authorization: Bearer token" -X DELETE
```

## Related Topics

- sObject Rows (atlas.en-us.api_rest.meta/api_rest/resources_sobject_retrieve.htm)
