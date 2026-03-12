---
title: "StandardValueSetTranslation"
domain: metadata-api
topic: standardvaluesettranslation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:42.349Z
estimatedTokens: 610
keywords: [StandardValueSetTranslation, standard, picklist, translation, translated, set.This, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location, Version]
---

# StandardValueSetTranslation

> Contains details for a standard picklist
      translation. It returns a translated standard value set.This type extends the Metadata metadata type and inherits its
                        fullName field.

# StandardValueSetTranslation

Contains details for a standard picklist translation. It returns a translated standard value set.This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

StandardValueSetTranslation components have the suffix .standardValueSetTranslation and are stored in the standardValueSetTranslations folder.

Translations are stored in a file with a format of ValueSetName-lang.standardValueSetTranslation, where ValueSetName is the global value set’s name, and lang is the translation language.

## Version

StandardValueSetTranslation components are available in API version 38.0 and later.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| valueTranslation | ValueTranslation[] | A list of values from global value sets to be translated. |

## Declarative Metadata Sample Definition

The following is an example of a StandardValueSetTranslation component. When a value isn’t translated, its translation becomes a comment that’s paired with its label.

```

```

The following is an example package.xml that references the StandardValueSetTranslation definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [Translations](atlas.en-us.api_meta.meta/api_meta/meta_translations.htm "Metadata type that enables work with translations for various supported languages. The ability to translate component labels is part of the Translation Workbench.")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<StandardValueSetTranslation xmlns="http://soap.sforce.com/2006/04/metadata">
    <valueTranslation>
        <masterLabel>Cold</masterLabel>
        <translation><!-- Cold --></translation>
    </valueTranslation>
    <valueTranslation>
        <masterLabel>Hot</masterLabel>
        <translation><!-- Hot --></translation>
    </valueTranslation>
    <valueTranslation>
        <masterLabel>Warm</masterLabel>
        <translation><!-- Warm --></translation>
    </valueTranslation>
</StandardValueSetTranslation>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
        <types>
        <members>AccountRating-fr</members>
        <name>StandardValueSetTranslation</name>
    </types>
    <version>38.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- ValueTranslation[] (atlas.en-us.api_meta.meta/api_meta/meta_globalvaluesettranslation.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
- Translations (atlas.en-us.api_meta.meta/api_meta/meta_translations.htm)
