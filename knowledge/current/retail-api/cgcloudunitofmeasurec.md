---
title: "cgcloud__Unit_of_Measure__c"
domain: retail-api
topic: cgcloudunitofmeasurec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.304Z
estimatedTokens: 1711
keywords: [cgcloud__Unit_of_Measure__c, Stores, units, measure, logistic, unit, product, API, version, 54.0, later, cgcloud, _Unit, _of, _Measure]
---

# cgcloud__Unit_of_Measure__c

> Stores the details of the units of measure (logistic unit) of a
         product. This object is available in API version 54.0 and later.

# cgcloud\_\_Unit\_of\_Measure\_\_c

Stores the details of the units of measure (logistic unit) of a product. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Check_isConsumer_Unique__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUsed internally for validation. |
| cgcloud__Check_isOrder_Unique__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUsed internally for validation. |
| cgcloud__Check_isPrice_Unique__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUsed internally for validation. |
| cgcloud__GTIN__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionGlobal trade item number. |
| cgcloud__Is_Consumer_Unit__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the item is a consumer unit.The default value is false. |
| cgcloud__Is_Order_Unit__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the item is a default order unit.The default value is false. |
| cgcloud__Is_Price_Unit__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the item is a price unit.The default value is false. |
| cgcloud__Order_Ability__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the unit of measure can be ordered.The default value is false. |
| cgcloud__Pieces_per_Smallest_Unit__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNumber of pieces of the smallest unit that this unit contains. |
| cgcloud__Pieces_per_parent_unit__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNumber of pieces of this unit of measure that the parent unit of measure contains. |
| cgcloud__Product__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to product.This is a relationship field.Relationship Namecgcloud__Product__rRelationship TypeLookupRefers ToProduct2 |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the unit of measure record.This is a calculated field.FormulaHYPERLINK("/" &Id, /*IMAGE("/img/func_icons/util/lookup20.gif", "View")*/"View", "_top") |
| cgcloud__Rounding_Rule__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the rounding rule to be applied for the target unit of measure.Possible values are:DownNearestNeverUpUserExitThe default value is Never. |
| cgcloud__Rounding_Target__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls whether the unit of measure is to be considered for rounding quantities.The default value is false. |
| cgcloud__Sort_Validation__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUsed internally for validation. |
| cgcloud__Sort__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSequence of unit of measures of a product (from the smallest unit to the largest unit). |
| cgcloud__Unit_Type_Validation__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUsed internally for validation. |
| cgcloud__Unit_Type__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionType of the unit of measure.Possible values are:ConsumerUnitLayerPalletSalesUnitThe default value is SalesUnit. |
| cgcloud__Volume__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionItem volume used for complex pricing. |
| cgcloud__Weight__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionItem weight used for complex pricing. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Unit\_of\_Measure\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Unit\_of\_Measure\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Unit\_of\_Measure\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Unit\_of\_Measure\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Unit\_of\_Measure\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Unit_of_Measure__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Unit_of_Measure__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Unit_of_Measure__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Unit_of_Measure__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Unit_of_Measure__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
