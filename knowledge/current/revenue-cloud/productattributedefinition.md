---
title: "ProductAttributeDefinition"
domain: revenue-cloud
topic: productattributedefinition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:11.050Z
estimatedTokens: 2047
keywords: [ProductAttributeDefinition, Represents, relationship, between, product, its, attributes., API, version, 60.0, later., Supported, Calls, Special, Access, Rules, Fields, Associated, Objects]
---

# ProductAttributeDefinition

> Represents the relationship between a product and its attributes. This
      object is available in API version 60.0 and later.

# ProductAttributeDefinition

Represents the relationship between a product and its attributes. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Product Catalog Management must be enabled to access this object.

## Fields

| Field | Details |
| --- | --- |
| AttributeCategoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the attribute category assigned to the parent object.This field is a relationship field.Relationship NameAttributeCategoryRelationship TypeLookupRefers ToAttributeCategory |
| AttributeDefinitionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the attribute associated with the product.This field is a relationship field.Relationship NameAttributeDefinitionRelationship TypeLookupRefers ToAttributeDefinition |
| AttributeNameOverride | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name to display for the attribute when shown for this object. This display name overrides the name on the attribute. For example, the attribute "Color" is overridden to display as "Laptop Color." The maximum size is 255 alphanumeric characters. The name can include these special characters: @ ! - < > * ? + = % # ( ) / \ & ‘ £ € $ ”. |
| DefaultValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe default value for the product attribute. The attribute value can be changed. This default overrides the default value set for a picklist for the attribute. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description of the attribute definition. The maximum size is 32,000 alphanumeric characters. The description can include these special characters: @ ! - < > * ? + = % # ( ) / \ & ‘ £ € $ ”. |
| DisplayType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type to display data for the selected data type.Possible values are:CheckBox—CheckboxComboBox—ComboboxDateDatetime—Date TimeNumberRadioButton—Radio ButtonSlider—Available in API version 61.0 and laterTextToggle |
| HelpText | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe help text to display when end users are configuring this attribute. This field overrides the help text defined for the attribute itself. |
| IsHidden | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if this product attribute is hidden from end users in the run time (true) or not (false).The default value is false. |
| IsPriceImpacting | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this attribute dictates the price of a product (true) or not (false).The default value is false. |
| IsReadOnly | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the attribute is read-only for users in the run time (true) or not (false).The default value is false. |
| IsRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this attribute requires a value when assigned to a parent object (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the product attribute was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the product attribute was last viewed. |
| MaximumCharacterCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of characters that can be entered for an attribute value. |
| MaximumValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum value that can be entered as an attribute value. |
| MinimumCharacterCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe minimum number of characters that can be entered for an attribute value. |
| MinimumValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe minimum value that can be entered as an attribute value. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the product attribute. |
| OverriddenProductAttributeDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID associated with the overridden product attribute definition.This field is a relationship field.Relationship NameOverriddenProductAttributeDefinitionRelationship TypeLookupRefers ToProductAttributeDefinition |
| OverrideContextId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID associated with the root product record in a bundle.This field is a polymorphic relationship field.Relationship NameOverrideContextRelationship TypeLookupRefers ToProduct2 |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the product attribute definition.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe product ID associated with the product attribute definition.This field is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |
| ProductClassificationAttributeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the attribute assigned to the product classification.This field is a relationship field.Relationship NameProductClassificationAttributeRelationship TypeLookupRefers ToProductClassificationAttr |
| Sequence | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe display sequence of the attribute when configuring the product during run time. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe lifecycle state of the product attribute definition.Valid values are:ActiveDraftInactiveThe default value is Draft. |
| StepValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe increment or decrement by which a slider's value changes as the user adjusts the product attribute value. Available in API version 61.0 and later. |
| ValueDescription | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the value assigned to this attribute. This field takes on the value description from the attribute definition. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProductAttributeDefinitionFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProductAttributeDefinitionHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ProductAttributeDefinitionShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ProductAttributeDefinitionFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
- ProductAttributeDefinitionHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
- ProductAttributeDefinitionShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)
