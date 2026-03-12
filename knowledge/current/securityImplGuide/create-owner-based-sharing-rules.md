---
title: "Create Owner-Based Sharing Rules"
domain: securityImplGuide
topic: create-owner-based-sharing-rules
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:45.210Z
estimatedTokens: 1031
keywords: [Owner-Based, Sharing, Rules, rule, opens, access, records, owned, certain, users]
---

# Create Owner-Based Sharing Rules

> An owner-based sharing rule opens access to records owned by certain users.

# Create Owner-Based Sharing Rules

An owner-based sharing rule opens access to records owned by certain users.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Professional, Enterprise, Performance, Unlimited, and Developer Editions |


| User Permissions Needed |
| --- |
| To create sharing rules: | Manage Sharing |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

For information on designing your sharing setup to improve performance and speed up sharing changes, see the [Designing Record Access for Enterprise Scale](https://developer.salesforce.com/docs/atlas.en-us.260.0.draes.meta/draes/draes_preface.htm) guide.

For example, you want users with the same Sales Rep role to be able to view each other’s account records, but the organization-wide default for Accounts is Private. Create an owner-based sharing rule that shares all account records owned by the Sales Rep role with the same Sales Rep role to open up this visibility.

1.  If you plan to include public groups in your sharing rule, confirm that the appropriate groups have been created.
2.  From Setup, in the Quick Find box, enter Sharing Settings, then select **Sharing Settings**.
3.  In the Sharing Rules related list for the object, click **New**.
4.  Enter the label name and rule name. The label name appears on the user interface. The rule name is a unique name used by the API and managed packages.
5.  Optionally, enter a description of the sharing rule, up to 1,000 characters.
6.  For the rule type, select **Based on record owner**.
7.  Specify which users’ records are shared. For owned by members of, select a category from the first dropdown list and a set of users from the second dropdown list or lookup field.

    See [Sharing Rule Categories](atlas.en-us.securityImplGuide.meta/securityImplGuide/security_sharing_data_set_categories.htm "When you define a sharing rule, you can choose from the following categories in the owned by members of and Share with dropdown lists. Depending on the type of sharing rule and the features enabled for your organization, some categories may not appear.") for information on these categories.

8.  Specify the users who get access to the data. For Share with, select a category from the first dropdown list and a set of users from the second dropdown list or lookup field.
9.  Select sharing access settings for users. Some access settings aren’t available for some objects or in some situations.

    | Access Setting | Description |
    | --- | --- |
    | Private | Users can’t view or update records, unless access is granted outside of this sharing rule.Available only for associated contacts, opportunities, and cases. |
    | Read Only | Users can view, but not update, records. |
    | Read/Write | Users can view and update records. |
    | Full Access | Users in the selected group, role, or territory can view, edit, transfer, delete, and share the record, just like the record’s owner.With a Full Access sharing rule, users can also view, edit, delete, and close activities associated with the record if the org-wide sharing setting for activities is Controlled by Parent.Available for campaigns only. |

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

    #### Note

    Contact Access isn’t available when the organization-wide default for contacts is set to Controlled by Parent.

10.  Click **Save**.

After updates to sharing rules, sharing rules are recalculated to add or remove access as needed. Depending on the nature of your updates and your org’s setup, these sharing calculations can take a while to complete. If you experience sharing evaluations or timeouts, consider deferring sharing calculations before making large-scale updates, and then restart and recalculate sharing at a later time. For more information, see [Defer Sharing Calculations](https://help.salesforce.com/apex/HTViewHelpDoc?id=security_sharing_defer_sharing_calculations.htm&language=en_US) in Salesforce Help.

## Related Topics

- Sharing Rule Categories (atlas.en-us.securityImplGuide.meta/securityImplGuide/security_sharing_data_set_categories.htm)
