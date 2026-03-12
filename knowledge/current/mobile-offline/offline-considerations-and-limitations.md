---
title: "Offline Considerations and Limitations"
domain: mobile-offline
topic: offline-considerations-and-limitations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:56.411Z
estimatedTokens: 596
keywords: [Offline, Considerations, Limitations, LWC, designed, let, build, great, apps, function, network, connection, it’s, full, Salesforce]
---

# Offline Considerations and Limitations

> LWC Offline is designed to let you build great apps that can function without a network
  connection, but it’s not the full Salesforce service. Lightning web components have a
  number of limitations when used offline, including missing capabilities, reduced performance, and
  software defects (bugs). Keep these limitations in mind as you design and develop your offline
  customizations.

# Offline Considerations and Limitations

LWC Offline is designed to let you build great apps that can function without a network connection, but it’s *not* the full Salesforce service. Lightning web components have a number of limitations when used offline, including missing capabilities, reduced performance, and software defects (bugs). Keep these limitations in mind as you design and develop your offline customizations.

-   **[General Considerations](atlas.en-us.mobile_offline.meta/mobile_offline/considerations_general.htm)**
    Consider these general details when planning your Lightning web components development efforts.
-   **[Considerations for Field Service Mobile App](atlas.en-us.mobile_offline.meta/mobile_offline/considerations_app_sfs.htm)**
    The following considerations apply to LWC Offline when you run your components in the Field Service Mobile app.
-   **[Base Components Support](atlas.en-us.mobile_offline.meta/mobile_offline/considerations_base_components_support.htm)**
    Base components are described in the Lightning Web Components Reference. All components are being reviewed for correct behavior in LWC Offline-enabled mobile apps.
-   **[Modules Support](atlas.en-us.mobile_offline.meta/mobile_offline/considerations_modules_support.htm)**
    Lightning web component modules in the lightning namespace are described in the Component Reference in the Lightning Web Components Developer Guide. Modules scoped with @salesforce are described in @salesforce Modules in the Lightning Web Components Developer Guide. All modules are being reviewed for correct behavior in LWC Offline-enabled mobile apps.
-   **[Wire Adapters Support](atlas.en-us.mobile_offline.meta/mobile_offline/considerations_wire_adapters_support.htm)**
    Lightning web component wire adapters and JavaScript functions are described in “lightning/ui\*Api Wire Adapters and Functions” in the *Lighting Web Components Developer Guide*.
-   **[Entity Support](atlas.en-us.mobile_offline.meta/mobile_offline/considerations_entity_support.htm)**
    LWC Offline uses the UI-API to access entity data. The UI-API supports a long list of standard entities, and all custom entities.
-   **[Metadata and Custom Metadata Types Support](atlas.en-us.mobile_offline.meta/mobile_offline/considerations_metadata_support.htm)**
    LWC Offline uses the UI-API to access standard metadata.

## Related Topics

- General Considerations (atlas.en-us.mobile_offline.meta/mobile_offline/considerations_general.htm)
- Considerations for Field Service Mobile App (atlas.en-us.mobile_offline.meta/mobile_offline/considerations_app_sfs.htm)
- Base Components Support (atlas.en-us.mobile_offline.meta/mobile_offline/considerations_base_components_support.htm)
- Modules Support (atlas.en-us.mobile_offline.meta/mobile_offline/considerations_modules_support.htm)
- Wire Adapters Support (atlas.en-us.mobile_offline.meta/mobile_offline/considerations_wire_adapters_support.htm)
- Entity Support (atlas.en-us.mobile_offline.meta/mobile_offline/considerations_entity_support.htm)
- Metadata and Custom Metadata Types Support (atlas.en-us.mobile_offline.meta/mobile_offline/considerations_metadata_support.htm)
