---
title: "Records"
domain: uiapi
topic: records
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.539Z
estimatedTokens: 1640
keywords: [Records, resources, metadata, data, objects, easy, build, Salesforce]
---

# Records

> Use these resources to get metadata and data about objects and
      records. These resources make it easy to build Salesforce UI.

# Records

Use these resources to get metadata and data about objects and records. These resources make it easy to build Salesforce UI.

-   **[Get Record Data and Object Metadata](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_ui.htm)**
    Get layout information, metadata, and data to build UI for a single record or for a collection of records.
-   **[Get Record Layout Metadata](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_layout.htm)**
    Get metadata about page layouts for the specified object type.
-   **[Get a Directory of Supported Objects](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_object_info_directory.htm)**
    Get a directory of objects that are supported by User Interface API and accessible to the context user. The directory includes a /ui-api/object-info/{objectApiName} resource for each supported object.
-   **[Get Object Metadata](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_object_info.htm)**
    Get metadata about a specific object. The response includes metadata describing fields, child relationships, record type, and theme.
-   **[Get a Batch of Object Metadata](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_object_info_batch.htm)**
    Get metadata about specific objects. The response includes a batch of metadata describing fields, child relationships, record type, and theme. You can request up to 2,000 objects in an object metadata request.
-   **[Get Values for a Picklist Field](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_picklist_values.htm)**
    If a field’s dataType property is equal to Picklist or MultiPicklist, use this resource to get its values.
-   **[Get Values for All Picklist Fields of a Record Type](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_picklist_values_collection.htm)**
    Use this resource to get the values for all the picklist fields of a specific record type. This resource is especially useful for getting dependent picklist values. For example, if an object has a tree of dependent picklists (Continents\_\_c, Countries\_\_c, Cities\_\_c), use this resource to get all the values for each picklist in one request.
-   **[Get Child Records](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_child_relationships.htm)**
    Get child records for a specified record and child relationship name. Relationships are connections between records. On a record detail page, each record in a related list has a child relationship to the parent record.
-   **[Get a Record](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_get.htm)**
    Get a record’s data.
-   **[Get a Batch of Records](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_batch.htm)**
    Get data for a batch of records.
-   **[Create or Clone a Record](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_create.htm)**
    Create or clone a record.
-   **[Create a Batch of Records](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_batch_post.htm)**
    Create multiple records. You can create, update, and delete up to 200 records in a single request.
-   **[Get Default Values to Clone a Record](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_clone.htm)**
    Get the default layout information, object information, and data for cloning a record. After getting the default values, make a request to POST /ui-api/records to create the record.
-   **[Get Default Values to Clone a Record—Lightweight](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_template_clone.htm)**
    Get the default values for fields for cloning a record. You must specify the fields you want returned. This resource doesn’t use or return layout information. After getting the default values, make a request to POST /ui-api/records to create the record.
-   **[Get Default Values to Create a Record](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_create.htm)**
    Get the default values for fields for a new record of a specified object and optional record type. After getting the default values, make a request to POST /ui-api/records to create the record.
-   **[Get Default Values to Create a Record—Lightweight](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_template_create.htm)**
    Get the default values for fields for a new record of a specified object and optional record type. You must specify the fields you want returned. This resource doesn’t use or return layout information. After getting the default values, make a request to POST /ui-api/records to create the record.
-   **[Update a Record](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_patch.htm)**
    Update a record's data.
-   **[Update a Batch of Records](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_batch_update.htm)**
    Update multiple records. You can create, update, and delete up to 200 records in a single request.
-   **[Delete a Record](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_delete.htm)**
    Delete a record.
-   **[Delete a Batch of Records](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_batch_delete.htm)**
    Delete multiple records. You can create, update, and delete up to 200 records in a single request.
-   **[Get Lookup Field Suggestions With POST](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lookup_post.htm)**
    When a user edits a lookup field, use this resource to search for and display suggestions. You can search for most recently used matches, for matching names, or for any match in a searchable field. You must specify dependent lookup field values used by lookup filters in the \`sourceRecord\` request body parameter.
-   **[Check for Duplicate Records](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_predupe_create.htm)**
    Before updating or creating a record, you can check whether a duplicate record exists. Use the response to learn whether to block or allow the action, and whether to warn the user.
-   **[Get Duplicate Management Configuration for a Specified Object](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_duplicates_get.htm)**
    Learn whether duplicate management is configured for the specified object. If duplicate management is configured, learn about the object's duplicate rules and matching rules. Use the information in the response to know when to check for duplicate records.
-   **[Upload a File](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_contentversion.htm)**
    Upload a file such as a document or image.
-   **[Upload a New File Version](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_contentdocument.htm)**
    Upload a new document or image version.

## Related Topics

- Get Record Data and Object Metadata (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_ui.htm)
- Get Record Layout Metadata (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_layout.htm)
- Get a Directory of Supported Objects (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_object_info_directory.htm)
- Get Object Metadata (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_object_info.htm)
- Get a Batch of Object Metadata (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_object_info_batch.htm)
- Get Values for a Picklist Field (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_picklist_values.htm)
- Get Values for All Picklist Fields of a Record Type (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_picklist_values_collection.htm)
- Get Child Records (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_child_relationships.htm)
- Get a Record (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_get.htm)
- Get a Batch of Records (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_batch.htm)
