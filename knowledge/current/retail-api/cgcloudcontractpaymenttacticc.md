---
title: "cgcloud__Contract_Payment_Tactic__c"
domain: retail-api
topic: cgcloudcontractpaymenttacticc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.358Z
estimatedTokens: 1436
keywords: [cgcloud__Contract_Payment_Tactic__c, Stores, relationship, contract, payment, tactics, check, applicable, customer, fulfilled, agreement, API, version, 54.0, later]
---

# cgcloud__Contract_Payment_Tactic__c

> Stores the details of the relationship between a contract payment and
         contract tactics. By using this object, you can check the contract tactics for which the
         payment is applicable after the customer has fulfilled the agreement. This object is
      available in API version 54.0 and later.

# cgcloud\_\_Contract\_Payment\_Tactic\_\_c

Stores the details of the relationship between a contract payment and contract tactics. By using this object, you can check the contract tactics for which the payment is applicable after the customer has fulfilled the agreement. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Account__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the technical field. This attribute isn't shown in the user interface.This is a relationship field.Relationship Namecgcloud__Account__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Actual_Costs__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescribes the proportion of the payment request that's allotted to the tactic. |
| cgcloud__Contract_Payment__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the contract payment.This is a relationship field.Relationship Namecgcloud__Contract_Payment__rRelationship TypeMaster-detailRefers Tocgcloud__Contract_Payment__c (Master object) |
| cgcloud__Contract_Tactic_Template__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescribes the contract tactic template of the contract tactic.This is a calculated field.Formulacgcloud__Contract_Tactic__r.cgcloud__Contract_Tactic_Template__r.Name |
| cgcloud__Contract_Tactic__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the contract tactic.This is a relationship field.Relationship Namecgcloud__Contract_Tactic__rRelationship TypeLookupRefers Tocgcloud__Contract_Tactic__c |
| cgcloud__Contract__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the contract.This is a relationship field.Relationship Namecgcloud__Contract__rRelationship TypeLookupRefers Tocgcloud__Contract__c |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the record detail.This is a calculated field.Formula(HYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top")) |
| cgcloud__Rejected_Amount__c | TypedoublePropertiesFilter, Nillable, SortDescriptionDescribes the proportion of the payment request that's rejected for the tactic.This is a calculated field.FormulaIF(ISPICKVAL(cgcloud__Status__c , 'FullRejection'),  cgcloud__Actual_Costs__c, 0) |
| cgcloud__Status__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates whether the table entry is either new, deleted, or modified. This attribute is used for the replication process.Possible values are:ApprovedFullRejection—RejectedThe default value is Approved. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Contract\_Payment\_Tactic\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Contract\_Payment\_Tactic\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Contract\_Payment\_Tactic\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Contract\_Payment\_Tactic\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Contract\_Payment\_Tactic\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Contract_Payment_Tactic__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Contract_Payment_Tactic__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Contract_Payment_Tactic__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Contract_Payment_Tactic__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Contract_Payment_Tactic__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
