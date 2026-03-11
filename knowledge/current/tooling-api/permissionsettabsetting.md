---
title: "PermissionSetTabSetting"
domain: tooling-api
topic: permissionsettabsetting
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.494Z
keywords: [PermissionSetTabSetting, Supported, SOAP, Calls, REST, HTTP, Methods, Special, Access, Rules, Fields, Usage]
---

# PermissionSetTabSetting

# PermissionSetTabSetting

Represents a tab’s settings for a profile or permission set. Use PermissionSetTabSetting for manipulating tab visibility on profiles and permission sets. Available in Tooling API version 37.0 and later.

## Supported SOAP Calls

create(), delete(), query(), retrieve(), update()

## Supported REST HTTP Methods

Query, GET, POST, PATCH, DELETE

## Special Access Rules

As of Spring ’20 and later, only users with View Setup and Configuration permission can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Filter, GroupDescriptionThe tab’s API name. For standard tabs, the name is in the form “standard-Account”. For custom tabs, it’s the developer name. |
| ParentId | TypereferencePropertiesCreate, Filter, GroupDescriptionThe ID of the permission set to which this tab setting belongs. For profile tab settings, ParentId is the ID of the permission set owned by the profile. |
| Visibility | TypepicklistPropertiesCreate, Filter, Group, Restricted picklistDescriptionThe default visibility setting for this tab. Valid values are:Default OffDefault OnNoteThere’s no hidden value. Instead, a hidden tab is indicated by having no PermissionSetTabSetting row in the database. |

## Usage

To hide a tab, delete the associated PermissionSetTabSetting object. ParentId and Name fields can’t be updated.

This example creates a tab setting to make the custom object tab named CustomObject\_\_c visible for the System Administrator profile.

```

```

This example updates the existing tab setting to make the Account tab available instead of visible for the Standard User profile.

```

```

The example deletes the existing tab setting to make the Account tab hidden for the Standard User profile.

```

```