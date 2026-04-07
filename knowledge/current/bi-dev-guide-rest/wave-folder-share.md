---
title: "Wave Folder Share"
domain: bi-dev-guide-rest
topic: wave-folder-share
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:36:58.120Z
estimatedTokens: 249
keywords: [Wave, Folder, Share, Analytics, sharing, rule]
---

> An Analytics folder sharing rule.

# Wave Folder Share

An Analytics folder sharing rule.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| access​Type | Connect​Wave​Access​Type​Enum | The access type. Valid values are:EditManageView | Small, 36.0 | 36.0 |
| image​Url | String | The URL of the user image. | Small, 36.0 | 36.0 |
| share​Type | Connect​Wave​Share​Type​Enum | The share type. Valid values are:All​Csp​UsersAll​Prm​UsersCustomer​Portal​UserGroupOrganizationPartner​UserPortalRolePortal​Role​And​SubordinatesRoleRole​And​SubordinatesRole​And​Subordinates​InternalUser | Small, 36.0 | 36.0 |
| shared​With​Id | String | The ID of the user with the share representation. | Small, 36.0 | 36.0 |
| shared​With​Label | String | The label for the shared user, group, or org. | Small, 36.0 | 36.0 |
| unique​Name | String | The unique name of the entity that the folder is shared with, applicable only to a user. | Small, 60.0 | 60.0 |
