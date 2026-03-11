---
title: "UiPreviewMessageTabDef"
domain: metadata-api
topic: uipreviewmessagetabdef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:55.008Z
keywords: [UiPreviewMessageTabDef, Important, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition]
---

# UiPreviewMessageTabDef

# UiPreviewMessageTabDef

Represents the registration of a custom Marketing Cloud Preview and Test modal tab, created using custom Lightning web components. You can register and show multiple tabs in the Preview and Test experience.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)") metadata type and inherits its fullName field.

## File Suffix and Directory Location

UiPreviewMessageTabDef components have the suffix .uiPreviewMessageTabDef and are stored in the uiPreviewMessageTabDef folder.

## Version

UiPreviewMessageTabDef components are available in API version 63.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Description |
| --- | --- |
| isActive | Field TypebooleanDescriptionRequired.Indicates whether the tab is enabled and is customer controlled (true) or not (false). |
| isProtected | Field TypebooleanDescriptionIndicates whether the configuration is protected (true) or not (false). |
| label | Field TypestringDescriptionRequired.Label for the tab. |
| lightningComponentDef | Field TypestringDescriptionRequired.The customer-created Lightning web component that displays in the Preview and Test tabs. |
| supportedChannel | Field TypeSupportedChannel (enumeration of type string)DescriptionRequired.A string indicating the type of channel.Values are:EmailSmsWhatsApp |
| tabName | Field TypestringDescriptionRequired.The case-sensitive, user-defined label displayed as the name of the tab. Maximum length is 255 characters. |

## Declarative Metadata Sample Definition

This example is a custom Lightning web component’s HTML file.

```

```

Here’s the component’s JavaScript file.

```

```

Here’s the component’s configuration file.

```

```

This example package.xml references the component’s definition.

```

```