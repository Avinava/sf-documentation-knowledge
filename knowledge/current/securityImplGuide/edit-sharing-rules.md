---
title: "Edit Sharing Rules"
domain: securityImplGuide
topic: edit-sharing-rules
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:45.199Z
estimatedTokens: 946
keywords: [Edit, Sharing, Rules, rule, owner, group, membership, access, settings, criteria]
---

# Edit Sharing Rules

> For a sharing rule based on owner or group membership, you can edit only the sharing
  access settings. For a sharing rule based on other criteria, you can edit the criteria and sharing
  access settings.

# Edit Sharing Rules

For a sharing rule based on owner or group membership, you can edit only the sharing access settings. For a sharing rule based on other criteria, you can edit the criteria and sharing access settings.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Professional, Enterprise, Performance, Unlimited, and Developer EditionsSee Sharing Rule Considerations for more information on availability. |


| User Permissions Needed |
| --- |
| To create sharing rules: | Manage Sharing |

1.  From Setup, in the Quick Find box, enter Sharing Settings, then select **Sharing Settings**.
2.  In the Sharing Rules related list for the object, click **Edit**.
3.  Change the label and rule name if desired.
4.  If you selected a rule that's based on owner or group membership, skip to the next step. If you selected a criteria-based or guest user sharing rule, specify the criteria that records must match to be included in the sharing rule. The fields available depend on the object selected, and the value must be a literal number or string. To change the AND relationship between filters, click **Add Filter Logic**.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

    #### Note

    You must create guest user sharing rules to open up record access to guest users. Keep in mind that the guest user sharing rule type grants access to users without login credentials. By creating a guest user sharing rule, you're allowing immediate and unlimited access to all records matching the sharing rule's criteria to anyone. To secure your Salesforce data and give your guest users access to what they need, consider all the use cases and implications of creating this type of sharing rule. Implement security controls that you think are appropriate for the sensitivity of your data. Salesforce is not responsible for any exposure of your data to unauthenticated users based on this change from default settings.

5.  Select sharing access settings for users. Some access settings aren’t available for some objects or in some situations.

    | Access Setting | Description |
    | --- | --- |
    | Private | Users can’t view or update records, unless access is granted outside of this sharing rule.Available only for associated contacts, opportunities, and cases. |
    | Read Only | Users can view, but not update, records.Guest user sharing rules can only grant Read Only access. |
    | Read/Write | Users can view and update records. |
    | Full Access | Users in the selected group, role, or territory can view, edit, transfer, delete, and share the record, just like the record’s owner.With a Full Access sharing rule, users can also view, edit, delete, and close activities associated with the record if the org-wide sharing setting for activities is Controlled by Parent.Available for campaigns only. |

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

    #### Note

    Contact Access isn’t available when the organization-wide default for contacts is set to Controlled by Parent.

6.  Click **Save**.

After updates to sharing rules, sharing rules are recalculated to add or remove access as needed. Depending on the nature of your updates and your org’s setup, these sharing calculations can take awhile to complete. If you experience sharing evaluations or timeouts, consider deferring sharing calculations before making large-scale updates, and then restart and recalculate sharing at a later time. For more information, see [Defer Sharing Calculations](https://help.salesforce.com/apex/HTViewHelpDoc?id=security_sharing_defer_sharing_calculations.htm&language=en_US) in Salesforce Help.

## Related Topics

- Sharing Rule Considerations (atlas.en-us.securityImplGuide.meta/securityImplGuide/security_sharing_rule_considerations.htm)
