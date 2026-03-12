---
title: "QuoteSettings"
domain: metadata-api
topic: quotesettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:42.113Z
estimatedTokens: 708
keywords: [QuoteSettings, Represents, org’s, quotes, settings, such, enabling, creating, without, associated, opportunity., extends, Metadata, metadata, inherits, its, fullName, field., File, Suffix]
---

# QuoteSettings

> Represents an org’s quotes settings, such as enabling
            quotes or creating quotes without an associated opportunity. This type extends the Metadata metadata type and inherits its
                        fullName field.

# QuoteSettings

Represents an org’s quotes settings, such as enabling quotes or creating quotes without an associated opportunity. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

QuoteSettings values are stored in a single file named Quote.settings in the settings directory of the corresponding package directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

QuoteSettings is available in API version 28.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableQuote | boolean | When set to true, users can access Quotes. |
| enableQuotesWithoutOppEnabled | boolean | When set to true, users can create quotes independently of an opportunity. For example, a user can create a quote for budgeting purposes, before creating the Opportunity. Default value is false.When set to false, users can only create quotes from an Opportunity. Before setting to false, delete any quotes that do not have opportunities.Available in API version 47.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of the package file.

```

```

The package file references the following Quote.settings file.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Quote</members>
        <name>Settings</name>
    </types>
    <version>28.0</version>
</Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<QuoteSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableQuote>true</enableQuote>
    <enableQuotesWithoutOppEnabled>true</enableQuotesWithoutOppEnabled>
</QuoteSettings>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
