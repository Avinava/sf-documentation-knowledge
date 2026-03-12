---
title: "Example Scenarios"
domain: restriction-rules
topic: example-scenarios
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:36.395Z
estimatedTokens: 764
keywords: [Scenarios, Refer, sample, restriction, rules, fulfill, different, access, requirements, review, how, built, Salesforce, Rule, Help]
---

# Example Scenarios

> Refer to these sample restriction rules that fulfill different access requirements. To
  review how these example scenarios are built in Salesforce, see Restriction Rule Example Scenarios
  in Salesforce Help.

# Example Scenarios

Refer to these sample restriction rules that fulfill different access requirements. To review how these example scenarios are built in Salesforce, see Restriction Rule Example Scenarios in Salesforce Help.

| Available in: Lightning Experience in Enterprise, Performance, Unlimited, and Developer Editions |
| --- |


-   **[Allow Users to See Only Specified Record Type](atlas.en-us.restriction_rules.meta/restriction_rules/restriction_rules_example_record_type.htm)**
    This restriction rule allows the designated users to see only contracts that have a specified record type.
-   **[Allow Users to See Only Records That They Own](atlas.en-us.restriction_rules.meta/restriction_rules/restriction_rules_example_records_owned.htm)**
    This restriction rule allows users with the designated profile to see only the tasks that they own.
-   **[Allow Users to See Only Records Owned by Same Role](atlas.en-us.restriction_rules.meta/restriction_rules/restriction_rules_example_role.htm)**
    This restriction rule allows active users to see only the events owned by users that have the same role. You can use dot notation to traverse object and field relationships in the recordFilter field.
-   **[Allow Users to See Only Records Owned by Same Profile](atlas.en-us.restriction_rules.meta/restriction_rules/restriction_rules_example_profile.htm)**
    This restriction rule allows active users to see only the events owned by users that have the same profile. You can use dot notation to traverse object and field relationships in the recordFilter field.
-   **[Allow Users to See Records Based on a Custom Field](atlas.en-us.restriction_rules.meta/restriction_rules/restriction_rules_example_custom_field.htm)**
    This restriction rule allows high-volume users to see only the contracts where the user's department matches the contract's department. This rule uses a custom field, Department\_\_c, that must have the appropriate value set through Apex, Process Builder, workflows, or flows.
-   **[Allow Users to See an External Object's Records](atlas.en-us.restriction_rules.meta/restriction_rules/restriction_rules_example_external_object.htm)**
    This restriction rule allows active Salesforce users to see the records of an external object called Purchase Order. The rule uses a field called IsClosed on Purchase Order records in its record criteria.
-   **[Provide User Access With Multiple String or ID Values in Record Criteria](atlas.en-us.restriction_rules.meta/restriction_rules/restriction_rules_example_multiple_values.htm)**
    This restriction rule allows active users to see records whose Name\_\_c field matches the rule’s record criteria value. The record criteria contains strings separated by a comma. ID values are also supported. Double-quotes specify that the value inside the quotes isn’t considered a delimiter.

#### See Also

-   [*Salesforce Help*: Restriction Rule Example Scenarios](https://help.salesforce.com/s/articleView?id=platform.security_restriction_rule_examples.htm&type=5&language=en_US)

## Related Topics

- Allow Users to See Only Specified Record Type (atlas.en-us.restriction_rules.meta/restriction_rules/restriction_rules_example_record_type.htm)
- Allow Users to See Only Records That They Own (atlas.en-us.restriction_rules.meta/restriction_rules/restriction_rules_example_records_owned.htm)
- Allow Users to See Only Records Owned by Same Role (atlas.en-us.restriction_rules.meta/restriction_rules/restriction_rules_example_role.htm)
- Allow Users to See Only Records Owned by Same Profile (atlas.en-us.restriction_rules.meta/restriction_rules/restriction_rules_example_profile.htm)
- Allow Users to See Records Based on a Custom Field (atlas.en-us.restriction_rules.meta/restriction_rules/restriction_rules_example_custom_field.htm)
- Allow Users to See an External Object's Records (atlas.en-us.restriction_rules.meta/restriction_rules/restriction_rules_example_external_object.htm)
- Provide User Access With Multiple String or ID Values in Record Criteria (atlas.en-us.restriction_rules.meta/restriction_rules/restriction_rules_example_multiple_values.htm)
