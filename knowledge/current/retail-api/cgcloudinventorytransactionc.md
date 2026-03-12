---
title: "cgcloud__Inventory_Transaction__c"
domain: retail-api
topic: cgcloudinventorytransactionc
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:38.764Z
estimatedTokens: 1608
keywords: [cgcloud__Inventory_Transaction__c, Captures, Inventory, Transaction, records, API, version, 54.0, later, cgcloud, _Inventory, _Transaction, Calls, Associated, Objects]
---

# cgcloud__Inventory_Transaction__c

> Captures Inventory Transaction records. This object is available
      in API version 54.0 and later.

# cgcloud\_\_Inventory\_Transaction\_\_c

Captures Inventory Transaction records. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Accounted__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the record is already considered for updating the Balance record.The default value is false. |
| cgcloud__Allow_Manual_Creation__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether it's possible to manually create the initial inventory and Balance record.The default value is false. |
| cgcloud__Amount__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionAmount of the transaction. |
| cgcloud__Balance__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis technical field is created to update the Total balance value in Inventory (Roll-up Summary field). The checkbox value is updated by updating the workflow field.The default value is false. |
| cgcloud__Charge_Date__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDate on which the inventory is to be physically charged by this transaction. |
| cgcloud__Creation_Date__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDate on which the inventory is created. |
| cgcloud__Currency__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the currency of the cash inventory.Possible values are:CADCHFEURGBPJPYNOKRUBUSD |
| cgcloud__Inventory_Transaction_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the inventory transaction template.This is a relationship field.Relationship Namecgcloud__Inventory_Transaction_Template__rRelationship TypeLookupRefers Tocgcloud__Inventory_Transaction_Template__c |
| cgcloud__Inventory__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the inventory.This is a relationship field.Relationship Namecgcloud__Inventory__rRelationship TypeMaster-detailRefers Tocgcloud__Inventory__c (the master object) |
| cgcloud__Order_Document__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the order document.This is a relationship field.Relationship Namecgcloud__Order_Document__rRelationship TypeLookupRefers Tocgcloud__Order__c |
| cgcloud__Order_Item__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the order item for a product-related transaction.This is a relationship field.Relationship Namecgcloud__Order_Item__rRelationship TypeLookupRefers Tocgcloud__Order_Item__c |
| cgcloud__Order_Payment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences to the ID of the order payment related to the inventory transaction.This field is a relationship field.This field is available in API version 55.0 and later.Relationship Namecgcloud__Order_Payment__rRelationship TypeLookupRefers Tocgcloud__Order_Payment__c |
| cgcloud__Payment_Method__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the payment method for the cash transaction.Possible values are:CashCheckCreditCardDebitCardDeductionExpenseMoneyOrderMultiple |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Inventory\_Transaction\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Inventory\_Transaction\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Inventory\_Transaction\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Inventory\_Transaction\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Inventory\_Transaction\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Inventory_Transaction__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Inventory_Transaction__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Inventory_Transaction__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Inventory_Transaction__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Inventory_Transaction__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
