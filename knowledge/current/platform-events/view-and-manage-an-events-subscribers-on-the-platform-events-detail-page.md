---
title: "View and Manage an Event’s Subscribers on the Platform Event’s Detail Page"
domain: platform-events
topic: view-and-manage-an-events-subscribers-on-the-platform-events-detail-page
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.841Z
estimatedTokens: 1461
keywords: [View, Manage, Event’s, Subscribers, Platform, Detail, triggers, flows, processes, subscribed, event, Subscriptions, Apex, Subscription, States]
---

# View and Manage an Event’s Subscribers on the Platform Event’s Detail Page

> View the triggers, flows, and processes that are subscribed to a
    platform event in the Subscriptions related list. Manage subscriptions for Apex
    triggers.

# View and Manage an Event’s Subscribers on the Platform Event’s Detail Page

View the triggers, flows, and processes that are subscribed to a platform event in the Subscriptions related list. Manage subscriptions for Apex triggers.

## View Event Subscribers

View a list of all triggers, processes, and platform event–triggered flows that are subscribed to a platform event in the Subscriptions related list. CometD subscribers, such as your own CometD client or the empApi Lightning component, and Pub/Sub API subscribers aren't listed in this page.

1.  From Setup, enter Platform Events in the Quick Find box, then select **Platform Events**.
2.  Click your event’s name.

    On the event’s definition page, the Subscriptions related list shows all the active triggers, processes, and platform event–triggered flows that are subscribed to the platform event.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

    #### Note

    Only one “Flow Resume” subscriber appears in the Subscriptions related list for all paused flow interviews that are subscribed to the platform event. Processes and platform event–triggered flows are listed individually.

3.  To access a subscriber’s definition, click the subscriber name in the Subscriptions related list. For a trigger, details include its implementation and API version. For a process, details include its version number and API name.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

    #### Note

    Why are you seeing flow version details when you click a process? Similar to a flow, a running instance of a process is a flow interview. The information that you see on the Flow Version page is about the process. You can click the flow API name of the process to view the list of processes for your org.


![List of subscribers for the platform event](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fplatform_events%2Fimages%2Fplatform_events_subscriptions_list.png&folder=platform_events)

The list shows the replay ID of the event that the system last processed (Last Processed Id field) and the event last published (Last Published Id field). Knowing which replay ID was last processed is useful when there’s a gap in the events published and processed. For example, if a trigger contains complex logic that causes a delay in processing large batches of incoming events.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

For high-volume platform events, the Last Published Id value isn't available and is always shown as Not Available.

## Subscription States

Also, the Subscriptions list shows the state of each subscriber, which can be one of these values.

-   Error— The subscriber was disconnected and stopped receiving published events. A trigger reaches this state when it exceeds the number of maximum retries with the EventBus.RetryableException. Trigger assertion failures and unhandled exceptions don’t cause the error state. We recommend limiting the retries to fewer than nine times to avoid reaching this state. When you fix and save the trigger, or for a managed package trigger, if you redeploy the package, the trigger resumes automatically from the tip, starting from new events. Also, you can resume a trigger subscription in the subscription detail page that you access from the platform event page.
-   Repartitioning—The system is in the process of modifying the trigger's parallel subscription configuration.
-   Running—The subscriber is actively listening to events. If you modify the subscriber, the subscription continues to process events.
-   Suspended—The subscriber is disconnected and can’t receive events because a Salesforce admin suspended it or due to an internal error. You can resume a trigger subscription in the subscription detail page that you access from the platform event page. To resume a process, deactivate it and then reactivate it. If you modify the subscriber, the subscription resumes automatically from the tip, starting from new events.

## Suspend or Resume an Apex Trigger Subscription

Resume a suspended trigger subscription where it left off, starting from the earliest event message that is available in the event bus. If you want to bypass event messages that are causing errors or are no longer needed, you can resume the subscription from the tip, starting from new event messages.


| User Permissions Needed |
| --- |
| To manage a trigger subscription: | Customize ApplicationANDAuthor Apex |

To manage a trigger subscription:

1.  In the Subscriptions related list, click **Manage** next to the Apex trigger.
2.  In the subscription detail page, choose the appropriate action.
    -   To suspend a running subscription, click **Suspend**.
    -   To resume a suspended subscription, starting from the earliest event message that is available in the event bus, click **Resume**.
    -   To resume a suspended subscription, starting from new event messages, click **Resume from Tip**.

You can’t manage subscriptions for flows and processes through the Subscriptions related list.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

-   After you click **Resume** or **Resume from Tip**, there can be a delay of a few minutes before the subscription resumes.
-   After you modify a subscriber, the subscription resumes automatically. For more information, see the [Subscription States](#sub_states_section) section.
-   If you click **Resume** for a trigger that’s in the error state, the trigger skips the events that were retried with EventBus.RetryableException. The subscription starts with the unprocessed events sent after the error state was reached and that are within the retention window.
