---
title: "cgcloud__Order_Item_Order_Template_Association__c"
domain: retail-api
topic: cgcloudorderitemordertemplateassociationc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:39.075Z
estimatedTokens: 1132
keywords: [Holds, association, order, item, templates, template, API, version, 54.0, later, cgcloud, _Order, _Item, _Template, _Association]
---

# cgcloud__Order_Item_Order_Template_Association__c

> Holds the association of order item templates with order template.
       This object is available in API version 54.0 and later.

# cgcloud\_\_Order\_Item\_Order\_Template\_Association\_\_c

Holds the association of order item templates with order template. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Check_Uniqueness__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the order template and the order item template association is unique.The default value is false. |
| cgcloud__Main__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionMain order item template.The default value is false. |
| cgcloud__Order_Item_Template__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionOrder item template ID.This is a relationship field.Relationship Namecgcloud__Order_Item_Template__rRelationship TypeMaster-detailRefers Tocgcloud__Order_Item_Template__c (master object) |
| cgcloud__Order_Template__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionOrder template ID.This is a relationship field.Relationship Namecgcloud__Order_Template__rRelationship TypeMaster-detailRefers Tocgcloud__Order_Template__c (detail object) |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionHyperlink for the Detail page of the record.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |
| cgcloud__Valid_From__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe date from which the association is valid. |
| cgcloud__Valid_Thru__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe date till which the association is valid. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[cgcloud\_\_Order\_Item\_Order\_Template\_Association\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Order\_Item\_Order\_Template\_Association\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Order\_Item\_Order\_Template\_Association\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[cgcloud\_\_Order\_Item\_Order\_Template\_Association\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Order\_Item\_Order\_Template\_Association\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Order_Item_Order_Template_Association__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Order_Item_Order_Template_Association__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Order_Item_Order_Template_Association__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Order_Item_Order_Template_Association__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Order_Item_Order_Template_Association__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
