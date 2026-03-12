---
title: "Deferred Sharing Calculations"
domain: draes
topic: deferred-sharing-calculations
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:24.652Z
estimatedTokens: 1207
keywords: [Deferred, Sharing, Calculations, Performing, large, number, configuration, changes, lead, long, rule, evaluations, timeouts, avoid, issues]
---

# Deferred Sharing Calculations

> Performing a large number of configuration changes can lead to long sharing rule
    evaluations or timeouts. To avoid these issues, you can suspend sharing calculations,
    specifically for sharing rules and group membership, then resume calculations during an
    organization's maintenance period.

# Deferred Sharing Calculations

Performing a large number of configuration changes can lead to long sharing rule evaluations or timeouts. To avoid these issues, you can suspend sharing calculations, specifically for sharing rules and group membership, then resume calculations during an organization's maintenance period.

In addition to all the technical concerns a Salesforce admin must manage to perform a major realignment, they must also coordinate closely with the business to ensure that end users aren’t adversely affected when access rights are being adjusted. In an enterprise environment in which multiple systems are continually processing updates, it can be difficult to schedule an organization or sharing rule change that can take substantial time to complete. Deferred sharing calculations can help with increasing the predictability of these kinds of updates.

Here’s how deferred sharing calculations works.

1.  Based on requests from the business, a Salesforce admin identifies changes to the role hierarchy and group membership, or updates to sharing rules.
2.  Given best estimates of the remaining overall work, the admin negotiates a maintenance window for completing the processing.

    ![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=draes)

    #### Tip

    This window should be modeled in a full copy sandbox to get the best estimate possible.

3.  Instead of processing each separate update and waiting for it to complete, the admin prepares all the information required to perform all updates ahead of the planned maintenance window.
4.  At the start of the maintenance window, the admin uses the deferral feature to essentially “turn off” group membership or sharing rule calculations, and then makes all the desired changes at the same time.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=draes)

    #### Note

    You can choose to only defer sharing rules calculations. However, if you defer group membership calculations, sharing rule calculations are automatically deferred.

5.  After the changes have completed, the admin resumes group membership and sharing rule calculations.
6.  At this point, the system is in a state that requires a full recalculation of all sharing rules for user access rights to be complete and accurate. The admin can recalculate sharing rules immediately or wait to start the process at a later time. After the sharing rule recalculation has completed, all the access changes take effect.

When using the deferred sharing features, it's especially important to test the whole process in a full copy sandbox as you don’t want to defer sharing calculations for longer than is necessary. This practice helps benchmark how long the overall recalculation is likely to take in production and smooth out any kinks in orchestrating deferred sharing calculations. The full copy sandbox should mimic your current product environment as closely as possible. We recommend using a sandbox refreshed within the last 30 days that reflects all major changes.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=draes)

#### Note

Deferring sharing calculations doesn’t defer the recalculation of some sharing changes in order to preserve data integrity. These calculations that can't be suspended can take significant time to process based on the org's settings and data volume. [Group membership locking](atlas.en-us.draes.meta/draes/draes_group_membership_locking.htm "When updating the role hierarchy or group membership in Setup or through the API, customers can occasionally receive a “could not acquire lock” or \"Group membership operation already in progress\" error and have to repeat the operation. This error occurs because the sharing system locks the tables holding group membership information during updates to prevent incompatible simultaneous updates or timing issues, both of which could lead to inaccurate data about users’ access rights.") can also still occur while sharing calculations are deferred.

## Who’s a Good Candidate for Deferred Sharing?

There are two main criteria for determining whether deferred sharing calculation is the right tool for your organization: the size and complexity of your realignment activities, and the flexibility you have to arrange a maintenance window with your customers. If you find that organizational changes and sharing rule updates typically complete quickly enough to be scheduled into the workday and weekend downtimes in your use of the service, you’re unlikely to benefit substantially from this feature. On the other hand, if you’re able to negotiate downtime with your business customers and have been struggling to complete updates in a timely fashion, deferred sharing can be a good solution to your problem.

## Related Topics

- Group membership
        locking (atlas.en-us.draes.meta/draes/draes_group_membership_locking.htm)
