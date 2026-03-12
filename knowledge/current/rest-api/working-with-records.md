---
title: "Working with Records"
domain: rest-api
topic: working-with-records
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:36.255Z
estimatedTokens: 1019
keywords: [Working, Records, examples, section, REST, API, resources, create, retrieve, update, delete, records, along, record-related, operations.]
---

# Working with Records

> The examples in this section use REST API resources to create, retrieve, update, and
  delete records, along with other record-related operations.

# Working with Records

The examples in this section use REST API resources to create, retrieve, update, and delete records, along with other record-related operations.

-   **[Create a Record](atlas.en-us.api_rest.meta/api_rest/dome_sobject_create.htm)**
    Use the \*\*\* resource to create new records. You supply the required field values in the request data, and send the request using the POST HTTP method. The response body contains the ID of the new record if the call is successful.
-   **[Update a Record](atlas.en-us.api_rest.meta/api_rest/dome_update_fields.htm)**
    You use the sObject Rows resource to update records. Provide the updated record information in your request data and use the PATCH method of the resource with a specific record ID to update that record. Records in a single file must be of the same object type.
-   **[Delete a Record](atlas.en-us.api_rest.meta/api_rest/dome_delete_record.htm)**
    Use the \*\*\* resource to delete records. Specify the record ID and use the DELETE method of the resource to delete a record.
-   **[Get Field Values from a Standard Object Record](atlas.en-us.api_rest.meta/api_rest/dome_get_field_values.htm)**
    You use the GET method of the \*\*\* resource to retrieve field values from a record.
-   **[Get Field Values from an External Object Record by Using the Salesforce ID](atlas.en-us.api_rest.meta/api_rest/dome_get_field_values_external_object_hdv.htm)**
    You use the \*\*\* resource to retrieve field values from a record. Specify the fields you want to retrieve in the fields parameter and use the GET method of the resource.
-   **[Get Field Values from an External Object Record by Using the External ID Standard Field](atlas.en-us.api_rest.meta/api_rest/dome_get_field_values_external_object.htm)**
    You use the sObject Rows resource to retrieve field values from a record. Specify the fields you want to retrieve in the fields parameter and use the GET method of the resource.
-   **[Get a Record Using an External ID](atlas.en-us.api_rest.meta/api_rest/using_resources_retrieve_with_externalid.htm)**
    You can use the GET method of the \*\*\* resource to get records with a specific external ID.
-   **[Insert or Update (Upsert) a Record Using an External ID](atlas.en-us.api_rest.meta/api_rest/dome_upsert.htm)**
    You can use the sObject Rows by External ID resource to create records or update existing records (upsert) based on the value of a specified external ID field.
-   **[Traverse Relationships with Friendly URLs](atlas.en-us.api_rest.meta/api_rest/dome_relationship_traversal.htm)**
    You can traverse relationship fields in standard and custom objects by constructing friendly URLs using the sObject Relationship resource. This approach allows you to directly access records associated by relationships. Using friendly URLs is an easier alternative to accessing records by obtaining object IDs from relationship fields and then inspecting the associated object ID record.
-   **[Get a List of Deleted Records Within a Given Timeframe](atlas.en-us.api_rest.meta/api_rest/dome_get_deleted.htm)**
    Use the \*\*\* resource to get a list of deleted records for the specified object. Specify the date and time range within which the records for the given object were deleted. Deleted records are written to a delete log (that is periodically purged), and will be filtered out of most operations, such as sObject Rows or Query (although QueryAll will include deleted records in results).
-   **[Get a List of Updated Records Within a Given Timeframe](atlas.en-us.api_rest.meta/api_rest/dome_get_updated.htm)**
    Use the \*\*\* resource to get a list of updated (modified or added) records for the specified object. Specify the date and time range within which the records for the given object were updated.

-   [← Previous](atlas.en-us.api_rest.meta/api_rest/using_resources_working_with_object_metadata.htm "Working with Object Metadata")
-   [Next →](atlas.en-us.api_rest.meta/api_rest/dome_event_series_delete.htm "Delete Lightning Experience Event Series")

## Related Topics

- Create a Record (atlas.en-us.api_rest.meta/api_rest/dome_sobject_create.htm)
- Update a Record (atlas.en-us.api_rest.meta/api_rest/dome_update_fields.htm)
- Delete a Record (atlas.en-us.api_rest.meta/api_rest/dome_delete_record.htm)
- Get Field Values from a Standard Object Record (atlas.en-us.api_rest.meta/api_rest/dome_get_field_values.htm)
- Get Field Values from an External Object Record by Using the Salesforce ID (atlas.en-us.api_rest.meta/api_rest/dome_get_field_values_external_object_hdv.htm)
- Get Field Values from an External Object Record by Using the External ID Standard Field (atlas.en-us.api_rest.meta/api_rest/dome_get_field_values_external_object.htm)
- Get a Record Using an External ID (atlas.en-us.api_rest.meta/api_rest/using_resources_retrieve_with_externalid.htm)
- Insert or Update (Upsert) a Record Using an External ID (atlas.en-us.api_rest.meta/api_rest/dome_upsert.htm)
- Traverse Relationships with Friendly URLs (atlas.en-us.api_rest.meta/api_rest/dome_relationship_traversal.htm)
- Get a List of Deleted Records Within a Given Timeframe (atlas.en-us.api_rest.meta/api_rest/dome_get_deleted.htm)
