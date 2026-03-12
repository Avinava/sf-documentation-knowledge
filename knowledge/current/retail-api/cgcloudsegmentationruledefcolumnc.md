---
title: "cgcloud__Segmentation_Rule_Def_Column__c"
domain: retail-api
topic: cgcloudsegmentationruledefcolumnc
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:39.927Z
estimatedTokens: 1260
keywords: [query, attributes, Segmentation, Rule, Definition, API, version, 54.0, later, cgcloud, _Segmentation, _Rule, _Def, _Column, Calls]
---

# cgcloud__Segmentation_Rule_Def_Column__c

> This object defines the query attributes of the Segmentation Rule
         Definition. This object is available in API version 54.0 and later.

# cgcloud\_\_Segmentation\_Rule\_Def\_Column\_\_c

This object defines the query attributes of the Segmentation Rule Definition. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Field_Alias__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAlias that's specified in the SOQL building. |
| cgcloud__Field_Default__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefault value that's shown when the input mask is rendered for this field. |
| cgcloud__Field_List_Template__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf the field type is List, then this field defines the content of the list.Possible values are:numberpicklisttext |
| cgcloud__Field_Number_Digits__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionFor Number fields, it defines the number of digits after the decimal point. |
| cgcloud__Field_Picklist_Target__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf the field type is either Picklist or List with the template as Picklist, then this field defines the picklist to choose. The format is <sObject>.<Attribute>. This field is ignored for any other field type. |
| cgcloud__Field_Regex__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionApplies to user input. If the input is a list, the regex applies to each list entry separately. |
| cgcloud__Field_Title__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the label of the field that used to define segmentation parameters. |
| cgcloud__Field_Type__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines the type of field that's used to define segmentation parameters.Possible values are:booleandatelistnumberpicklisttextThe default value is text. |
| cgcloud__Segmentation_Rule_Def__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the segmentation rule definition.This is a relationship field.Relationship Namecgcloud__Segmentation_Rule_Def__rRelationship TypeMaster-detailRefers Tocgcloud__Segmentation_Rule_Def__c (Master object) |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Segmentation\_Rule\_Def\_Column\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Segmentation\_Rule\_Def\_Column\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Segmentation\_Rule\_Def\_Column\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Segmentation\_Rule\_Def\_Column\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Segmentation\_Rule\_Def\_Column\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Segmentation_Rule_Def_Column__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Segmentation_Rule_Def_Column__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Segmentation_Rule_Def_Column__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Segmentation_Rule_Def_Column__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Segmentation_Rule_Def_Column__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
