---
title: "ProductClassificationAttr"
domain: revenue-cloud
topic: productclassificationattr
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:11.100Z
estimatedTokens: 1862
keywords: [ProductClassificationAttr, Represents, relationship, between, product, classification, its, attributes., default, configuration, products, based, classification., API, version, 60.0, later., Supported, Calls, Special]
---

# ProductClassificationAttr

> Represents the relationship between a product classification and its
         attributes. This is the default configuration for products based on the product
         classification. This object is available in API version 60.0 and later.

# ProductClassificationAttr

Represents the relationship between a product classification and its attributes. This is the default configuration for products based on the product classification. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Product Catalog Management must be enabled to access this object.

## Fields

| Field | Details |
| --- | --- |
| AttributeCategoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the attribute category assigned to the parent object.This field is a relationship field.Relationship NameAttributeCategoryRelationship TypeLookupRefers ToAttributeCategory |
| AttributeDefinitionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the attribute assigned to the parent object.This field is a relationship field.Relationship NameAttributeDefinitionRelationship TypeLookupRefers ToAttributeDefinition |
| AttributeNameOverride | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe overridden attribute name to display for the attribute when shown for this object. For example, "Color" overridden to "Laptop Color." |
| DefaultValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe default value of the attribute for a product based on the product classification. This value can be changed. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of this product classification attribute definition. |
| DisplayType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type to display data for the selected data type.Valid values are:CheckBox—CheckboxComboBox—ComboboxDateDatetime—Date TimeNumberRadioButton—Radio ButtonSlider—Available in API version 61.0 and laterTextToggle |
| ExcludedPicklistValues | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe picklist values excluded from the attribute picklist. This field ensures that the product classification attribute only has valid values. |
| HelpText | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe help text to display when end users are configuring this attribute. This field overrides the help text defined for the attribute itself. |
| IsHidden | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if this product attribute is hidden from end users in the run time (true) or not (false).The default value is false. |
| IsPriceImpacting | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this attribute dictates the price of a product (true) or not (false).The default value is false. |
| IsReadOnly | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the attribute is read-only for users in the run time (true) or not (false).The default value is false. |
| IsRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this attribute requires a value when assigned to a parent object (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the product classification attribute was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the product classification attribute was last viewed. |
| MaximumCharacterCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of characters that can be entered for an attribute value. |
| MaximumValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum value that can be entered as an attribute value. |
| MinimumCharacterCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe minimum number of characters that can be entered for an attribute value. |
| MinimumValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe minimum value that can be entered as an attribute value. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the product classification attribute. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the product classification attribute owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProductClassificationId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the product classification that the attribute is associated with. This field is unique within your organization.This field is a relationship field.Relationship NameProductClassificationRelationship TypeLookupRefers ToProductClassification |
| Sequence | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe display sequence of the attribute when configuring the product during run time. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe lifecycle status of the product classification attribute.Valid values are:ActiveDraftInactiveThe default value is Draft. |
| StepValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe increment or decrement by which a slider's value changes as the user adjusts the product classification attribute value. Available in API version 61.0 and later. |
| ValueDescription | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the value assigned to this attribute. This field takes on the value description from the attribute definition. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProductClassificationAttrFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProductClassificationAttrHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

Sharing rules are available for the object.

[ProductClassificationAttrShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ProductClassificationAttrFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
- ProductClassificationAttrHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
- ProductClassificationAttrShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)
