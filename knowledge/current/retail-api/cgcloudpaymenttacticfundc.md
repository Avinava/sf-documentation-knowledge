---
title: "cgcloud__Payment_Tactic_Fund__c"
domain: retail-api
topic: cgcloudpaymenttacticfundc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:39.356Z
estimatedTokens: 1797
keywords: [cgcloud__Payment_Tactic_Fund__c, stores, relationship, Fund, Payment, Tactic, junction, objects, API, version, 54.0, later, cgcloud, _Payment, _Tactic]
---

# cgcloud__Payment_Tactic_Fund__c

> This object stores the relationship between the Fund and Payment
         Tactic junction objects. This object is available in API version 54.0 and later.

# cgcloud\_\_Payment\_Tactic\_Fund\_\_c

This object stores the relationship between the Fund and Payment Tactic junction objects. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionMost recent date on which a user last performed an action on the record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Adjustment_Type__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAdjustment type of the payment. |
| cgcloud__Amount__c | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionAverage amount of a specific tactic. |
| cgcloud__Anchor_Customer__c | TypestringPropertiesFilter, Nillable, SortDescriptionAnchor customer of the fund.This is a calculated field.Formulacgcloud__Fund__r.cgcloud__Anchor_Account__r.Name |
| cgcloud__Anchor_Product__c | TypestringPropertiesFilter, Nillable, SortDescriptionAnchor product of the fund.This is a calculated field.Formulacgcloud__Fund__r.cgcloud__Anchor_Product__r.Name |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription of the fund.This is a calculated field.Formulacgcloud__Fund__r.cgcloud__Description__c |
| cgcloud__Fund_Name__c | TypestringPropertiesFilter, Nillable, SortDescriptionName of the fund.This is a calculated field.Formulacgcloud__Fund__r.Name |
| cgcloud__Fund_Type__c | TypestringPropertiesFilter, Nillable, SortDescriptionType of the fund.This is a calculated field.Formulacgcloud__Fund__r.cgcloud__Fund_Template__r.Name |
| cgcloud__Fund__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the fund.This is a relationship field.Relationship Namecgcloud__Fund__rRelationship TypeMaster-detailRefers Tocgcloud__Fund__c (the master object) |
| cgcloud__Funding_Percent__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionValue that drives the amount distribution for the fund. |
| cgcloud__LE_Revenue__c | TypedoublePropertiesFilter, Nillable, SortDescriptionTotal value of KPI that's referenced in the Fund Template’s LE Revenue field,.This is a calculated field.Formulacgcloud__Fund__r.cgcloud__LE_Revenue__c |
| cgcloud__LE_Volume__c | TypedoublePropertiesFilter, Nillable, SortDescriptionTotal value of the KPI that's referenced in the Fund Template’s LE Volume field.This is a calculated field.Formulacgcloud__Fund__r.cgcloud__LE_Volume__c |
| cgcloud__Payment_Age__c | TypedoublePropertiesFilter, Nillable, SortDescriptionReads the Payment Age off of the related Payment record. This field is helpful for reporting purposes.This is a calculated field.Formulacgcloud__Payment_Tactic__r.cgcloud__Payment__r.cgcloud__Payment_Age__c |
| cgcloud__Payment_Anchor__c | TypestringPropertiesFilter, Nillable, SortDescriptionReferences to the name of the Payment Anchor with which the Payment Tactic is associated.This field is a calculated field.This field is available in API version 55.0 and later.Formulacgcloud__Payment_Tactic__r.cgcloud__Payment__r.cgcloud__Payment_Anchor__r.Name |
| cgcloud__Payment_Status__c | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of the payment to which this record is assigned. |
| cgcloud__Payment_Tactic__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Payment Tactic.This is a relationship field.Relationship Namecgcloud__Payment_Tactic__rRelationship TypeLookupRefers Tocgcloud__Payment_Tactic__c |
| cgcloud__Payment_Type__c | TypestringPropertiesFilter, Nillable, SortDescriptionReads the Payment Type off of the related Payment record. This field is helpful for reporting purposes.This is a calculated field.Formulacgcloud__Payment_Tactic__r.cgcloud__Payment__r.cgcloud__Payment_Type__c |
| cgcloud__Promotion_Anchor__c | TypestringPropertiesFilter, Nillable, SortDescriptionReferences to the Tactic Anchor name with which the Payment Tactic is associated.This field is a calculated field.This field is available in API version 55.0 and later.Formulacgcloud__Payment_Tactic__r.cgcloud__Tactic__r.cgcloud__Anchor__c |
| cgcloud__Promotion_Tactic__c | TypestringPropertiesFilter, Nillable, SortDescriptionReferences to the Promotion Tactic with which the Payment Tactic is associated.This field is a calculated field.This field is available in API version 55.0 and later.Formulacgcloud__Payment_Tactic__r.cgcloud__Promotion_Tactic__c |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Payment\_Tactic\_Fund\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Payment\_Tactic\_Fund\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Payment\_Tactic\_Fund\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Payment\_Tactic\_Fund\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Payment\_Tactic\_Fund\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Payment_Tactic_Fund__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Payment_Tactic_Fund__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Payment_Tactic_Fund__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Payment_Tactic_Fund__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Payment_Tactic_Fund__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
