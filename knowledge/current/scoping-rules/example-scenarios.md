---
title: "Example Scenarios"
domain: scoping-rules
topic: example-scenarios
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.315Z
estimatedTokens: 392
keywords: [Scenarios, sample, scoping, rules, provide, relevant, records, users]
---

# Example Scenarios

> These sample scoping rules provide relevant records to users.

# Example Scenarios

These sample scoping rules provide relevant records to users.

| Available in: Lightning Experience in Performance,Unlimited, and Developer editions. |
| --- |


-   **[Display a Branch Location’s Records by Default](atlas.en-us.scoping_rules.meta/scoping_rules/scoping_rules_example_location.htm)**
    This scoping rule displays task records associated with a particular bank branch location by default. A custom field called Branch\_\_c stores the bank’s branch locations.
-   **[Display a Department’s Records by Default](atlas.en-us.scoping_rules.meta/scoping_rules/scoping_rules_example_dept.htm)**
    This scoping rule displays contact records associated with a particular department by default for a user who works on them. The rule dynamically matches the contact owner's department with the current user's department.
-   **[Display a Division’s Tasks by Default](atlas.en-us.scoping_rules.meta/scoping_rules/scoping_rules_example_division.htm)**
    This scoping rule displays records associated with a particular division by default for a user.
-   **[Scope Records Using Multiple String or ID Values in Record Criteria](atlas.en-us.scoping_rules.meta/scoping_rules/scoping_rules_example_multiple_values.htm)**
    This scoping rule allows active users to scope the records they see to records whose Name\_\_c field matches the rule’s record criteria value. The record criteria contains strings separated by a comma. ID values are also supported. Double-quotes specify that the value inside the quotes isn’t considered a delimiter.

## Related Topics

- Display a Branch Location’s Records by Default (atlas.en-us.scoping_rules.meta/scoping_rules/scoping_rules_example_location.htm)
- Display a Department’s Records by Default (atlas.en-us.scoping_rules.meta/scoping_rules/scoping_rules_example_dept.htm)
- Display a Division’s Tasks by Default (atlas.en-us.scoping_rules.meta/scoping_rules/scoping_rules_example_division.htm)
- Scope Records Using Multiple String or ID Values in Record Criteria (atlas.en-us.scoping_rules.meta/scoping_rules/scoping_rules_example_multiple_values.htm)
