---
title: "cgcloud__Promotion_Reward_Product__c"
domain: retail-api
topic: cgcloudpromotionrewardproductc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:39.649Z
estimatedTokens: 1194
keywords: [cgcloud__Promotion_Reward_Product__c, stores, product, that's, assigned, promotion, reward, API, version, 54.0, later, cgcloud, _Promotion, _Reward, _Product]
---

# cgcloud__Promotion_Reward_Product__c

> This object stores the details of the product that's assigned to a
         promotion reward. This object is available in API version 54.0 and later.

# cgcloud\_\_Promotion\_Reward\_Product\_\_c

This object stores the details of the product that's assigned to a promotion reward. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Default_Value__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDefault value that's to be delivered for this product. |
| cgcloud__Included__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDefines whether the product is to be included on pricing calculations in the context of selectable promotions.The default value is true. |
| cgcloud__Logistic_Unit__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionUnit of measure of the products that belong to a promotion reward.Possible values are:ConsumerUnit—Consumer UnitLayerPalletSalesUnit—Sales Unit |
| cgcloud__Max_Value__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionMaximum value that can be delivered for this product. |
| cgcloud__Product_Unique__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique identifier of the linked product. |
| cgcloud__Product__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to the product to which the specific configuration applies.This is a relationship field.Relationship Namecgcloud__Product__rRelationship TypeLookupRefers ToProduct2 |
| cgcloud__Promotion_Reward__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionMaster-Detail to the reward to which the product-specific configuration applies.This is a relationship field.Relationship Namecgcloud__Promotion_Reward__rRelationship TypeMaster-detailRefers Tocgcloud__Promotion_Reward__c (Master object) |
| cgcloud__Reward_Type__c | TypestringPropertiesFilter, Nillable, SortDescriptionFormula to show the type of the related reward.This is a calculated field.FormulaTEXT(cgcloud__Promotion_Reward__r.cgcloud__Reward_Type__c) |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Promotion\_Reward\_Product\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Promotion\_Reward\_Product\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Promotion\_Reward\_Product\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Promotion\_Reward\_Product\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Promotion\_Reward\_Product\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Promotion_Reward_Product__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Promotion_Reward_Product__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Promotion_Reward_Product__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Promotion_Reward_Product__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Promotion_Reward_Product__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
