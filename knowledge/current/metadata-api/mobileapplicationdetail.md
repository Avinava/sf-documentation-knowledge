---
title: "MobileApplicationDetail"
domain: metadata-api
topic: mobileapplicationdetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:40.700Z
estimatedTokens: 655
keywords: [MobileApplicationDetail, packaging, attributes, mobile, connected, app, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location, Version]
---

# MobileApplicationDetail

> Represents the packaging attributes for a mobile
      connected app.
    This type extends the Metadata metadata type and inherits its
                        fullName field.

# MobileApplicationDetail

Represents the packaging attributes for a mobile connected app. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

MobileApplicationDetail components have the suffix MobileApplicationDetail and are stored in the MobileApplicationDetails folder.

## Version

MobileApplicationDetail components are available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| applicationBinaryFile | base64 | Base 64-encoded binary data file for the mobile app. |
| applicationBinaryFileName | string | Filename for the mobile app binary data file. |
| applicationBundleIdentifier | string | iOS apps only: the unique application bundle identifier. |
| applicationFileLength | int | The length of the mobile app binary data file. |
| applicationIconFile | string | iOS apps only: the application icon. |
| applicationIconFileName | string | iOS apps only: the application icon filename. |
| applicationInstallUrl | string | URL to install the mobile app. |
| devicePlatform | DevicePlatformType (enumeration of type string) | Required. Platform that supports the mobile app. The valid values are:androidios |
| deviceType | string | Supported device type for mobile app. The valid values are:minitabletphonetablet |
| minimumOsVersion | string | Minimum OS version required to install the mobile app. |
| privateApp | boolean | Specifies whether the mobile app is private (true) or not (false). |
| version | string | Required. Version number of the mobile app. |

## Usage

When you create a connected app in Salesforce Classic or Lightning Experience and enter mobile app settings, those settings are stored in a MobileApplicationDetail component. In this example, the metadata retrieved for a connected app includes MobileApplicationDetail metadata.

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```apex
<?xml version="1.0" encoding="UTF-8"?>
<<ConnectedApp xmlns="http://soap.sforce.com/2006/04/metadata">
  <contactEmail>paul.chen@salesforce.com</contactEmail>
  <label>MobileApplicationDetailConnectedApp</label>
  <mobileAppConfig>
    <applicationBinaryFile></applicationBinaryFile>
    <applicationInstallUrl>https://appstore.apple.com/MobileApplicationDetail
        </applicationInstallUrl>
    <devicePlatform>ios</devicePlatform>
    <deviceType>phone</deviceType>
    <privateApp>false</privateApp>
    <version>0.0.0.0</version>
  </mobileAppConfig>
< . mobileStartUrl>https://www.salesforce.com</mobileStartUrl>
</ConnectedApp>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
