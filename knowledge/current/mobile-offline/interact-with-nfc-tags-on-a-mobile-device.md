---
title: "Interact with NFC Tags on a Mobile Device"
domain: mobile-offline
topic: interact-with-nfc-tags-on-a-mobile-device
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.126Z
estimatedTokens: 570
keywords: [Interact, NFC, Tags, Mobile, Device, Lightning, web, component, device’s, native, functionality, erase, write, operation, successful]
---

# Interact with NFC Tags on a Mobile Device

> A Lightning web component can use a device’s native NFC functionality to read, erase,
    and write to NFC tags. When an NFC operation is successful, the text data extracted from the NFC
    tag or a simple success message is returned to the Lightning web component that invoked
    it.

# Interact with NFC Tags on a Mobile Device

A Lightning web component can use a device’s native NFC functionality to read, erase, and write to NFC tags. When an NFC operation is successful, the text data extracted from the NFC tag or a simple success message is returned to the Lightning web component that invoked it.

NFC operations are performed locally on the mobile device, and don't need a network connection. However, NFCService requires access to platform-specific APIs that are available only within compatible Salesforce mobile apps.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=mobile_offline)

#### Important

NFCService does not and cannot function when running in a web browser, whether on a desktop or mobile device.

-   **[NFCService User Experience](atlas.en-us.mobile_offline.meta/mobile_offline/use_nfcservice_intro.htm)**
    Your component can deliver any user experience you desire, but there’s a common flow for any component that interacts with NFCs.
-   **[Use the NFCService API](atlas.en-us.mobile_offline.meta/mobile_offline/use_nfcservice_in_a_lightning_component.htm)**
    To develop a Lightning web component capable of interacting with NFCs, use the NFCService API.
-   **[NFCService Example](atlas.en-us.mobile_offline.meta/mobile_offline/use_nfcservice_example.htm)**
    Here’s a basic example of a Lightning web component that uses NFCService to parse text data from an image.
-   **[Compatibility and Requirements](atlas.en-us.mobile_offline.meta/mobile_offline/use_nfcservice_compatibility.htm)**
    NFCService is a JavaScript module that provides an API to Lightning web components to make mobile hardware and platform (operating system) features available in JavaScript. It **requires** access to device hardware and device platform APIs. This access is only available when NFCService runs within a compatible Salesforce mobile app. **It does not and cannot function when running in a standard web browser, whether the browser runs on a desktop or mobile device.**
-   **[Considerations and Limitations](atlas.en-us.mobile_offline.meta/mobile_offline/use_nfcservice_considerations.htm)**
    Consider these guidelines and limitations when developing features that use the NFCService API.

## Related Topics

- NFCService User Experience (atlas.en-us.mobile_offline.meta/mobile_offline/use_nfcservice_intro.htm)
- Use the NFCService API (atlas.en-us.mobile_offline.meta/mobile_offline/use_nfcservice_in_a_lightning_component.htm)
- NFCService Example (atlas.en-us.mobile_offline.meta/mobile_offline/use_nfcservice_example.htm)
- Compatibility and Requirements (atlas.en-us.mobile_offline.meta/mobile_offline/use_nfcservice_compatibility.htm)
- Considerations and Limitations (atlas.en-us.mobile_offline.meta/mobile_offline/use_nfcservice_considerations.htm)
