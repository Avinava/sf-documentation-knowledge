---
title: "cgcloud__Account_Relationship__c"
domain: retail-api
topic: cgcloudaccountrelationshipc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.023Z
estimatedTokens: 1319
keywords: [cgcloud__Account_Relationship__c, relationship, two, customer, accounts, API, version, 54.0, later, cgcloud, _Account, _Relationship, Calls, Associated, Objects]
---

# cgcloud__Account_Relationship__c

> This object represents the relationship between two customer
         accounts. This object is available in API version 54.0 and later.

# cgcloud\_\_Account\_Relationship\_\_c

This object represents the relationship between two customer accounts. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionMost recent date on which a user performed an activity on this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of this record. |
| cgcloud__Account__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionSpecifies the main customer in the relationship.This is a relationship field.Relationship Namecgcloud__Account__rRelationship TypeMaster-detailRefers ToAccount (Master object) |
| cgcloud__End_Date__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDate until which the relationship is active. |
| cgcloud__Is_Primary_Relationship__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the relationship is a primary relationship (true) or not (false).The default value is false. |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the detail page of the Customer Relationship record.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |
| cgcloud__Related_Account_Name__c | TypestringPropertiesFilter, Nillable, SortDescriptionName of the customer who is related to the main customer of the relationship.This field is a calculated field.This field is available in API version 55.0 and later.Formulacgcloud__Related_Account__r.Name |
| cgcloud__Related_Account__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionCustomer who is related to the main customer in the relationship.This is a relationship field.Relationship Namecgcloud__Related_Account__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Relationship_Type__c | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionDefines the relationship that's defined by this account-to-account relation record (Payer, Payee, Wholesaler, Delivery Recipient, Bill To, and so on.).Possible values are:BillToDeliveryRecipientPayeePayerWholesaler |
| cgcloud__Self_Relationship__c | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionFormula that’s used to indicate that the relationship is a self relationship.This is a calculated field.Formulacgcloud__Account__c = cgcloud__Related_Account__c |
| cgcloud__Start_Date__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDate from which the relationship is active. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Account\_Relationship\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Account\_Relationship\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Account\_Relationship\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Account\_Relationship\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Account\_Relationship\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Account_Relationship__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Account_Relationship__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Account_Relationship__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Account_Relationship__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Account_Relationship__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
