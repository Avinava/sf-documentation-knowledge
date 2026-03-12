---
title: "Create Criteria-Based Sharing Rules"
domain: securityImplGuide
topic: create-criteria-based-sharing-rules
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:45.193Z
estimatedTokens: 1299
keywords: [Criteria-Based, Sharing, Rules, rule, determines, share, records]
---

# Create Criteria-Based Sharing Rules

> A criteria-based sharing rule determines who to share records with based on field
  values.

# Create Criteria-Based Sharing Rules

A criteria-based sharing rule determines who to share records with based on field values.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Professional, Enterprise, Performance, Unlimited, and Developer Editions |


| User Permissions Needed |
| --- |
| To create sharing rules: | Manage Sharing |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

For information on designing your sharing setup to improve performance and speed up sharing changes, see the [Designing Record Access for Enterprise Scale](https://developer.salesforce.com/docs/atlas.en-us.260.0.draes.meta/draes/draes_preface.htm) guide.

For example, you have a custom object for job applications, with a custom picklist field named “Department.” You create a criteria-based sharing rule to share all job applications in which the Department field is set to “IT” with all IT managers in your organization.

1.  To include public groups in your sharing rule, confirm that those groups were created.
2.  From Setup, in the Quick Find box, enter Sharing Settings, and then select **Sharing Settings**.
3.  In the Sharing Rules related list for the object, click **New**.
4.  Enter the label name and rule name. The label name appears on the user interface. The rule name is a unique name used by the API and managed packages.
5.  Optionally, enter a description of the sharing rule of up to 1,000 characters.
6.  For the rule type, select **Based on criteria**.
7.  Specify the field, operator, and value criteria that records must match to be included in the sharing rule. The fields available depend on the object selected, and the value is always a literal number or string. To change the AND relationship between filters, click **Add Filter Logic**. The value criteria is limited to 240 characters, and strings or picklist values that go beyond this limit are truncated.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

    #### Note

    You can use a field that’s not supported by criteria-based sharing rules. Create a workflow rule or Apex trigger to copy the value of the field into a text or numeric field. Then use that field as the criterion.

8.  If available, select whether to include records owned by users who can’t have an assigned role, such as high-volume users and system users. This setting is enabled by default and can’t be edited after you save the rule.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

    #### Note

    To include these users in criteria-based sharing rules that were created before Spring \`22, delete the rule and select **Include records owned by users who can't have an assigned role** when you recreate it.

9.  Specify the users who get access to the data. For Share with, select a category from the first dropdown list and a set of users from the second dropdown list or lookup field.

    See [Sharing Rule Categories](atlas.en-us.securityImplGuide.meta/securityImplGuide/security_sharing_data_set_categories.htm "When you define a sharing rule, you can choose from the following categories in the owned by members of and Share with dropdown lists. Depending on the type of sharing rule and the features enabled for your organization, some categories may not appear.") for information on these categories.

10.  Select sharing access settings for users. Some access settings aren’t available for some objects or in some situations.

     | Access Setting | Description |
     | --- | --- |
     | Private | Users can’t view or update records, unless access is granted outside of this sharing rule.Available only for associated contacts, opportunities, and cases. |
     | Read Only | Users can view, but not update, records. |
     | Read/Write | Users can view and update records. |
     | Full Access | Users in the selected group, role, or territory can view, edit, transfer, delete, and share the record, just like the record’s owner.With a Full Access sharing rule, users can also view, edit, delete, and close activities associated with the record if the org-wide sharing setting for activities is Controlled by Parent.Available for campaigns only. |

     ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

     #### Note

     Contact Access isn’t available when the organization-wide default for contacts is set to Controlled by Parent.

11.  Save your work.

After updates to sharing rules, sharing rules are recalculated to add or remove access as needed. Depending on the nature of your updates and your org’s setup, these sharing calculations can take a while to complete. If you experience sharing evaluations or timeouts, consider deferring sharing calculations before making large-scale updates, and then restart and recalculate sharing at a later time. For more information, see [Defer Sharing Calculations](https://help.salesforce.com/apex/HTViewHelpDoc?id=security_sharing_defer_sharing_calculations.htm&language=en_US) in Salesforce Help.

## Related Topics

- Sharing Rule Categories (atlas.en-us.securityImplGuide.meta/securityImplGuide/security_sharing_data_set_categories.htm)
