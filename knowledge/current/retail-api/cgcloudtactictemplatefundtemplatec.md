---
title: "cgcloud__Tactic_Template_Fund_Template__c"
domain: retail-api
topic: cgcloudtactictemplatefundtemplatec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.145Z
estimatedTokens: 1068
keywords: [Junction, tactic, template, fund, API, version, 54.0, later, cgcloud, _Tactic, _Template, _Fund, Calls, Associated, Objects]
---

# cgcloud__Tactic_Template_Fund_Template__c

> Junction object between tactic template and fund template. This
         object defines the valid fund types for the given tactic template. This object is
      available in API version 54.0 and later.

# cgcloud\_\_Tactic\_Template\_Fund\_Template\_\_c

Junction object between tactic template and fund template. This object defines the valid fund types for the given tactic template. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date when a User last did something related to the record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Default__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the current fund template is the default fund type for a tactic template. For each tactic template, only one default fund type can exist.The default value is false. |
| cgcloud__Fund_Template__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the fund template.This is a relationship field.Relationship Namecgcloud__Fund_Template__rRelationship TypeMaster-detailRefers Tocgcloud__Fund_Template__c (Detail object) |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the detail page of Tactic Template Fund Template.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_self") |
| cgcloud__Tactic_Template__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the tactic template.This is a relationship field.Relationship Namecgcloud__Tactic_Template__rRelationship TypeMaster-detailRefers Tocgcloud__Tactic_Template__c (Master object) |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Tactic\_Template\_Fund\_Template\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Tactic\_Template\_Fund\_Template\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Tactic\_Template\_Fund\_Template\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Tactic\_Template\_Fund\_Template\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Tactic\_Template\_Fund\_Template\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Tactic_Template_Fund_Template__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Tactic_Template_Fund_Template__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Tactic_Template_Fund_Template__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Tactic_Template_Fund_Template__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Tactic_Template_Fund_Template__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
