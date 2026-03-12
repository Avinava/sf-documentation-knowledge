---
title: "Capturing Changes and Encrypting the Event Payload"
domain: change-data-capture
topic: capturing-changes-and-encrypting-the-event-payload
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.684Z
estimatedTokens: 432
keywords: [Capturing, Changes, Encrypting, Event, Payload, record, Change, Data, Capture, creates, stores, bus, Because, captured, internally]
---

# Capturing Changes and Encrypting the Event Payload

> After capturing record changes, Change Data Capture creates a change event and stores
    it in the event bus. Because data changes are captured internally on the application servers in
    decrypted form, they must be encrypted before storing the corresponding change event that
    contains them. The entire event payload is encrypted using the data encryption key that is based
    on the Event Bus tenant secret type.

# Capturing Changes and Encrypting the Event Payload

After capturing record changes, Change Data Capture creates a change event and stores it in the event bus. Because data changes are captured internally on the application servers in decrypted form, they must be encrypted before storing the corresponding change event that contains them. The entire event payload is encrypted using the data encryption key that is based on the Event Bus tenant secret type.

When Shield Platform Encryption is enabled, Change Data Capture encrypts the fields of all Salesforce objects that it tracks. Change Data Capture ignores the object and field selections set up for Shield Platform Encryption. Fields of all objects for which changes are tracked are encrypted before event storage, even objects not selected for Shield Platform Encryption. For example, suppose that only the Mailing Address of contacts is encrypted with Shield Platform Encryption. If data changes occur in accounts and contacts, change events for both accounts and contacts are encrypted.

## Delivering Change Events

Before delivering a change event to a subscribed client, the change event payload is decrypted using the data encryption key. The change event is sent over a secure channel using HTTPS and TLS, which ensures that the data is protected and encrypted while in transit. If the encryption key was rotated and a new key is issued, stored events are not re-encrypted but they are decrypted before delivery using the archived key. If a key is destroyed, stored events can't be decrypted and aren't delivered.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=change_data_capture)

#### Note

Classic Encryption is not supported.
