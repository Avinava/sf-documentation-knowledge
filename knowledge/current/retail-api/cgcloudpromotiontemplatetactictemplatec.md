---
title: "cgcloud__Promotion_Template_Tactic_Template__c"
domain: retail-api
topic: cgcloudpromotiontemplatetactictemplatec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:39.733Z
estimatedTokens: 1057
keywords: [Junction, Promotion, Templates, Tactic, API, version, 54.0, later, cgcloud, _Promotion, _Template, _Tactic, Calls, Associated, Objects]
---

# cgcloud__Promotion_Template_Tactic_Template__c

> Junction Object between Promotion Templates and Tactic
         Templates. This object is available in API version 54.0 and later.

# cgcloud\_\_Promotion\_Template\_Tactic\_Template\_\_c

Junction Object between Promotion Templates and Tactic Templates. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| cgcloud__Is_Transfer_Relevant__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIdentifies if the tactic template is eligible for transfer.Possible values areNoYes |
| cgcloud__Promotion_Template__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionLink to the Promotion Template.This is a relationship field.Relationship Namecgcloud__Promotion_Template__rRelationship TypeMaster-detailRefers Tocgcloud__Promotion_Template__c (the master object) |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the detail page of the Promotion Template Tactic Template.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |
| cgcloud__Sort__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDetermines the display order of the tactic template while adding a tactic to a promotion. By default, ‌tactic templates are shown in ascending order. Make sure that you enter a value that’s unique within the promotion template. |
| cgcloud__Tactic_Template__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the tactic template.This is a relationship field.Relationship Namecgcloud__Tactic_Template__rRelationship TypeMaster-detailRefers Tocgcloud__Tactic_Template__c (the detail object) |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Promotion\_Template\_Tactic\_Template\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Promotion\_Template\_Tactic\_Template\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Promotion\_Template\_Tactic\_Template\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[cgcloud\_\_Promotion\_Template\_Tactic\_Template\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Promotion\_Template\_Tactic\_Template\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Promotion_Template_Tactic_Template__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Promotion_Template_Tactic_Template__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Promotion_Template_Tactic_Template__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Promotion_Template_Tactic_Template__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Promotion_Template_Tactic_Template__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
