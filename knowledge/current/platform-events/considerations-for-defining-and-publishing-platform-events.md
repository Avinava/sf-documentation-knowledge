---
title: "Considerations for Defining and Publishing Platform
    Events"
domain: platform-events
topic: considerations-for-defining-and-publishing-platform-events
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:27.708Z
estimatedTokens: 1230
keywords: [Considerations, Defining, Publishing, Platform, Events, Take]
---

# Considerations for Defining and Publishing Platform
    Events

> Take note of the considerations when defining and publishing
      platform events.

# Considerations for Defining and Publishing Platform Events

Take note of the considerations when defining and publishing platform events.

## Considerations for Defining Platform Events

Field-Level Security

All platform event fields are read only by default, and you can’t restrict access to a particular field. Field-level security permissions don’t apply and the event message contains all fields.

Enforcement of Field Attributes

Platform event records are validated to ensure that the attributes of their custom fields are enforced. Field attributes include the Required and Default attributes, the precision of number fields, and the maximum length of text fields.

Permanent Deletion of Event Definitions

When you delete an event definition, it’s permanently removed and can’t be restored. Before you delete the event definition, delete the associated triggers. Published events that use the definition are also deleted.

Renaming Event Objects

Before you rename an event, delete the associated triggers. If the event name is modified after clients have subscribed to this event, the subscribed clients must resubscribe to the updated topic. To resubscribe to the new event, add your trigger for the renamed event object.

No Associated Tab

Platform events don’t have an associated tab because you can’t view event records in the Salesforce user interface.

No SOQL Support

You can’t query event messages using SOQL.

No Record Page Support in Lightning App Builder

When creating a record page in Lightning App Builder, platform events that you defined show up in the list of objects for the page. However, you can’t create a Lightning record page for platform events because event records aren’t available in the user interface.

Platform Events in Package Uninstall

When uninstalling a package with the option **Save a copy of this package's data for 48 hours after uninstall** enabled, platform events aren’t exported.

Event Volume in Package Installations and Upgrades

Installing a managed or unmanaged package that contains a standard-volume platform event causes the event type to be saved as high volume in the subscriber org. Upgrading a managed package doesn't change the event volume in the subscriber org.

No Support in Professional and Group Editions

Platform events aren’t supported in Professional and Group Edition orgs. Installation of a package that contains platform event objects fails in those orgs.

Permissions for Defining and Using Platform Events

To define a custom platform event, you must have the Customize Application permission. For the permissions for publishing and subscribing to platform events, see [Platform Event Permissions](atlas.en-us.platform_events.meta/platform_events/platform_events_intro_emp.htm#pe_permissions).

## Considerations for Publishing Platform Events

Publishing Events in Read-Only Mode

During read-only mode, publishing standard-volume platform events results in an exception, and the events aren’t published. Publishing high-volume platform events in read-only mode sometimes fails when the event schema isn’t up to date in Salesforce. Your org is in read-only mode during Salesforce maintenance activities.

High-Volume Platform Event Persistence

Platform events are temporarily persisted to and served from an industry-standard distributed system during the retention period. A distributed system doesn’t have the same semantics or guarantees as a transactional database. As a result, we can’t provide a synchronous response for an event publish request. Events are queued and buffered, and Salesforce attempts to publish the events asynchronously. In rare cases, the event message might not be persisted in the distributed system during the initial or subsequent attempts. This means that the events aren’t delivered to subscribers, and they aren’t recoverable.

At-Least-Once Event Publishing and Duplicate Events

Asynchronous platform event publishing uses the at-least-once pub/sub model, not the exactly-once model. With the at-least-once model, there’s a small chance of duplicate events, because if the system encounters an internal error when publishing the queued event, it retries the publishing. In rare cases, the system doesn't receive a publish acknowledgment, so the same event is published more than once. However, if publish acknowledgments are received as expected, no duplicate events are published.

A duplicate event is an event with the same EventUuid field value, a different ReplayId field value, and the same payload. We recommend you handle any issues that result from duplicate events in your subscriber. For example, you can implement deduplication logic using the EventUuid value and avoid processing duplicate events.

For more information about asynchronous event publishing, see [Asynchronous Publishing](atlas.en-us.platform_events.meta/platform_events/platform_events_intro_emp.htm#async_publish).

## Related Topics

- Platform Event Permissions (atlas.en-us.platform_events.meta/platform_events/platform_events_intro_emp.htm)
- Asynchronous
              Publishing (atlas.en-us.platform_events.meta/platform_events/platform_events_intro_emp.htm)
