---
title: "Image Priming and Offline Considerations"
domain: mobile-offline
topic: image-priming-and-offline-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:57.067Z
estimatedTokens: 471
keywords: [Image, Priming, Offline, Considerations, LWC, isn’t, magic, hasn’t, primed, can’t, primes, assets, referenced, component, template]
---

# Image Priming and Offline Considerations

> LWC Offline isn’t magic. If an image hasn’t been primed before you go offline, it can’t
  be displayed while offline. LWC Offline primes image assets that are referenced in component
  template files, in the src attribute of a standard HTML img tag.

# Image Priming and Offline Considerations

LWC Offline isn’t magic. If an image hasn’t been primed before you go offline, it can’t be displayed while offline. LWC Offline primes image assets that are referenced in component template files, in the src attribute of a standard HTML img tag.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

#### Note

Only the img tag is supported at this time. Images referenced in other ways or tags aren’t primed and won’t display sometimes, even when online.

Primed images are stored locally on the mobile device, in a binary durable store (cache). Images stored in individual files are primed and cached individually. Images stored in archive asset files are accessible, but be aware that the entire archive is primed and cached. Updates to images in archive files require reloading the entire archive. Archive static resources aren’t supported at this time.

In Summer ’23, primed images aren’t automatically purged from the offline cache when they get stale. Be mindful of the size of your images or archive asset files, and the space they take up locally on devices. LWC Offline-enabled apps can provide other methods of purging stale images. Check the documentation for your target mobile app.

The binary contents of an item referenced in an img tag isn’t validated. It’s up to you to ensure that referenced files are valid images. Support for specific image formats is dependent on the capabilities of the web view, which is provided by the operating system. Providing an unsupported or non-image file to an img tag is an HTML error and can cause unpredictable behavior. As the joke goes, don’t do that. Safe formats are the usual web image formats: GIF, JPEG, PNG, and so on. When in doubt, test specific image formats on your specific supported mobile devices and operating system versions.
