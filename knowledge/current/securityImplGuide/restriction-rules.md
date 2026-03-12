---
title: "Restriction Rules"
domain: securityImplGuide
topic: restriction-rules
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:45.125Z
estimatedTokens: 1427
keywords: [Restriction, Rules, let, enhance, security, allowing, certain, users, access, records, They, prevent, accessing, contain, sensitive]
---

# Restriction Rules

> Restriction rules let you enhance your security by allowing certain users to access only
  specified records. They prevent users from accessing records that can contain sensitive data or
  information that isn’t essential to their work. Restriction rules filter the records that a user
  has access to so that they can access only the records that match the criteria you
  specify.

# Restriction Rules

Restriction rules let you enhance your security by allowing certain users to access only specified records. They prevent users from accessing records that can contain sensitive data or information that isn’t essential to their work. Restriction rules filter the records that a user has access to so that they can access only the records that match the criteria you specify.

| Available in: Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions |


Watch how you can use restriction rules to further refine user record access.

<!-- -->

Restriction rules are available for custom objects, external objects, contracts, events, quotes, tasks, time sheets, and time sheet entries. You can create up to two active restriction rules per object in Enterprise and Developer editions and up to five active restriction rules per object in Performance and Unlimited editions. Restriction rules are applied to these Salesforce features:

-   Links
-   List Views
-   Lookups
-   Records
-   Related Lists
-   Reports
-   Search
-   SOQL
-   SOSL

![Chart showing the Organization-Wide Sharing Defaults, Sharing Mechanisms, and Restriction Rules resulting in filtered records when combined.](/docs/resources/img/en-us/260.0?doc_id=help%2Fbundle_access%2Fimages%2Fsharing_restriction_rules_graphic.png&folder=securityImplGuide)

When a restriction rule is applied to a user, the records that the user is granted access to via org-wide defaults, sharing rules, and other sharing mechanisms are filtered by criteria that you specify. For example, if users navigate to the Today’s Tasks tab or to a list view for activities, they see only the records that meet the restriction rule’s criteria. If a user has a link to a record that is no longer accessible after a restriction rule is applied, the user sees an error message.

## When Do I Use Restriction Rules?

Use restriction rules when you want certain users to see only a specific set of records. Restriction rules can simplify controlling access to records with sensitive or confidential information. Access to contracts, tasks, and events can be difficult to make truly private using organization-wide defaults, making restriction rules the best way to configure this visibility.

For example, you have competing sales teams that can’t see each other’s activities, even though these activities are on the same account. With restriction rules, you can make sure that sales teams see only activities that belong to them and are relevant to their work. Or, if you provide confidential services to various individuals, use restriction rules so that only team members responsible for supporting these individuals can see related tasks.

When creating more than one restriction or scoping rule, configure the rules so that only one active rule applies to a given user. Salesforce doesn’t validate that only one active rule applies for a given user. If you create two active rules, and both rules apply to a given user, only one of the active rules is observed.

Before creating restriction rules, we recommend that you [Turn Off Salesforce Classic for Your Org](https://help.salesforce.com/s/articleView?id=sf.lex_turn_off_classic.htm&type=5&language=en_US). Salesforce can't guarantee that restriction rules work as intended for end users who are in the Salesforce Classic experience.

## How Do Restriction Rules Affect Other Sharing Settings?

Users get access to records based on your organization-wide defaults and other sharing mechanisms such as sharing rules or enterprise territory management.

![Chart of record visibility before restriction rules are applied.](/docs/resources/img/en-us/260.0?doc_id=help%2Fbundle_access%2Fimages%2Frestriction_rules_before_help.png&folder=securityImplGuide)

When a restriction rule is applied to users, the data that they had read access to via your sharing settings is further scoped to only records matching the record criteria. This behavior is similar to how you can filter results in a list view or report, except that it’s permanent. The number of records visible to the user can vary greatly depending on the value that you set in the record criteria.

![Chart of record visibility after restriction rules are applied.](/docs/resources/img/en-us/260.0?doc_id=help%2Fbundle_access%2Fimages%2Frestriction_rules_after_help.png&folder=securityImplGuide)

## How Do I Configure Restriction Rules?

You can create and manage restriction rules by navigating to a supported object in the Object Manager. Or use the RestrictionRule Tooling API object or RestrictionRule Metadata API type. For more information on using the API, see the [Restriction Rules Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.restriction_rules.meta/restriction_rules/restriction_rules_intro.htm).

-   **[Create a Restriction Rule](atlas.en-us.securityImplGuide.meta/securityImplGuide/security_restriction_rule_create.htm)**
    Control the records that a specific user group is permitted to see. When a restriction rule is applied to a user, the data that the user has access to via org-wide defaults, sharing rules, and other sharing mechanisms is filtered by the record criteria that you specify.
-   **[Restriction Rule Considerations](atlas.en-us.securityImplGuide.meta/securityImplGuide/security_restriction_rule_considerations.htm)**
    Keep these considerations and limitations in mind while using restriction rules.
-   **[Restriction Rule Example Scenarios](atlas.en-us.securityImplGuide.meta/securityImplGuide/security_restriction_rule_examples.htm)**
    Refer to these sample restriction rules, which fulfill different access requirements.

## Related Topics

- Create a Restriction Rule (atlas.en-us.securityImplGuide.meta/securityImplGuide/security_restriction_rule_create.htm)
- Restriction Rule Considerations (atlas.en-us.securityImplGuide.meta/securityImplGuide/security_restriction_rule_considerations.htm)
- Restriction Rule Example Scenarios (atlas.en-us.securityImplGuide.meta/securityImplGuide/security_restriction_rule_examples.htm)
