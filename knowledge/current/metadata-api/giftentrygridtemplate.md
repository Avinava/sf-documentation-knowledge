---
title: "GiftEntryGridTemplate"
domain: metadata-api
topic: giftentrygridtemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:52.976Z
keywords: [GiftEntryGridTemplate, Important, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition]
---

# GiftEntryGridTemplate

# GiftEntryGridTemplate

Represents templates that customize the gift entry grid in Fundraising.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

GiftEntryGridTemplate components have the suffix .giftEntryGridTempate and are stored in the giftEntryGridTemplate folder.

## Version

GiftEntryGridTemplate components are available in API version 66.0 and later.

## Special Access Rules

This object is available only if the Fundraising Access license is enabled, the Fundraising User system permission is assigned to users, and the Gift Entry Grid is enabled.

## Fields

| Field Name | Description |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the gift entry grid template. |
| IsSingleGiftDefault | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the template is the default template for single gift entry (true) or not (false, the default). |
| TemplateConfiguration | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe template configuration that includes the data for fields, columns, and components. |

## Declarative Metadata Sample Definition

The following is an example of a GiftEntryGridTemplate component.

```

```

The following is an example package.xml that references the previous definition.

```

```