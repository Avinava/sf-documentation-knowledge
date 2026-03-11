---
title: "StandardValueSetTranslation"
domain: metadata-api
topic: standardvaluesettranslation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:54.750Z
keywords: [StandardValueSetTranslation, Important, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest, See]
---

# StandardValueSetTranslation

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