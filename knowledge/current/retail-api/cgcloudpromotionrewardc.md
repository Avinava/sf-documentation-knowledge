---
title: "cgcloud__Promotion_Reward__c"
domain: retail-api
topic: cgcloudpromotionrewardc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:39.628Z
estimatedTokens: 2244
keywords: [cgcloud__Promotion_Reward__c, stores, rewards, assigned, reward, group, API, version, 54.0, later, cgcloud, _Promotion, _Reward, Calls, Associated]
---

# cgcloud__Promotion_Reward__c

> This object stores the details of rewards that are assigned to a
         reward group. This object is available in API version 54.0 and later.

# cgcloud\_\_Promotion\_Reward\_\_c

This object stores the details of rewards that are assigned to a reward group. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Automatically_Granted__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDefines whether the rewards must be automatically granted.The default value is false. |
| cgcloud__Boolean_Value__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionValue to compare with an output parameter.Possible values are:false—Falsetrue—True |
| cgcloud__Classification__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionClassification of either Free Item Reward or Special Rewards.Possible values are:C1C2C3C4C5 |
| cgcloud__Count_Products__c | TypedoublePropertiesFilter, Nillable, SortDescriptionCount of Promotion_Reward_Product__c records.This is a calculated field. |
| cgcloud__Date_Value__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionValue to compare with an output parameter. |
| cgcloud__Default_Value__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDefault value depending on Condition_Type. |
| cgcloud__Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 1. |
| cgcloud__Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 2. |
| cgcloud__Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 3. |
| cgcloud__Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 4. |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription based on the user-specified language.This is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c,  "Language1", cgcloud__Description_Language_1__c,  "Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c),  "Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c),  "Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c),cgcloud__Description_Language_1__c) |
| cgcloud__Free_Item__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDefines a reward as free item-relevant.The default value is false. |
| cgcloud__Hurdle__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to Hurdle. Indicates whether a specific hurdle condition resolution is to be done for rewards values.This is a relationship field.Relationship Namecgcloud__Hurdle__rRelationship TypeLookupRefers Tocgcloud__Promotion_Hurdle__c |
| cgcloud__Included__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDefine whether the reward is to be included on pricing calculations in the context of selectable promotion.The default value is true. |
| cgcloud__Numeric_Value__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionValue to compare with an output parameter. |
| cgcloud__Pricing_Condition_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the pricing condition template.This is a relationship field.Relationship Namecgcloud__Pricing_Condition_Template__rRelationship TypeLookupRefers Tocgcloud__CP_Pricing_Condition_Template__c |
| cgcloud__Promotion_Reward_Group__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionMaster-Detail to the Reward Group to which the Reward belongs.This is a relationship field.Relationship Namecgcloud__Promotion_Reward_Group__rRelationship TypeMaster-detailRefers Tocgcloud__Promotion_Reward_Group__c (the master object) |
| cgcloud__Reward_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines the type of reward.Possible values are:AmountPerUnit—Amount Per UnitFlatRate—Flat RateFreeItem—Free ItemPercentageDiscount—Percentage DiscountSpecialSpecialBasePrice—Special Base Price |
| cgcloud__Sort_Unique__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the uniqueness of the sort value. |
| cgcloud__Sort__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSort order of the displayable rewards records. |
| cgcloud__SubGroup__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the subgroup to which the rewards belongs. |
| cgcloud__Text_Value__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionValue to compare with an output parameter. |
| cgcloud__Title_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the title of language 1. |
| cgcloud__Title_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the title of language 2. |
| cgcloud__Title_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the title of language 3. |
| cgcloud__Title_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the title of language 4. |
| cgcloud__Title__c | TypestringPropertiesFilter, Nillable, SortDescriptionLocalizable title of the Reward Group. Reference to the title based on the user-specified language.This is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c,  "Language1", cgcloud__Title_Language_1__c,  "Language2", BLANKVALUE(cgcloud__Title_Language_2__c,cgcloud__Title_Language_1__c),  "Language3", BLANKVALUE(cgcloud__Title_Language_3__c,cgcloud__Title_Language_1__c),  "Language4", BLANKVALUE(cgcloud__Title_Language_4__c,cgcloud__Title_Language_1__c),  cgcloud__Title_Language_1__c) |
| cgcloud__User_Exit__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines a Reward as a Special Reward. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they e available in the specified API version and later.

[cgcloud\_\_Promotion\_Reward\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Promotion\_Reward\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Promotion\_Reward\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Promotion\_Reward\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Promotion\_Reward\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Code Examples

```
CASE($User.cgcloud__Language_Postfix__c,

"Language1", cgcloud__Description_Language_1__c,

"Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c),

"Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c),

"Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c),cgcloud__Description_Language_1__c)
```

```
CASE($User.cgcloud__Language_Postfix__c,

"Language1", cgcloud__Title_Language_1__c,

"Language2", BLANKVALUE(cgcloud__Title_Language_2__c,cgcloud__Title_Language_1__c),

"Language3", BLANKVALUE(cgcloud__Title_Language_3__c,cgcloud__Title_Language_1__c),

"Language4", BLANKVALUE(cgcloud__Title_Language_4__c,cgcloud__Title_Language_1__c),

cgcloud__Title_Language_1__c)
```

## Related Topics

- cgcloud__Promotion_Reward__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Promotion_Reward__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Promotion_Reward__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Promotion_Reward__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Promotion_Reward__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
