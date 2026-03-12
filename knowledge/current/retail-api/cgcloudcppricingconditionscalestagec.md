---
title: "cgcloud__CP_Pricing_Condition_Scale_Stage__c"
domain: retail-api
topic: cgcloudcppricingconditionscalestagec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.479Z
estimatedTokens: 1145
keywords: [Staging, condition, scales, complex, pricing, uses, API, version, 54.0, later, cgcloud, _CP, _Pricing, _Condition, _Scale]
---

# cgcloud__CP_Pricing_Condition_Scale_Stage__c

> Staging table for condition scales that complex pricing uses.
      This object is available in API version 54.0 and later.

# cgcloud\_\_CP\_Pricing\_Condition\_Scale\_Stage\_\_c

Staging table for condition scales that complex pricing uses. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of this record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Logistic_Unit__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionLogistic Unit of the free item.Possible values are:ConsumerUnit—Consumer UnitLayerPalletSalesUnit—Sales Unit |
| cgcloud__Position__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPosition number that the ERP provides. |
| cgcloud__Pricing_Condition_Stage__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to Pricing Condition Stage.This is a relationship field.Relationship Namecgcloud__Pricing_Condition_Stage__rRelationship TypeLookupRefers Tocgcloud__CP_Pricing_Condition_Stage__c |
| cgcloud__Product__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to Product.This is a relationship field.Relationship Namecgcloud__Product__rRelationship TypeLookupRefers ToProduct2 |
| cgcloud__Rate__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCondition value of the scale range. |
| cgcloud__Scale_Value__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDefines the levels of the scale condition. |
| cgcloud__Status__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionState of the pricing condition scale stage.Possible values are:dnu |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_CP\_Pricing\_Condition\_Scale\_Stage\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_CP\_Pricing\_Condition\_Scale\_Stage\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_CP\_Pricing\_Condition\_Scale\_Stage\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_CP\_Pricing\_Condition\_Scale\_Stage\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_CP\_Pricing\_Condition\_Scale\_Stage\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__CP_Pricing_Condition_Scale_Stage__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__CP_Pricing_Condition_Scale_Stage__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__CP_Pricing_Condition_Scale_Stage__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__CP_Pricing_Condition_Scale_Stage__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__CP_Pricing_Condition_Scale_Stage__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
