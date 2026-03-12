---
title: "Moderate Feed Items with Triggers"
domain: apex-guide
topic: moderate-feed-items-with-triggers
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:33.379Z
estimatedTokens: 276
keywords: [Moderate, Feed, Items, Triggers, Write, trigger, FeedItem, automate, moderation, posts, org, Experience, Cloud, site., triggers, ensure, conform, company’s, communication, policies]
---

# Moderate Feed Items with Triggers

> Write a trigger for FeedItem to automate the moderation of posts in
      an org or Experience Cloud site. Use triggers to ensure that posts conform to your company’s
      communication policies and don’t contain unwanted words or phrases.

# Moderate Feed Items with Triggers

Write a trigger for FeedItem to automate the moderation of posts in an org or Experience Cloud site. Use triggers to ensure that posts conform to your company’s communication policies and don’t contain unwanted words or phrases.

| Available in: Enterprise, Performance, Unlimited, and Developer Editions |
| --- |


| User Permissions Needed |
| --- |
| To save Apex triggers for FeedItem: | Author Apex |

Write an Apex *before insert* trigger to review the feed item body and change the status of the feed item if it contains a blocklisted phrase. To create a trigger for feed items from Setup, enter FeedItem Triggers in the Quick Find box, then select **FeedItem Triggers**. Alternatively, you can create a trigger from the Developer Console by clicking **File** | **New** | **Apex Trigger** and selecting FeedItem from the **sObject** drop-down list.

This example shows a *before insert* trigger on FeedItem that is used to review each new post. If the post contains the unwanted phrase, the trigger also sets the status of the post to PendingReview.

```

```

## Code Examples

```apex
trigger ReviewFeedItem on FeedItem (before insert) {
    for (Integer i = 0; i<trigger.new.size(); i++) {

        // We don't want to leak "test phrase" information.

        if (trigger.new[i].body.containsIgnoreCase('test phrase')) {
            trigger.new[i].status = 'PendingReview'; 
            System.debug('caught one for pendingReview');
        }
    }
}
```
