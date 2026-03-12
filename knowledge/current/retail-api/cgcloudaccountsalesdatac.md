---
title: "cgcloud__Account_Sales_Data__c"
domain: retail-api
topic: cgcloudaccountsalesdatac
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.029Z
estimatedTokens: 1025
keywords: [cgcloud__Account_Sales_Data__c, sales, customer, two, consecutive, years, Access, provided, System, Admin, API, version, 54.0, later, cgcloud]
---

# cgcloud__Account_Sales_Data__c

> Contains the information of the sales of a customer for two consecutive
         years. Access of the object provided to the System Admin. This object is available in
      API version 54.0 and later.

# cgcloud\_\_Account\_Sales\_Data\_\_c

Contains the information of the sales of a customer for two consecutive years. Access of the object provided to the System Admin. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of this record. |
| cgcloud__Account__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to customer.This is a relationship field.Relationship Namecgcloud__Account__rRelationship TypeMaster-detailRefers ToAccount (the master object) |
| cgcloud__Month__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the month for which the sales data is for. |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the detail page of the customer sales data record.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |
| cgcloud__Sales_Volume__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSales Volume. |
| cgcloud__Year__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the year for which the sales data is for. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[cgcloud\_\_Account\_Sales\_Data\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Account\_Sales\_Data\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Account\_Sales\_Data\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[cgcloud\_\_Account\_Sales\_Data\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Account\_Sales\_Data\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Account_Sales_Data__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Account_Sales_Data__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Account_Sales_Data__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Account_Sales_Data__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Account_Sales_Data__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
