---
title: "cgcloud__CP_Pricing_Condition_Template__c"
domain: retail-api
topic: cgcloudcppricingconditiontemplatec
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:38.515Z
estimatedTokens: 2304
keywords: [pricing, condition, template, define, calculated, step, calculation, schema, API, version, 54.0, later, cgcloud, _CP, _Pricing]
---

# cgcloud__CP_Pricing_Condition_Template__c

> The pricing condition template object is used to define what is to be
         calculated in a step of a calculation schema. This object is available in API version
      54.0 and later.

# cgcloud\_\_CP\_Pricing\_Condition\_Template\_\_c

The pricing condition template object is used to define what is to be calculated in a step of a calculation schema. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the record type of the record.This is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| cgcloud__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionActive Flag.The default value is false. |
| cgcloud__Base__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the item or product attribute that is to be used as the base for several pricing functionalities such as scale determination or condition value distribution to items.Possible values are:QuantityValueVolumeWeight |
| cgcloud__Condition_Level__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines whether the complex pricing condition type describes header-level or item-level conditions.Possible values are:OrderHeader—Order HeaderOrderItem—Order Item |
| cgcloud__Decimal_Places__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the number of remaining decimal places, if rounding applies.Possible values are:0—None1—One2—Two3—Three4—Four5—Five6—Six |
| cgcloud__Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 1. |
| cgcloud__Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 2. |
| cgcloud__Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 3. |
| cgcloud__Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 4. |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription based on the user-specified language.This is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c, "Language1", cgcloud__Description_Language_1__c, "Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c), "Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c), "Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c), cgcloud__Description_Language_1__c) |
| cgcloud__Distribute_To_Item__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDefines whether the found or calculated condition value is to be distributed among the sales document items.The default value is false. |
| cgcloud__Item_Grouping__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies that the condition applies to a group of items (group condition).The default value is false. |
| cgcloud__Mandatory__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionMandatory flag.The default value is false. |
| cgcloud__Manual_Source_Attribute__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines the field from which the manual condition is taken.Possible values are:PricingInfo1—Pricing Info 1PricingInfo2—Pricing Info 2PricingInfo3—Pricing Info 3PricingInfo4—Pricing Info 4 |
| cgcloud__Manual__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDefines whether the condition type requires manual editing of the condition.The default value is false. |
| cgcloud__Meta_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the meta type of the complex pricing condition template.Possible values are:AddFreeItm—Add Free ItemFixAmount—AmountFlatRate—Flat RateFreeGood—Free GoodLastVldVal—Last Valid ValueMaximumMinimumMultiBuy—Multi BuyPercentagePriceSummationUserExit—User Exit Only |
| cgcloud__Rounding__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines whether the system rounds the calculation result after the calculation step has been applied.Possible values are:0—No Rounding1—Commercial Rounding2—Always Round Up3—Always Round Down |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDescribes the sales organization to which the pricing condition template belongs.Possible values are:0000000100020003 |
| cgcloud__Scale_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies whether scale conditions apply and, if Scale Type is not empty, how to interpret the scale.Possible values are:FromGraduatedTo |
| cgcloud__Search_Strategy__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the search strategy of the calculation schema step.This is a relationship field.Relationship Namecgcloud__Search_Strategy__rRelationship TypeLookupRefers Tocgcloud__CP_Search_Strategy__c |
| cgcloud__Sign__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the leading sign of condition values.Possible values are:+—P (Plus)-—M (Minus)N—Not Specified |
| cgcloud__Sort__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionControls the position of templates in overviews and wizards. |
| cgcloud__Subtotal__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies the pricing templates that are used to define subtotal condition templates.The default value is false. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_CP\_Pricing\_Condition\_Template\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_CP\_Pricing\_Condition\_Template\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_CP\_Pricing\_Condition\_Template\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_CP\_Pricing\_Condition\_Template\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_CP\_Pricing\_Condition\_Template\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Code Examples

```
CASE($User.cgcloud__Language_Postfix__c,
"Language1", cgcloud__Description_Language_1__c,
"Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c),
"Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c),
"Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c),
cgcloud__Description_Language_1__c)
```

## Related Topics

- cgcloud__CP_Pricing_Condition_Template__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__CP_Pricing_Condition_Template__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__CP_Pricing_Condition_Template__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__CP_Pricing_Condition_Template__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__CP_Pricing_Condition_Template__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
