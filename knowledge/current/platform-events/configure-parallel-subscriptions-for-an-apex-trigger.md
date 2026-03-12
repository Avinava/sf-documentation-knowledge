---
title: "Configure Parallel Subscriptions for an Apex Trigger"
domain: platform-events
topic: configure-parallel-subscriptions-for-an-apex-trigger
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.965Z
estimatedTokens: 1910
keywords: [Configure, Parallel, Subscriptions, Apex, Trigger, Referencing, multiple-step, three, partitions, custom, partition, key, verify, Setup, Step]
---

# Configure Parallel Subscriptions for an Apex Trigger

> Referencing this multiple-step example, configure an Apex trigger with three partitions
  and a custom field partition key. Then verify the trigger parallel subscriptions in
  Setup.

# Configure Parallel Subscriptions for an Apex Trigger

Referencing this multiple-step example, configure an Apex trigger with three partitions and a custom field partition key. Then verify the trigger parallel subscriptions in Setup.

## Step 1: Create an Apex trigger

Create an Apex trigger for the Order\_Event\_\_e platform event.


| User Permissions Needed |
| --- |
| To create a platform event: | Customize Application |
| To create an Apex trigger: | Author Apex |

Prerequisites:

To define the Order\_Event\_\_e platform event, follow the steps in [Platform Event Fields](atlas.en-us.platform_events.meta/platform_events/platform_events_define_ui.htm "Platform events contain standard fields. Add custom fields for your custom data."). Use the label of Order Event, and add the Order Number field of type Text(18) with the **Required** option enabled.

1.  Click the quick access menu (![Quick access menu](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fplatform_events%2Fimages%2Flex-setup-gear.png&folder=platform_events)).
2.  Click **Developer Console**.
3.  Click **File** | **New** | **Apex Trigger**.
4.  For Name, enter MyOrderEventTrigger.
5.  For sObject, select the platform event **Order\_Event\_\_e**.
6.  Click **Submit**.
7.  Replace the trigger body with this code.

    This sample trigger prints out to the debug log the total count of the batch of events received in the trigger and the order number in each event.

    ```

    ```


## Step 2: Configure Parallel Subscriptions

Configure parallel subscriptions for the trigger by using Tooling API.


| User Permissions Needed |
| --- |
| To use Tooling API: | API Enabled |

Prerequisites:

