---
title: "cgcloud__System_Number_Segment__c"
domain: retail-api
topic: cgcloudsystemnumbersegmentc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.025Z
estimatedTokens: 1306
keywords: [cgcloud__System_Number_Segment__c, Segment, number, definition, API, version, 54.0, later, cgcloud, _System, _Number, _Segment, Calls, Associated, Objects]
---

# cgcloud__System_Number_Segment__c

> Segment of the number definition. This object is available in
      API version 54.0 and later.

# cgcloud\_\_System\_Number\_Segment\_\_c

Segment of the number definition. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Initial_Value__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionValue used if there was no previous number for this number definition. |
| cgcloud__Max_Value__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMaximum value of the number definition. |
| cgcloud__Numerical_System__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumerical system.Possible values are:AlphaBinaryDecimalHex |
| cgcloud__Post_Delimiter__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOptional postfix of the segment. |
| cgcloud__Pre_Delimiter__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOptional prefix of the segment. |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionRequired for technical reasons.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |
| cgcloud__Segment_Length__c | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionNumber of characters of this segment including delimiters. |
| cgcloud__Segment_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of the segment.Possible values are:ConstantCounterInitCounterLUYear |
| cgcloud__Sort_Validation__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUsed for validation, not for Layout. |
| cgcloud__Sort__c | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionPosition of this segment in the segment sequence of this number definition. |
| cgcloud__System_Number__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the System Number.This is a relationship field.Relationship Namecgcloud__System_Number__rRelationship TypeMaster-detailRefers Tocgcloud__System_Number__c (the master object) |
| cgcloud__Type_Unique_Validation__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSegment Type is a unique field for Number Definition. It's a hidden field for Validation. |
| cgcloud__Type_Validation__c | TypedoublePropertiesFilter, Nillable, SortDescriptionRequired for technical reasons.This is a calculated field.FormulaCASE( cgcloud__Segment_Type__c , 'LU', 19, 'Counter', 20, 'InitCounter',22,0) |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_System\_Number\_Segment\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_System\_Number\_Segment\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_System\_Number\_Segment\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_System\_Number\_Segment\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_System\_Number\_Segment\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__System_Number_Segment__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__System_Number_Segment__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__System_Number_Segment__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__System_Number_Segment__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__System_Number_Segment__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
