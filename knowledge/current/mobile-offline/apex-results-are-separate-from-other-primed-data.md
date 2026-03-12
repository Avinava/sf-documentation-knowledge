---
title: "Apex Results Are Separate from Other Primed Data"
domain: mobile-offline
topic: apex-results-are-separate-from-other-primed-data
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:56.378Z
estimatedTokens: 1013
keywords: [Apex, Results, Separate, Primed, Data, saved, durable, store, separately, stored, built-in, components, modules, wires, Lightning]
---

# Apex Results Are Separate from Other Primed Data

> Apex results are saved in the durable store separately from data stored by built-in
  components, modules, and wires that use Lightning Data Service (LDS) to access data.

# Apex Results Are Separate from Other Primed Data

Apex results are saved in the durable store **separately** from data stored by built-in components, modules, and wires that use Lightning Data Service (LDS) to access data.

This is because Apex methods return arbitrary data, as an opaque data blob, rather than returning typed records in expected formats.

![Apex results data is cached separately from LDS data](/docs/resources/img/en-us/260.0?doc_id=images%2Flds_apex_separate_caches.png&folder=mobile_offline)

Data that’s loaded during priming activities, or that’s loaded using base components, wire adapters, and other built-in features of Lightning web components, is stored in one consolidated cache. In an offline-enabled mobile app, it’s also saved to the durable store for offline use. As you load new data, it’s merged into the local store of cached data. This merging includes updating existing items with changes loaded from Salesforce.

The mechanism that makes this possible is Lightning Data Service, or LDS. LDS results include metadata about the returned results. This metadata, sometimes referred to as ObjectInfo, allows LDS to treat the results as real Salesforce objects.

Apex requests are different. While Apex methods *can* return nothing more than records, there’s nothing that *ensures* this. Apex requests can return arbitrary data, in any format you build in your Apex code. As a result, Apex methods don’t return ObjectInfos for the data contained in the response. And without the ObjectInfos for the results, there’s no way to treat those results as Salesforce records—and therefore no way to merge them in with records saved locally by LDS.

To simplify the actual implementations, think of LDS results as being records that are indexed by record ID, with each record stored in a separate representation of a Salesforce object. In contrast, Apex results are stored as one big opaque blob per request, indexed on the request URL, including parameters.

While *you* can interpret structured data inside that opaque blob, LDS and the LWC framework can’t. If you load the same records with LDS and Apex, those records are stored *separately,* as duplicates. Updates to one copy don’t affect the other, unless you fire the Apex request again (to load changes performed via LDS), or tell the framework to reload stale LDS data (to load changes performed via Apex).

This poses a challenge for implementing features that use both the built-in data access features of Lightning Web Components and the fully customizable logic of Apex. Our advice is to use the Lightning base components whenever possible, then use LDS wire adapters, and then if necessary, use Apex. An extensive discussion of this tiered strategy can be found in [Data Guidelines](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.data_guidelines "HTML (New Window)") in the Lightning Web Components Developer Guide.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

#### Note

We recognize that LDS and built in components don’t cover every use case, and that there’s *always* a place for custom logic performed on the server, especially for transactional operations. We intend to improve the capabilities of LDS over time, including adding advanced capabilities for complex queries and other operations. We advise planning your use of Apex in such a way that you can refactor your data access logic to adopt new LDS features as they become available.

#### See Also

-   [*Lightning Web Components Developer Guide:* Data Guidelines](https://developer.salesforce.com/docs/platform/lwc/guide/data-guidelines.html "Lightning Web Components Developer Guide: Data Guidelines - HTML (New Window)")

-   [*Lightning Web Components Developer Guide:* Client-Side Caching of Apex Method Results](https://developer.salesforce.com/docs/platform/lwc/guide/apex-result-caching.html "Lightning Web Components Developer Guide: Client-Side Caching of Apex Method
    Results - HTML (New Window)")
