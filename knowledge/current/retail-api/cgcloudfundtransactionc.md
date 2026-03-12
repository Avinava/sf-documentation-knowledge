---
title: "cgcloud__Fund_Transaction__c"
domain: retail-api
topic: cgcloudfundtransactionc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.680Z
estimatedTokens: 1642
keywords: [cgcloud__Fund_Transaction__c, Holds, fund, transaction, API, version, 54.0, later, cgcloud, _Fund, _Transaction, Calls, Associated, Objects]
---

# cgcloud__Fund_Transaction__c

> Holds the fund
         transaction
         details. This object is available in API version 54.0 and later.

# cgcloud\_\_Fund\_Transaction\_\_c

Holds the fund transaction details. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Amount__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTransaction amount. |
| cgcloud__Anchor_Customer__c | TypestringPropertiesFilter, Nillable, SortDescriptionShows the anchor customer from the Fund object.This is a calculated field.FormulaCASE( cgcloud__Transaction_Type__c , 'Drawback', cgcloud__Source_Fund__r.cgcloud__Anchor_Account__r.Name, cgcloud__Target_Fund__r.cgcloud__Anchor_Account__r.Name) |
| cgcloud__Currency__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionHolds the currency set by the template selected based on the sales org.Possible values are:CADCHFEURGBPJPYNOKRUBUSD |
| cgcloud__Date__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionTransaction date. |
| cgcloud__Fund_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionShows the fund description.This is a calculated field.FormulaCASE( cgcloud__Transaction_Type__c , 'Drawback', HYPERLINK("/one/one.app#/sObject/" &  cgcloud__Source_Fund__c  & "/view", cgcloud__Source_Fund__r.cgcloud__Description__c   ),  HYPERLINK("/one/one.app#/sObject/" &  cgcloud__Target_Fund__c  & "/view", cgcloud__Target_Fund__r.cgcloud__Description__c   )) |
| cgcloud__Fund_Transaction_Header__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to the fund transaction header that dictates the behavior of the fund transaction rows to be created.This is a relationship field.Relationship Namecgcloud__Fund_Transaction_Header__rRelationship TypeLookupRefers Tocgcloud__Fund_Transaction_Header__c |
| cgcloud__Fund_Transaction_Template_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription of the Transaction template.This is a calculated field.Formulacgcloud__Fund_Transaction_Template__r.cgcloud__Description__c |
| cgcloud__Fund_Transaction_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Transaction template.This is a relationship field.Relationship Namecgcloud__Fund_Transaction_Template__rRelationship TypeLookupRefers Tocgcloud__Fund_Transaction_Template__c |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionRecord link.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |
| cgcloud__Source_Fund__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSource fund for the transaction.This is a relationship field.Relationship Namecgcloud__Source_Fund__rRelationship TypeLookupRefers Tocgcloud__Fund__c |
| cgcloud__Status__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionApproval status of the fund transactions.Possible values are:ApprovedCancelledPendingThe default value is Pending. |
| cgcloud__Target_Fund__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionTarget fund for the transaction.This is a relationship field.Relationship Namecgcloud__Target_Fund__rRelationship TypeMaster-detailRefers Tocgcloud__Fund__c (master object) |
| cgcloud__Transaction_Type__c | TypestringPropertiesFilter, Nillable, SortDescriptionHolds the transaction type of the selected fund transaction template.This is a calculated field.FormulaText(cgcloud__Fund_Transaction_Template__r.cgcloud__Transaction_Type__c) |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[cgcloud\_\_Fund\_Transaction\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Fund\_Transaction\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Fund\_Transaction\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[cgcloud\_\_Fund\_Transaction\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Fund\_Transaction\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Fund_Transaction__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Fund_Transaction__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Fund_Transaction__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Fund_Transaction__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Fund_Transaction__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
