---
title: "cgcloud__Account_Sub_Account__c"
domain: retail-api
topic: cgcloudaccountsubaccountc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.068Z
estimatedTokens: 1101
keywords: [cgcloud__Account_Sub_Account__c, account, sub-account, relationship, API, version, 54.0, later, cgcloud, _Account, _Sub, Calls, Associated, Objects]
---

# cgcloud__Account_Sub_Account__c

> Defines the account to sub-account relationship. This object is
      available in API version 54.0 and later.

# cgcloud\_\_Account\_Sub\_Account\_\_c

Defines the account to sub-account relationship. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of this record. |
| cgcloud__Account__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionParent customer for this sub-account relationship.This is a relationship field.Relationship Namecgcloud__Account__rRelationship TypeMaster-detailRefers ToAccount (the master object) |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the detail page of the Sub Account.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |
| cgcloud__Sub_Account_External_Id__c | TypestringPropertiesFilter, Nillable, SortDescriptionSpecifies the external ID of the sub-account external in the formula field to ensure access.This is a calculated field.Formulacgcloud__Sub_Account__r.cgcloud__ExternalId__c |
| cgcloud__Sub_Account__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSub Account lookup.This is a relationship field.Relationship Namecgcloud__Sub_Account__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Valid_From__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from when the record is valid. |
| cgcloud__Valid_Thru__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until when the record is valid. |
| cgcloud__Volume_Percent__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies how much the specific sub-account contributes in percent to the overall volume of the account. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[cgcloud\_\_Account\_Sub\_Account\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Account\_Sub\_Account\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Account\_Sub\_Account\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[cgcloud\_\_Account\_Sub\_Account\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Account\_Sub\_Account\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Account_Sub_Account__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Account_Sub_Account__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Account_Sub_Account__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Account_Sub_Account__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Account_Sub_Account__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
