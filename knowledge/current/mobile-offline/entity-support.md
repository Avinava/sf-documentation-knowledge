---
title: "Entity Support"
domain: mobile-offline
topic: entity-support
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.424Z
estimatedTokens: 449
keywords: [Entity, Support, LWC, Offline, uses, UI-API, access, data, supports, long, standard, entities, custom]
---

# Entity Support

> LWC Offline uses
  the UI-API to access entity data. The UI-API supports a long list of standard entities, and all
  custom entities.

# Entity Support

LWC Offline uses the UI-API to access entity data. The UI-API supports a long list of standard entities, and all custom entities.

For a complete list of supported entities, see [Supported Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm "HTML (New Window)") in the User Interface API Developer Guide.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

#### Note

The ContentDocument, ContentVersion, and associated entities, used as part of file uploading features, aren’t fully supported at this time. This limitation affects all base components that provide file uploading functionality. See [Upload Photos from LWCs Using lightning-input Base Component](https://trailhead.salesforce.com/trailblazer-community/feed/0D54S00000HleCnSAJ "HTML (New Window)") in the Trailblazer community for additional details and a partial work-around.

The following entities aren’t fully supported by UI-API, but are commonly used in Field Service. Support for them is incomplete.

-   Case (not supported in related lists)
-   LinkedArticleTask (recurrence isn’t supported)
-   WorkOrder (not supported in related lists)
-   WorkOrderStatus (not supported in related lists)
-   WorkOrderLineItem (not supported in related lists)

#### See Also

-   [*User Interface API Developer Guide:* Supported Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm "User Interface API Developer Guide: Supported Objects - HTML (New Window)")

-   [*User Interface API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.uiapi.meta/uiapi/ "User Interface API Developer Guide - HTML (New Window)")
