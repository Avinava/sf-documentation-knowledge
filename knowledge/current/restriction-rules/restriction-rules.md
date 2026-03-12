---
title: "Restriction Rules"
domain: restriction-rules
topic: restriction-rules
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:36.361Z
estimatedTokens: 1453
keywords: [Restriction, Rules, let, enhance, security, allowing, certain, users, access, records, They, prevent, accessing, contain, sensitive]
---

# Restriction Rules

> Restriction rules let you enhance your security by allowing certain users to access only
  specified records. They can prevent users from accessing records that can contain sensitive data
  or information that isn’t essential to their work. Restriction rules are available for custom
  objects, external objects, contracts, events, quotes, tasks, time sheets, and time sheet entries
  and can be configured in the Object Manager or through the Tooling or Metadata API.

# Restriction Rules

Restriction rules let you enhance your security by allowing certain users to access only specified records. They can prevent users from accessing records that can contain sensitive data or information that isn’t essential to their work. Restriction rules are available for custom objects, external objects, contracts, events, quotes, tasks, time sheets, and time sheet entries and can be configured in the Object Manager or through the Tooling or Metadata API.

| Available in: Lightning Experience in Enterprise, Performance, Unlimited, and Developer Editions |
| --- |


![Restriction rules diagram about its relationship with other sharing mechanisms.](/docs/resources/img/en-us/260.0?doc_id=help%2Fbundle_access%2Fimages%2Fsharing_restriction_rules_graphic.png&folder=restriction_rules)

When a restriction rule is applied to a user, the records that the user is granted access to via org-wide defaults, sharing rules, and other sharing mechanisms are filtered by criteria that you specify. For example, if users navigate to the Today’s Tasks tab or to a list view for activities, they see only the records that meet the restriction rule’s criteria. If a user has a link to a record that is no longer accessible after a restriction rule is applied, the user sees an error message.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=restriction_rules)

#### Note

Before setting up a restriction rule on an external object, review these considerations.

-   Restriction rules for external objects don’t include organization-wide defaults or sharing mechanisms.
-   Only external objects created using the Salesforce Connect: OData 2.0, OData 4.0, and Cross-Org adapters support restriction rules.
-   External objects created using the Cross-Org adapter don’t support search or SOSL when a rule is applied to a user. Salesforce returns only search results that match the most recently viewed records.
-   Disabling search on external objects is recommended.
-   External objects created using the Salesforce Connect custom adapter aren’t supported.

![ Chart showing that Restriction Rules are a filter on external record fields resulting in filtered records when combined.](/docs/resources/img/en-us/260.0?doc_id=help%2Fbundle_access%2Fimages%2Fsharing_restriction_rules_external_objects.png&folder=restriction_rules)

## When Do I Use Restriction Rules?

Use restriction rules when you want certain users to see only a specific set of records. Restriction rules can simplify controlling access to records with sensitive or confidential information. Access to contracts, tasks, and events can be difficult to make truly private using organization-wide defaults, making restriction rules the best way to configure this visibility.

For example, you have competing sales teams that can’t see each other’s activities, even though these activities are on the same account. With restriction rules, you can make sure that sales teams see only activities that belong to them and are relevant to their work. Or, if you provide confidential services to various individuals, use restriction rules so that only team members responsible for supporting these individuals can see related tasks.

When creating more than one restriction or scoping rule, configure the rules so that only one active rule applies to a given user. Salesforce doesn’t validate that only one active rule applies for a given user. If you create two active rules, and both rules apply to a given user, only one of the active rules is observed.

Before creating restriction rules, we recommend that you [Turn Off Salesforce Classic for Your Org](https://help.salesforce.com/s/articleView?id=xcloud.lex_enable_users_disable_switcher.htm&type=5&language=en_US). Salesforce can't guarantee that restriction rules work as intended for end users who are in the Salesforce Classic experience.

## How Do Restriction Rules Affect Other Sharing Settings?

Users get access to records based on your organization-wide defaults and other sharing mechanisms, such as sharing rules or enterprise territory management.

![Chart of record visibility before restriction rules are applied.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Frestriction_rules%2Fimages%2Frestriction_rules_before.png&folder=restriction_rules)

When a restriction rule is applied to a user, the data that they had read access to via your sharing settings is further scoped to only records matching the recordFilter. This behavior is similar to how you can filter results in a list view or report, except that it’s permanent. The number of records visible to the user can vary greatly depending on the value that you set in the recordFilter.

![Chart of record visibility after restriction rules are applied.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Frestriction_rules%2Fimages%2Frestriction_rules_after.png&folder=restriction_rules)

## How Do I Configure Restriction Rules?

You can create and manage restriction rules by navigating to a supported object in the Object Manager or using either the Tooling API or Metadata API. You can create up to two active restriction rules per object in Enterprise and Developer Editions and up to five active restriction rules per object in Performance and Unlimited Editions.

## Where Are Restriction Rules Available?

Restriction rules are available for custom objects, external objects, contracts, events, quotes, tasks, time sheets, and time sheet entries. Restriction rules are applied to the following Salesforce features:

-   List Views
-   Lookups
-   Related Lists
-   Reports
-   Search
-   SOQL
-   SOSL

#### See Also

-   [*Salesforce Help*: Restriction Rules](https://help.salesforce.com/s/articleView?id=platform.security_restriction_rule.htm&type=5&language=en_US)
