---
title: "Automatic Recalculation of Org-Wide Defaults and Sharing Rules"
domain: securityImplGuide
topic: automatic-recalculation-of-org-wide-defaults-and-sharing-rules
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:45.176Z
estimatedTokens: 554
keywords: [Automatic, Recalculation, Org-Wide, Defaults, Sharing, Rules, organization-wide, processed, asynchronously, parallel, General, Monitoring, Share, Locks]
---

# Automatic Recalculation of Org-Wide Defaults and Sharing Rules

> When you update organization-wide defaults or sharing rules, automatic sharing
    recalculation is processed asynchronously and in parallel.

# Automatic Recalculation of Org-Wide Defaults and Sharing Rules

When you update organization-wide defaults or sharing rules, automatic sharing recalculation is processed asynchronously and in parallel.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Professional, Enterprise, Performance, Unlimited, and Developer EditionsSee Sharing Rule Considerations for more information on availability. |


Review these considerations for automatic sharing recalculation behavior.

## General

-   If sharing rules are recalculated for accounts, cases, contacts, or opportunities, sharing rules are also recalculated for the other three objects. This behavior occurs because cases, contacts, and opportunities are child objects of accounts.
-   To maintain implicit sharing between accounts and child records, updating the org-wide default on an account or its child objects disables further org-wide default and sharing rule updates on them. For example, when you update an opportunity sharing rule and recalculation is in progress, you can’t update the org-wide default or sharing rules for accounts, contacts, opportunities, and cases.
-   In the Background Jobs page, these processes correspond to these job subtypes: **Account — Extra Parent Access Removal** and **Account — Parent Access Grant**. Additionally, deleting a sharing rule corresponds to the job subtype **Object — Access Cleanup**, denoting that irrelevant share rows are removed.
-   When sharing is recalculated, Salesforce also runs all Apex sharing recalculations.

## Monitoring

-   You receive an email notification upon completion of the recalculation.
-   You can monitor the progress of your parallel sharing rule or organization-wide default recalculation on the Background Jobs page or view recent sharing operations on the View Setup Audit Trail page.

## Share Locks

-   You can’t modify the org-wide defaults when a sharing rule recalculation for any object is in progress. Similarly, you can’t modify sharing rules when recalculation for an org-wide default update is in progress.
-   You can make changes to the org-wide defaults and sharing rules for other objects.

## Related Topics

- Sharing Rule Considerations (atlas.en-us.securityImplGuide.meta/securityImplGuide/security_sharing_rule_considerations.htm)
