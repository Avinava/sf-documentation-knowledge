---
title: "Recalculate Sharing Rules Manually"
domain: securityImplGuide
topic: recalculate-sharing-rules-manually
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:45.172Z
estimatedTokens: 657
keywords: [Recalculate, Sharing, Rules, Manually, changes, settings, groups, roles, territories, reevaluated, add, remove, access, necessary, rule]
---

# Recalculate Sharing Rules Manually

> When you make changes to sharing settings, groups, roles, and territories,
                sharing rules are reevaluated to add or remove access as necessary. You can manually
                recalculate sharing rules if sharing rule updates have failed or aren’t working as
                expected.

# Recalculate Sharing Rules Manually

When you make changes to sharing settings, groups, roles, and territories, sharing rules are reevaluated to add or remove access as necessary. You can manually recalculate sharing rules if sharing rule updates have failed or aren’t working as expected.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Professional, Enterprise, Performance, Unlimited, and Developer EditionsSee Sharing Rule Considerations for more information on availability. |


| User Permissions Needed |
| --- |
| To recalculate sharing rules: | Manage Sharing |

Sharing rule recalculation occurs automatically after adding or removing individual users from a group, role, or territory, changing which role a particular role reports to, changing which territory a particular territory is subordinate to, or adding or removing a group from within another group.

You can also recalculate sharing rules manually using the Recalculate buttons on the Sharing Rules related lists. Manually recalculate sharing rules only if updates have failed or record access isn’t working as expected. Because recalculating sharing rules can take a while, you only want to initiate a manual recalculation in case of errors.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

If enabled in your org, you can temporarily defer sharing rule calculations. This feature is useful for large-scale maintenance operations or org realignments planned during low activity periods in your org. After this work is completed, you must resume sharing rule calculations and manually initiate a full sharing rule recalculation to prevent errors. For more information, see [Defer Sharing Calculations](https://help.salesforce.com/apex/HTViewHelpDoc?id=security_sharing_defer_sharing_calculations.htm&language=en_US).

To manually recalculate an object’s sharing rules:

1.  From Setup, in the Quick Find box, enter Sharing Settings, and then select **Sharing Settings**.
2.  In the Sharing Rules related list for the object you want, click **Recalculate**.
3.  If you want to monitor the progress of a recalculation, from Setup, in the Quick Find box, enter Background Jobs, and then select **Background Jobs**.

You receive an email notification when the recalculation is completed for all affected objects.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

The **Recalculate** button is disabled when group membership or sharing rule calculations are deferred.

## Related Topics

- Sharing Rule Considerations (atlas.en-us.securityImplGuide.meta/securityImplGuide/security_sharing_rule_considerations.htm)
