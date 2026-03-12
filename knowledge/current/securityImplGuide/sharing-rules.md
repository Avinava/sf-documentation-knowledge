---
title: "Sharing Rules"
domain: securityImplGuide
topic: sharing-rules
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:45.077Z
estimatedTokens: 1142
keywords: [Sharing, Rules, extend, access, users, groups, roles, territories, give, particular, greater, making, automatic, exceptions, org-wide]
---

# Sharing Rules

> Use sharing rules to extend sharing access to users in public groups, roles, or
    territories. Sharing rules give particular users greater access by making automatic exceptions
    to your org-wide sharing settings.

# Sharing Rules

Use sharing rules to extend sharing access to users in public groups, roles, or territories. Sharing rules give particular users greater access by making automatic exceptions to your org-wide sharing settings.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Professional, Enterprise, Performance, Unlimited, and Developer EditionsSee Sharing Rule Considerations for more information on availability. |


Watch how you can grant access to records using sharing rules.

<!-- -->

Like role hierarchies, a sharing rule can never be stricter than your org-wide default settings. It simply allows greater access for particular users.

You can base a sharing rule on record ownership or other criteria. After you select which records to share, you define which groups or users to extend access to and what level of access they have. For example, you create a sharing rule that grants read only access to all leads owned by users in the Marketing Team role with users in the Sales Rep role for easier collaboration. Or, you create a rule that grants read and write access to any cases labeled as "Urgent" with a public group that contains users with specialized knowledge.

You can create sharing rules for custom objects and many standard objects, and different types of sharing rules depending on the object. For example, for accounts, you can create rules based on the account owner or other criteria, including account record types or field values. You then set the access level for accounts and their associated contracts, opportunities, cases, and optionally, contacts and orders.

The objects available for sharing rules depend on which Salesforce editions and features you have. You can see which objects are available on the Sharing Settings Setup page. You can define up to 300 total sharing rules for each object, including up to 50 criteria-based or guest user sharing rules, if available for the object.

-   **[Sharing Rule Types](atlas.en-us.securityImplGuide.meta/securityImplGuide/security_sharing_rule_types.htm)**
    You can base a sharing rule on record ownership or other criteria.
-   **[Create Owner-Based Sharing Rules](atlas.en-us.securityImplGuide.meta/securityImplGuide/security_sharing_rules_owner.htm)**
    An owner-based sharing rule opens access to records owned by certain users.
-   **[Create Criteria-Based Sharing Rules](atlas.en-us.securityImplGuide.meta/securityImplGuide/security_sharing_rules_criteria.htm)**
    A criteria-based sharing rule determines who to share records with based on field values.
-   **[Create Guest User Sharing Rules](atlas.en-us.securityImplGuide.meta/securityImplGuide/security_sharing_rules_guest.htm)**
    A guest user sharing rule is a special type of criteria-based sharing rule and the only way to grant record access to unauthenticated guest users. Guest user sharing rules can only grant Read Only access.
-   **[Sharing Rule Categories](atlas.en-us.securityImplGuide.meta/securityImplGuide/security_sharing_data_set_categories.htm)**
    When you define a sharing rule, you can choose from the following categories in the owned by members of and Share with dropdown lists. Depending on the type of sharing rule and the features enabled for your organization, some categories may not appear.
-   **[Edit Sharing Rules](atlas.en-us.securityImplGuide.meta/securityImplGuide/security_sharing_rules_edit.htm)**
    For a sharing rule based on owner or group membership, you can edit only the sharing access settings. For a sharing rule based on other criteria, you can edit the criteria and sharing access settings.
-   **[Sharing Rule Considerations](atlas.en-us.securityImplGuide.meta/securityImplGuide/security_sharing_rule_considerations.htm)**
    Review these considerations before using sharing rules.
-   **[Recalculate Sharing Rules Manually](atlas.en-us.securityImplGuide.meta/securityImplGuide/security_sharing_recalculating.htm)**
    When you make changes to sharing settings, groups, roles, and territories, sharing rules are reevaluated to add or remove access as necessary. You can manually recalculate sharing rules if sharing rule updates have failed or aren’t working as expected.
-   **[Automatic Recalculation of Org-Wide Defaults and Sharing Rules](atlas.en-us.securityImplGuide.meta/securityImplGuide/security_sharing_recalculating_parallel.htm)**
    When you update organization-wide defaults or sharing rules, automatic sharing recalculation is processed asynchronously and in parallel.

## Related Topics

- Sharing Rule Considerations (atlas.en-us.securityImplGuide.meta/securityImplGuide/security_sharing_rule_considerations.htm)
- Sharing Rule Types (atlas.en-us.securityImplGuide.meta/securityImplGuide/security_sharing_rule_types.htm)
- Create Owner-Based Sharing Rules (atlas.en-us.securityImplGuide.meta/securityImplGuide/security_sharing_rules_owner.htm)
- Create Criteria-Based Sharing Rules (atlas.en-us.securityImplGuide.meta/securityImplGuide/security_sharing_rules_criteria.htm)
- Create Guest User Sharing Rules (atlas.en-us.securityImplGuide.meta/securityImplGuide/security_sharing_rules_guest.htm)
- Sharing Rule Categories (atlas.en-us.securityImplGuide.meta/securityImplGuide/security_sharing_data_set_categories.htm)
- Edit Sharing Rules (atlas.en-us.securityImplGuide.meta/securityImplGuide/security_sharing_rules_edit.htm)
- Recalculate Sharing Rules Manually (atlas.en-us.securityImplGuide.meta/securityImplGuide/security_sharing_recalculating.htm)
- Automatic Recalculation of Org-Wide Defaults and Sharing Rules (atlas.en-us.securityImplGuide.meta/securityImplGuide/security_sharing_recalculating_parallel.htm)
