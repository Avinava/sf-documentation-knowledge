---
title: "PermissionSetEventStore Policies"
domain: securityImplGuide
topic: permissionseteventstore-policies
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.752Z
estimatedTokens: 321
keywords: [PermissionSetEventStore, Policies, Permission, event, monitor, users, assigned, critical, permissions, Policy, Glance]
---

# PermissionSetEventStore Policies

> Permission set event policies monitor when users are assigned critical permissions in a
  permission set.

# PermissionSetEventStore Policies

Permission set event policies monitor when users are assigned critical permissions in a permission set.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


## Policy at a Glance

| Object | Conditions Available in Condition Builder | Actions |
| --- | --- | --- |
| PermissionSetEventStore | Event Source, Operation, Permission Type, User Count, User ID, Username | Block, Notifications |

## What You Can Do with It

Create a policy that can:

-   Prevent users from being assigned the following permissions in a permission set:
    -   Assign Permission Sets
    -   Author Apex
    -   Customize Application
    -   Freeze Users
    -   Manage Encryption Keys
    -   Manage Internal Users
    -   Manage Password Policies
    -   Manage Profiles and Permission Sets
    -   Manage Roles
    -   Manage Sharing
    -   Manage Users
    -   Modify All Data
    -   Monitor Login History
    -   Multi-Factor Authentication for User Interface Logins
    -   Password Never Expires
    -   Reset User Passwords and Unlock Users
    -   View All Data
