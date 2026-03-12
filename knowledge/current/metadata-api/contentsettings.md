---
title: "ContentSettings"
domain: metadata-api
topic: contentsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:37.660Z
estimatedTokens: 1460
keywords: [ContentSettings, content, settings, org, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location, Version, Declarative, Sample]
---

# ContentSettings

> Represents content settings for an org. This type extends the Metadata metadata type and inherits its
                        fullName field.

# ContentSettings

Represents content settings for an org. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

ContentSettings values are stored in the contentsettings.settings file in the settings folder. The .settings files are different from other named components, because there’s only one settings file for each settings component.

## Version

ContentSettings components are available in API version 48.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableChatterFileLink | boolean | When true, allows users to share files via links. When set to false, users can’t use file sharing. Default is true. |
| enableCMSC2CConnections | boolean | When true, allows org to enable Salesforce CMS Cloud to Cloud Connections. |
| enableContent | boolean | When true, allows org to enable Content. |
| enableContentAutoAssign | boolean | When true, allows org to auto assign Content feature licenses to users. |
| enableContentDistForPortalUsers | boolean | When true, allows portal users to create Content Deliveries for managed files in a library. |
| enableContentDistPwOptionsBit1 | boolean | When true, allow using with ContentDistPasswordOptionsBit2 to set up one of three possible delivery security options. |
| enableContentDistPwOptionsBit2 | boolean | When true, allow using with ContentDistPasswordOptionsBit1 to set up one of three possible delivery security options. |
| enableContentDistribution | boolean | When true, allows the Content Delivery user permission to be enabled for users. Content deliveries let users create links to share files externally, with optional security settings. |
| enableContentSupportMultiLanguage | boolean | When true, enables content to support multiple languages. |
| enableContentWorkspaceAccess | boolean | When true, content libraries are visible in the API and UI for users who have read access to libraries, even if they don't have access to the original Salesforce CRM Content app. |
| enableDeleteFileInContentPacks | boolean | When true, enables an org preference that allows a file's owner to delete the file, which is included in one or more content packs. The default setting is based on the org. |
| enableFileShareSetByRecord | boolean | When true, files shared to records default to Set by Record. |
| enableFilesUsrShareNetRestricted | boolean | When true, files respect user sharing settings. Files shared with users with SharedUsers visibility are only accessible to users who are members of the Experience Cloud site the file was created in. |
| enableJPGPreviews | boolean | When true, attempts to use other SVG alternative formats such as JPG as preview images. |
| enableLibraryManagedFiles | boolean | When true, controls the ability to publish files created in Chatter with a Content Library (ContentWorkspace). The library can manage the file. |
| enableShowChatterFilesInContent | boolean | When true, allows users to search for Chatter files in content. |
| enableSiteGuestUserToUploadFiles | boolean | When true, site guest users can upload files. |
| enableUploadFilesOnAttachments | boolean | When true, shows the New File button on the Attachments related lists to upload files, rather than legacy Attachments. |
| setValidContentTypeForAtchDocDownload | boolean | When true, enables an org preference that controls whether the Content-Type HTTP response header is set to a valid content type during file and attachment downloads. If false the response header is set to the value that the user provided during file upload. Values provided by the user can be invalid. If the content type provided by the user isn’t a valid content type, the system tries to determine a valid content type based on the file name extension. This field is available in API version 50.0 and later. |
| skipContentAssetTriggers | boolean | When true, disables content trigger execution and custom validation on content assets. |
| skipContentAssetTriggersOnDeploy | boolean | When true, disables content trigger execution when deploying content assets. |

## Declarative Metadata Sample Definition

The following is an example of a Content.settings file.

```

```

The following is an example ContentSettings.xml manifest that references the ContentSettings definitions:

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<ContentSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableChatterFileLink>true</enableChatterFileLink>
    <enableCMSC2CConnections>true</enableCMSC2CConnections>
    <enableContent>true</enableContent>
    <enableContentAutoAssign>true</enableContentAutoAssign>
    <enableContentDistForPortalUsers>true</enableContentDistForPortalUsers>
    <enableContentDistribution>true</enableContentDistribution>
    <enableContentSupportMultiLanguage>false</enableContentSupportMultiLanguage>
    <enableContentWorkspaceAccess>true</enableContentWorkspaceAccess>
    <enableFileShareSetByRecord>true</enableFileShareSetByRecord>
    <enableFilesUsrShareNetRestricted>true</enableFilesUsrShareNetRestricted>
    <enableJPGPreviews>true</enableJPGPreviews>
    <enableLibraryManagedFiles>true</enableLibraryManagedFiles>
    <enableShowChatterFilesInContent>true</enableShowChatterFilesInContent>
    <enableSiteGuestUserToUploadFiles>true</enableSiteGuestUserToUploadFiles>
    <enableUploadFilesOnAttachments>true</enableUploadFilesOnAttachments>
    <skipContentAssetTriggers>true</skipContentAssetTriggers>
    <skipContentAssetTriggersOnDeploy>true</skipContentAssetTriggersOnDeploy>
</ContentSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<ContentSettings xmlns=
    <types>
        <members>Content</members>
        <name>Settings</name>
    </types>
    <version>48.0</version>
</ContentSettings>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
