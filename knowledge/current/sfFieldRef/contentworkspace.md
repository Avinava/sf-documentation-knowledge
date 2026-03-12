---
title: "ContentWorkspace"
domain: sfFieldRef
topic: contentworkspace
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.243Z
estimatedTokens: 439
namespace: NamespacePrefix
keywords: [ContentWorkspace, content, library, versions, 17.0, later]
---

# ContentWorkspace

> Represents a content library. This object is available in
    versions 17.0 and later.

**Namespace:** `NamespacePrefix`

# ContentWorkspace

Represents a content library. This object is available in versions 17.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ContentWorkspace](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contentworkspace.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DefaultRecordTypeId | Record Type ID | reference |  | 18 |  |  |
| Description | Description | textarea |  | 500 |  |  |
| DeveloperName | Unique Name | string |  | 80 |  |  |
| Id | Library ID | id |  | 18 |  |  |
| IsRestrictContentTypes | Restrict Record Types | boolean |  |  |  |  |
| IsRestrictLinkedContentTypes | Restrict Linked Record Types | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastWorkspaceActivityDate | Last Activity | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| RootContentFolderId | Content Folder ID | reference |  | 18 |  |  |
| ShouldAddCreatorMembership | Add Creator Membership | boolean |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TagModel | Tag Model | picklist |  | 40 |  |  |
| WorkspaceImageId | Asset File ID | reference |  | 18 |  |  |
| WorkspaceType | Library Type | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
