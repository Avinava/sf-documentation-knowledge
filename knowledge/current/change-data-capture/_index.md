---
domain: change-data-capture
name: Change Data Capture Developer Guide
documentCount: 79
lastGenerated: 2026-03-12T09:36:26.181Z
---

# Change Data Capture Developer Guide — Knowledge Index

> Receive near-real-time changes of Salesforce records, and synchronize corresponding records in an ex

## Available Topics

| File | Title | Type | Description |
|---|---|---|---|
| [add-a-filter-with-metadata-api.md](./add-a-filter-with-metadata-api.md) | Add a Filter with Metadata API | developer-guide | We recommend using Metadata API as part of the application lifecycle management
 |
| [add-a-filter-with-tooling-api.md](./add-a-filter-with-tooling-api.md) | Add a Filter with Tooling API | developer-guide | Create a channel and channel member in Tooling API using API version 56.0 or
    |
| [add-an-apex-trigger.md](./add-an-apex-trigger.md) | Add an Apex Trigger | help-article | The quick start adds a simple change event trigger that shows how to access head |
| [apex-trigger-example.md](./apex-trigger-example.md) | Apex Trigger Example | api-reference | This sample trigger demonstrates a common use for change event triggers and prov |
| [apex-trigger-quick-start.md](./apex-trigger-quick-start.md) | Apex Trigger Quick Start | help-article | Create an Apex trigger that captures change event messages. |
| [capturing-changes-and-encrypting-the-event-payload.md](./capturing-changes-and-encrypting-the-event-payload.md) | Capturing Changes and Encrypting the Event Payload | developer-guide | After capturing record changes, Change Data Capture creates a change event and s |
| [change-data-capture.md](./change-data-capture.md) | Change Data Capture | api-reference | Receive near-real-time changes of Salesforce records, and
      synchronize corr |
| [change-data-capture-allocations.md](./change-data-capture-allocations.md) | Change Data Capture Allocations | api-reference | Learn about the allocations for change events including the number of custom cha |
| [change-event-body-fields.md](./change-event-body-fields.md) | Change Event Body Fields | developer-guide | The body of a change event message includes the fields and values for the corres |
| [change-event-considerations.md](./change-event-considerations.md) | Change Event Considerations | concept | Keep in mind change event considerations and allocations when subscribing to cha |
| [change-event-filters.md](./change-event-filters.md) | Change Event Filters | help-article | Filter a stream of change events by adding a filter expression on a channel
     |
| [change-event-message-structure.md](./change-event-message-structure.md) | Change Event Message Structure | api-reference | A change event message contains header fields and record fields. |
| [change-event-object-support.md](./change-event-object-support.md) | Change Event Object Support | help-article | Change events are available for all custom objects defined in your
      Salesfo |
| [change-event-storage-and-delivery.md](./change-event-storage-and-delivery.md) | Change Event Storage and Delivery | developer-guide | Change events are stored temporarily and subscribers can retrieve them during th |
| [change-event-trigger-considerations.md](./change-event-trigger-considerations.md) | Change Event Trigger Considerations | concept | Keep these considerations in mind when working with change events in Apex
  trig |
