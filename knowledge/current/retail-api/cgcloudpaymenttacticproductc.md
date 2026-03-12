---
title: "cgcloud__Payment_Tactic_Product__c"
domain: retail-api
topic: cgcloudpaymenttacticproductc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:39.363Z
estimatedTokens: 1212
keywords: [cgcloud__Payment_Tactic_Product__c, payment, tactic, products, assigned, LDP, level, project, product, API, version, 54.0, later, cgcloud, _Payment]
---

# cgcloud__Payment_Tactic_Product__c

> This object contains payment tactic products and assigned values at
         the LDP level or at the level that the project defines as payment product level. This
      object is available in API version 54.0 and later.

# cgcloud\_\_Payment\_Tactic\_Product\_\_c

This object contains payment tactic products and assigned values at the LDP level or at the level that the project defines as payment product level. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionMost recent date on which a user last performed an action on the record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Additional_Kpi_Value_1__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionKPI value for the measure that's defined in Payment_Template__c.Additional_Snapshot_Kpi_Definition_1__c. |
| cgcloud__Additional_Kpi_Value_2__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionKPI value for the measure that's defined in Payment_Template__c.Additional_Snapshot_Kpi_Definition_2__c. |
| cgcloud__Additional_Kpi_Value_3__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionKPI value for the measure that's defined in Payment_Template__c.Additional_Snapshot_Kpi_Definition_3__c. |
| cgcloud__Amount__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPayment amount for the current tactic or product combination. |
| cgcloud__Payment_Tactic__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPayment/Tactic combination to which the record belongs.This is a relationship field.Relationship Namecgcloud__Payment_Tactic__rRelationship TypeLookupRefers Tocgcloud__Payment_Tactic__c |
| cgcloud__Payment__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the payment.This is a relationship field.Relationship Namecgcloud__Payment__rRelationship TypeMaster-detailRefers Tocgcloud__Payment__c (the master object) |
| cgcloud__Product__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionProduct to which the record belongs. The level of the product is bound by Payment_Template__c.Snapshot_Product_Level__c.This is a relationship field.Relationship Namecgcloud__Product__rRelationship TypeLookupRefers ToProduct2 |

## Associated Objects

This object has these following associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Payment\_Tactic\_Product\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Payment\_Tactic\_Product\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Payment\_Tactic\_Product\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Payment\_Tactic\_Product\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Payment\_Tactic\_Product\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Payment_Tactic_Product__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Payment_Tactic_Product__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Payment_Tactic_Product__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Payment_Tactic_Product__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Payment_Tactic_Product__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
