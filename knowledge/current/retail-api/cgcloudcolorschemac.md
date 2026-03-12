---
title: "cgcloud__Color_Schema__c"
domain: retail-api
topic: cgcloudcolorschemac
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:38.286Z
estimatedTokens: 1136
keywords: [cgcloud__Color_Schema__c, various, Sales, Organization-dependent, property-based, color, schemes, Trade, Calendar, API, version, 54.0, later, cgcloud, _Color]
---

# cgcloud__Color_Schema__c

> Defines various Sales Organization-dependent property-based color
         schemes for the Trade Calendar. This object is available in API version 54.0 and
      later.

# cgcloud\_\_Color\_Schema\_\_c

Defines various Sales Organization-dependent property-based color schemes for the Trade Calendar. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Sort, UpdateDescriptionUnique identification of the record. |
| SetupOwnerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the setup owner.This is a polymorphic relationship field.Relationship NameSetupOwnerRelationship TypeLookupRefers ToOrganization, Profile, User |
| cgcloud__Color_Code__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionValue for which the defined color is used. |
| cgcloud__Field_Name__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the promotion field which is used to determine if this color schema should be applied for a promotion bar in the Trade Calendar. |
| cgcloud__Sales_Org__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis record will be considered only for Promos of the given Sales_Organization__c. |
| cgcloud__Schema_Name__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the Color Schema to which this record belongs. Groups multiple records together (for example, a phase based color schema TradeCalendar_Phase will have different color definitions for different promotion phases (planning vs. approved vs. canceled). |
| cgcloud__Transparency__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTransparency of the Bar in the Trade Calendar of this Schema record is applied to the promotion bar in the trade calendar. |
| cgcloud__Value__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionField value of the promotion (in the field 'Field_Name__c'). If the field value equals this one, this schema record gets applied. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Color\_Schema\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Color\_Schema\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Color\_Schema\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Color\_Schema\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Color\_Schema\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Color_Schema__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Color_Schema__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Color_Schema__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Color_Schema__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Color_Schema__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
