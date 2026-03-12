---
title: "Security Considerations"
domain: change-data-capture
topic: security-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:09.665Z
estimatedTokens: 437
keywords: [Security, Considerations, user, permissions, subscription, field-level, Shield, Platform, Encryption]
---

# Security Considerations

> Learn about the user permissions required for subscription, field-level security, and
    Shield Platform Encryption.

# Security Considerations

Learn about the user permissions required for subscription, field-level security, and Shield Platform Encryption.

-   **[Required Permissions for Change Event Subscribers](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_security_perms.htm)**
    Change Data Capture ignores sharing settings and sends change events for all records of a Salesforce object. To receive change events on a channel, the subscribed user must have one or more permissions depending on the entities associated with the change events. The permissions apply to Pub/Sub API and CometD subscribers but not to Apex triggers. Apex triggers run with system privileges under the Automated Process entity, so they don’t require those permissions.
-   **[Field-Level Security](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_security_field.htm)**
    Change Data Capture respects your org’s field-level security settings. Delivered events contain only the fields that a subscribed user is allowed to view. Before delivering a change event for an object, the subscribed user’s field permissions are checked. If a subscribed user has no access to a field, the field isn’t included in the change event message that the subscriber receives.
-   **[Change Events for Encrypted Salesforce Data](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_security_shield_encryption.htm)**
    If Salesforce record fields are encrypted with Shield Platform Encryption, changes in encrypted field values generate change events. Change events are stored in the event bus for up to three days. To ensure that the events stored in the event bus are encrypted and not in clear text, create an event bus tenant secret and enable encryption.

## Related Topics

- Required Permissions for Change Event Subscribers (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_security_perms.htm)
- Field-Level Security (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_security_field.htm)
- Change Events for Encrypted Salesforce Data (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_security_shield_encryption.htm)
