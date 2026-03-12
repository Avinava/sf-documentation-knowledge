---
title: "cgcloud__Tour_Template_Object_Reference__c"
domain: retail-api
topic: cgcloudtourtemplateobjectreferencec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.227Z
estimatedTokens: 1414
keywords: [Stores, references, tour, template, API, version, 54.0, later, cgcloud, _Tour, _Template, _Object, _Reference, Calls, Associated]
---

# cgcloud__Tour_Template_Object_Reference__c

> Stores the details of the object references of a tour template.
      This object is available in API version 54.0 and later.

# cgcloud\_\_Tour\_Template\_Object\_Reference\_\_c

Stores the details of the object references of a tour template. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__End_Of_Day__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe respective template is only available within the end-of-day activities of the tour.The default value is false. |
| cgcloud__Order_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the order template.This is a relationship field.Relationship Namecgcloud__Order_Template__rRelationship TypeLookupRefers Tocgcloud__Order_Template__c |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the detail page of the tour template object reference record.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |
| cgcloud__Signature_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the signature template.This is a relationship field.Relationship Namecgcloud__Signature_Template__rRelationship TypeLookupRefers Tocgcloud__Signature_Template__c |
| cgcloud__Start_Of_Day__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe respective template is only available within the start-of-day activities of the tour.The default value is false. |
| cgcloud__Tour_Template__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the tour template.This is a relationship field.Relationship Namecgcloud__Tour_Template__rRelationship TypeMaster-detailRefers Tocgcloud__Tour_Template__c (Master object) |
| cgcloud__Usage__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUsage of the referenced object.Possible values are:ClbMeta.Visit—Delivery VisitSdoMeta.CashCheck—Cash CheckSdoMeta.CashCheckIn—Cash Check InSdoMeta.CashCheckOut—Cash Check OutSdoMeta.Expenses—ExpensesSdoMeta.ForcedTruckAudit—Forced Truck AuditSdoMeta.Order—Delivery DocumentSdoMeta.Payments—PaymentSdoMeta.ProductCheckIn—Product Check InSdoMeta.ProductCheckOut—Product Check OutSdoMeta.TckIvcAddCorrection—Truck Inventory Add CorrectionSdoMeta.TckIvcSubCorrection—Truck Inventory Subtract CorrectionSdoMeta.TckIvcTransferInward—Inward Truck Inventory TransferSdoMeta.TckIvcTransferOutward—Outward Truck Inventory TransferSdoMeta.TruckAudit—Truck Inventory AuditSdoMeta.TruckInventory—Truck InventoryTmgMain.EndOfDay—End of DayTmgMain.StartOfDay—Start of Day |
| cgcloud__Visit_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the visit template.This is a relationship field.Relationship Namecgcloud__Visit_Template__rRelationship TypeLookupRefers Tocgcloud__Visit_Template__c |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Tour\_Template\_Object\_Reference\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Tour\_Template\_Object\_Reference\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Tour\_Template\_Object\_Reference\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Tour\_Template\_Object\_Reference\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Tour\_Template\_Object\_Reference\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Tour_Template_Object_Reference__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Tour_Template_Object_Reference__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Tour_Template_Object_Reference__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Tour_Template_Object_Reference__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Tour_Template_Object_Reference__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
