---
title: "FolderShare"
domain: metadata-api
topic: foldershare
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:39.591Z
estimatedTokens: 1178
keywords: [FolderShare, settings, enhanced, analytics, folder, sharing, Users, control, access, reports, dashboards, giving, others, Viewer, Editor]
---

# FolderShare

> Represents the settings for enhanced analytics folder sharing.
    Users can control access to reports or dashboards by giving others Viewer, Editor, or Manager
    access to the folder that contains the report or dashboard.

# FolderShare

Represents the settings for enhanced analytics folder sharing. Users can control access to reports or dashboards by giving others Viewer, Editor, or Manager access to the folder that contains the report or dashboard.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

During package installation, FolderShare for DashboardFolder and ReportFolder is ignored.

## File Suffix and Directory Location

FolderShare objects are stored in the reports and dashboards directories. For each report or dashboard folder it contains, there’s a metadata file named FolderName\-meta.xml. The FolderName\-meta.xml metadata file contains the metadata information for that folder, such as the accessLevel. For example, if the reports directory contains a reports folder named myReportsFolder, it also has a myReportsFolder-meta.xml file at the same level as myReportsFolder.

## Version

FolderShare components are available in API version 28 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| accessLevel | FolderShareAccessLevel (enumeration of type string) | Required. Specifies the combination of actions that can be taken on the folder. Valid values are:View. User can run a report or refresh a dashboard, but can’t edit them. All users have at least Viewer access to report and dashboard folders that have been shared with them. (Some users can have administrative permissions that give them greater access.)EditAllContents. Users can view and modify the reports or dashboards in the folder, and move them to and from any other folders that they have equivalent access to.Manage. Users can do everything Viewers and Editors can do, plus control other users’ access to a folder. |
| sharedTo | string | Required. Specifies the user, group, or role that has the specified access level to the folder. |
| sharedToType | FolderSharedToType (enumeration of type string) | Required. Specifies the type of entity that the folder is shared with. Valid values are:Group. Users in a specified public group have the specified access level to the folder.Manager. Available in API version 29.0 and later.ManagerAndSubordinatesInternal. Available in API version 29.0 and later.Role. Users with a specified role have the specified access level to the folder.RoleAndSubordinates. Users with a specified role, and users with a role subordinate to that role, have the specified access level to the folder. Only available when digital experiences is enabled for your org and Experience Cloud site users are created with external account roles other than a shared person account role.RoleAndSubordinatesInternal. Users with a specified role and users with a role subordinate to that role, except public portal users, have the specified access level to the folder.Organization. All internal users have the specified access level to the folder.Territory. Users in a specified territory have the specified access level to the folder.TerritoryAndSubordinates. Users in a specified territory, and users in territories subordinate to the specified territory, have the specified access level to the folder.AllPrmUsers. All PRM Portal users have the specified level of access to the folder.User. The specified individual user has the specified level of access to the folder.PartnerUser. The specified individual user of a partner portal has the specified level of access to the folder.AllCspUsers. All Customer Success Portal users have the specified level of access to the folder.CustomerPortalUser. The specified individual user of a customer portal has the specified level of access to the folder.PortalRole. Users with a specified role in a portal have the specified access level to the folder.PortalRoleAndSubordinates. Portal users with a specified role, and portal users with a role subordinate to that role, have the specified access level to the folder. |

## Declarative Metadata Sample Definition

The following is an example of a FolderShare component for a dashboard folder:

```

```

Here’s an example of a FolderShare component for a report folder:

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<DashboardFolder xmlns="http://soap.sforce.com/2006/04/metadata">
  <folderShares>
        <accessLevel>View</accessLevel>
        <sharedTo>R1</sharedTo>
        <sharedToType>Role</sharedToType>
    </folderShares>
</DashboardFolder>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<ReportFolder xmlns="http://soap.sforce.com/2006/04/metadata">
  <folderShares>
       <accessLevel>View</accessLevel>
        <sharedTo>R1</sharedTo>
        <sharedToType>Role</sharedToType>
    </folderShares>
</ReportFolder>
```

## Related Topics

- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
