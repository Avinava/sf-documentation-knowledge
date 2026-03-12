---
title: "Get Values for a Picklist Field"
domain: uiapi
topic: get-values-for-a-picklist-field
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.521Z
estimatedTokens: 575
keywords: [Picklist, field’s, dataType, equal, MultiPicklist, resource]
---

# Get Values for a Picklist Field

> If a field’s dataType property
      is equal to Picklist or MultiPicklist, use this resource to get its values.

# Get Values for a Picklist Field

If a field’s dataType property is equal to Picklist or MultiPicklist, use this resource to get its values.

Resource

```

```

-   objectApiName—The API name of a [supported](atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm#ui_api_get_started_supported_objects "User Interface API supports all custom objects and external objects and many standard objects.") object.
-   recordTypeId—The ID of the record type.
-   fieldApiName—The API name of the picklist field on the object.

Available Version

41.0

HTTP Method

GET

Response Body

[Picklist Values](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_picklist_values.htm#ui_api_responses_picklist_values "The picklist values for a field, scoped to a record type. If a picklist is dependent, this response includes the values of its immediate controlling field and how they map to the picklist.")

#### See Also

-   [Build UI for Picklists](atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_dependent_picklist.htm "User Interface API exposes properties and resources that make it easy for a client to build picklists and dependent picklists.")

-   [Get Values for All Picklist Fields of a Record Type](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_picklist_values_collection.htm "Use this resource to get the values for all the picklist fields of a specific record type. This resource is especially useful for getting dependent picklist values. For example, if an object has a tree of dependent picklists (Continents__c, Countries__c, Cities__c), use this resource to get all the values for each picklist in one request.")

-   [Get Record Data and Object Metadata](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_ui.htm "Get layout information, metadata, and data to build UI for a single record or for a collection of records.")

-   [Get Object Metadata](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_object_info.htm "Get metadata about a specific object. The response includes metadata describing fields, child relationships, record type, and theme.")

-   [User Interface API Quick Start](atlas.en-us.uiapi.meta/uiapi/ui_api_quick_start_postman.htm "Use the Postman desktop app or web-based UI to easily explore and test the UI API and other Salesforce APIs against your orgs.")

## Code Examples

```
/ui-api/object-info/{objectApiName}/picklist-values/{recordTypeId}/{fieldApiName}
```

## Related Topics

- supported (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm)
- Picklist Values (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_picklist_values.htm)
- Build UI for Picklists (atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_dependent_picklist.htm)
- Get Values for All Picklist Fields of a Record Type (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_picklist_values_collection.htm)
- Get Record Data and Object Metadata (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_ui.htm)
- Get Object Metadata (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_object_info.htm)
- User Interface API Quick Start (atlas.en-us.uiapi.meta/uiapi/ui_api_quick_start_postman.htm)
