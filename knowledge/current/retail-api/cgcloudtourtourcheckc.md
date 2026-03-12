---
title: "cgcloud__Tour_Tour_Check__c"
domain: retail-api
topic: cgcloudtourtourcheckc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.250Z
estimatedTokens: 1078
keywords: [cgcloud__Tour_Tour_Check__c, Stores, relationship, tour, check, API, version, 54.0, later, cgcloud, _Tour, _Check, Calls, Associated, Objects]
---

# cgcloud__Tour_Tour_Check__c

> Stores the details of the relationship between tour and tour
         check. This object is available in API version 54.0 and later.

# cgcloud\_\_Tour\_Tour\_Check\_\_c

Stores the details of the relationship between tour and tour check. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Answer__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecified whether the answer has been given.The default value is false. |
| cgcloud__Check_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the check type of the tour check.Possible values are:SafetyCheck—Safety CheckVehicleCheck—Vehicle CheckThe default value is VehicleCheck. |
| cgcloud__Sort__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSort number. |
| cgcloud__Tour_Check_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionSpecifies the description of the tour check.This is a calculated field.Formulacgcloud__Tour_Check__r.cgcloud__Description__c |
| cgcloud__Tour_Check__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the tour check.This is a relationship field.Relationship Namecgcloud__Tour_Check__rRelationship TypeLookupRefers Tocgcloud__Tour_Check__c |
| cgcloud__Tour__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the tour.This is a relationship field.Relationship Namecgcloud__Tour__rRelationship TypeMaster-detailRefers Tocgcloud__Tour__c (Master object) |
| cgcloud__Usage__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUsage of the tour check.Possible values are:E—End of DayS—Start of Day |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Tour\_Tour\_Check\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Tour\_Tour\_Check\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Tour\_Tour\_Check\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Tour\_Tour\_Check\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Tour\_Tour\_Check\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Tour_Tour_Check__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Tour_Tour_Check__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Tour_Tour_Check__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Tour_Tour_Check__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Tour_Tour_Check__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
