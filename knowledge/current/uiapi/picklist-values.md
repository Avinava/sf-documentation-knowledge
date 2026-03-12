---
title: "Picklist Values"
domain: uiapi
topic: picklist-values
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.028Z
estimatedTokens: 563
keywords: [Picklist, scoped, record, dependent, includes, immediate, controlling, how, they, map]
---

# Picklist Values

> The picklist values for a field, scoped to a record type. If a
      picklist is dependent, this response includes the values of its immediate controlling field
      and how they map to the picklist.

# Picklist Values

The picklist values for a field, scoped to a record type. If a picklist is dependent, this response includes the values of its immediate controlling field and how they map to the picklist.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| controllerValues | Map<String, Integer> | If the picklist is dependent, this property is a map of its immediate controlling field’s picklist values to their indexes.If the controlling field is a picklist, the String is the picklist value and the integer is the value’s index.If the controlling field is a checkbox, the values in the map are "false": 0 and "true": 1.If the picklist is independent, the map is empty. | Small, 41.0 | 41.0 |
| defaultValue | Picklist Value | The default value for the picklist, or null if there isn't one. | Small, 41.0 | 41.0 |
| url | String | A User Interface API resource that represents this payload. | Small, 41.0 | 41.0 |
| values | Picklist Value[] | A list of values for this object, record type, field combination. | Small, 41.0 | 41.0 |

#### See Also

-   [Picklist Values Collection](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_picklist_values_collection.htm "A collection of picklist values for all the picklists of a specified record type.")

-   [Get Values for a Picklist Field](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_picklist_values.htm "If a field’s dataType property is equal to Picklist or MultiPicklist, use this resource to get its values.")

-   [Get Values for All Picklist Fields of a Record Type](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_picklist_values_collection.htm "Use this resource to get the values for all the picklist fields of a specific record type. This resource is especially useful for getting dependent picklist values. For example, if an object has a tree of dependent picklists (Continents__c, Countries__c, Cities__c), use this resource to get all the values for each picklist in one request.")

-   [Build UI for Picklists](atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_dependent_picklist.htm "User Interface API exposes properties and resources that make it easy for a client to build picklists and dependent picklists.")

## Related Topics

- Picklist Value (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_picklist_value.htm)
- Picklist Values Collection (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_picklist_values_collection.htm)
- Get Values for a Picklist Field (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_picklist_values.htm)
- Get Values for All Picklist Fields of a Record Type (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_picklist_values_collection.htm)
- Build UI for Picklists (atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_dependent_picklist.htm)
