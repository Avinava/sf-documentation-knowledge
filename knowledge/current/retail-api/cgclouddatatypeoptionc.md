---
title: "cgcloud__Data_Type_Option__c"
domain: retail-api
topic: cgclouddatatypeoptionc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.581Z
estimatedTokens: 1757
keywords: [cgcloud__Data_Type_Option__c, Stores, item, picklist, flexible, data, API, version, 54.0, later, cgcloud, _Data, _Type, _Option, Calls]
---

# cgcloud__Data_Type_Option__c

> Stores the item (picklist item) of a flexible data type. This
      object is available in API version 54.0 and later.

# cgcloud\_\_Data\_Type\_Option\_\_c

Stores the item (picklist item) of a flexible data type. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Code_Uniqueness_Check__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field is used internally to ensure that one code (field) is unique within a data type record. The value is set via workflow. It shouldn't be shown to the user. |
| cgcloud__Code__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionCode or value of the data type option. |
| cgcloud__Data_Type__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the Data Type.This is a relationship field.Relationship Namecgcloud__Data_Type__rRelationship TypeMaster-detailRefers Tocgcloud__Data_Type__c (Master object) |
| cgcloud__Default_Item__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the item is a default item.The default value is false. |
| cgcloud__Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription for Language 1. |
| cgcloud__Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription for Language 2. |
| cgcloud__Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription for Language 3. |
| cgcloud__Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription for Language 4. |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription based on the user-specified language.This is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c, "Language1", cgcloud__Description_Language_1__c, "Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c), "Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c), "Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c), cgcloud__Description_Language_1__c) |
| cgcloud__ImageId__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the picture on the mobility device. |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionStores the hyperlink of the record.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |
| cgcloud__Short_Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionShort description for Language 1. |
| cgcloud__Short_Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionShort description for Language 2. |
| cgcloud__Short_Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionShort description for Language 3. |
| cgcloud__Short_Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionShort description for Language 4 |
| cgcloud__Short_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionStores the short description.This is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c,  "Language1", cgcloud__Short_Description_Language_1__c,  "Language2", BLANKVALUE(cgcloud__Short_Description_Language_2__c,cgcloud__Short_Description_Language_1__c),  "Language3", BLANKVALUE(cgcloud__Short_Description_Language_3__c,cgcloud__Short_Description_Language_1__c),  "Language4", BLANKVALUE(cgcloud__Short_Description_Language_4__c,cgcloud__Short_Description_Language_1__c),  cgcloud__Short_Description_Language_1__c) |
| cgcloud__Sort__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSort order |
| cgcloud__Unique_Default_Option__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field is used internal to ensure that only one option can be set as default within a data type record. The value would be set via workflow. It should not be shown to the user. |
| cgcloud__Validation_Code__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionValidation Code. |

## Associated Objects

This object has these following associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Data\_Type\_Option\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Data\_Type\_Option\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Data\_Type\_Option\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Data\_Type\_Option\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Data\_Type\_Option\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Code Examples

```
CASE($User.cgcloud__Language_Postfix__c,
"Language1", cgcloud__Description_Language_1__c,
"Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c),
"Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c),
"Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c),
cgcloud__Description_Language_1__c)
```

```
CASE($User.cgcloud__Language_Postfix__c, 
"Language1", cgcloud__Short_Description_Language_1__c, 
"Language2", BLANKVALUE(cgcloud__Short_Description_Language_2__c,cgcloud__Short_Description_Language_1__c), 
"Language3", BLANKVALUE(cgcloud__Short_Description_Language_3__c,cgcloud__Short_Description_Language_1__c), 
"Language4", BLANKVALUE(cgcloud__Short_Description_Language_4__c,cgcloud__Short_Description_Language_1__c), 
cgcloud__Short_Description_Language_1__c)
```

## Related Topics

- cgcloud__Data_Type_Option__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Data_Type_Option__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Data_Type_Option__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Data_Type_Option__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Data_Type_Option__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
