---
title: "$Permission"
domain: pages
topic: permission
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:24.423Z
estimatedTokens: 213
keywords: [$Permission, merge, referencing, current, user’s, custom, permission, access, any, organization’s, permissions, Usage]
---

# $Permission

> A global merge field type to use when referencing information about the current user’s
  custom permission access. Use permission merge fields to reference information about the user’s
  current access to any of your organization’s custom permissions.

# $Permission

A global merge field type to use when referencing information about the current user’s custom permission access. Use permission merge fields to reference information about the user’s current access to any of your organization’s custom permissions.

## Usage

1.  Select the field type: $Permission.
2.  Select a merge field such as $Permission.customPermissionName.

## Example

To have a pageblock only appear for users that have the custom permission seeExecutiveData, use the following.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

$Permission appears only if custom permissions have been created in your organization. For more information, see [Custom Permissions](https://help.salesforce.com/s/articleView?id=platform.custom_perms_overview.htm&type=5&language=en_US).

## Code Examples

```
<apex:pageBlock rendered="{!$Permission.seeExecutiveData}">
   <!-- Executive Data Here -->
</apex:pageBlock>
```
