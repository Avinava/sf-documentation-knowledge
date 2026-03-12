---
title: "ManagedContentVariant"
domain: object-reference
topic: managedcontentvariant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.721Z
estimatedTokens: 750
keywords: [ManagedContentVariant, variant, managed, content, item, API, version, 56.0, later, Calls, Special, Access, Rules, Usage]
---

# ManagedContentVariant

> Represents a variant of a managed content item. This object is available
      in API version 56.0 and later.

# ManagedContentVariant

Represents a variant of a managed content item. This object is available in API version 56.0 and later.

Managed content variants are associated with a ManagedContent object. The managed content and variants are counted as one content record in your Salesforce org.

For example, say you have a managed content item of content type News and a default language of English. When you translate the News content into other languages such as Spanish, Japanese, and French, a managed content variant for each language is created.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Special Access Rules

ManagedContentVariant is available when the Digital Experiences app is enabled.

## Fields

| Field | Details |
| --- | --- |
| ContentTypeFullyQualifiedName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe fully qualified name of the content type of this CMS content. In an enhanced CMS workspace, the ContentTypeFullyQualifiedName for each standard content type is:News: sfdc_cms__newsImage: sfdc_cms__imageDocument: sfdc_cms__documentThe ContentTypeFullyQualifiedName for a custom content type is the same as the developer name of the custom content type.This field is available in API version 62.0 and later. |
| IsPublished | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the managed content variant is published to a channel.The default value is false.This field is calculated. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionLanguage of the variant. |
| ManagedContentId | TypereferencePropertiesFilter, Group, SortDescriptionGlobally unique identifier for the managed content item.This field is a relationship field.Relationship NameManagedContentRelationship TypeLookupRefers ToManagedContent |
| ManagedContentKey | TypestringPropertiesFilter, Group, idLookup, SortDescriptionGlobally unique identifier for managed content that associates with the managed content variant. |
| ManagedContentVariantStatus | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionPublication status of the managed content.Possible values are:DraftPublishedRevised |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionName of the managed content variant. |
| UrlName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURL name of the managed content variant. |
| VariantType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionType of variant.Possible value is:Content |

## Usage

Managed content variants are associated with a ManagedContent object. The managed content and managed content variants are counted as one content record in your Salesforce org.

ManagedContentVariant can be queried through the public sObject API. Use this object to retrieve information for a specific content in a certain language and format of a managed content.
