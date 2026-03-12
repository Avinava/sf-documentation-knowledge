---
title: "Change Events for Encrypted Salesforce Data"
domain: change-data-capture
topic: change-events-for-encrypted-salesforce-data
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.682Z
estimatedTokens: 667
keywords: [Change, Events, Encrypted, Salesforce, Data, record, Shield, Platform, Encryption, changes, generate, stored, event, bus, three]
---

# Change Events for Encrypted Salesforce Data

> If Salesforce record fields are encrypted with Shield Platform Encryption, changes in
    encrypted field values generate change events. Change events are stored in the event bus for up
    to three days. To ensure that the events stored in the event bus are encrypted and not in clear
    text, create an event bus tenant secret and enable encryption.

# Change Events for Encrypted Salesforce Data

If Salesforce record fields are encrypted with Shield Platform Encryption, changes in encrypted field values generate change events. Change events are stored in the event bus for up to three days. To ensure that the events stored in the event bus are encrypted and not in clear text, create an event bus tenant secret and enable encryption.

To enable encryption of change events, first create an event bus tenant secret on the Key Management page in Setup. Then enable encryption of change events on the Encryption Policy page.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=change_data_capture)

#### Warning

You must create an event bus tenant secret before enabling encryption. From Setup, the encryption setting is available only after you create an event bus tenant secret. In Metadata API, if you enable encryption using PlatformEncryptionSettings without having the tenant secret, you get an error.

-   **[Generate an Event Bus Tenant Secret](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_security_shield_create_secret.htm)**
    To enable encryption of change events, first generate an event bus tenant secret.
-   **[Enable Encryption of Change Events](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_security_shield_enable_delivery.htm)**
    After you create an event bus tenant secret, a setting becomes available in the Encryption Settings page that starts encryption of change events.
-   **[Capturing Changes and Encrypting the Event Payload](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_security_shield_process.htm)**
    After capturing record changes, Change Data Capture creates a change event and stores it in the event bus. Because data changes are captured internally on the application servers in decrypted form, they must be encrypted before storing the corresponding change event that contains them. The entire event payload is encrypted using the data encryption key that is based on the Event Bus tenant secret type.

#### See Also

-   [*Salesforce Help*: Strengthen Your Data's Security with Shield Platform Encryption](https://help.salesforce.com/articleView?id=security_pe_overview.htm&type=5&language=en_US "Salesforce Help: Strengthen Your Data's Security with Shield Platform
    Encryption - HTML (New Window)")

-   [*Salesforce Help*: Which User Permissions Does Shield Platform Encryption Require?](https://help.salesforce.com/articleView?id=security_pe_permissions.htm&language=en_US "Salesforce Help: Which User Permissions Does Shield Platform Encryption
    Require?  - HTML (New Window)")

## Related Topics

- Generate an Event Bus Tenant Secret (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_security_shield_create_secret.htm)
- Enable Encryption of Change Events (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_security_shield_enable_delivery.htm)
- Capturing Changes and Encrypting the Event Payload (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_security_shield_process.htm)
