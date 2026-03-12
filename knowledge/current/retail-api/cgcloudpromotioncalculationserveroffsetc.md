---
title: "cgcloud__Promotion_Calculation_Server_Offset__c"
domain: retail-api
topic: cgcloudpromotioncalculationserveroffsetc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:39.573Z
estimatedTokens: 1007
keywords: [Stores, time, range, server, Offplatform, calculates, Promotion, API, version, 54.0, later, cgcloud, _Promotion, _Calculation, _Server]
---

# cgcloud__Promotion_Calculation_Server_Offset__c

> Stores the time range during which the server (Offplatform)
         calculates a Promotion. This object is available in API version 54.0 and later.

# cgcloud\_\_Promotion\_Calculation\_Server\_Offset\_\_c

Stores the time range during which the server (Offplatform) calculates a Promotion. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the record. |
| SetupOwnerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe SetupOwnerId field on Hierarchy Custom Settings stores the Org, Profile, or User that's associated with a custom setting record.This is a polymorphic relationship field.Relationship NameSetupOwnerRelationship TypeLookupRefers ToOrganization, Profile, User |
| cgcloud__Days_After__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionNot used at the moment: used to schedule promotions for calculations. Only those promotions are scheduled that overlap with this time range: [today() - Days_Before__c, today + Days_After__c]. |
| cgcloud__Days_Before__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionNot used at the moment: used to schedule promotions for calculations. Only those promotions are scheduled that overlap with this time range: [today() - Days_Before__c, today + Days_After__c]. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Promotion\_Calculation\_Server\_Offset\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Promotion\_Calculation\_Server\_Offset\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Promotion\_Calculation\_Server\_Offset\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Promotion\_Calculation\_Server\_Offset\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Promotion\_Calculation\_Server\_Offset\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Promotion_Calculation_Server_Offset__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Promotion_Calculation_Server_Offset__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Promotion_Calculation_Server_Offset__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Promotion_Calculation_Server_Offset__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Promotion_Calculation_Server_Offset__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
