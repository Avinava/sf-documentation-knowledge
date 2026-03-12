---
title: "cgcloud__CP_Calculation_Schema_Determination__c"
domain: retail-api
topic: cgcloudcpcalculationschemadeterminationc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.414Z
estimatedTokens: 1177
keywords: [calculation, schema, determination, determine, rule, order, template, pricing, customer, API, version, 54.0, later, cgcloud, _CP]
---

# cgcloud__CP_Calculation_Schema_Determination__c

> The calculation schema determination object is used to determine the
         rule based on order template pricing type and customer pricing type. This object is
      available in API version 54.0 and later.

# cgcloud\_\_CP\_Calculation\_Schema\_Determination\_\_c

The calculation schema determination object is used to determine the rule based on order template pricing type and customer pricing type. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Account_Price_Type__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the pricing type of the customer.Possible values are:1—Standard2—Standard incl. Sales TaxC—Sample/DonationThe default value is 1. |
| cgcloud__Calculation_Schema__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the calculation schema.This is a relationship field.Relationship Namecgcloud__Calculation_Schema__rRelationship TypeLookupRefers Tocgcloud__CP_Calculation_Schema__c |
| cgcloud__Order_Price_Type__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the pricing type of the sales document template.Possible values are:A—StandardC—Free of ChargeF—Sample/DonateQ—ReturnT—RefusalV—ContractThe default value is A. |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDescribes the sales organization to which the calculation schema determination record belongs.Possible values are:0000000100020003 |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_CP\_Calculation\_Schema\_Determination\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_CP\_Calculation\_Schema\_Determination\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_CP\_Calculation\_Schema\_Determination\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_CP\_Calculation\_Schema\_Determination\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_CP\_Calculation\_Schema\_Determination\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__CP_Calculation_Schema_Determination__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__CP_Calculation_Schema_Determination__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__CP_Calculation_Schema_Determination__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__CP_Calculation_Schema_Determination__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__CP_Calculation_Schema_Determination__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
