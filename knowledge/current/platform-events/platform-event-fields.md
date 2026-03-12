---
title: "Platform Event Fields"
domain: platform-events
topic: platform-event-fields
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.759Z
estimatedTokens: 1643
keywords: [Platform, Event, events, contain, standard, Add, custom, data, ReplayId, System, EventUuid, API, Suffix]
---

# Platform Event Fields

> Platform events contain standard fields. Add custom fields for your
    custom data.

# Platform Event Fields

Platform events contain standard fields. Add custom fields for your custom data.

To define a platform event in Salesforce Classic or Lightning Experience:

1.  From Setup, enter Platform Events in the Quick Find box, then select **Platform Events**.
2.  On the Platform Events page, click **New Platform Event**.
3.  Complete the standard fields, and optionally add a description.
4.  For Publish Behavior, choose when the event message is published in a transaction.

    -   Select **Publish Immediately** if the event publishing isn't tied to transaction data. This is the default option, and we recommend it for most implementations. This option publishes the event message when the publish call executes, regardless of whether the transaction succeeds. With this option, a subscriber can sometimes receive the event message before the data is committed.
    -   Select **Publish After Commit** only if the subscriber requires committed transaction data when it receives the event message. With this option, the event message is published only after a transaction commits successfully and isn’t published if the transaction fails.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

    #### Note

    The publish behavior doesn't apply to event messages published with Pub/Sub API.

5.  Click **Save**.
6.  To add a field, in the Custom Fields & Relationships related list, click **New**.
7.  To set up the field properties, follow the custom field wizard.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

-   If you change the publish behavior, expect up to a 5-minute delay for the change to take effect.
-   In Lightning Experience, platform events aren’t shown in the Object Manager’s list of standard and custom objects and aren’t available in Schema Builder.

## Standard Fields

Platform events include standard fields. These fields appear on the New Platform Event page.

| Field | Description |
| --- | --- |
| Label | Name used to refer to your platform event in a user interface page. |
| Plural Label | Plural name of the platform event. |
| Starts with a vowel sound | If it’s appropriate for your org’s default language, indicate whether the label is preceded by “an” instead of “a.” |
| Object Name | Unique name used to refer to the platform event when using the API. In managed packages, this name prevents naming conflicts with package installations. Use only alphanumeric characters and underscores. The name must begin with a letter and have no spaces. It can't end with an underscore or have two consecutive underscores. |
| Description | Optional description of the object. A meaningful description helps you remember the differences between your events when you view them in a list. |
| Deployment Status | Indicates whether the platform event is visible to other users. |

## Custom Fields

In addition to the standard fields, you can add custom fields to your custom event. Platform event custom fields support only these field types.

-   Checkbox
-   Date
-   Date/Time
-   Number
-   Text
-   Text Area (Long)

The maximum number of fields that you can add to a platform event is the same as for a custom object. See [Salesforce Features and Edition Allocations](https://help.salesforce.com/articleView?id=overview_limits_general.htm&language=en_US).

## ReplayId System Field

Each event message is assigned an opaque ID contained in the ReplayId field. The ReplayId field value, which is populated by the system when the event is delivered to subscribers, refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve events that are within the retention window. For example, a subscriber can retrieve missed events after a connection failure. Subscribers must not compute new replay IDs based on a stored replay ID to refer to other events in the stream.

To learn more about how to use the ReplayId field when resubscribing to the stream, see [Replaying an Event Stream](https://developer.salesforce.com/docs/platform/pub-sub-api/references/methods/subscribe-rpc.html#replaying-an-event-stream) in the Pub/Sub API Reference.

To uniquely identify a platform event message, use the EventUuid system field and not the ReplayId field. The ReplayId field isn’t guaranteed to be unique when Salesforce maintenance activities occur, such as an org migration. The EventUuid field is always unique.

## EventUuid System Field

A universally unique identifier (UUID) that identifies a platform event message. The system populates the EventUuid field, and you can’t overwrite its value. This field is available in API version 52.0 and later. The API version corresponds to the version that an Apex trigger is saved with or the version specified in a CometD subscriber endpoint.

## API Name Suffix for Custom Platform Events

When you create a platform event, the system appends the \_\_e suffix to create the API name of the event. For example, if you create an event with the object name Low Ink, the API name is Low\_Ink\_\_e. The API name is used whenever you refer to the event programmatically, for example, in Apex. API names of standard platform events, such as AssetTokenEvent, don’t include a suffix.

#### See Also

-   [Decoupled Publishing and Subscription](atlas.en-us.platform_events.meta/platform_events/platform_events_considerations_decoupled_processes.htm "When the publish behavior of a platform event is set to Publish Immediately, it’s published outside of a Lightning Platform database transaction. As a result, the publishing and subscription processes are decoupled—the subscription process can’t assume that an action made by the publishing transaction is committed before an event message is received. Familiarize yourself with some scenarios that can occur from the decoupled behavior.")

-   [Considerations for Defining and Publishing Platform Events](atlas.en-us.platform_events.meta/platform_events/platform_events_considerations.htm "Take note of the considerations when defining and publishing platform events.")

-   [Considerations for Publishing and Subscribing to Platform Events with Apex and APIs](atlas.en-us.platform_events.meta/platform_events/platform_events_api_considerations.htm "Before you use Apex or Salesforce APIs to publish and subscribe to platform events, familiarize yourself with these considerations.")

## Related Topics

- Decoupled Publishing and Subscription (atlas.en-us.platform_events.meta/platform_events/platform_events_considerations_decoupled_processes.htm)
- Considerations for Defining and Publishing Platform Events (atlas.en-us.platform_events.meta/platform_events/platform_events_considerations.htm)
- Considerations for Publishing and Subscribing to Platform Events with Apex and APIs (atlas.en-us.platform_events.meta/platform_events/platform_events_api_considerations.htm)
