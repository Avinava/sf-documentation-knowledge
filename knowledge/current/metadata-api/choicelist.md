---
title: "ChoiceList"
domain: metadata-api
topic: choicelist
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.112Z
keywords: [ChoiceList, Important, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, ChoiceListValue, Declarative, Metadata, Sample, Definition, Wildcard, Support]
---

# ChoiceList

# ChoiceList

Represents the Choicelist dropdown field that’s used for pre-chat.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ChoiceList components have the suffix .ChoiceList and are stored in the ChoiceList folder.

## Version

ChoiceList components are available in API version 62 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Description |
| --- | --- |
| choiceListValue | Field TypeChoiceListValue[]DescriptionA list of choices to display in the choice list. |
| description | Field TypestringDescriptionA description of the choice list. |
| masterLabel | Field TypestringDescriptionRequired. The label for the choice list. |

## ChoiceListValue

Represents a choice list value in the pre-chat dropdown. ChoiceListValue is available in API version 62 or later.

| Field Name | Description |
| --- | --- |
| embeddedServiceCustomLabels | Field TypeEmbeddedServiceCustomLabel[]DescriptionCustom labels for the choicelist value. |
| isDefaultValue | Field TypebooleanDescriptionRequired. Indicates whether the choicelist value should be selected by default. |
| order | Field TypeintDescriptionRequired. The order of the choicelist value in the choicelist dropdown field. |
| valueName | Field TypestringDescriptionRequired. The value of the choicelist. |

## Declarative Metadata Sample Definition

The following is an example of a Choicelist component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm).