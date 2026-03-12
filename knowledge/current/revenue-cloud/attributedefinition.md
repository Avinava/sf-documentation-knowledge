---
title: "AttributeDefinition"
domain: revenue-cloud
topic: attributedefinition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:10.909Z
estimatedTokens: 1246
keywords: [AttributeDefinition, product, asset, attribute, hardware, specification, software, detail, API, version, 60.0, later, Calls, Associated, Objects]
---

# AttributeDefinition

> Represents a product, asset, or object attribute, for example, a hardware
         specification or software detail. This object is available in API version 60.0 and
      later.

# AttributeDefinition

Represents a product, asset, or object attribute, for example, a hardware specification or software detail. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Code | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionCode for the attribute definition. This field is unique within your organization. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only if the multicurrency feature is enabled. Contains the ISO code for any currency allowed by the organization.Possible values are:BHD—Bahraini DinarJPY—Japanese YenUSD—U.S. DollarThe default value is USD. |
| DataType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe data type of the attribute definition.Possible values are:CheckboxCurrencyDateDatetimeMultipicklistNumberPercentPicklistText |
| DefaultHelpText | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe default help text for this attribute. |
| DefaultValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe default value for this attribute. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of this attribute. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, SortDescriptionThe unique name of the attribute definition record.This name must begin with a letter and use only alphanumeric characters and underscores. It can't include spaces, end with an underscore, or have two consecutive underscores. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the attribute definition is active. Active attributes definitions can be selected for products.The default value is false. |
| IsRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the attribute definition is required for a product.The default value is false. |
| Label | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for the attribute. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the attribute definition was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date the attribute definition was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the attribute. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the attribute definition.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PicklistId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the attribute picklist with the valid values for this attribute.This field is a relationship field.Relationship NamePicklistRelationship TypeLookupRefers ToAttributePicklist |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the attribute definition in an external system. |
| ValueDescription | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe default value description for this attribute. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AttributeDefinitionFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AttributeDefinitionHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[AttributeDefinitionShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- AttributeDefinitionFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
- AttributeDefinitionHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
- AttributeDefinitionShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)
