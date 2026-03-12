---
title: "cgcloud__CP_Pricing_Condition_Stage__c"
domain: retail-api
topic: cgcloudcppricingconditionstagec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.497Z
estimatedTokens: 2130
keywords: [cgcloud__CP_Pricing_Condition_Stage__c, Staging, conditions, complex, pricing, uses, API, version, 54.0, later, cgcloud, _CP, _Pricing, _Condition, _Stage]
---

# cgcloud__CP_Pricing_Condition_Stage__c

> Staging table for conditions that complex pricing uses. This
      object is available in API version 54.0 and later.

# cgcloud\_\_CP\_Pricing\_Condition\_Stage\_\_c

Staging table for conditions that complex pricing uses. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of this record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Account_Set__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to Customer Set.This is a relationship field.Relationship Namecgcloud__Account_Set__rRelationship TypeLookupRefers Tocgcloud__Account_Set__c |
| cgcloud__Account__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to Account.This is a relationship field.Relationship Namecgcloud__Account__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Currency__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionCurrency of agreement.Possible values are:CAD—Canadian DollarCHF—Swiss FrancEUR—EuroGBP—Pound SterlingJPY—YenNOK—Norwegian KroneRUB—Russian CurrencyUSD—US Dollar |
| cgcloud__Denominator__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDefines a denominator for the condition. |
| cgcloud__External_Id__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionSAP or ERP Condition record number. |
| cgcloud__Key_10__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionKey of the used Key Type. |
| cgcloud__Key_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionKey of the used Key Type. |
| cgcloud__Key_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionKey of the used Key Type. |
| cgcloud__Key_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionKey of the used Key Type. |
| cgcloud__Key_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionKey of the used Key Type. |
| cgcloud__Key_5__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionKey of the used Key Type. |
| cgcloud__Key_6__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionKey of the used Key Type. |
| cgcloud__Key_7__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionKey of the used Key Type. |
| cgcloud__Key_8__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionKey of the used Key Type. |
| cgcloud__Key_9__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionKey of the used Key Type. |
| cgcloud__Key_Type__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to Key Type.This is a relationship field.Relationship Namecgcloud__Key_Type__rRelationship TypeLookupRefers Tocgcloud__CP_Key_Type__c |
| cgcloud__Keys_Hash_Code__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionHash code of all columns that can be used to build the merge key in the target table. |
| cgcloud__Logistic_Unit__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionCondition unit.Possible values are:ConsumerUnit—Consumer UnitLayerPalletSalesUnit—Sales Unit |
| cgcloud__Pricing_Condition_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to Pricing Condition Template.This is a relationship field.Relationship Namecgcloud__Pricing_Condition_Template__rRelationship TypeLookupRefers Tocgcloud__CP_Pricing_Condition_Template__c |
| cgcloud__Product__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to Product.This is a relationship field.Relationship Namecgcloud__Product__rRelationship TypeLookupRefers ToProduct2 |
| cgcloud__Promotion__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to Promotion.This is a relationship field.Relationship Namecgcloud__Promotion__rRelationship TypeLookupRefers Tocgcloud__Promotion__c |
| cgcloud__Reward__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to Reward.This is a relationship field.Relationship Namecgcloud__Reward__rRelationship TypeLookupRefers Tocgcloud__Promotion_Reward__c |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDescribes the sales organization to which the key condition belongs.Possible values are:0000000100020003 |
| cgcloud__Sort__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionControls the sequence of complex pricing conditions. |
| cgcloud__Status__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionState of the pricing condition stage.Possible values are:dnu |
| cgcloud__Threshold_Unit__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionUnit for which thresholds (scales) are defined.Possible values are:ConsumerUnit—Consumer UnitLayerPalletSalesUnit—Sales Unit |
| cgcloud__Valid_From__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDate from which the entry is valid. |
| cgcloud__Valid_Thru__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDate until which the entry is valid. |
| cgcloud__Value__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCondition value (amount or percentage). |

## Associated Objects

This object has these following associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_CP\_Pricing\_Condition\_Stage\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_CP\_Pricing\_Condition\_Stage\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_CP\_Pricing\_Condition\_Stage\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_CP\_Pricing\_Condition\_Stage\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_CP\_Pricing\_Condition\_Stage\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__CP_Pricing_Condition_Stage__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__CP_Pricing_Condition_Stage__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__CP_Pricing_Condition_Stage__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__CP_Pricing_Condition_Stage__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__CP_Pricing_Condition_Stage__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
