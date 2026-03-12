---
title: "LanguageSettings"
domain: metadata-api
topic: languagesettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:40.207Z
estimatedTokens: 1285
keywords: [LanguageSettings, organization’s, language, settings, control, end-user, selection, locale, formats, translation, options, extends, Metadata, inherits, fullName]
---

# LanguageSettings

> Represents an organization’s language settings. Language
            settings control end-user language selection, locale formats, and translation options.
            This type extends the Metadata metadata type and inherits its fullName
            field.

# LanguageSettings

Represents an organization’s language settings. Language settings control end-user language selection, locale formats, and translation options. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

LanguageSettings values are stored in the Language.settings file in the settings directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

LanguageSettings is available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableCanadaIcuFormat | boolean | Indicates whether the ICU format is enabled for the en_CA locale (true) or not (false). This field has a default value of true for orgs created in API version 47.0 and later. Orgs created prior to API version 47.0 have a default of false. |
| enableDataTranslation | boolean | Indicates whether data translation is enabled (true) or not (false). This field has a default value of false. This field is available in API version 49.0 and later. |
| enableEndUserLanguages | boolean | Indicates whether end-user languages are enabled (true) or not (false). This field has a default value of false. |
| enableICULocaleDateFormat | boolean | Indicates whether date and currency are formatted with the International Components for Unicode (true) or not (false). This field has a default value of true for orgs created in API version 47.0 and later. Orgs created prior to API version 47.0 have a default of false.See Go Global with New International Locale Formats for more information. |
| enableLanguageExtensionPackage (beta) | boolean | Indicates whether the org has enabled language extension packages (true) or not (false). Language extension packages contain translations of components in other packages. This field has a default value of false. This field is available in API version 58.0 and later.NoteenableLanguageExtensionPackage (beta) is a pilot or beta service that is subject to the Beta Services Terms at Agreements - Salesforce.com or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the Product Terms Directory. Use of this pilot or beta service is at the Customer's sole discretion. |
| enableLocaleInsensitiveFiltering | boolean | Indicates whether users can filter query results, regardless of the locale or language associated with the user (true) or if they can’t filter results (false). This field has a default value of false. This field is available in API version 56.0 and later. |
| enableLocalNamesForStdObjects | boolean | Indicates whether local name fields can be defined for standard objects (true) or not (false). This field has a default value of false. This field is available in API version 48.0 and later. |
| enablePlatformLanguages | boolean | Indicates whether platform-only languages are enabled (true) or not (false). This field has a default value of false. Setting this field to true also sets enableEndUserLanguages to true. |
| enableTranslationWorkbench | boolean | Indicates whether the Translation Workbench is enabled (true) or not (false). This field has a default value of false. |
| useLanguageFallback | boolean | Indicates whether translation follows the language fallback rule (true) or returns the primary label (false). This field has a default value of true. |

## Declarative Metadata Sample Definition

The following is an example of a LanguageSettings file.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<LanguageSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableCanadaIcuFormat>true</enableCanadaIcuFormat>
    <enableDataTranslation>false</enableDataTranslation>
    <enableEndUserLanguages>true</enableEndUserLanguages>
    <enableICULocaleDateFormat>true</enableICULocaleDateFormat>
    <enableLocalNamesForStdObjects>false</enableLocalNamesForStdObjects>
    <enablePlatformLanguages>false</enablePlatformLanguages>
    <enableTranslationWorkbench>true</enableTranslationWorkbench>
    <useLanguageFallback>true</useLanguageFallback>
</LanguageSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/​metadata">
    <types>
        <members>Language</members>
        <name>Settings</name>
    </types>
    <version>49.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
