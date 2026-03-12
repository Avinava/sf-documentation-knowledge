---
title: "GlobalValueSetTranslation"
domain: metadata-api
topic: globalvaluesettranslation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:40.346Z
estimatedTokens: 754
keywords: [GlobalValueSetTranslation, Contains, details, set, translation., lists, values, shared, multiple, custom, picklist, fields, optionally, across, objects., extends, Metadata, metadata, inherits, its]
---

# GlobalValueSetTranslation

> Contains details for a global value set
      translation. Global value sets are lists of values that can be shared by multiple custom
      picklist fields, optionally across objects. This type extends the Metadata metadata type and inherits its
                        fullName field.

# GlobalValueSetTranslation

Contains details for a global value set translation. Global value sets are lists of values that can be shared by multiple custom picklist fields, optionally across objects. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

GlobalValueSetTranslation components have the suffix .globalValueSetTranslation and are stored in the globalValueSetTranslations folder.

Translations are stored in a file with a format of ValueSetName-lang.globalValueSetTranslation, where ValueSetName is the global value set’s name, and lang is the translation language.

## Version

GlobalValueSetTranslation components are available in API version 38.0 and later.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| valueTranslation | ValueTranslation[] | The translated name of a value in a translated global value set. Each valueTranslation is paired with a masterLabel, which is the original (untranslated) name of the value. |

## ValueTranslation

The original value name and the translated value name in a translated global value set.

| Field | Field Type | Description |
| --- | --- | --- |
| masterLabel | string | Required. The original (untranslated) name of a value in a global value set. Each valueTranslation has a masterLabel paired with its translation. |
| translation | string | The translated name of a value in a translated global value set. |

## Declarative Metadata Sample Definition

This example shows a GlobalValueSetTranslation component. When a value isn’t translated, its translation becomes a comment that’s paired with its masterLabel.

```

```

This example is a package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [Translations](atlas.en-us.api_meta.meta/api_meta/meta_translations.htm "Metadata type that enables work with translations for various supported languages. The ability to translate component labels is part of the Translation Workbench.")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<GlobalValueSetTranslation xmlns="http://soap.sforce.com/2006/04/metadata">
    <valueTranslation>
        <masterLabel>Three</masterLabel>
        <translation>Trois</translation>
    </valueTranslation>
    <valueTranslation>
        <masterLabel>Four</masterLabel>
        <translation>Quatre</translation>
    </valueTranslation>
    <valueTranslation>
        <masterLabel>Five</masterLabel>
        <translation><!-- Five --></translation>
    </valueTranslation>
</GlobalValueSetTranslation>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
        <types>
        <members>Numbers-fr</members>
        <name>GlobalValueSetTranslation</name>
    </types>
    <version>38.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
- Translations (atlas.en-us.api_meta.meta/api_meta/meta_translations.htm)
