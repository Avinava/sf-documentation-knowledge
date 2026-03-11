---
title: "FileUploadAndDownloadSecuritySettings"
domain: metadata-api
topic: fileuploadanddownloadsecuritysettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:52.685Z
keywords: [FileUploadAndDownloadSecuritySettings, File, Suffix, Directory, Location, Version, Fields, FileTypeDispositionAssignmentBean, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# FileUploadAndDownloadSecuritySettings

# FileUploadAndDownloadSecuritySettings

Represents the security settings for uploading and downloading files. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

FileUploadAndDownloadSecuritySettings components have the suffix .settings and are stored in the settings folder.

## Version

FileUploadAndDownloadSecuritySettings components are available in API version 39.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| dispositions | FileTypeDispositionAssignmentBean[] | Represents the metadata used to manage filetype behavior. This field is available in API version 39.0 and later. |
| noHtmlUploadAsAttachment | boolean | Indicates whether to allow HTML uploads as attachments or document records. This field is available in API version 39.0 and later. |

## FileTypeDispositionAssignmentBean

Represents the metadata used to manage filetype behavior.

| Field Name | Field Type | Description |
| --- | --- | --- |
| behavior | FileDownloadBehavior (enumeration of type string) | One of the following values:DOWNLOADEXECUTEHYBRIDThe following filetypes are a security risk and can not have EXECUTE behavior:EXEFLASHHTMLRFC822SVGTXMLUNKNOWNWEBVIEWXHTMLXML |
| filetype | FileType (enumeration of type string) | Although more filetypes exist, these are the only ones supported by FileTypeDispositionAssignmentBean:AVIEXCELEXCEL_XEXEFLASHHTMLINSIGHTMOVMP3MP4MPEGPDFPOWER_POINTPOWER_POINT_XRFC822SVGTXMLUNKNOWNWAVWEBVIEWWMAWMVWORDWORD_XXHTMLXML |
| securityRiskFileType | boolean | Indicates filetypes that cannot have behavior set to EXECUTE, due to security risks. This field is read-only. |

## Declarative Metadata Sample Definition

The following is an example of a FileUploadAndDownloadSecuritySettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").