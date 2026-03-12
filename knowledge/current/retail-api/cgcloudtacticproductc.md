---
title: "cgcloud__Tactic_Product__c"
domain: retail-api
topic: cgcloudtacticproductc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.093Z
estimatedTokens: 1644
keywords: [cgcloud__Tactic_Product__c, Junction, Tactic, Product, API, version, 54.0, later, cgcloud, _Tactic, _Product, Calls, Associated, Objects]
---

# cgcloud__Tactic_Product__c

> Junction object between Tactic and Product. This object is
      available in API version 54.0 and later.

# cgcloud\_\_Tactic\_Product\_\_c

Junction object between Tactic and Product. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique name of the tactic product. |
| cgcloud__Classification__c | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionClassification of products.Possible values are:C1C2C3C4C5 |
| cgcloud__Currency__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionCurrency of the tactic product.Possible values are:CADCHFEURGBPJPYNOKRUBUSD |
| cgcloud__Default_Value__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDefines the default quantity that can be given to the product in a free item promotion reward context. |
| cgcloud__Group_Id__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDefines the order of display of the group. |
| cgcloud__Group_Name__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionProduct register grouping drives the way that the products are shown in the order. |
| cgcloud__Group_Sort__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSort order for the products within a register. |
| cgcloud__Included__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIncluded in the tactic.The default value is true. |
| cgcloud__Is_Transferred__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIdentifies if the tactic product is transferred.The default value is false. |
| cgcloud__Lift_Pct__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIncremental lift factor. |
| cgcloud__Max_Value__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDefines the maximum quantity that's given to the product in a free item promotion reward context. |
| cgcloud__Pct_of_Stores__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPercentage of stores of the account that participate in the tactic. |
| cgcloud__Planned_Costs__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPlanned cost. |
| cgcloud__Product_Description_1__c | TypestringPropertiesFilter, Nillable, SortDescriptionAssociated product description.This is a calculated field.Formulacgcloud__Product__r.cgcloud__Description_1__c |
| cgcloud__Product_Name__c | TypestringPropertiesFilter, Nillable, SortDescriptionAssociated product name.This is a calculated field.Formulacgcloud__Product__r.Name |
| cgcloud__Product__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the product.This is a relationship field.Relationship Namecgcloud__Product__rRelationship TypeLookupRefers ToProduct2 |
| cgcloud__Promoted_Price__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionConsumer price. |
| cgcloud__Quantity__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionQuantity of the product. |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the detail page of the Tactic Product related list record.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |
| cgcloud__Sales_Org__c | TypestringPropertiesFilter, Nillable, SortDescriptionReference to the sales org of the product.This is a calculated field.Formulacgcloud__Product__r.cgcloud__Sales_Org__c |
| cgcloud__TacticIdProductId__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique field that validates the product added to the tactic. |
| cgcloud__Tactic__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the tactic.This is a relationship field.Relationship Namecgcloud__Tactic__rRelationship TypeMaster-detailRefers Tocgcloud__Tactic__c (Master object) |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Tactic\_Product\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Tactic\_Product\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Tactic\_Product\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Tactic\_Product\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Tactic\_Product\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Tactic_Product__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Tactic_Product__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Tactic_Product__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Tactic_Product__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Tactic_Product__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
