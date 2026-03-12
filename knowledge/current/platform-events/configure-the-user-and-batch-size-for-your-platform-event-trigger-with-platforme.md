---
title: "Configure the User and Batch Size for Your Platform Event Trigger with
    PlatformEventSubscriberConfig"
domain: platform-events
topic: configure-the-user-and-batch-size-for-your-platform-event-trigger-with-platforme
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:28.167Z
estimatedTokens: 1523
keywords: [Configure, User, Batch, Size, Platform, Event, Trigger, PlatformEventSubscriberConfig, override, running, Apex, runs, Automated, Process, system]
---

# Configure the User and Batch Size for Your Platform Event Trigger with
    PlatformEventSubscriberConfig

> You can override the default running user and batch size of a platform
      event Apex trigger. By default, the trigger runs as the Automated Process system user with a
      batch size of 2,000 event messages. Configuring the user and batch size enables you to bypass
      some limitations that sometimes arise from using the defaults. Use
      PlatformEventSubscriberConfig in Tooling API or Metadata API to configure the
    trigger.

# Configure the User and Batch Size for Your Platform Event Trigger with PlatformEventSubscriberConfig

You can override the default running user and batch size of a platform event Apex trigger. By default, the trigger runs as the Automated Process system user with a batch size of 2,000 event messages. Configuring the user and batch size enables you to bypass some limitations that sometimes arise from using the defaults. Use PlatformEventSubscriberConfig in Tooling API or Metadata API to configure the trigger.

Running the trigger as a specific user instead of the default Automated Process entity has these benefits.

-   Records are created, modified, and deleted as this user.
-   OwnerId fields of created records are populated to this user.
-   Records are shared with the user when sharing is enabled. For example, when the trigger calls into an Apex class declared with the with sharing keywords.
-   Debug logs for the trigger execution are created by this user.
-   You can send email messages from the trigger, which isn’t supported with the default Automated Process user.

You can specify any active user in the Salesforce org. The trigger runs in system context with privileges to access all records regardless of the user’s object and field-level permissions. Record sharing is enforced for the running user when the trigger calls into an Apex class declared with the with sharing keywords.

In addition to setting a user, you can specify a custom batch size from 1 through 2,000. The batch size is the maximum number of event messages that can be sent to a trigger in one execution. For platform event triggers, the default batch size is 2,000. Setting a smaller batch size can help avoid hitting Apex governor limits. To maintain optimal processing speeds and system stability, Salesforce may deliver smaller batches than the maximum depending on current load and buffering requirements.

This image shows the Subscriptions related list in Setup for a platform event with a custom batch size and user.

![The Subscriptions related list showing the trigger's custom batch size and user](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fplatform_events%2Fimages%2Fplatform_events_custom_batchsize_user.png&folder=platform_events)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

-   We don’t recommend setting the batch size to a small number or to 1. Small batch sizes can slow down the processing of event messages. For batch size best practices, see "Adjust the Platform Event Trigger Batch Size" in the [Platform Events Debugging](https://trailhead.salesforce.com/content/learn/modules/platform-events-debugging) Trailhead module.
-   If a trigger is running and subscribed to a platform event, new configuration settings take effect after you suspend and resume the trigger. If you don't suspend and resume the trigger, the new configuration can take an unspecified amount of time to take effect due to caching. You can suspend and resume a trigger from the platform event detail page by clicking **Manage** next to the Apex trigger in the Subscriptions related list. For more information, see [View and Manage an Event’s Subscribers on the Platform Event’s Detail Page](atlas.en-us.platform_events.meta/platform_events/platform_events_get_subscribers_apex.htm "View the triggers, flows, and processes that are subscribed to a platform event in the Subscriptions related list. Manage subscriptions for Apex triggers.").

To configure a platform event trigger with Tooling API, see [PlatformEventSubscriberConfig](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_platformeventsubscriberconfig.htm "HTML (New Window)") in the [Tooling API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/intro_api_tooling.htm "HTML (New Window)"). To add a configuration, perform a POST with the PlatformEventSubscriberConfig REST resource, and perform a GET call to retrieve a configuration by ID. Also, you can query the configurations by using Tooling API.

To configure a platform event trigger with Metadata API, see [PlatformEventSubscriberConfig](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_platformeventsubscriberconfig.htm "HTML (New Window)") in the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_intro.htm "HTML (New Window)"). You can use Visual Studio Code with the Salesforce Extension pack to deploy and retrieve Metadata API. For more information about installing Visual Studio Code and the extension pack, see [Salesforce Extensions for Visual Studio Code](https://developer.salesforce.com/tools/vscode "HTML (New Window)"). For more information about deploying and retrieving metadata by using the CLI, see [source Commands](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_source.htm#cli_reference_force_source) and [mdapi Commands](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_mdapi.htm) in the Salesforce CLI Command Reference.

To learn about packaging PlatformEventSubscriberConfig components, see [Platform Event Subscriber Configuration](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#mdc_platform_event_subscriber_config) in the First-Generation Managed Packaging Developer Guide.

#### See Also

-   [*Apex Developer Guide*: Apex Security and Sharing](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_security_sharing_chapter.htm "Apex Developer Guide: Apex Security and Sharing - HTML (New Window)")

-   [*Apex Developer Guide*: Execution Governors and Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_gov_limits.htm "Apex Developer Guide: Execution Governors and Limits - HTML (New Window)")

## Related Topics

- View and Manage an Event’s Subscribers on the Platform Event’s Detail Page (atlas.en-us.platform_events.meta/platform_events/platform_events_get_subscribers_apex.htm)
