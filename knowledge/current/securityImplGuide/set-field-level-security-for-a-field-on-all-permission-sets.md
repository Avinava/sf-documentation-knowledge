---
title: "Set Field-Level Security for a Field on All Permission Sets"
domain: securityImplGuide
topic: set-field-level-security-for-a-field-on-all-permission-sets
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:45.247Z
estimatedTokens: 440
keywords: [Field-Level, Security, Permission, option, alternative, setting, profiles]
---

# Set Field-Level Security for a Field on All Permission Sets

> Set field-level security for a field on permission sets. This option is an alternative
  to setting field-level security for a field on profiles.

# Set Field-Level Security for a Field on All Permission Sets

Set field-level security for a field on permission sets. This option is an alternative to setting field-level security for a field on profiles.

| Available in: Professional, Enterprise, Performance, Unlimited, and Developer Editions |
| --- |


| User Permissions Needed |
| --- |
| To set field-level security: | Manage Profiles and Permission SetsANDCustomize Application |

In some cases, you want users to have access to an object, but you don’t want every field accessible to them. For example, you want certain account information accessible only to select employees. By configuring field permissions, or field-level security, you can control the specific fields that a user can see and edit on object records.

1.  From Setup, in the Quick Find box, enter User Management Settings, and then select **User Management Settings**. Enable **Field-Level Security for Permission Sets during Field Creation** if it isn’t already enabled.
2.  In Object Manager, select an object, and then click **Fields & Relationships**.
3.  Select the field that you want to modify.
4.  Click **Set Field-Level Security**.
5.  Specify the field's access level. You can only set field-level security in custom permission sets created for your org.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

    #### Note

    Select **Permission sets with object permissions** to filter the list to permission sets that have Create, Read, Edit, or Delete access on the field’s object. Deselect this option to show all permission sets. If no permission sets have object permissions for the field’s object, the list contains all permission sets.

6.  Save your changes.
