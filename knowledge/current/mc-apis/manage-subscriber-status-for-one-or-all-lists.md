---
title: "Manage Subscriber Status for One or All Lists"
domain: mc-apis
topic: manage-subscriber-status-for-one-or-all-lists
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:17.859Z
estimatedTokens: 505
keywords: [Manage, Subscriber, Status, managing, subscribers, either, resides, Why, How, Sample, PHP, Code, Unsubscribe, Account]
---

> This page contains information about managing the status of a single subscribers on either a specified list or all lists on which the subscriber resides.

# Manage Subscriber Status for One or All Lists

This page contains information about managing the status of a single subscribers on either a specified list or all lists on which the subscriber resides.

## Why Manage Subscriber Status for One or All Lists

Using a subscriber's status, you can determine whether a subscriber receives or is prevented from receiving email messages sent to that list.

## How to Manage Subscriber Status for One or All Lists

Use the sample code below as a model for your own calls.

### Sample PHP Code - Unsubscribe Subscriber from All Lists in an Account

```
$subscriber = new Marketing Cloud_Subscriber();    //If you create the new subscriber object . . .
$subscriber->EmailAddress = $email;            //. . . and specify the email address belonging to the subscriber . . .
$subscriber->SubscriberKey = $subscriberkey;   //. . . as well as the subscriber key of the subscriber . . .
$subscriber->Status = "Unsubscribed";          //. . . then you can specify a status of Unsubscribed (that subscriber won't receive messages sent to all lists in your account.
```

### Sample PHP Code - Unsubscribe Subscriber from a Specified List in an Account

You can unsubscribe a subscriber from a specified list by creating a SubscriberList object, then setting the ID, Action, and Status properties of that object:

`$list = new Marketing Cloud_SubscriberList(); $list->ID = $id; $list->Action = "Update"; $list->Status = "Unsubscribed";`

Once this object has been created, set the Subscriber object's Lists property with that object, like this:

`$subscriber->Lists[] = $list;`

You can perform the following actions:

-   Create
-   Update
-   Delete

You can set the following statuses:

-   Active
-   Deleted
-   Unsubscribed

Deleting a subscriber from a list may allow an unsubscribed subscriber to receive further emails if that subscriber is added back to the list. Instead, leave the subscriber on the list in an unsubscribed status to prevent them from receiving unwanted emails.
