---
title: "Folder"
domain: metadata-api
topic: folder
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:52.761Z
keywords: [Folder, File, Suffix, Directory, Location, Deploying, Retrieving, Nested, Folders, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest, See]
---

# Folder

# Folder

Represents a folder. This type extends the Metadata metadata type and inherits its fullName field.

Five folder types currently exist in Salesforce:

-   Document folder
-   Email folder (available for Salesforce Classic email templates only)
-   Email Template folder
-   Report folder
-   Dashboard folder

Folder type names end with the “Folder” suffix. For example, the type name of a document folder is “DocumentFolder”.

## File Suffix and Directory Location

Folders are stored in the corresponding component directory of the package. These directories are named documents, email, emailTemplates, reports, and dashboards. Folders don’t have a text file representation—they’re containers for files. For each folder, an accompanying metadata file named FolderName.folderType\-meta.xml is created at the same directory level. The FolderName.folderType\-meta.xml metadata file contains the metadata information for that folder, such as the accessType. For example, for a documents folder named sampleFolder, there’s a sampleFolder.documentFolder-meta.xml within the documents folder of the package.

## Deploying or Retrieving Nested Folders

To deploy or retrieve only a nested folder component, and not its contents, you must use a specific syntax in your package.xml. To reference the nested folder itself, append a trailing slash (/) to its full name in the <members\> tag.

For example, to retrieve a nested DocumentFolder named MyNestedFolder located inside MyTopFolder, your package.xml must list the member with a trailing slash (/).

```

```

If you omit the trailing slash (for example, <members\>MyTopFolder/MyNestedFolder</members\>), the operation fails. The API incorrectly searches for a Document component named MyNestedFolder instead of the folder.

This syntax applies to all folder types. For ReportFolder, you must use the Report type in the manifest. For Lightning Email Template folders, use the EmailTemplateFolder type.

## Version

Folders are available in API version 11.0 and later.

## Fields

This metadata type contains the following fields:

| Field Name | Field Type | Description |
| --- | --- | --- |
| accessType | FolderAccessTypes (enumeration of type string) | Required. The type of access for this folder. Valid values are:Shared. This folder is accessible only by the specified set of users.Public. This folder is accessible by all users, including portal users.PublicInternal. This folder is accessible by all users, excluding portal users. This setting is available for report and dashboard folders in organizations with a partner portal or Customer Portal enabled.Hidden. This folder is hidden from all users. |
| fullName | string | The name used as a unique identifier for API access. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is inherited from the Metadata component. |
| name | string | Required. The name of the document folder. |
| publicFolderAccess | PublicFolderAccess (enumeration of type string) | If Public is the value for accessType, this field indicates the type of access all users have to the contents of the folder. Valid values include:ReadOnly. All users can read the contents of the folder, but no user can change the contents.ReadWrite. All users can read or change the contents of the folder. |
| sharedTo | SharedTo | Sharing access for the folder. See Sharing Considerations in Salesforce Help. |

## Declarative Metadata Sample Definition

The following is the package manifest definition of a document folder that contains a document:

```

```

The following is an example of the sampleFolder-meta.xml metadata file for the sampleFolder document folder:

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

1.  [FolderShare](atlas.en-us.api_meta.meta/api_meta/meta_foldershare.htm)  
    Represents the settings for enhanced analytics folder sharing. Users can control access to reports or dashboards by giving others Viewer, Editor, or Manager access to the folder that contains the report or dashboard.

#### See Also

-   [Dashboard](atlas.en-us.api_meta.meta/api_meta/meta_dashboard.htm "Represents a dashboard. Dashboards are visual representations of data that allow you to see key metrics and performance at a glance.")
    
-   [Document](atlas.en-us.api_meta.meta/api_meta/meta_document.htm "Represents a Document. All documents must be in a document folder, such as sampleFolder/TestDocument.")
    
-   [EmailTemplate](atlas.en-us.api_meta.meta/api_meta/meta_emailtemplate.htm "Represents a template for an email, mass email, list email, or Sales Engagement email. Supported in first-generation managed packages only.")
    
-   [Report](atlas.en-us.api_meta.meta/api_meta/meta_report.htm "Represents a custom report. This metadata type only supports custom reports; standard reports aren’t supported.")