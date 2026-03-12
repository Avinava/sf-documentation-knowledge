---
title: "cgcloud__Signature_Attribute__c"
domain: retail-api
topic: cgcloudsignatureattributec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:39.958Z
estimatedTokens: 943
keywords: [cgcloud__Signature_Attribute__c, Entity, stores, attributes, signatures, API, version, 54.0, later, cgcloud, _Signature, _Attribute, Calls, Associated, Objects]
---

# cgcloud__Signature_Attribute__c

> Entity that stores the attributes and values for signatures.
      This object is available in API version 54.0 and later.

# cgcloud\_\_Signature\_Attribute\_\_c

Entity that stores the attributes and values for signatures. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Attribute__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAttribute combinations.Possible values are:ASNActualAmountAmountCashierCheckerCustomerCustomerIdDateDifferenceDriverGuardInvoiceIdLineItemsOriginalTimeTourIdVehicleIdWarehouseWarehouseId |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionName of the record link.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |
| cgcloud__Signature__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the Signature record.This is a relationship field.Relationship Namecgcloud__Signature__rRelationship TypeMaster-detailRefers Tocgcloud__Signature__c (the master object) |
| cgcloud__Value__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionValue of the attribute. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Signature\_Attribute\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Signature\_Attribute\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Signature\_Attribute\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Signature\_Attribute\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Signature\_Attribute\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Signature_Attribute__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Signature_Attribute__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Signature_Attribute__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Signature_Attribute__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Signature_Attribute__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
