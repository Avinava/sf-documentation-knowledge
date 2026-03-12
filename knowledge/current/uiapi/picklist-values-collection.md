---
title: "Picklist Values Collection"
domain: uiapi
topic: picklist-values-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.030Z
estimatedTokens: 321
keywords: [Picklist, Collection, picklists, record]
---

# Picklist Values Collection

> A collection of picklist values for all the picklists of a specified
      record type.

# Picklist Values Collection

A collection of picklist values for all the picklists of a specified record type.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| picklistFieldValues | Map<String, Picklist Values> | A map of field names to Picklist Values response bodies. This map contains all the picklist values for all the picklists of a specified record type, including dependent picklists. If a field isn’t a picklist, it isn’t represented in the map. | Small, 42.0 | 42.0 |

#### See Also

-   [Get Values for All Picklist Fields of a Record Type](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_picklist_values_collection.htm "Use this resource to get the values for all the picklist fields of a specific record type. This resource is especially useful for getting dependent picklist values. For example, if an object has a tree of dependent picklists (Continents__c, Countries__c, Cities__c), use this resource to get all the values for each picklist in one request.")

-   [Build UI for Picklists](atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_dependent_picklist.htm "User Interface API exposes properties and resources that make it easy for a client to build picklists and dependent picklists.")

## Related Topics

- Picklist Values (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_picklist_values.htm)
- Get Values for All Picklist Fields of a Record Type (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_picklist_values_collection.htm)
- Build UI for Picklists (atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_dependent_picklist.htm)
