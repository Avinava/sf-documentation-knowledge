---
title: "ProfileActionOverride"
domain: metadata-api
topic: profileactionoverride
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:54.094Z
keywords: [ProfileActionOverride, Note, File, Suffix, Directory, Location, Version, Fields, Usage, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# ProfileActionOverride

# ProfileActionOverride

Represents an override of an ActionOverride by a user profile. You can use it to override an ActionOverride on a standard Home tab or object record page in Lightning Experience. When a user logs in with a profile, a matching ProfileActionOverride assignment takes precedence over existing overrides for the Home tab or record page specified in ActionOverride. In API versions 39.0 to 44.0, you can access ProfileActionOverride by accessing its encompassing [CustomApplication](atlas.en-us.api_meta.meta/api_meta/meta_customapplication.htm#meta_customapplication "CustomApplication represents a custom or standard application. In API version 29.0 and earlier, CustomApplication represents only a custom application. An application is a list of tab references, with a description and a logo. This type extends the Metadata metadata type and inherits its fullName field.") or [Profile](atlas.en-us.api_meta.meta/api_meta/meta_profile.htm#meta_profile "Represents a user profile. A profile defines a user’s permission to perform different functions within Salesforce. This type extends the Metadata metadata type and inherits its fullName field.") metadata types. In API version 45.0 and later, you can access ProfileActionOverride only by accessing its encompassing [CustomApplication](atlas.en-us.api_meta.meta/api_meta/meta_customapplication.htm#meta_customapplication "CustomApplication represents a custom or standard application. In API version 29.0 and earlier, CustomApplication represents only a custom application. An application is a list of tab references, with a description and a logo. This type extends the Metadata metadata type and inherits its fullName field.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

ProfileActionOverrides aren’t supported in packaging. They’re supported in change sets, but you have to add them manually.

## File Suffix and Directory Location

Profile-based action overrides are defined as part of a custom application or profile.

## Version

ProfileActionOverrides are available in API version 39.0 and later.

ProfileActionOverride can be defined on Profile or CustomApplication for API version 39.0 to 44.0. In API version 45.0 and later, ProfileActionOverride must be defined for CustomApplication instead. Beginning with API version 45.0, Home page assignments related to user profile must also have a corresponding app assignment because more granular Home page assignments are supported. As a result, ProfileActionOverride is defined for CustomApplication rather than Profile.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionName | string | The name of the action. The only valid values are Tab and View.If pageOrSobjectType is standard-home, this field must be Tab. The Tab action is supported only when ProfileActionOverride is being specified as part of a Profile in API version 39.0 to 44.0.In API version 45.0 and later, this action is supported only when ProfileActionOverride is being specified as part of a CustomApplication, pageOrSobjectType is standard-home, and this field is Tab.If pageOrSobjectType is record-home, this field must be View. The View action is supported only when ProfileActionOverride is being specified as part of a CustomApplication. |
| content | string | Read-only. Represents the name of the Lightning page being used as the override. |
| formFactor | FormFactor (enumeration of type string) | The size of the page being overridden. The Large value represents the Lightning Experience desktop environment. |
| pageOrSobjectType | string | The name of the page being overridden. The only valid values are record-home and standard-home. If the actionName is Tab, this field must be standard-home |
| recordType | string | The record type associated with the override. If pageOrSobjectType is standard-home, this field must be null. This field is required when actionName is set to View. |
| type | ActionOverrideType (enumeration of type string) | Read-only. The type of action override. The only valid value is flexipage. |

## Usage

You can't delete custom app ProfileActionOverrides by deploying with destructiveChange.xml. To delete a ProfileActionOverride, retrieve the app. In the app definition file, find the <profileActionOverrides> section, and remove the <content> row. Then, change the <type> value in that same section to default instead of flexipage. Do this for every override you want to reset. After making the changes, rezip the folder and deploy.

You can remove one override at a time each with its own deploy, or you can remove multiple overrides in a single deploy. However, we recommend that you do a fresh retrieve every time you want to delete a new override. Don’t use a previously retrieved file.

Avoid creating duplicate ProfileActionOverrides in your org. Duplicate ProfileActionOverrides can cause problems, including being unable to select or deselect the **Disable end user personalization of nav items in this app** option in app settings and the **Disable Navigation Bar Personalization in Lightning Experience** User Interface setting.

## Declarative Metadata Sample Definition

You can define a ProfileActionOverride like this.

```

```

Here’s an example package.xml.

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").