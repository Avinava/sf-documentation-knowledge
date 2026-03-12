---
title: "Encrypting Platform Event Messages at Rest in the Event
    Bus"
domain: platform-events
topic: encrypting-platform-event-messages-at-rest-in-the-event-bus
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.764Z
estimatedTokens: 1262
keywords: [Encrypting, Platform, Event, Messages, Rest, Bus, increased, security, enable, encryption, they’re, stored, Shield, org, Decrypting]
---

# Encrypting Platform Event Messages at Rest in the Event
    Bus

> For increased security, you can enable encryption of platform event messages while
    they’re stored in the event bus in a Shield Encryption org.

# Encrypting Platform Event Messages at Rest in the Event Bus

For increased security, you can enable encryption of platform event messages while they’re stored in the event bus in a Shield Encryption org.

When you enable encryption of platform events in a Shield Encryption org, event messages are encrypted using the key that is based on the event bus tenant secret type. The encrypted event messages are stored in the event bus for up to 3 days (or 1 day for standard-volume events). The encryption applies to all custom and standard platform events, including Salesforce Event Monitoring streamed events.

To enable encryption and delivery of platform events, first create an event bus tenant secret on the Key Management page in Setup. Then enable encryption of platform events on the Encryption Policy page.

If you don’t enable encryption of platform events in a Shield Encryption org, event messages are stored in clear text in the event bus.

## Decrypting Platform Event Messages Before Delivery

Before delivering a platform event message to a subscribed client, the event payload is decrypted using the encryption key. The platform event message is sent over a secure channel using HTTPS and TLS, which ensures that the data is protected and encrypted while in transit. If the encryption key was rotated and a new key is issued, stored event messages are not re-encrypted, but they are decrypted before delivery using the archived key. If a key is destroyed, stored event messages can't be decrypted and aren't delivered.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

Classic Encryption is not supported.

## Error Status Code

If you enable encryption and an event message could not be published due to an encryption failure, the publish operation returns the PLATFORM\_EVENT\_ENCRYPTION\_ERROR status code. For more information, see [Platform Event Error Status Codes](atlas.en-us.platform_events.meta/platform_events/platform_events_error_status_codes.htm "When publishing an event message results in an error, a status code is returned in the SaveResult.").

## Enable Encryption of Platform Events

To enable encryption of platform event messages at rest, generate an event bus tenant secret and then enable encryption.

**Prerequisites:**

-   A Shield Platform Encryption org.
-
    | User Permissions Needed |
    | --- |
    | To manage tenant secrets: | Manage Encryption Keys |

    Only authorized users can generate tenant secrets from the Platform Encryption page. Ask your Salesforce admin to assign the Manage Encryption Keys permission to you.

-   Before generating an Event Bus tenant secret, you must have an active Fields and Files (Probabilistic) or Fields (Deterministic) tenant secret. For instructions, see [Generate a Tenant Secret with Salesforce](https://help.salesforce.com/s/articleView?id=xcloud.security_pe_ui_setup.htm&type=5&language=en_US) in Salesforce Help.

**Steps:**

1.  To generate an event bus tenant secret, from Setup, in the Quick Find box, enter Platform Encryption, and then select **Key Management**.
2.  In the Key Management Table, select **Event Bus**.
3.  Click **Generate Tenant Secret** or, to upload a customer-supplied tenant secret, click **Bring Your Own Key**.

    ![Generate a tenant secret in the Key Management page](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fplatform_events%2Fimages%2Fpe-encryption-eventbus.png&folder=platform_events)

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

    #### Note

    -   You can generate or rotate an event bus tenant secret once every 7 days.
    -   You can also generate a tenant secret through SOAP API or REST API using the TenantSecret object and the Type field value of EventBus. For more information, see [TenantSecret](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_tenantsecret.htm "HTML (New Window)") in the [Object Reference for Salesforce and Lightning Platform](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "HTML (New Window)").

4.  To enable encryption, from Setup, in the Quick Find box, enter Platform Encryption, and then select **Encryption Settings**.
5.  Turn on **Encrypt Change Data Capture Events and Platform Events**.

When you enable encryption for platform events, you also enable it for change data capture events. For more information, see [Change Events for Encrypted Salesforce Data](https://developer.salesforce.com/docs/atlas.en-us.260.0.change_data_capture.meta/change_data_capture/cdc_security_shield_encryption.htm) in the Change Data Capture Developer Guide.

#### See Also

-   [*Salesforce Help*: Generate a Tenant Secret with Salesforce](https://help.salesforce.com/s/articleView?id=xcloud.security_pe_ui_setup.htm&type=5&language=en_US "Salesforce Help: Generate a Tenant Secret with Salesforce - HTML (New Window)")

## Related Topics

- Platform Event Error Status Codes (atlas.en-us.platform_events.meta/platform_events/platform_events_error_status_codes.htm)
