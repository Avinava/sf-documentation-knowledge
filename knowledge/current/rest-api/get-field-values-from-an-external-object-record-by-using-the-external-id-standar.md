---
title: "Get Field Values from an External Object Record by Using the
            External ID Standard Field"
domain: rest-api
topic: get-field-values-from-an-external-object-record-by-using-the-external-id-standar
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:24.906Z
keywords: [Get, Field, Values, External, Object, Record, Standard]
---

# Get Field Values from an External Object Record by Using the
            External ID Standard Field

# Get Field Values from an External Object Record by Using the External ID Standard Field

You use the [sObject Rows](atlas.en-us.api_rest.meta/api_rest/resources_sobject_retrieve.htm "Accesses records based on a specified object and record ID. Retrieves, updates, or deletes records based on the HTTP method. Use the GET method to retrieve records or specific field values, the DELETE method to delete records, or the PATCH method to update records.") resource to retrieve field values from a record. Specify the fields you want to retrieve in the fields parameter and use the GET method of the resource.

In the following example, the Country\_\_c custom field is retrieved from an external object. Notice that the id (CACTU) isn’t a Salesforce ID. Instead, it’s the External ID standard field of the external object.

Example for retrieving values from fields on the Customer external object

```

```

Example request body

None required

Example response body

```

```