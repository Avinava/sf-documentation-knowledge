---
title: "FileUploadAndDownloadSecuritySettings"
domain: metadata-api
topic: fileuploadanddownloadsecuritysettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:39.482Z
estimatedTokens: 760
keywords: [FileUploadAndDownloadSecuritySettings, security, settings, uploading, downloading, files, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location, Version]
---

# FileUploadAndDownloadSecuritySettings

> Represents the security
            settings for uploading and downloading files. This type extends the Metadata metadata type and inherits its
                        fullName field.

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

## Code Examples

```
<FileUploadAndDownloadSecuritySettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <dispositions>
        <behavior>HYBRID</behavior>
        <fileType>AVI</fileType>
        <securityRiskFileType>false</securityRiskFileType>
    </dispositions>
    <dispositions>
        <behavior>HYBRID</behavior>
        <fileType>WORD</fileType>
        <securityRiskFileType>false</securityRiskFileType>
    </dispositions>
    <dispositions>
        <behavior>HYBRID</behavior>
        <fileType>WORD_X</fileType>
        <securityRiskFileType>false</securityRiskFileType>
    </dispositions>
    <dispositions>
        <behavior>DOWNLOAD</behavior>
        <fileType>EXE</fileType>
        <securityRiskFileType>true</securityRiskFileType>
    </dispositions>
    <dispositions>
        <behavior>DOWNLOAD</behavior>
        <fileType>HTML</fileType>
        <securityRiskFileType>true</securityRiskFileType>
    </dispositions>
    <dispositions>
        <behavior>DOWNLOAD</behavior>
        <fileType>WEBVIEW</fileType>
        <securityRiskFileType>true</securityRiskFileType>
    </dispositions>
    <dispositions>
        <behavior>DOWNLOAD</behavior>
        <fileType>RFC822</fileType>
        <securityRiskFileType>true</securityRiskFileType>
    </dispositions>
    <dispositions>
        <behavior>HYBRID</behavior>
        <fileType>MOV</fileType>
        <securityRiskFileType>false</securityRiskFileType>
    </dispositions>
    <dispositions>
        <behavior>HYBRID</behavior>
        <fileType>MP3</fileType>
        <securityRiskFileType>false</securityRiskFileType>
    </dispositions>
    <dispositions>
        <behavior>HYBRID</behavior>
        <fileType>MP4</fileType>
        <securityRiskFileType>false</securityRiskFileType>
    </dispositions>
    <dispositions>
        <behavior>HYBRID</behavior>
        <fileType>MPEG</fileType>
        <securityRiskFileType>false</securityRiskFileType>
    </dispositions>
    <dispositions>
        <behavior>HYBRID</behavior>
        <fileType>PDF</fileType>
        <securityRiskFileType>false</securityRiskFileType>
    </dispositions>
    <dispositions>
        <behavior>HYBRID</behavior>
        <fileType>POWER_POINT</fileType>
        <securityRiskFileType>false</securityRiskFileType>
    </dispositions>
    <dispositions>
        <behavior>HYBRID</behavior>
        <fileType>POWER_POINT_X</fileType>
        <securityRiskFileType>false</securityRiskFileType>
    </dispositions>
    <dispositions>
        <behavior>DOWNLOAD</behavior>
        <fileType>SVG</fileType>
        <securityRiskFileType>true</securityRiskFileType>
    </dispositions>
    <dispositions>
        <behavior>DOWNLOAD</behavior>
        <fileType>FLASH</fileType>
        <securityRiskFileType>true</securityRiskFileType>
    </dispositions>
    <dispositions>
        <behavior>DOWNLOAD</behavior>
        <fileType>TXML</fileType>
        <securityRiskFileType>true</securityRiskFileType>
    </dispositions>
    <dispositions>
        <behavior>DOWNLOAD</behavior>
        <fileType>UNKNOWN</fileType>
        <securityRiskFileType>true</securityRiskFileType>
    </dispositions>
    <dispositions>
        <behavior>HYBRID</behavior>
        <fileType>WAV</fileType>
        <securityRiskFileType>false</securityRiskFileType>
    </dispositions>
    <dispositions>
        <behavior>HYBRID</behavior>
        <fileType>WMA</fileType>
        <securityRiskFileType>false</securityRiskFileType>
    </dispositions>
    <dispositions>
        <behavior>HYBRID</behavior>
        <fileType>WMV</fileType>
        <securityRiskFileType>false</securityRiskFileType>
    </dispositions>
    <dispositions>
        <behavior>DOWNLOAD</behavior>
        <fileType>XHTML</fileType>
        <securityRiskFileType>true</securityRiskFileType>
    </dispositions>
    <dispositions>
        <behavior>HYBRID</behavior>
        <fileType>EXCEL</fileType>
        <securityRiskFileType>false</securityRiskFileType>
    </dispositions>
    <dispositions>
        <behavior>HYBRID</behavior>
        <fileType>EXCEL_X</fileType>
        <securityRiskFileType>false</securityRiskFileType>
    </dispositions>
    <dispositions>
        <behavior>DOWNLOAD</behavior>
        <fileType>XML</fileType>
        <securityRiskFileType>true</securityRiskFileType>
    </dispositions>
    <noHtmlUploadAsAttachment>false</noHtmlUploadAsAttachment>
</FileUploadAndDownloadSecuritySettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
   <types>
       <members>FileUploadAndDownloadSecurity</members>
       <name>Settings</name>
   </types>
   <version>39.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
