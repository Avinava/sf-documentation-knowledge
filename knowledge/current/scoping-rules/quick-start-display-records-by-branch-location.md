---
title: "Quick Start: Display Records by Branch Location"
domain: scoping-rules
topic: quick-start-display-records-by-branch-location
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.321Z
estimatedTokens: 665
keywords: [Quick, Start, Display, Records, Branch, Location, scoping, rule, SOQL, operator, created, via, Tooling, API, banker]
---

# Quick Start: Display Records by Branch Location

> In this Quick Start, we create a scoping rule using the SOQL operator. In the first
  example, a scoping rule created via Tooling API shows a banker only the accounts that match their
  current branch. The second example creates the same scoping rule via Metadata API.

# Quick Start: Display Records by Branch Location

In this Quick Start, we create a scoping rule using the SOQL operator. In the first example, a scoping rule created via Tooling API shows a banker only the accounts that match their current branch. The second example creates the same scoping rule via Metadata API.

| Available in: Lightning Experience in Performance and Unlimited Editions |
| --- |


-   **[Before You Start](atlas.en-us.scoping_rules.meta/scoping_rules/scoping_rules_before_you_start.htm)**
    Before you create a scoping rule, make sure you that have the needed permissions and tools.
-   **[Use the SOQL Operator in Scoping Rule Record Criteria](atlas.en-us.scoping_rules.meta/scoping_rules/scoping_rules_quickstart_use_soql_operator.htm)**
    When a rule’s record criteria must refer to a field on an object other than the target object, such as a junction object, use the SOQL operator in record criteria. To create or edit scoping rules with the SOQL operator in the record criteria, use the Tooling or Metadata API.
-   **[Create a Branch Management Scoping Rule Using the Tooling API](atlas.en-us.scoping_rules.meta/scoping_rules/scoping_rules_quickstart_tooling_api_banking.htm)**
    Create a scoping rule that filters account records based on a banker’s branch location. This example uses the branch management data model included in Financial Services Cloud and the RestrictionRule Tooling API object.
-   **[Create a Branch Management Scoping Rule Using the Metadata API](atlas.en-us.scoping_rules.meta/scoping_rules/scoping_rules_quickstart_metadata_api.htm)**
    Create a scoping rule that filters account records based on a banker’s branch location. This example uses the branch management data model included in Financial Services Cloud and the RestrictionRule Metadata API type.
-   **[Create a Wealth Management Scoping Rule Using the Tooling API](atlas.en-us.scoping_rules.meta/scoping_rules/scoping_rules_quickstart_tooling_api__sales_support.htm)**
    Create a scoping rule that shows a sales support associate who supports multiple financial advisors only the record set that corresponds to the financial advisor that the associate is working with. Use the RestrictionRule Tooling API object.
-   **[Create a Wealth Management Scoping Rule Using the Metadata API](atlas.en-us.scoping_rules.meta/scoping_rules/scoping_rules_quickstart_metadata_api_sales_support.htm)**
    Create a scoping rule that shows a sales support associate who supports multiple financial advisors only the record set that corresponds to the financial advisor that the associate is working with. Use the RestrictionRule Metadata API type.

## Related Topics

- Before You Start (atlas.en-us.scoping_rules.meta/scoping_rules/scoping_rules_before_you_start.htm)
- Use the SOQL Operator in Scoping Rule Record Criteria (atlas.en-us.scoping_rules.meta/scoping_rules/scoping_rules_quickstart_use_soql_operator.htm)
- Create a Branch Management Scoping Rule Using the Tooling API (atlas.en-us.scoping_rules.meta/scoping_rules/scoping_rules_quickstart_tooling_api_banking.htm)
- Create a Branch Management Scoping Rule Using the Metadata API (atlas.en-us.scoping_rules.meta/scoping_rules/scoping_rules_quickstart_metadata_api.htm)
- Create a Wealth Management Scoping Rule Using the Tooling API (atlas.en-us.scoping_rules.meta/scoping_rules/scoping_rules_quickstart_tooling_api__sales_support.htm)
- Create a Wealth Management Scoping Rule Using the Metadata API (atlas.en-us.scoping_rules.meta/scoping_rules/scoping_rules_quickstart_metadata_api_sales_support.htm)