| [change-event-triggers.md](./change-event-triggers.md) | Change Event Triggers | help-article | Because change events are based on platform events, they share characteristics f |
| [change-events-for-custom-field-type-conversions.md](./change-events-for-custom-field-type-conversions.md) | Change Events for Custom Field Type Conversions | help-article | When you change the type of a custom field, a change event or gap event is gener |
| [change-events-for-encrypted-salesforce-data.md](./change-events-for-encrypted-salesforce-data.md) | Change Events for Encrypted Salesforce Data | help-article | If Salesforce record fields are encrypted with Shield Platform Encryption, chang |
| [change-events-for-fields.md](./change-events-for-fields.md) | Change Events for Fields | developer-guide | Learn about the change event characteristics for fields. |
| [change-events-for-lead-conversion.md](./change-events-for-lead-conversion.md) | Change Events for Lead Conversion | developer-guide | Converting a lead results in the creation of an account, a contact, and optional |
| [change-events-for-person-accounts.md](./change-events-for-person-accounts.md) | Change Events for Person Accounts | help-article | Because a person account record combines fields from an account and a contact, c |
| [change-events-for-pricebookentry.md](./change-events-for-pricebookentry.md) | Change Events for PricebookEntry | developer-guide | The Create Change Events payload does not include the system fields (sCreatedByI |
| [change-events-for-tasks-and-events.md](./change-events-for-tasks-and-events.md) | Change Events for Tasks and Events | developer-guide | You can receive change events for single and recurring tasks and calendar events |
| [change-events-for-users.md](./change-events-for-users.md) | Change Events for Users | developer-guide | The user and email preferences in change events include only the preferences tha |
| [changeeventheader-fields.md](./changeeventheader-fields.md) | ChangeEventHeader Fields | help-article | Check out the descriptions of the fields that the change event header
    contai |
| [compose-streams-of-change-data-capture-notifications-with-custom-channels.md](./compose-streams-of-change-data-capture-notifications-with-custom-channels.md) | Compose Streams of Change Data Capture Notifications with Custom
            Channels | developer-guide | Create a custom channel if you have multiple subscribers and each
            su |
| [considerations-for-newline-characters-and-computing-the-sha-256-hash.md](./considerations-for-newline-characters-and-computing-the-sha-256-hash.md) | Considerations for Newline Characters and Computing the SHA-256
      Hash | concept | The content that Salesforce uses to generate the SHA-256 hash might have newline |
| [conversions-that-dont-generate-events.md](./conversions-that-dont-generate-events.md) | Conversions That Don’t Generate Events | developer-guide | No change or gap events are generated for custom field type conversions that pre |
| [conversions-that-generate-a-change-event.md](./conversions-that-generate-a-change-event.md) | Conversions That Generate a Change Event | developer-guide | When converting a custom field type to another type that isn’t compatible, field |
| [conversions-that-generate-a-gap-event.md](./conversions-that-generate-a-gap-event.md) | Conversions That Generate a Gap Event | developer-guide | A gap event is generated for all the affected records for some field conversions |
| [converting-an-account.md](./converting-an-account.md) | Converting an Account | developer-guide | If a person account is converted to a business account through the API by modify |
| [creating-and-undeleting-a-person-account.md](./creating-and-undeleting-a-person-account.md) | Creating and Undeleting a Person Account | help-article | When creating or undeleting a person account, the account change event contains  |
| [data-differences-in-event-fields.md](./data-differences-in-event-fields.md) | Data Differences in Event Fields | developer-guide | When the updated text field value is sent as a diff, it contains the SHA-256 has |
| [deleting-a-person-account.md](./deleting-a-person-account.md) | Deleting a Person Account | developer-guide | When deleting a person account, two change events are generated: one for the del |
| [enable-encryption-of-change-events.md](./enable-encryption-of-change-events.md) | Enable Encryption of Change Events | help-article | After you create an event bus tenant secret, a setting becomes available in the
 |
| [enrich-change-events-with-extra-fields.md](./enrich-change-events-with-extra-fields.md) | Enrich Change Events with Extra Fields | help-article | Change event messages include values for new and changed fields, but sometimes
  |
| [event-delivery-usage-for-filtered-streams.md](./event-delivery-usage-for-filtered-streams.md) | Event Delivery Usage for Filtered Streams | help-article | The event delivery allocation applies to the number of events delivered after th |
| [event-enrichment-considerations.md](./event-enrichment-considerations.md) | Event Enrichment Considerations | concept | Keep in mind these considerations when using enriched change events. |
| [event-invitees.md](./event-invitees.md) | Event Invitees | developer-guide | Change events are generated for event invitees in addition to the calendar event |
| [example-diagrams-for-channels-and-channel-members.md](./example-diagrams-for-channels-and-channel-members.md) | Example Diagrams for Channels and Channel Members | developer-guide | Discover the relationship between channels and channel members
            with  |
| [example-add-event-enrichment-fields-with-metadata-api.md](./example-add-event-enrichment-fields-with-metadata-api.md) | Example: Add Event Enrichment Fields with Metadata API | developer-guide | To add event enrichment fields, use the PlatformEventChannelMember metadata type |
| [example-add-event-enrichment-fields-with-tooling-api.md](./example-add-event-enrichment-fields-with-tooling-api.md) | Example: Add Event Enrichment Fields with Tooling API | help-article | To add event enrichment fields, use the PlatformEventChannelMember Tooling API o |
| [example-delivered-enriched-event-messages.md](./example-delivered-enriched-event-messages.md) | Example: Delivered Enriched Event Messages | developer-guide | Check out example event messages that contain enriched fields for update and del |
| [field-considerations.md](./field-considerations.md) | Field Considerations | concept | Keep these considerations in mind for the fields in a filter expression. |
| [field-level-security.md](./field-level-security.md) | Field-Level Security | developer-guide | Change Data Capture respects your org’s field-level security settings. Delivered |
| [filter-expression-format.md](./filter-expression-format.md) | Filter Expression Format | concept | The filter expression format is based on SOQL and supports a subset of SOQL oper |
| [filter-expressions-in-channel-members.md](./filter-expressions-in-channel-members.md) | Filter Expressions in Channel Members | developer-guide | Add a filter expression in a channel member that’s associated with a custom or t |
| [filter-your-stream-of-change-events-with-channels.md](./filter-your-stream-of-change-events-with-channels.md) | Filter Your Stream of Change Events with Channels | developer-guide | Receive only the change event messages that match a predefined filter on a chann |
| [gap-events.md](./gap-events.md) | Gap Events | help-article | Salesforce sometimes sends gap events instead of change events to inform subscri |
| [general-considerations.md](./general-considerations.md) | General Considerations | concept | General, Considerations |
| [generate-an-event-bus-tenant-secret.md](./generate-an-event-bus-tenant-secret.md) | Generate an Event Bus Tenant Secret | help-article | To enable encryption of change events, first generate an event bus tenant
    se |
| [get-compound-fields-in-change-events.md](./get-compound-fields-in-change-events.md) | Get Compound Fields in Change Events | developer-guide | Compound fields, such as lead or contact Name, Address, and Geolocation fields,  |
| [get-custom-channels-and-channel-members.md](./get-custom-channels-and-channel-members.md) | Get Custom Channels and Channel Members | help-article | You can find which channels and channel members are set up in your Salesforce or |
| [how-to-reconstruct-a-field-from-its-diff-value.md](./how-to-reconstruct-a-field-from-its-diff-value.md) | How to Reconstruct a Field from Its Diff Value | api-reference | The value of a diff field is in the unified diff format. Use a diff utility to o |
| [keep-your-external-data-current-with-change-data-capture.md](./keep-your-external-data-current-with-change-data-capture.md) | Keep Your External Data Current with Change Data Capture | help-article | Use Change Data Capture to update data in an external system instead
      of do |
| [merged-change-events.md](./merged-change-events.md) | Merged Change Events | developer-guide | For efficiency, sometimes change events for one transaction are merged into one  |
| [monitor-change-event-publishing-and-delivery-usage.md](./monitor-change-event-publishing-and-delivery-usage.md) | Monitor Change Event Publishing and Delivery Usage | concept | To get usage data for event publishing and delivery to CometD and Pub/Sub API cl |
| [obtain-apex-trigger-subscribers.md](./obtain-apex-trigger-subscribers.md) | Obtain Apex Trigger Subscribers | developer-guide | To get information about the triggers that are subscribed to change events, quer |
| [other-types-of-change-events-gap-and-overflow-events.md](./other-types-of-change-events-gap-and-overflow-events.md) | Other Types of Change Events: Gap and Overflow
    Events | developer-guide | Other types of change events are provided to handle special situations, such as
 |
| [overflow-events.md](./overflow-events.md) | Overflow Events | help-article | To capture changes more efficiently, overflow events are generated for single
   |
| [prerequisites.md](./prerequisites.md) | Prerequisites | help-article | Before subscribing to change events with an Apex trigger, set up debug logs and  |
| [recurring-activities.md](./recurring-activities.md) | Recurring Activities | developer-guide | The activity series record is tracked in a single change event. Each occurrence  |
| [required-permissions-for-change-event-subscribers.md](./required-permissions-for-change-event-subscribers.md) | Required Permissions for Change Event Subscribers | help-article | Change Data Capture ignores sharing settings and sends change events for all rec |
| [security-considerations.md](./security-considerations.md) | Security Considerations | concept | Learn about the user permissions required for subscription, field-level security |
| [select-objects-for-change-notifications-in-the-user-interface.md](./select-objects-for-change-notifications-in-the-user-interface.md) | Select Objects for Change Notifications in the User Interface | help-article | To receive notifications on the default standard channel for record
      change |
| [select-objects-for-change-notifications-with-metadata-api-and-tooling-api.md](./select-objects-for-change-notifications-with-metadata-api-and-tooling-api.md) | Select Objects for Change Notifications with Metadata API and Tooling API | help-article | Use PlatformEventChannelMember in Metadata API or Tooling API to
            cre |
| [sending-data-differences-for-fields-of-updated-records.md](./sending-data-differences-for-fields-of-updated-records.md) | Sending Data Differences for Fields of Updated Records | help-article | To reduce the event payload size and improve performance, Salesforce sometimes s |
| [shared-activities-and-parent-records-for-tasks-and-events.md](./shared-activities-and-parent-records-for-tasks-and-events.md) | Shared Activities and Parent Records for Tasks and Events | help-article | If Shared Activities is enabled, the relationships between a task and its parent |
| [standard-object-notes.md](./standard-object-notes.md) | Standard Object Notes | developer-guide | Learn about the characteristics of change events for some standard objects and t |
| [subscribe-to-change-events.md](./subscribe-to-change-events.md) | Subscribe to Change Events | api-reference | Learn about subscribing to change events including subscription channels, subscr |
| [subscribe-to-the-channel-and-receive-the-filtered-event-stream.md](./subscribe-to-the-channel-and-receive-the-filtered-event-stream.md) | Subscribe to the Channel and Receive the Filtered Event Stream | api-reference | After configuring the filter, subscribe to the channel, and receive the event me |
| [subscribe-with-apex-triggers.md](./subscribe-with-apex-triggers.md) | Subscribe with Apex Triggers | help-article | With Apex triggers, you can capture and process change events on the Lightning P |
| [subscribe-with-pubsub-api.md](./subscribe-with-pubsub-api.md) | Subscribe with Pub/Sub API | api-reference | Use Pub/Sub API to subscribe to event messages in an external client to integrat |
| [subscription-channels.md](./subscription-channels.md) | Subscription Channels | help-article | A subscription channel is a stream of change events that correspond to one or mo |
| [test-change-event-triggers.md](./test-change-event-triggers.md) | Test Change Event Triggers | api-reference | Before you can package or deploy Apex change event triggers to production, you m |
| [transaction-based-replication-steps.md](./transaction-based-replication-steps.md) | Transaction-Based Replication Steps | help-article | To maintain an accurate replica of your Salesforce org’s data in another system, |
| [updating-a-person-account.md](./updating-a-person-account.md) | Updating a Person Account | developer-guide | When updating a person account, two change events are generated, one for the acc |
| [updating-recurring-calendar-events.md](./updating-recurring-calendar-events.md) | Updating Recurring Calendar Events | developer-guide | If a critical change is made to a recurring calendar event, such as changing the |
| [when-do-you-use-change-data-capture.md](./when-do-you-use-change-data-capture.md) | When Do You Use Change Data Capture? | api-reference | You can think of Change Data Capture as part of the real-time data
      replica |

## How to Use

1. Read this index to find the relevant topic for your question
2. Load the specific topic file(s) for detailed information
3. Each file is self-contained — no need to load other files for context

*Tags: platform*