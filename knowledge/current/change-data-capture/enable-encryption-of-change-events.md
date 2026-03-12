---
title: "Enable Encryption of Change Events"
domain: change-data-capture
topic: enable-encryption-of-change-events
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.679Z
estimatedTokens: 266
keywords: [Enable, Encryption, Change, Events, event, bus, tenant, secret, setting, becomes, Settings, starts]
---

# Enable Encryption of Change Events

> After you create an event bus tenant secret, a setting becomes available in the
    Encryption Settings page that starts encryption of change events.

# Enable Encryption of Change Events

After you create an event bus tenant secret, a setting becomes available in the Encryption Settings page that starts encryption of change events.

**Prerequisites:**

[Generate an Event Bus Tenant Secret](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_security_shield_create_secret.htm "To enable encryption of change events, first generate an event bus tenant secret.")

**Steps:**

1.  From Setup, in the Quick Find box, enter Platform Encryption, and then select **Encryption Settings**.
2.  Select **Encrypt Change Data Capture Events and Platform Events**.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=change_data_capture)

#### Note

When you enable encryption for change events, you also enable it for platform events. For more information, see [Encrypting Platform Event Messages at Rest in the Event Bus](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_encryption.htm) in the Platform Events Developer Guide.

## Related Topics

- Generate an Event
          Bus Tenant Secret (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_security_shield_create_secret.htm)
