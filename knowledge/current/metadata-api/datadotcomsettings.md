---
title: "DataDotComSettings"
domain: metadata-api
topic: datadotcomsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:38.168Z
estimatedTokens: 463
keywords: [DataDotComSettings, org's, Data.com, settings, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location, Version, Declarative, Sample]
---

# DataDotComSettings

> Represents the org's Data.com settings.
    This type extends the Metadata metadata type and inherits its
                        fullName field.

# DataDotComSettings

Represents the org's Data.com settings. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

DataDotComSettings values are stored in the DataDotCom.settings file in the settings folder.

## Version

DataDotComSettings components are available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableAccountExportButtonOff | boolean | Indicates whether Account Export to Excel is enabled for Prospector (true) or not (false). Default value is false. |
| enableAccountImportButtonOff | boolean | Indicates whether Account Import to CRM is enabled for Prospector (true) or not (false). Default value is false. |
| enableAllowDupeContactFromLead | boolean | Indicates whether Prospector Lead Import Duplicate Check is enabled (true) or not (false). Default value is false. |
| enableAllowDupeLeadFromContact | boolean | Indicates whether Prospector Contact Import Duplicate Check is enabled (true) or not (false). Default value is false. |
| enableCleanUpgradeRequested | boolean | This field is no longer in use. |
| enableContactExportButtonOff | boolean | Indicates whether Contact Export to Excel is enabled for Prospector (true) or not (false). Default value is false. |
| enableContactImportButtonOff | boolean | Indicates whether Contact Import to CRM is enabled for Prospector (true) or not (false). Default value is false. |

## Declarative Metadata Sample Definition

The following is an example of a DataDotComSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<DataDotComSettings xmlns="http://soap.sforce.com/2006/04/metadata">
	<enableAccountExportButtonOff>true</enableAccountExportButtonOff>
	<enableAccountImportButtonOff>true</enableAccountImportButtonOff>
	<enableAllowDupeContactFromLead>true</enableAllowDupeContactFromLead>
	<enableAllowDupeLeadFromContact>true</enableAllowDupeLeadFromContact>
	<enableContactExportButtonOff>true</enableContactExportButtonOff>
	<enableContactImportButtonOff>true</enableContactImportButtonOff>
</DataDotComSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
	<types>
		<members>DataDotCom</members>
		<name>Settings</name>
	</types>
	<version>29.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
