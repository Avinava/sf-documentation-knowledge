---
title: "Get Values for All Picklist Fields of a Record Type"
domain: uiapi
topic: get-values-for-all-picklist-fields-of-a-record-type
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.524Z
estimatedTokens: 546
keywords: [Picklist, Record, resource, specific, especially, useful, getting, dependent, tree, picklists, Continents__c, Countries__c, Cities__c]
---

# Get Values for All Picklist Fields of a Record Type

> Use this resource to get the values for all the picklist fields of a
      specific record type. This resource is especially useful for getting dependent picklist
      values. For example, if an object has a tree of dependent picklists (Continents__c,
      Countries__c, Cities__c), use this resource to get all the values for each picklist in one
      request.

# Get Values for All Picklist Fields of a Record Type

Use this resource to get the values for all the picklist fields of a specific record type. This resource is especially useful for getting dependent picklist values. For example, if an object has a tree of dependent picklists (Continents\_\_c, Countries\_\_c, Cities\_\_c), use this resource to get all the values for each picklist in one request.

This resource is available as a static method in Apex in API version 66.0 and later. See [getPicklistValuesByRecordType(objectApiName, recordTypeId)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_RecordUi_static_methods.htm#apex_ConnectAPI_RecordUi_getPicklistValuesByRecordType_1) in the Apex Reference Guide.

Resource

```

```

-   objectApiName—The API name of a [supported](atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm#ui_api_get_started_supported_objects "User Interface API supports all custom objects and external objects and many standard objects.") object.
-   recordTypeId—The ID of the record type.

Available Version

42.0

HTTP Method

GET

Response Body

[Picklist Values Collection](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_picklist_values_collection.htm#ui_api_responses_picklist_values_collection "A collection of picklist values for all the picklists of a specified record type.")

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=uiapi)

#### Note

Turn on source tracking in your sandboxes in order for the picklist values to appear correctly upon the UI API request. You can also use the Metadata API request with object and field inputs to fetch the picklist values of a record type.

#### See Also

-   [Build UI for Picklists](atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_dependent_picklist.htm "User Interface API exposes properties and resources that make it easy for a client to build picklists and dependent picklists.")

-   [Get Values for a Picklist Field](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_picklist_values.htm "If a field’s dataType property is equal to Picklist or MultiPicklist, use this resource to get its values.")

## Code Examples

```
/ui-api/object-info/{objectApiName}/picklist-values/{recordTypeId}
```

## Related Topics

- supported (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm)
- Picklist Values Collection (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_picklist_values_collection.htm)
- Build UI for Picklists (atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_dependent_picklist.htm)
- Get Values for a Picklist Field (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_picklist_values.htm)
