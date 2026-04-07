---
title: "Using External Storage for Large Soup Elements"
domain: mobile-sdk
topic: using-external-storage-for-large-soup-elements
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:31.629Z
estimatedTokens: 219
keywords: [External, Storage, Large, Soup, Elements, years, ago, Mobile, SDK, implemented, address, limitations, storing, JSON, strings]
---

# Using External Storage for Large Soup Elements

> Some years ago, Mobile SDK implemented external storage to address limitations with storing
   large JSON strings in the database—for example, a 1-MB cursor window limitation on
   Android. These limitations no longer exist. Furthermore, recent performance analysis shows that
   external storage is 

# Using External Storage for Large Soup Elements

Some years ago, Mobile SDK implemented external storage to address limitations with storing large JSON strings in the database—for example, a 1-MB cursor window limitation on Android. These limitations no longer exist. Furthermore, recent performance analysis shows that external storage is now *slower* than internal storage.

Mobile SDK no longer recommends using external storage with SmartStore soups. The external storage feature has been removed in Mobile SDK 11.0.

-   **[Soup Specs](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_soupspec.htm)**

-   **[Register a Soup with External Storage](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_external_registration.htm)**

-   **[Alter a Soup with External Storage](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_altersoup_external.htm)**

## Related Topics

- Soup Specs (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_soupspec.htm)
- Register a Soup with External Storage (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_external_registration.htm)
- Alter a Soup with External Storage (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_altersoup_external.htm)
