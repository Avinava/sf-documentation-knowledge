---
title: "AttributeAdjustmentCondition"
domain: revenue-cloud
topic: attributeadjustmentcondition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:09.597Z
estimatedTokens: 1044
keywords: [AttributeAdjustmentCondition, Represents, condition, applied, attribute, determines, price, product, service, being, sold., API, version, 60.0, later., Supported, Calls, Fields, Associated, Objects]
---

# AttributeAdjustmentCondition

> Represents the condition applied to an attribute that determines the price of
         a product or service being sold. This object is available in API version 60.0 and
      later.

# AttributeAdjustmentCondition

Represents the condition applied to an attribute that determines the price of a product or service being sold. This object is available in API version 60.0 and later.

## Supported Calls

create(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AttributeBasedAdjRuleId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionSpecifies the attribute adjustment rule record for which the condition is to be applied.This field is a relationship field.Relationship NameAttributeBasedAdjRuleRelationship TypeLookupRefers ToAttributeBasedAdjRule |
| AttributeDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the attribute definition record for which the condition is to be applied.This field is a relationship field.Relationship NameAttributeDefinitionRelationship TypeLookupRefers ToAttributeDefinition |
| BooleanValue | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the boolean value of the operator.Possible values are:FalseTrue |
| DateTimeValue | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date time value of the attribute. |
| DateValue | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date value of the attribute. |
| DoubleValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe double value of the attribute. |
| IntegerValue | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe integer value of the attribute. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last referred to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the attribute adjustment condition. |
| Operator | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionOperator used by the attribute.Possible values are:doesnotexistin—Does Not Exist Inequals—Equalsexistsin—Exists Ingreaterorequal—Greater Or Equalgreaterthan—Greater Thanlessorequal—Less Or Equallessthan—Less Thanmatches—Matchesnotequals—Not EqualsThe default value is equals. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the product associated with the attribute adjustment condition.This field is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| StringValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe string value of the attribute. |
| UsageType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of record where the attribute adjustment condition is used.Possible values are:PricingRating |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AttributeAdjustmentConditionFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AttributeAdjustmentConditionHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- AttributeAdjustmentConditionFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
- AttributeAdjustmentConditionHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
