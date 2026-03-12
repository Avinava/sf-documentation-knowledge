---
title: "Set Your Internal Organization-Wide Sharing Defaults"
domain: securityImplGuide
topic: set-your-internal-organization-wide-sharing-defaults
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.593Z
estimatedTokens: 1198
keywords: [Internal, Organization-Wide, Sharing, Defaults, baseline, access, users, records, separately, different, objects]
---

# Set Your Internal Organization-Wide Sharing Defaults

> Internal organization-wide sharing defaults set the baseline access for your internal
      users for your records. You can set the defaults separately for different objects.

# Set Your Internal Organization-Wide Sharing Defaults

Internal organization-wide sharing defaults set the baseline access for your internal users for your records. You can set the defaults separately for different objects.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Professional, Enterprise, Performance, Unlimited, and Developer Editions |


| User Permissions Needed |
| --- |
| To set default sharing access: | Manage Sharing |

Watch how you can restrict access to records owned by other users.

<!-- -->

1.  From Setup, in the Quick Find box, enter Sharing Settings, then select **Sharing Settings**.
2.  Click **Edit** in the Organization-Wide Defaults area.
3.  For each object, select the default internal access that you want to use.

    You can assign the following access levels for custom objects and most standard objects.

    | Access Level | Description |
    | --- | --- |
    | Controlled by Parent | Users can perform actions (such as view, edit, delete) on a record on the detail side of a master-detail relationship if they can perform the same action on all associated master records.For contacts, Controlled by Parent must be set for both the default internal and external access. |
    | Private | Only users who are granted access by ownership, permissions, role hierarchy, manual sharing, or sharing rules can access the records. |
    | Public Read Only | All users can view all records for the object. |
    | Public Read/Write | All users can view and edit all records for the object. |

    For other access levels available only for specific objects, see [Organization-Wide Default Access Settings](https://help.salesforce.com/apex/HTViewHelpDoc?id=sharing_model_fields.htm&language=en_US).

4.  To disable automatic access using your hierarchies for custom objects, deselect **Grant Access Using Hierarchies**. You can only deselect this setting for custom objects that don’t have a default access of Controlled by Parent. For more information, see [Controlling Access Using Hierarchies](https://help.salesforce.com/apex/HTViewHelpDoc?id=security_controlling_access_using_hierarchies.htm&language=en_US) in Salesforce Help.

When you update organization-wide defaults, sharing recalculation applies the access changes to your records. If you have a lot of data, the update can take longer. You receive a notification email when the recalculation completes. Refresh the Sharing Settings page to see your changes. You can also monitor the progress of your organization-wide default updates on the Background Jobs page or view recent sharing operations on the View Setup Audit Trail page.

If you increase the default access, such as from Public Read Only to Public Read/Write, your changes take effect immediately. All users get access based on the updated default access. Sharing recalculation is then run asynchronously to ensure that all redundant access from manual or sharing rules is removed. When the default access for contacts is Controlled by Parent and you increase the default access for accounts, opportunities, or cases, the changes take effect after recalculation is run. If you decrease the default access, such as from Public Read/Write to Public Read Only, your changes take effect after recalculation is run.

The organization-wide sharing default setting can’t be changed for some objects or in some scenarios:

-   Service contracts are always Private.
-   User provisioning requests are always Private.
-   If the default access for Account is set to Private, the default access for Opportunity and Case must be set to Private as well. The default access for Contact must be set to Private or Controlled by Parent.
-   If you set the organization-wide default on products to a value other than Public Read/Write, and you use custom code or installed a package, unexpected behavior can occur.
-   The ability to view or edit a document, report, or dashboard is based on a user’s access to the folder in which it’s stored.
-   Users can view forecasts only of users and territories below them in the forecast hierarchy, unless forecast sharing is enabled.
-   When a custom object is on the detail side of a master-detail relationship with a standard object, its organization-wide default is set to Controlled by Parent and it’s not editable.
-   The organization-wide default settings can’t be changed from private to public for a custom object if Apex code uses the sharing entries associated with that object. For example, if Apex code retrieves the users and groups who have sharing access on a custom object Invoice\_\_c (represented as Invoice\_\_share in the code), you can’t change the object’s organization-wide sharing setting from private to public.
