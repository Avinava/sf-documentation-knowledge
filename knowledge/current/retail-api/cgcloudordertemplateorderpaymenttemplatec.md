---
title: "cgcloud__Order_Template_Order_Payment_Template__c"
domain: retail-api
topic: cgcloudordertemplateorderpaymenttemplatec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:39.227Z
estimatedTokens: 946
keywords: [Holds, association, order, template, payment, API, version, 54.0, later, cgcloud, _Order, _Template, _Payment, Calls, Associated]
---

# cgcloud__Order_Template_Order_Payment_Template__c

> Holds the association details for the order template and the order
         payment template. This object is available in API version 54.0 and later.

# cgcloud\_\_Order\_Template\_Order\_Payment\_Template\_\_c

Holds the association details for the order template and the order payment template. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Order_Payment_Template__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the order payment template.This is a relationship field.Relationship Namecgcloud__Order_Payment_Template__rRelationship TypeMaster-detailRefers Tocgcloud__Order_Payment_Template__c (detail object) |
| cgcloud__Order_Template__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the order template.This is a relationship field.Relationship Namecgcloud__Order_Template__rRelationship TypeMaster-detailRefers Tocgcloud__Order_Template__c (master object) |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionHyperlink to the detail page of the record.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |

## Associated Objects

The object has these associated objects. The associated object's API version is the same as the API version of the object unless specified otherwise:

[cgcloud\_\_Order\_Template\_Order\_Payment\_Template\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Order\_Template\_Order\_Payment\_Template\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Order\_Template\_Order\_Payment\_Template\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[cgcloud\_\_Order\_Template\_Order\_Payment\_Template\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Order\_Template\_Order\_Payment\_Template\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Order_Template_Order_Payment_Template__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Order_Template_Order_Payment_Template__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Order_Template_Order_Payment_Template__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Order_Template_Order_Payment_Template__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Order_Template_Order_Payment_Template__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
