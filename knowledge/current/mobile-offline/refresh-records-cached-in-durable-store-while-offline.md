---
title: "Refresh Records Cached in Durable Store While Offline"
domain: mobile-offline
topic: refresh-records-cached-in-durable-store-while-offline
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:56.392Z
estimatedTokens: 585
keywords: [Refresh, Records, Cached, Durable, Store, Offline, it’s, possible, retrieve, updated, data, Salesforce, client, device, updates]
---

# Refresh Records Cached in Durable Store While Offline

> While it’s not possible to retrieve updated data from Salesforce while a client device
  is offline, it’s still possible to request updates when data is known to be stale.

# Refresh Records Cached in Durable Store While Offline

While it’s not possible to retrieve updated data from Salesforce while a client device is offline, it’s still possible to request updates when data is known to be stale.

For example, after updating a record via imperative Apex, you would want any version of that record cached by LDS to be updated. It’s straightforward to write code that handles this process when your imperative Apex succeeds while online, but also handles an update error if the client device is offline.

getRecordNotifyChange() is used to advertise the need to update cached records that were modified by imperative Apex. It isn’t supported at this time. Note that getRecordNotifyChange(recordIds) simply *notifies* LDS that the records represented by recordIds provided in the function call are known to be stale. It doesn’t *share* updated record values with LDS, even if those records are available offline. It’s the responsibility of LDS to retrieve the latest values for those records. LDS can only do so when the client is online.

refreshApex() is used to request a refresh for data provisioned by an Apex @wire. It’s usable today and, while online, behaves as expected. However, while refreshApex(valueProvisionedByApexWireService) can be called while offline, it requires a network connection to actually succeed, and push a new value to the wired property or function.

Using getRecordNotifyChange() and refreshApex() to request updates for cached data that are possibly stale is described in [Client-Side Caching of Apex Method Results](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.apex_result_caching "HTML (New Window)") in the Lightning Web Components Developer Guide.

#### See Also

-   [*Lightning Web Components Developer Guide:* Client-Side Caching of Apex Method Results](https://developer.salesforce.com/docs/platform/lwc/guide/apex-result-caching.html "Lightning Web Components Developer Guide: Client-Side Caching of Apex Method Results - HTML (New Window)")

-   [*Lightning Web Components Developer Guide:* @salesforce/apex in @salesforce Modules](https://developer.salesforce.com/docs/platform/lwc/guide/reference-salesforce-modules.html "Lightning Web Components Developer Guide:
    @salesforce/apex in @salesforce Modules - HTML (New Window)")
