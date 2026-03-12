---
title: "Object Info"
domain: uiapi
topic: object-info
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.999Z
estimatedTokens: 1563
keywords: [Info, metadata]
---

# Object Info

> The metadata for an object.

# Object Info

The metadata for an object.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=uiapi)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this metadata type’s name.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | The object's API name. | Small, 41.0 | 41.0 |
| associateEntityType | String | If the object is associated with a parent object, the type of association it has to its parent, such as History. Otherwise, its value is null. | Medium, 50.0 | 50.0 |
| associateParentEntity | String | If the object is associated with a parent object, the parent object it’s associated with. Otherwise, its value is null. | Medium, 50.0 | 50.0 |
| childRelationships | Child Relationship[] | The object’s child relationships. | Medium, 41.0 | 41.0 |
| compactLayoutable | Boolean | Indicates whether the object can have compact layouts. | Small, 60.0 | 60.0 |
| createable | Boolean | Indicates whether the object can be created. | Small, 41.0 | 41.0 |
| custom | Boolean | Indicates whether the object is custom. | Small, 41.0 | 41.0 |
| defaultRecordTypeId | String | The ID for the default record type for this object, if any. If there isn’t a default record type, this value is the master record type, which is 012000000000000AAA. If the record is a nested record (for example, in a request for an Account, the User object is a nested record), the value is null. | Medium, 41.0 | 41.0 |
| deleteable | Boolean | Indicates whether the object can be deleted. Only available in API version 41.0. In API version 42.0, we spelled it correctly. | Small, 41.0 | 41.0–41.0 |
| deletable | Boolean | Indicates whether the object can be deleted. | Small, 42.0 | 42.0 |
| dependentFields | Map<String, Object> | A map of the dependent fields tree structure. Each nested object is another Map<String, Object>. When the object is empty, it indicates a leaf of the tree, which is a field that doesn’t control other fields. An object can have multiple independent trees, which means this property can have multiple root objects.Imagine an object with the picklists Continents__c, Countries__c, and Cities__c. Continents__c is the root. Cities__c is a leaf. Continents__c and Countries__c are controlling fields. Countries__c and Cities__c are dependent picklists."dependentFields" : {     "Continents__c" : {       "Countries__c" : {         "Cities__c" : { }       }     }   },A field dependency causes the values in a picklist to be dynamically filtered based on the value selected by the user in another field. The field that drives filtering is called the "controlling field." Standard and custom checkboxes and picklists with at least one and less than 300 values can be controlling fields. The field that has its values filtered is called the "dependent field." Custom picklists and multi-select picklists can be dependent fields. | Big, 42.0 | 42.0 |
| feedEnabled | Boolean | Indicates whether the object can have feeds. | Medium, 41.0 | 41.0 |
| fields | Map<String, Field> | A map of field API name to information about the field. This map only contains fields relevant to the requested layout and mode. | Medium, 41.0 | 41.0 |
| keyPrefix | String | The key prefix for IDs of this object. | Medium, 41.0 | 41.0 |
| label | String | The object's display label. | Small, 41.0 | 41.0 |
| labelPlural | String | The plural form of the object's display label. | Medium, 41.0 | 41.0 |
| layoutable | Boolean | Indicates whether the object can have a layout. | Small, 41.0 | 41.0 |
| mruEnabled | Boolean | Indicates whether the object can appear in Most Recently Used lists. | Small, 41.0 | 41.0 |
| nameFields | String[] | A collection of the API names of the fields used to identify the name field for standard and custom objects. Typically there is one name field per object, except where FirstName and LastName fields are used. | Medium, 41.0 | 41.0 |
| queryable | Boolean | Indicates whether the context user can query the object. | Small, 41.0 | 41.0 |
| recordTypeInfos | Map<String, Record Type Info> | A map of record type IDs to information about the record type. All record types are visible whether the user has access to them. | Medium, 41.0 | 41.0 |
| searchable | Boolean | Indicates whether the object can be searched. | Small, 41.0 | 41.0 |
| searchLayoutable | Boolean | Indicates whether the object can have search layouts. | Small, 60.0 | 60.0 |
| themeInfo | Theme Info | Theme information for the object. | Medium, 41.0 | 41.0 |
| updateable | Boolean | Indicates whether the object can be updated. | Small, 41.0 | 41.0 |

#### See Also

-   [Get Record Data and Object Metadata](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_ui.htm "Get layout information, metadata, and data to build UI for a single record or for a collection of records.")

-   [Get Object Metadata](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_object_info.htm "Get metadata about a specific object. The response includes metadata describing fields, child relationships, record type, and theme.")

-   [Get Default Values to Clone a Record](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_clone.htm "Get the default layout information, object information, and data for cloning a record. After getting the default values, make a request to POST /ui-api/records to create the record.")

-   [Get Default Values to Create a Record](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_create.htm "Get the default values for fields for a new record of a specified object and optional record type. After getting the default values, make a request to POST /ui-api/records to create the record.")

-   [Record UI](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_ui.htm "The layout information, field information, and data for a record.")

-   [Record Defaults](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_defaults.htm "The default information and data needed to create or clone a record. Use these values in a request to POST /ui-api/records.")

## Code Examples

```
"dependentFields" : {
    "Continents__c" : {
      "Countries__c" : {
        "Cities__c" : { }
      }
    }
  },
```

## Related Topics

- Child Relationship (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_child_relationship.htm)
- Field (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_field.htm)
- Record Type Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_type_info.htm)
- Theme Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_theme_info.htm)
- Get Record Data and Object Metadata (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_ui.htm)
- Get Object Metadata (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_object_info.htm)
- Get Default Values to Clone a Record (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_clone.htm)
- Get Default Values to Create a Record (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_record_defaults_create.htm)
- Record UI (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_ui.htm)
- Record Defaults (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record_defaults.htm)
