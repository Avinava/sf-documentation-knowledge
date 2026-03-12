---
title: "Set Your External Organization-Wide Sharing Defaults"
domain: securityImplGuide
topic: set-your-external-organization-wide-sharing-defaults
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:45.118Z
estimatedTokens: 1018
keywords: [External, Organization-Wide, Sharing, Defaults, enable, different, access, level, users]
---

# Set Your External Organization-Wide Sharing Defaults

> External organization-wide defaults enable you to set a different default access level
  for external users.

# Set Your External Organization-Wide Sharing Defaults

External organization-wide defaults enable you to set a different default access level for external users.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Professional, Enterprise, Performance, Unlimited, and Developer Editions |


| User Permissions Needed |
| --- |
| To set default sharing access: | Manage Sharing |

External organization-wide defaults are automatically enabled in all orgs created in Spring ’20 or after and in all orgs where Salesforce Experiences or portals are enabled. For orgs created before Spring ’20, you can enable the external sharing model on the Sharing Settings page in Setup.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=securityImplGuide)

#### Important

After it’s enabled, the External Sharing Model can’t be disabled. You can still manually set **Default External Access** and **Default Internal Access** to the same access level for each object.

The default external access levels depend on when your Salesforce org was created:

-   For orgs created after Spring ’20, the default external access level is set to Private for all objects.
-   For orgs created before Spring ’20, the default internal access and default external access are set to the original default access level. For example, if your organization-wide default for contacts is Private, the default internal access and default external access are Private as well. The only exceptions are the access levels for User and newly created custom objects, which are set to Private by default.

To secure access to your objects, we recommend that you set your external organization-wide defaults to Private unless otherwise required by your business needs.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

An object’s external organization-wide default must be set to Private for an external user to view the object in a report. If an object's external organization-wide default can’t be set to Private, then an external user can’t view the object in a report.

To set the external organization-wide default for an object:

1.  From Setup, in the Quick Find box, enter Sharing Settings, and then select **Sharing Settings**.
2.  Click **Edit** in the Organization-Wide Defaults area.
3.  For each object, select the access level that you want to use under Default External Access.

    You can assign these access levels.

    | Access Level | Description |
    | --- | --- |
    | Controlled by Parent | Users can perform actions (such as view, edit, delete) on a record on the detail side of a master-detail relationship if they can perform the same action on all associated master records.For contacts, Controlled by Parent must be set for both the default internal and external access. |
    | Private | Only users who are granted access by ownership, permissions, role hierarchy, manual sharing, or sharing rules can access the records. |
    | Public Read Only | All users can view all records for the object. |
    | Public Read/Write | All users can view and edit all records for the object. |

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

    #### Note

    The default external access level must be more restrictive or equal to the default internal access level. For example, you can have a custom object with default external access set to Private and default internal access set to Public Read Only.

4.  Click **Save**.

You can monitor the progress of your organization-wide default updates on the Background Jobs page or view recent sharing operations on the View Setup Audit Trail page.
