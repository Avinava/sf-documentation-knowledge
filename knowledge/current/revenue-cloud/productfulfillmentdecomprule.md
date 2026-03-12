---
title: "ProductFulfillmentDecompRule"
domain: revenue-cloud
topic: productfulfillmentdecomprule
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:11.163Z
estimatedTokens: 997
keywords: [ProductFulfillmentDecompRule, Represents, rule, determines, how, order, broken, sub-orders, specific, technical, details, help, fulfillment., applied, commercial, product., API, version, 61.0, later.]
---

# ProductFulfillmentDecompRule

> Represents a rule that determines how an order is broken into
         sub-orders with specific technical details that help in order fulfillment. It can be
         applied to a commercial or a technical product. This object is available in API
      version 61.0 and later.

# ProductFulfillmentDecompRule

Represents a rule that determines how an order is broken into sub-orders with specific technical details that help in order fulfillment. It can be applied to a commercial or a technical product. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ConditionData | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe condition for executing the product fulfillment decomposition. The condition is defined as a rule or a set of rules in JSON format. This field is available in API version 66.0 and later. |
| DestinationProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe destination product for the decomposition rule.This field is a relationship field.Relationship NameDestinationProductRelationship TypeLookupRefers ToProduct2 |
| DestinationIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe destination entity in the product fulfillment decomposition rule. This field can store a Salesforce product ID or an external identifier. This field is available in API version 65.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the decomposition rule. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Priority | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe priority of the decomposition rule. Decomposition rules are executed in order of priority. |
| SourceProductClassificationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe classification of the source product that's used for decomposition. This field is available in API version 62.0 and later.This field is a relationship field.Relationship NameSourceProductClassificationRefers ToProductClassification |
| SourceClassIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe source classification entity in the product fulfillment decomposition rule. This field can store a Salesforce product ID or an external identifier. This field is available in API version 65.0 and later. |
| SourceIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe source entity in the product fulfillment decomposition rule. This field can store a Salesforce product ID or an external identifier. This field is available in API version 65.0 and later. |
| SourceProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionSource product for the decomposition rule.This field is a relationship field.Relationship NameSourceProductRelationship TypeLookupRefers ToProduct2 |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProductFulfillmentDecompRuleShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ProductFulfillmentDecompRuleShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)
