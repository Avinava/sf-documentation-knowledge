---
title: "Create Guest User Sharing Rules"
domain: securityImplGuide
topic: create-guest-user-sharing-rules
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:45.204Z
estimatedTokens: 809
keywords: [Guest, User, Sharing, Rules, rule, special, criteria-based, way, grant, record, access, unauthenticated, users]
---

# Create Guest User Sharing Rules

> A guest user sharing rule is a special type of criteria-based sharing rule and the only
  way to grant record access to unauthenticated guest users. Guest user sharing rules can only grant
  Read Only access.

# Create Guest User Sharing Rules

A guest user sharing rule is a special type of criteria-based sharing rule and the only way to grant record access to unauthenticated guest users. Guest user sharing rules can only grant Read Only access.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Professional, Enterprise, Performance, Unlimited, and Developer Editions |


| User Permissions Needed |
| --- |
| To create sharing rules: | Manage Sharing |

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=securityImplGuide)

#### Important

You must create guest user sharing rules to open up record access to guest users. Keep in mind that the guest user sharing rule type grants access to users without login credentials. By creating a guest user sharing rule, you're allowing immediate and unlimited access to all records matching the sharing rule's criteria to anyone. To secure your Salesforce data and give your guest users access to what they need, consider all the use cases and implications of creating this type of sharing rule. Implement security controls that you think are appropriate for the sensitivity of your data. Salesforce is not responsible for any exposure of your data to unauthenticated users based on this change from default settings.

1.  From Setup, in the Quick Find box, enter Sharing Settings, then select **Sharing Settings**.
2.  In the Sharing Rules related list for the object, click **New**.
3.  Enter the label name and rule name. The label name appears on the user interface. The rule name is a unique name used by the API and managed packages.
4.  Optionally, enter a description of the sharing rule, up to 1,000 characters.
5.  For the rule type, select **Guest user, based on criteria**.
6.  Specify the field, operator, and value criteria that records must match to be included in the sharing rule. The fields available depend on the object selected, and the value is always a literal number or string. To change the AND relationship between filters, click **Add Filter Logic**. The value criteria is limited to 240 characters, and strings or picklist values that go beyond this limit are truncated.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

    #### Note

    To use a field that’s not supported by criteria-based sharing rules, create a workflow rule or Apex trigger to copy the value of the field into a text or numeric field. Then use that field as the criterion.

7.  If available in your org, select whether to include records owned by high-volume community or site users. By default, sharing rules include only records owned by authenticated users, guest users, and queues.

    ![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=securityImplGuide)

    #### Tip

    High-volume users don’t have roles and include the External Apps, Customer Community, High Volume Customer Portal, and Authenticated Website license types. For more information, see About High-Volume Community or Site Users in Salesforce Help.

8.  Specify the guest users who get access to the data.
9.  Click **Save**.
