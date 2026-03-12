---
title: "Triggers and Recovered Records"
domain: apex-guide
topic: triggers-and-recovered-records
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:34.216Z
estimatedTokens: 282
keywords: [Triggers, Recovered, Records, after, undelete, trigger, event, only, works, recovered, records—that, records, were, deleted, then, Recycle, Bin, through, DML, statement.]
---

# Triggers and Recovered Records

> The after undelete trigger event only works with
recovered records—that is, records that were deleted and then recovered from the Recycle Bin
through the undelete DML statement. These are also called
undeleted records.

# Triggers and Recovered Records

The after undelete trigger event only works with recovered records—that is, records that were deleted and then recovered from the Recycle Bin through the undelete DML statement. These are also called undeleted records.

The after undelete trigger events only run on top-level objects. For example, if you delete an Account, an Opportunity may also be deleted. When you recover the Account from the Recycle Bin, the Opportunity is also recovered. If there is an after undelete trigger event associated with both the Account and the Opportunity, only the Account after undelete trigger event executes.

The after undelete trigger event only fires for custom objects and these standard objects.

-   Account
-   Asset
-   Campaign
-   Case
-   Contact
-   ContentDocument
-   Contract
-   Event
-   Lead
-   Opportunity
-   Product
-   Solution
-   Task

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_triggers_merge_statements.htm "Triggers and Merge Statements")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_triggers_order_of_execution.htm "Triggers and Order of Execution")

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_triggers_merge_statements.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_triggers_order_of_execution.htm)
