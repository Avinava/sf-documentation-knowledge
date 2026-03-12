---
title: "Use Images in an LWC Offline-Enabled Component"
domain: mobile-offline
topic: use-images-in-an-lwc-offline-enabled-component
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:57.031Z
estimatedTokens: 665
keywords: [Images, LWC, Offline-Enabled, Component, Lightning, Web, Components, supports, multiple, ways, referencing, graphics, assets, work, runs]
---

# Use Images in an LWC Offline-Enabled Component

> Lightning Web Components supports multiple ways of referencing graphics assets in a
    component. Not all of these methods work when the component runs offline. LWC Offline supports
    several methods of referencing images in your offline-ready Lightning web
    components.

# Use Images in an LWC Offline-Enabled Component

Lightning Web Components supports multiple ways of referencing graphics assets in a component. Not all of these methods work when the component runs offline. LWC Offline supports several methods of referencing images in your offline-ready Lightning web components.

The standard methods for referencing images (and other binary assets) in an LWC are:

-   Images uploaded as Files, using the VersionDataUrl field of the latest ContentVersion related to a particular ContentDocument record.
-   Content Assets, using the @salesforce/contentAssetUrl module.
-   Static Resources, using the @salesforce/resourceUrl module.

For LWCs with images intended to be used offline, we recommend the first two options. Static resources support offline images, but with limitations.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

#### Note

Support for offline images requires that both your Salesforce org and your mobile app are updated to the Summer ’23 release (API 58.0) or later.

-   **[Use Images Uploaded as Files (ContentDocument) in an LWC](atlas.en-us.mobile_offline.meta/mobile_offline/use_images_from_contentdocument.htm)**
    Files are a general mechanism to upload and make binary files, such as images, available in your Salesforce org. Files can be associated with a specific record, which makes them ideal for product photos, images captured during a service call or other transaction, and otherwise adding images to business activities that you track in Salesforce.
-   **[Use Images Uploaded as Asset Files](atlas.en-us.mobile_offline.meta/mobile_offline/use_images_from_contentasset.htm)**
    Asset files are the modern alternative to static resources. Asset files are ideal for images that are used throughout your components and apps—for example, user interface elements like icons—or otherwise aren’t related to a specific record.
-   **[Use Images Uploaded as Static Resources](atlas.en-us.mobile_offline.meta/mobile_offline/use_images_from_static_resource.htm)**
    Static resources are a method for packaging one or more images, stylesheets, or JavaScript files for use within Lightning web components, and other Salesforce customization features.
-   **[Image Priming and Offline Considerations](atlas.en-us.mobile_offline.meta/mobile_offline/use_images_priming_offline_considerations.htm)**
    LWC Offline isn’t magic. If an image hasn’t been primed before you go offline, it can’t be displayed while offline. LWC Offline primes image assets that are referenced in component template files, in the src attribute of a standard HTML img tag.

## Related Topics

- Use Images Uploaded as Files (ContentDocument) in an LWC (atlas.en-us.mobile_offline.meta/mobile_offline/use_images_from_contentdocument.htm)
- Use Images Uploaded as Asset Files (atlas.en-us.mobile_offline.meta/mobile_offline/use_images_from_contentasset.htm)
- Use Images Uploaded as Static Resources (atlas.en-us.mobile_offline.meta/mobile_offline/use_images_from_static_resource.htm)
- Image Priming and Offline Considerations (atlas.en-us.mobile_offline.meta/mobile_offline/use_images_priming_offline_considerations.htm)
