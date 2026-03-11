---
title: "Get Field Values from a Standard Object Record"
domain: rest-api
topic: get-field-values-from-a-standard-object-record
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:24.903Z
keywords: [Get, Field, Values, Standard, Object, Record]
---

# Get Field Values from a Standard Object Record

# Get Field Values from a Standard Object Record

You use the GET method of the [sObject Rows](atlas.en-us.api_rest.meta/api_rest/resources_sobject_retrieve.htm "Accesses records based on a specified object and record ID. Retrieves, updates, or deletes records based on the HTTP method. Use the GET method to retrieve records or specific field values, the DELETE method to delete records, or the PATCH method to update records.") resource to retrieve field values from a record.

You can specify the fields you want to retrieve with the optional fields parameter. If you specify fields that don’t exist or are inaccessible to you by field-level security, a 400 error response is returned.

If you don’t use the fields parameter, the request retrieves all standard and custom fields from the record. These retrieved fields are the same as the fields returned by an sObject Describe request for the object. Fields that are inaccessible to you by field-level security are not returned in the response body.

In the following example, the Account Number and Billing Postal Code are retrieved from an Account.

Example for retrieving values from fields on an Account object

```

```

Example request body

None required

Example response body

```

```