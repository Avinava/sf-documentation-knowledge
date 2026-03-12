---
title: "sObject Rows"
domain: rest-api
topic: sobject-rows
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.927Z
estimatedTokens: 495
keywords: [sObject, Rows, Accesses, records, record, Retrieves, updates, deletes, HTTP, retrieve, specific, PATCH]
---

# sObject Rows

> Accesses records based on a specified object and record
			ID. Retrieves, updates, or deletes records based on the HTTP method. Use the GET method
			to retrieve records or specific field values, the DELETE method to delete records, or
			the PATCH method to update records.

# sObject Rows

Accesses records based on a specified object and record ID. Retrieves, updates, or deletes records based on the HTTP method. Use the GET method to retrieve records or specific field values, the DELETE method to delete records, or the PATCH method to update records.

To create new records, use the [sObject Basic Information](atlas.en-us.api_rest.meta/api_rest/resources_sobject_basic_info.htm "Retrieves basic metadata for a specified object, or creates a new record for the specified object.") or [sObject Rows by External ID](atlas.en-us.api_rest.meta/api_rest/resources_sobject_upsert.htm "Creates, retrieves, upserts, or deletes records based on the value of a specified external ID field. By using the PATCH method with this resource, you can send upsert requests to Salesforce.") resources.

-   **[Get Records Using sObject Rows](atlas.en-us.api_rest.meta/api_rest/resources_sobject_retrieve_get.htm)**
    Gets a record based on the specified object and record ID. The fields and field values of the record are returned in the response body. This resource can be used with external objects in API version 32.0 and later.
-   **[Update Records Using sObject Rows](atlas.en-us.api_rest.meta/api_rest/resources_sobject_retrieve_patch.htm)**
    Updates a record based on the specified object and record ID. Field values provided in the request body replace the existing values in the record. This resource can be used with external objects in API version 32.0 and later.
-   **[Delete Records Using sObject Rows](atlas.en-us.api_rest.meta/api_rest/resources_sobject_retrieve_delete.htm)**
    Deletes records based on the specified object and record ID. This resource can be used with external objects in API version 32.0 and later.

-   [← Previous](atlas.en-us.api_rest.meta/api_rest/resources_sobject_basic_info.htm "sObject Basic Information")
-   [Next →](atlas.en-us.api_rest.meta/api_rest/resources_sobject_upsert.htm "sObject Rows by External ID")

## Related Topics

- sObject Basic Information (atlas.en-us.api_rest.meta/api_rest/resources_sobject_basic_info.htm)
- sObject Rows by External ID (atlas.en-us.api_rest.meta/api_rest/resources_sobject_upsert.htm)
- Get Records Using sObject Rows (atlas.en-us.api_rest.meta/api_rest/resources_sobject_retrieve_get.htm)
- Update Records Using sObject Rows (atlas.en-us.api_rest.meta/api_rest/resources_sobject_retrieve_patch.htm)
- Delete Records Using sObject Rows (atlas.en-us.api_rest.meta/api_rest/resources_sobject_retrieve_delete.htm)
- ← Previous (atlas.en-us.api_rest.meta/api_rest/resources_sobject_basic_info.htm)
- Next → (atlas.en-us.api_rest.meta/api_rest/resources_sobject_upsert.htm)
