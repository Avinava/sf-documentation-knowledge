---
title: "CustomLabels"
domain: metadata-api
topic: customlabels
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:37.970Z
estimatedTokens: 1228
keywords: [CustomLabels, metadata, custom, labels, localized, different, languages, countries, currencies, Declarative, File, Suffix, Directory, Location, Version]
---

# CustomLabels

> The CustomLabels metadata type allows you to create
            custom labels that can be localized for use in different languages, countries, and
            currencies.

# CustomLabels

The CustomLabels metadata type allows you to create custom labels that can be localized for use in different languages, countries, and currencies.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field. Custom labels are custom text values, up to 1,000 characters in length that can be accessed from Apex classes or Visualforce pages. For more information, see “Custom Labels” in Salesforce Help.

## Declarative Metadata File Suffix and Directory Location

Master custom label values are stored in the CustomLabels.labels file. Translations for custom labels can be retrieved through [Translations](atlas.en-us.api_meta.meta/api_meta/meta_translations.htm "Metadata type that enables work with translations for various supported languages. The ability to translate component labels is part of the Translation Workbench.") in Metadata API. Translations are stored in files under the translations folder with the name format of localeCode.translation, where localeCode is the locale code of the translation language. The supported locale codes are listed in [Language](atlas.en-us.api_meta.meta/api_meta/meta_translations.htm#translation_languages).

## Version

CustomLabels components are available in API version 14.0 and later.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| fullName | string | Required. The name of the custom label bundle.Inherited from Metadata, this field is defined in the WSDL for this metadata type. It must be specified when creating, updating, or deleting. See createMetadata() to see an example of this field specified for a call. |
| labels | CustomLabel[] | A list of custom labels. |

## CustomLabel

This metadata type represents a custom label. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

| Field | Field Type | Description |
| --- | --- | --- |
| categories | string | A comma-separated list of categories for the label. This field can be used in filter criteria when creating custom label list views. Maximum of 255 characters. |
| fullName | string | Required. The name of the custom label.Inherited from Metadata, this field is defined in the WSDL for this metadata type. It must be specified when creating, updating, or deleting. See createMetadata() to see an example of this field specified for a call. |
| language | string | Required. The language of the translated custom label. |
| protected | boolean | Required. Indicates whether this component is protected (true) or not (false). Protected components can’t be linked to or referenced by components created in the installing organization. |
| shortDescription | string | Required. An easily recognizable term to identify this custom label. This description is used in merge fields. |
| value | string | Required. The translated custom label. Maximum of 1000 characters. |

## Usage

Use CustomLabels with the wildcard character (\*) for members in the package.xml manifest file to retrieve all custom labels that are defined in your organization. CustomLabels doesn’t support retrieving one or more custom labels by name. To retrieve specific labels by name, use CustomLabel and specify the label names as members.

## Declarative Metadata Sample Definition

This is a sample XML definition of a custom label component.

```

```

This is a sample manifest file for retrieving all custom labels in the organization by using the CustomLabels type.

```

```

This is a sample manifest file for retrieving two custom labels by name. Notice it uses the CustomLabel singular type.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## CustomLabels Limitation

Before you use the CustomLabels metadata type, understand the limitations of this feature. You can’t retrieve the CustomLabels metadata type with a namespace.

#### See Also

-   [Translations](atlas.en-us.api_meta.meta/api_meta/meta_translations.htm "Metadata type that enables work with translations for various supported languages. The ability to translate component labels is part of the Translation Workbench.")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CustomLabels xmlns="http://soap.sforce.com/2006/04/metadata">
    <labels>
        <fullName>quoteManual</fullName>
        <value>This is a manual quote.</value>
        <language>en_US</language>
        <protected>false</protected>
        <shortDescription>Manual Quote</shortDescription>
    </labels>
    <labels>
        <fullName>quoteAuto</fullName>
        <value>This is an automatically generated quote.</value>
        <language>en_US</language>
        <protected>false</protected>
        <shortDescription>Automatic Quote</shortDescription>
    </labels>
</CustomLabels>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>MyPkg</fullName>
    <types>
      <members>*</members>
      <name>CustomLabels</name>
    </types>
    <version>66.0</version>
</Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>MyPkg</fullName>
    <types>
      <members>quoteManual</members>
      <members>quoteAuto</members>
      <name>CustomLabel</name>
    </types>
    <version>66.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Translations (atlas.en-us.api_meta.meta/api_meta/meta_translations.htm)
- Language (atlas.en-us.api_meta.meta/api_meta/meta_translations.htm)
- createMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_createMetadata.htm)
- Deploying and Retrieving Metadata with the Zip
                    File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
