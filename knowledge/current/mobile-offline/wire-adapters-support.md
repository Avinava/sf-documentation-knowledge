---
title: "Wire Adapters Support"
domain: mobile-offline
topic: wire-adapters-support
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:56.455Z
estimatedTokens: 2251
keywords: [Wire, Adapters, Support, Lightning, web, component, JavaScript, functions, described, “lightning, ui*Api, Functions”, Lighting, Components, Developer]
---

# Wire Adapters Support

> Lightning web component wire adapters and JavaScript functions are described in “lightning/ui*Api Wire Adapters and Functions” in the Lighting
   Web Components Developer Guide.

# Wire Adapters Support

Lightning web component wire adapters and JavaScript functions are described in “lightning/ui\*Api Wire Adapters and Functions” in the *Lighting Web Components Developer Guide*.

The following wire adapters and functions can be used.

**Support Status**

-   ![Supported](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_supported.png&folder=mobile_offline) — **Supported**. Expected to behave as documented.
-   ![Limited Support](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_caution.png&folder=mobile_offline) — **Limited Support**. Can be used, but has known (and possibly unknown) issues.
-   ![Not Supported](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_not_supported.png&folder=mobile_offline)— **Not Supported**. Doesn’t work, and shouldn’t be used.

**Offline Capability**

-   **Drafts-Enabled**. Supports creation and modification of records while offline.
-   **Offline-Supported**. Supports offline read-only use of primed data while offline, but *not* creation or modification.

| Wire Adapter | Status | Offline Capability | Comments |
| --- | --- | --- | --- |
| lightning/uiRecordApiRead record data and default values. Create, update, delete, and refresh records. |
| createRecord |  | Drafts-Enabled | Mobile applications must have the object metadata to create records while offline. |
| createRecordInputFilteredBy​EditedFields |  |  |  |
| deleteRecord |  | Drafts-Enabled |  |
| generateRecordInputForCreate |  |  |  |
| generateRecordInputForUpdate |  |  |  |
| getFieldValue |  |  |  |
| getFieldDisplayValue |  |  |  |
| getRecord |  | Drafts-Enabled | getRecord supports two ways to specify which fields to load: explicitly, by providing a fields list, or implicitly, by providing a layout that contains the desired fields.At this time, you must provide a specific list of fields; getRecord by layout isn’t supported. |
| getRecords |  | Drafts-Enabled |  |
| getRecordCreateDefaults |  | Offline-Supported |  |
| getRecordNotifyChange |  |  |  |
| getRecordUi (deprecated) |  |  | See Wire Adapter Considerations. |
| updateRecord |  | Drafts-Enabled | Mobile applications must have the object metadata to create records while offline. |

| Wire Adapter | Status | Offline Capability | Comments |
| --- | --- | --- | --- |
| lightning/uiObjectInfoApiGet object metadata, and get picklist values. |
| getObjectInfo |  | Offline-Supported |  |
| getObjectInfos |  | Offline-Supported |  |
| getPicklistValues |  | Offline-Supported |  |
| getPicklistValuesByRecordType |  | Offline-Supported |  |

| Wire Adapter | Status | Offline Capability | Comments |
| --- | --- | --- | --- |
| lightning/uiLayoutApiGet record layout metadata and data. |
| getLayout |  | Offline-Supported |  |

| Wire Adapter | Status | Offline Capability | Comments |
| --- | --- | --- | --- |
| lightning/uiAppsApi (beta)Get data and metadata for apps displayed in the Salesforce UI. |
| getNavItems (beta) |  |  | Not yet supported due to beta status. |

| Wire Adapter | Status | Offline Capability | Comments |
| --- | --- | --- | --- |
| lightning/uiListApi (deprecated)Get records and metadata for a list view. |
| getListUi (deprecated) |  |  | See Wire Adapter Considerations. |

| Wire Adapter | Status | Offline Capability | Comments |
| --- | --- | --- | --- |
| lightning/uiListsApiGet metadata for a list view. |
| getListInfoByName |  | Offline-Supported | Use this adapter instead of lightning/uiListApi.getListUi. |
| getListInfosByName |  |  |  |

