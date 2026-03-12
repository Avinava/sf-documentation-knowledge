---
title: "PromptVersion"
domain: sfFieldRef
topic: promptversion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:10.762Z
estimatedTokens: 960
namespace: TargetAppNamespacePrefix
keywords: [PromptVersion, in-app, guidance, prompt, walkthrough, API, version, 46.0, later]
---

# PromptVersion

> Represents an in-app guidance prompt or walkthrough. Available
      in API version 46.0 and later.

**Namespace:** `TargetAppNamespacePrefix`

# PromptVersion

Represents an in-app guidance prompt or walkthrough. Available in API version 46.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PromptVersion](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_promptversion.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActionButtonLabel | Action Button Label | string |  | 25 |  |  |
| ActionButtonLink | Action Button URL | url |  | 1000 |  |  |
| Body | Body | textarea |  | 4000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DelayDays | Days In Between Displays | int | 9 |  |  |  |
| Description | Description | string |  | 255 |  |  |
| DismissButtonLabel | Dismiss Button Label | string |  | 15 |  |  |
| DisplayPosition | Position | picklist |  | 255 |  |  |
| DisplayType | Type | picklist |  | 255 |  |  |
| ElementRelativePosition | Element Relative Position | picklist |  | 255 |  |  |
| EndDate | End Date | date |  |  |  |  |
| Experience | Experience | picklist |  | 255 |  |  |
| ExperienceContextId | ExperienceContext ID | reference |  | 18 |  |  |
| Header | Header | string |  | 36 |  |  |
| Id | Prompt Version ID | id |  | 18 |  |  |
| ImageAltText | Image Alt Text | string |  | 255 |  |  |
| ImageId | Asset File ID | reference |  | 18 |  |  |
| ImageLink | Image URL | url |  | 1000 |  |  |
| ImageLocation | Image Location | picklist |  | 255 |  |  |
| IndexWithIsPublished | Index Formula Field With Is Published Data | string |  | 400 |  |  |
| IndexWithoutIsPublished | Index Formula Field Without Is Published Data | string |  | 400 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsPublished | Is Active | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Master Label | string |  | 80 |  |  |
| ParentId | Prompt ID | reference |  | 18 |  |  |
| PublishedByUserId | User ID | reference |  | 18 |  |  |
| PublishedDate | Active Date | date |  |  |  |  |
| ReferenceElementContext | Reference Element Context | textarea |  | 50000 |  |  |
| ShouldDisplayActionButton | Display Action Button | boolean |  |  |  |  |
| ShouldIgnoreGlobalDelay | Ignore Global Delay | boolean |  |  |  |  |
| StartDate | Start Date | date |  |  |  |  |
| StepNumber | Step Number | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetAppDeveloperName | Target Application Developer Name | string |  | 80 |  |  |
| TargetAppNamespacePrefix | Target Application Namespace Prefix | string |  | 15 |  |  |
| TargetPageKey1 | Target Page Key 1 | string |  | 80 |  |  |
| TargetPageKey1Ref | Target Page Key 1 Reference | picklist |  | 255 |  |  |
| TargetPageKey2 | Target Page Key 2 | string |  | 80 |  |  |
| TargetPageKey3 | Target Page Key 3 | string |  | 255 |  |  |
| TargetPageKey4 | Target Page Key 4 | string |  | 255 |  |  |
| TargetPageType | Target Page Type | string |  | 80 |  |  |
| TargetRecordTypeId | Record Type ID | reference |  | 18 |  |  |
| ThemeColor | Theme Color | picklist |  | 255 |  |  |
| ThemeSaturation | Theme Saturation | picklist |  | 255 |  |  |
| TimesToDisplay | Number Of Times To Repeat | int | 9 |  |  |  |
| Title | Title Label | string |  | 36 |  |  |
| UserAccess | Access Permissions | picklist |  | 255 |  |  |
| UserProfileAccess | Access Profiles | picklist |  | 255 |  |  |
| VersionNumber | Version Number | int | 9 |  |  |  |
| VideoLink | Video URL | url |  | 1000 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