This step uses REST in Tooling API. To complete this step, you can use your favorite REST API tool. We recommend using Postman with the Salesforce API Collection, which contains handy templates for Salesforce API calls, including calls for creating channels and channel members. See [Quick Start: Connect Postman to Salesforce](https://trailhead.salesforce.com/content/learn/projects/quick-start-connect-postman-to-salesforce) in Trailhead.

1.  Get the Apex trigger ID that you use to fill the PlatformEventConsumerId field. To issue a Tooling API query in the Developer Console, in the Query Editor tab of the Developer Console, enter the query:

    ```

    ```

2.  Make sure that the **Use Tooling API** option is selected.
3.  Click **Execute**.
4.  Copy the returned ID for the Apex trigger.
5.  Now that you have the ID of the Apex trigger, use Tooling API to send a POST request to this URI:

    ```

    ```

6.  Supply this request body, replacing Apex\_Trigger\_Id with the trigger ID value that you just queried. If you’re using Postman, expand **Tooling** | **Post Tooling SObject**. For the SOBJECT\_API\_NAME parameter, specify PlatformEventSubscriberConfig, and this request body.

    { "DeveloperName":"MyOrderEventTriggerConfig", "MasterLabel":"MyOrderEventTriggerConfig", "PlatformEventConsumerId": "Apex\_Trigger\_Id", "PartitionKey": "Order\_Event\_\_e.Order\_Number\_\_c", "NumPartitions": "3" }

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

    #### Note

    In this example, we chose the Order\_Number\_\_c custom field to be the partition key. This field meets the criteria for a partition key because it’s a required field. In addition, the order number field value is unique and spans a wide range of values, ensuring even distribution of events in the partitions. See [Choosing a Partition Key](atlas.en-us.platform_events.meta/platform_events/platform_events_ps_choose_key.htm "Which event field you choose for the partition key depends on whether you want to maximize the trigger’s performance or whether the order of event processing is important.").


## Step 3: Set Up Debug Logs for the Apex Trigger

To make sure that debug logs are generated for trigger runs, set up a trace flag. The platform event Apex trigger runs under the Automated Process user by default.

1.  To set up debug logs for the Automated Process user, follow the instructions in [Add a Trace Flag Entry for the Default Automated Process User](atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_debug_autoproc.htm "To collect logs for an event subscription, add a trace flag entry for the Automated Process entity in Setup.").
2.  Make sure the time range that you select for Automated Process covers the time that you want to collect logs for.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

You can override the default running user to another user in PlatformEventSubscriberConfig. See [Configure the User and Batch Size for Your Platform Event Trigger with PlatformEventSubscriberConfig](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_trigger_config.htm?q=PlatformEventSubscriberConfig). For instructions on setting up debug logs for a specific user, see [Add a Trace Flag Entry for the Overridden User](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_subscribe_debug_config_user.htm).

#### See Also

-   [Set Up Debug Logs for Event Subscriptions](atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_debug.htm "Debug logs for platform event triggers, event processes, and resumed flow interviews are created by Automated Process and are separate from their corresponding Apex code logs. For a platform event trigger with an overridden running user, debug logs are created by the specified user. The debug logs aren’t available in the Developer Console’s Log tab.")


## Step 4: Publish Events

Publish some events so the Apex trigger can process them in parallel.


| User Permissions Needed |
| --- |
| To publish platform events: | Create permission for the platform event |
| To execute anonymous Apex in the Developer Console: | Author Apex |

1.  In the Developer Console, click **Debug** | **Open Execute Anonymous Window**, and replace the body of the window with this sample code. This sample code publishes 10 events.

    ```

    ```

2.  Click **Execute**.

## Step 5: Monitor Parallel Subscriptions

Verify that the Apex trigger is executing with parallel subscriptions.


| User Permissions Needed |
| --- |
| To view debug logs: | View All Data |
| To manage a trigger subscription: | Customize ApplicationANDAuthor Apex |

1.  From Setup, in the Quick Find box, enter Platform Events, and then select **Platform Events**.
2.  On the Platform Events page, click the platform event name: **Order Event**.
3.  On the platform event detail page, verify that the Apex trigger is listed in the Parallel Subscriptions related list.

    ![Parallel subscriptions related list](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fplatform_events%2Fimages%2Fplatform_events_ps_related_list.png&folder=platform_events)

4.  You can verify the trigger's execution by checking the debug output in the debug logs.

    In this case, three debug log entries are created, one for each Apex trigger invocation, which corresponds to one partition.

    ![Debug logs generated for the parallel subscriptions](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fplatform_events%2Fimages%2Fplatform_events_ps_debug_logs.png&folder=platform_events)


#### See Also

-   [*Salesforce Help*: View Debug Logs](https://help.salesforce.com/s/articleView?id=xcloud.code_viewing_log_details.htm&type=5&language=en_US "Salesforce Help: View Debug Logs - HTML (New Window)")

## Code Examples

```apex
trigger MyOrderEventTrigger on Order_Event__e (after insert) {
    System.debug('Count of events in the trigger:' + Trigger.New.size());
    for(Order_Event__e evt : Trigger.New) 
    {
        System.debug('Processed Order Number: ' + evt.Order_Number__c);
    }
}
```

```
SELECT Id FROM ApexTrigger WHERE Name='MyOrderEventTrigger'
```

```
/services/data/v66.0/tooling/sobjects/PlatformEventSubscriberConfig
```

```apex
// Publish events
List<Order_Event__e> events = new List<Order_Event__e>();
for(Integer i=0;i<10;i++) {
    Order_Event__e evt = new Order_Event__e(
     Order_Number__c=String.valueOf(i));
    events.add(evt);
}
List<Database.SaveResult> results = EventBus.publish(events);

// Inspect publishing result for each event
for (Database.SaveResult sr : results) {
    if (sr.isSuccess()) {
        System.debug('Successfully published event.');
    } else {
        for(Database.Error err : sr.getErrors()) {
            System.debug('Error returned: ' +
                        err.getStatusCode() +
                        ' - ' +
                        err.getMessage());
        }
    }       
}
```

## Related Topics

- Platform Event Fields (atlas.en-us.platform_events.meta/platform_events/platform_events_define_ui.htm)
- Choosing a Partition Key (atlas.en-us.platform_events.meta/platform_events/platform_events_ps_choose_key.htm)
- Add a Trace Flag Entry for the Default Automated Process User (atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_debug_autoproc.htm)
- Set Up Debug Logs for Event Subscriptions (atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_debug.htm)
