---
title: "PrivacySettings"
domain: metadata-api
topic: privacysettings
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:41.323Z
estimatedTokens: 1158
keywords: [PrivacySettings, organization’s, settings, data, privacy, consent, management, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location]
---

# PrivacySettings

> Represents an organization’s settings for data privacy
      and consent management. This type extends the Metadata metadata type and inherits its
                        fullName field.

# PrivacySettings

Represents an organization’s settings for data privacy and consent management. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

PrivacySettings values are stored in the Privacy.settings file in the settings directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

PrivacySettings components are available in API version 47.0 and later.

## Special Access Rules

To use PrivacySettings, you need the Customize Application or Modify Data Classification user permission.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| authorizationCaptureBrowser | boolean | Indicates whether browser information is captured during authorization consent capture (true) or not (false). The default value is false. Available in API version 59.0 and later. |
| authorizationCaptureEmail | boolean | Indicates whether email address is captured during authorization consent capture (true) or not (false). The default value is false. Available in API version 59.0 and later. |
| authorizationCaptureIp | boolean | Indicates whether IP address is captured during authorization consent capture (true) or not (false). The default value is false. Available in API version 59.0 and later. |
| authorizationCaptureLocation | boolean | Indicates whether location information is captured during authorization consent capture (true) or not (false). The default value is false. Available in API version 59.0 and later. |
| authorizationCustomSharing | boolean | Indicates whether custom sharing is enabled for authorization consent records (true) or not (false). The default value is false. Available in API version 59.0 and later. |
| authorizationCustomSharingPCU | boolean | Indicates whether custom sharing for authorization consent records uses permission-based access control (true) or not (false). The default value is false. Available in API version 62.0 and later. |
| authorizationLockingAndVersioning | boolean | Indicates whether locking and versioning is enabled for authorization consent records (true) or not (false). The default value is false. Available in API version 59.0 and later. |
| enableConfigurableUserPIIActive | boolean | Indicates whether configurable user PII (Personally Identifiable Information) classification is active (true) or not (false). The default value is false. Available in API version 59.0 and later. |
| enableConsentAuditTrail | boolean | Reserved for future use. |
| enableConsentEventStream | boolean | Allows orgs to stream consent changes to the party data model via platform events. This field has a default value of false. Available in API version 47.0 and later. |
| enableDefaultMetadataValues | boolean | Indicates whether a default data sensitivity value is applied to all contacts, leads, person accounts, and users (true) or not (false). This field has a default value of false. Available in API version 47.0 and later. |
| enableSalesforceArchive | boolean | Indicates whether Salesforce Archive is enabled for privacy-related data archival (true) or not (false). The default value is false. Available in API version 61.0 and later. |
| useUmaDefaultConsentRecs | boolean | Indicates whether a Preference Manager setup in Privacy Center uses default Marketing Cloud consent parameters and features. This field has a default value of false. Available in API version 58.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of a PrivacySettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm).

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<PrivacySettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableDefaultMetadataValues>false</enableDefaultMetadataValues>
</PrivacySettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Privacy</members>
        <name>Settings</name>
    </types>
    <version>47.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