| Wire Adapter | Status | Offline Capability | Comments |
| --- | --- | --- | --- |
| lightning/uiRelatedListApiGet records, metadata, and record count for a related list. |
| getRelatedListRecords |  | Offline-Supported | getRelatedListRecords works while offline, but doesn’t update to add or remove records that are created or deleted while offline. |
| getRelatedListRecordsBatch |  |  |  |
| getRelatedListInfo |  | Offline-Supported |  |
| getRelatedListInfoBatch |  | Offline-Supported |  |
| getRelatedListsInfo |  | Offline-Supported |  |
| getRelatedListCount |  | Offline-Supported | getRelatedListCount works while offline, but doesn’t update to add or remove records that are created or deleted while offline. |

## Wire Adapter Considerations

We describe getRecordUi and getListUi as having Limited Support. Both adapters are deprecated for all customers, and each has additional considerations for offline use. getRecordUi in particular has significant limitations. We would prefer to note both of these adapters as Not Supported, but each provides functionality that’s not easily replaced today. We recommend you carefully limit your use of these wire adapters.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

#### Note

Forward looking statement: Our goal is to provide supported alternatives to getRecordUi and getListUi. If you limit your usage of these adapters today, you’ll have an easier time migrating later.

-   In the case of getRecordUi, limit yourself to getting layout metadata details, and use the data-only adapters getRecord and getRecords for data access.
-   In the case of getListUi, use the new getListInfoByName wire adapter to get list view metadata. If you must use getListUi to access list view records, see the following considerations.

**Considerations for List Adapters**

List- or collection-oriented adapters such as getListUi, getRelatedListRecords, and getRelatedListCount have limited support for offline updates. Specifically, list logic isn’t re-evaluated for changes made while you’re offline. That is, if you create or modify a record offline and it falls into or out of the list criteria, the record isn’t added or removed from the list until you’re back online. The list updates only after the changes sync back to Salesforce. This limitation affects list *membership*, but does not affect the *display* of records that are a part of a list.

Here’s an example to make this clear. Let’s say you use getRelatedListRecords as a source to display a list of records, and the related list criteria limits list membership to accounts whose name begins with “A”. While offline, if you update one of those records to change an account name to begin with a “B”, from “Apple” to “Banana”, that record will still display in the list, with the **updated** account name “Banana”. Once you return online, the change syncs to Salesforce, and the list criteria is reevaluated. The Banana account will no longer be a member of the related list, and the wire adapter is updated, triggering a component refresh. The list of records returned by getRelatedListRecords won’t include the record for the Banana account, and it will disappear from the list displayed in your component’s user interface.

**Considerations for getRecordUi**

getRecordUi is affected by numerous issues when used while offline.

-   Invoking getRecordUi on a draft record that was **created** while offline returns an error.
-   If you edit a record such that its layout changes—for example, by changing the record type—the results of invoking getRecordUi on that record can be inconsistent.
-   If you change a relationship field on a record, and the new relationship references a record with a different object type or record type, the results of invoking getRecordUi on that record can be inconsistent or result in an error.

In theory, if you’re able to limit changes to records while offline to the scalar (non-relationship, non-metadata affecting) fields of that record, then invoking getRecordUi on that record should work as documented. In practice this is challenging, and when you miss it results in inconsistent or incorrect behavior that can be hard to troubleshoot. If you must use it, exercise extreme caution.

getRecordUi is used in the implementations of the following Lightning base components, causing them to have similar limitations:

-   lightning-record-form
-   lightning-record-edit-form
-   lightning-record-view-form

## Handle Errors Defensively

When handling errors returned by wire adapters there’s potentially an issue with the “shape” of the error response. In contexts outside LWC Offline, the response returns a single error object. However, when an LWC wire adapter receives an error running in an LWC Offline-enabled mobile app, the response is returned as an **array** of error objects—most often, an array containing just one error object.

To make your components compatible across environments, we recommend a small amount of defensive coding at the start of your error handling. Convert a non-array into an array to ensure that the error shape is consistent:

```

```

#### See Also

-   [*Lightning Web Components Developer Guide:* lightning/ui\*Api Wire Adapters and Functions](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_ui_api "Lightning Web Components Developer Guide:
    lightning/ui*Api Wire Adapters and Functions - HTML (New Window)")

## Code Examples

```
let errors = ...; // errors from wire adapter
if ( ! Array.isArray(errors) ) {
    errors = [ errors ];
}
```
