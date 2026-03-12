---
title: "Create a Restriction Rule"
domain: securityImplGuide
topic: create-a-restriction-rule
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:45.136Z
estimatedTokens: 1022
keywords: [Restriction, Rule, Control, records, specific, user, group, permitted, applied, data, access, via, org-wide, defaults, sharing]
---

# Create a Restriction Rule

> Control the records that a specific user group is permitted to see. When a restriction
  rule is applied to a user, the data that the user has access to via org-wide defaults, sharing
  rules, and other sharing mechanisms is filtered by the record criteria that you
  specify.

# Create a Restriction Rule

Control the records that a specific user group is permitted to see. When a restriction rule is applied to a user, the data that the user has access to via org-wide defaults, sharing rules, and other sharing mechanisms is filtered by the record criteria that you specify.

| Available in: Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions |


| User Permissions Needed |
| --- |
| To create and manage restriction rules: | Manage Sharing |
| To view restriction rules: | View Setup & Configuration AND View Restriction and Scoping Rules |

Before creating restriction rules, we recommend that you [Turn Off Salesforce Classic for Your Org](https://help.salesforce.com/s/articleView?id=sf.lex_turn_off_classic.htm&type=5&language=en_US). Salesforce can't guarantee that restriction rules work as intended for end users who are in the Salesforce Classic experience.

Restriction rules are available for custom objects, external objects, contracts, events, quotes, tasks, time sheets, and time sheet entries. For external objects, they must be created using the Salesforce Connect: OData 2.0, OData 4.0, and Cross-Org adapters to support restriction rules.

You can create up to 2 restriction rules per object in Enterprise and Developer editions and up to 5 restriction rules per object in Performance and Unlimited editions. For more information, see [Restriction Rule Considerations](atlas.en-us.securityImplGuide.meta/securityImplGuide/security_restriction_rule_considerations.htm "Keep these considerations and limitations in mind while using restriction rules.").

1.  In the Object Manager, click the object you want to create a restriction rule on.
    1.  For an external object, enter External Data Sources in the Quick Find box in Setup, then select **External Data Sources**. Select an external object from the related list on this page.
2.  In the sidebar, click **Restriction Rule**, and then click **Create a Rule**.
3.  Enter the rule’s name and full name. The full name is the name of the component used by the API.
4.  To have the rule take effect upon saving, select **Active**.
5.  Under User Criteria, select which users this restriction rule applies to.
    -   If the rule applies to a subset of users such as those in a given role, profile, or department, select **User Criteria**. Then, select the field to use as criteria.

        Set the Type field as **Current User** when the rule applies to the currently logged-in user.

    -   If the rule applies to a subset of users with a custom permission, select **Permission Criteria**. To filter records for users with the custom permission, set the Boolean value to **True**. To filter records for users who don’t have the custom permission, set the Boolean value to **False**.
6.  Under Record Criteria, select which records the specified users are allowed to see. For the Field value, you can reference another object’s field using dot notation.

    For picklist values, select a picklist field, and then click **Choose values** to select one or more values. For other field types, to designate more than one value in the record criteria, you can specify a list of comma-separated strings or 15-character IDs in the Value field.

    To include a single value that contains a comma, surround the value with double quotes (”).

7.  Save the rule.

    ![The task object in the Object Manager appears with the Restriction Rules link selected and a rule called Open Tasks for Accounting Users shown.](/docs/resources/img/en-us/260.0?doc_id=help%2Fbundle_access%2Fimages%2Fsecurity_restriction_rules_create.png&folder=securityImplGuide)

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

    #### Note

    Salesforce doesn’t validate that only one active rule applies for a given user. If you create two active rules, and both rules apply to a given user, only one of the active rules is observed. In this case, records that the user shouldn’t have access to could be accessible.

## Related Topics

- Restriction Rule
     Considerations (atlas.en-us.securityImplGuide.meta/securityImplGuide/security_restriction_rule_considerations.htm)
