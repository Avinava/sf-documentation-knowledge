---
title: "cgcloud__Order_Payment__c"
domain: retail-api
topic: cgcloudorderpaymentc
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:39.123Z
estimatedTokens: 1512
keywords: [cgcloud__Order_Payment__c, Holds, attributes, Order, Payment, API, version, 54.0, later, cgcloud, _Order, _Payment, Calls, Associated, Objects]
---

# cgcloud__Order_Payment__c

> Holds the attributes of the Order Payment object. This object is
      available in API version 54.0 and later.

# cgcloud\_\_Order\_Payment\_\_c

Holds the attributes of the Order Payment object. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Absolute_Amount__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAmount of the payment without the sign. |
| cgcloud__Amount_DC__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAmount in domestic currency. Payments are gross values. |
| cgcloud__Amount_RC__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAmount in receipt currency. |
| cgcloud__Bank_Account_Number__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAccount number at the bank. |
| cgcloud__Bank_Code__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCode of the Bank. |
| cgcloud__CSC__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCard security code of the credit card. |
| cgcloud__Calc_Amount__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCalculated value of the payment. Used in cash check-in process. |
| cgcloud__Currency_RC__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCurrency of the payment.Possible values are:CADCHFEURGBPJPYNOKRUBUSD |
| cgcloud__Date_Eff__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEffective date of the means of payment. |
| cgcloud__Exp__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionExpiration date of the means of payment. |
| cgcloud__Expense_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates whether other types of expenses, such as Road Toll and Gas, are associated.Possible values are:GasLubricantMiscParkingRoadToll |
| cgcloud__Holder__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolder of the account. |
| cgcloud__Initiation_Date__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate on which the payment is created within the system. |
| cgcloud__Institute__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the institute. |
| cgcloud__Number__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of the means of payment. |
| cgcloud__Order__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the order.This is a relationship field.Relationship Namecgcloud__Order__rRelationship TypeLookupRefers Tocgcloud__Order__c |
| cgcloud__Payment_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Payment template.This is a relationship field.Relationship Namecgcloud__Payment_Template__rRelationship TypeLookupRefers Tocgcloud__Order_Payment_Template__c |
| cgcloud__Payment_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPayment method to specify in the Payment template.Possible values are:CashCheck |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[cgcloud\_\_Order\_Payment\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Order\_Payment\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Order\_Payment\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[cgcloud\_\_Order\_Payment\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Order\_Payment\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Order_Payment__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Order_Payment__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Order_Payment__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Order_Payment__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Order_Payment__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
