---
title: "UserAccessPolicyFilter"
domain: tooling-api
topic: useraccesspolicyfilter
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.917Z
keywords: [UserAccessPolicyFilter, Supported, SOAP, API, Calls, REST, Methods, Special, Access, Rules, Fields, Usage]
---

# UserAccessPolicyFilter

# UserAccessPolicyFilter

Represents a user criteria filter for a user access policy. This object is available in API version 57.0 and later.

You can use the UserAccessPolicyFilter Tooling API object to configure more complex user criteria filters for your user access policies.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

GET, POST, PATCH, DELETE, HEAD, Query

## Special Access Rules

To create or modify user access policies, users must have the Manage User Access Policies permission.

## Fields

| Field | Details |
| --- | --- |
| ColumnName | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIf Target is set to User, the user field that your user criteria filter is based on.Possible values are:CommunityNicknameDepartmentDivisionEmailFirstNameIsActiveLastNameTitleSome custom fields are also supported, depending on the field type. If you don’t set Target to User, then this field isn’t used. |
| Operation | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe operator of the user criteria filter.Possible values are:equalsequalsIgnoreCase— Available in API version 59.0 and later.in— Available in API version 58.0 and later.includes— Available in API version 59.0 and later.notEqualsSelect in if you want to reference multiple profile or role IDs in the same user criteria filter. To do this, create multiple UserAccessPolicyFilter objects with Operation set to in and with the same SortOrder value. The only field that differs between these UserAccessPolicyFilter objects is the Value field, which references the various IDs. All of the IDs referenced in the in expression must be of the same type. |
| SortOrder | TypeintPropertiesFilter, Group, SortDescriptionThe numeric reference used to identify the specific filter. |
| Target | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionIf your user criteria filter is based on a user field, set to User. If your user criteria filter is based on a package license, permission set, permission set group, permission set license, profile, or role, then this field isn’t used. |
| Value | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIf Target is set to User, the value of the user field specified in ColumnName that your user filter is operating on. Otherwise, the ID of the group, package license, permission set, permission set group, permission set license, profile, role, or queue that your user filter is operating on. |

## Usage

For more information, see [User Access Policies](https://help.salesforce.com/s/articleView?id=platform.perm_user_access_policies.htm&type=5&language=en_US) in Salesforce Help.