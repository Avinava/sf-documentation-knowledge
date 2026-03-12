---
title: "CurrencySettings"
domain: metadata-api
topic: currencysettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:37.870Z
estimatedTokens: 1163
keywords: [CurrencySettings, organization’s, currency, settings, including, supporting, multiple, currencies, effective, dates, extends, Metadata, inherits, fullName, File]
---

# CurrencySettings

> Represents an organization’s currency settings, including
      supporting multiple currencies and currency effective dates.
    This type extends the Metadata metadata type and inherits its
                        fullName field.

# CurrencySettings

Represents an organization’s currency settings, including supporting multiple currencies and currency effective dates. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

CurrencySettings values are stored in the Currency.settings file in the settings directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

CurrencySettings is available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableCurrencyEffectiveDates | boolean | Indicates whether effective dated currency is enabled (true) or not (false). This field has a default value of false. To enable this preference, enableMultiCurrency must be set to true |
| enableCurrencySymbolWithMultiCurrency | boolean | Indicates whether the currency symbol (true) or ISO code (false) displays in multi-currency orgs. This field has a default value of false. This field has no effect if enableMultiCurrency is set to false. |
| enableMultiCurrency | boolean | Indicates whether multiple currencies are enabled (true) or not (false). This field has a default value of false.NoteAfter set to true, this field can’t be set to false. See Considerations for Enabling Multiple Currencies for more information. |
| isMultiCurrencyActivationAllowed | boolean | Deprecated in API version 49.0 and later. Regardless of the value in this field, a Salesforce admin can activate multiple currencies.In API version 48.0 and earlier, if Customizable Forecasting was enabled, this field indicated whether Salesforce Customer Support could activate multiple currencies (true) or the feature couldn't be activated (false).This field is only visible if multiple currencies are disabled. It has a default of false to provide an extra layer of protection against accidentally enabling multiple currencies when Customizable Forecasting was enabled. In API version 48.0 and earlier, customers with Customizable Forecasting enabled in their orgs had to contact Salesforce Customer Support to activate multiple currencies. Customers set this field to true when Salesforce Customer Support requested that they do so to validate their request to activate multiple currencies.NoteCustomizable Forecasting was retired in Summer ’20. Users can’t access the Customizable Forecasting feature and its underlying data via the user interface or API. To predict sales revenue and quantities from your opportunity pipeline, use Salesforce Forecasting. |
| isParenCurrencyConvDisabled | boolean | Indicates whether parenthetical currency conversion is disabled (true) or enabled (false). This field has a default value of true. When this field is set to false, Salesforce displays converted currency amounts to users whose personal currency differs from the currency of the record they’re viewing. |

## Declarative Metadata Sample Definition

The following is an example of a CurrencySettings file.

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
<CurrencySettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableCurrencyEffectiveDates>false</enableCurrencyEffectiveDates>
    <enableCurrencySymbolWithMultiCurrency>false</enableCurrencySymbolWithMultiCurrency>
    <enableMultiCurrency>false</enableMultiCurrency>
    <isMultiCurrencyActivationAllowed>false</isMultiCurrencyActivationAllowed>
    <isParenCurrencyConvDisabled>false</isParenCurrencyConvDisabled>
</CurrencySettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Currency</members>
        <name>Settings</name>
    </types>
    <version>47.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
