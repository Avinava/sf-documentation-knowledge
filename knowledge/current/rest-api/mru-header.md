---
title: "MRU Header"
domain: rest-api
topic: mru-header
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:35.029Z
estimatedTokens: 515
keywords: [MRU, record, created, updated, upserted, retrieved, updates, recently, items, shown, Recent, sidebar, Salesforce, user, API]
---

# MRU Header

> Defines if the record that is created, updated, upserted, or retrieved updates the list
  of most recently used (MRU) items. MRU items are shown in the Recent Items section of the sidebar
  in the Salesforce user interface. This header is available in API version 60.0 and
  later.

# MRU Header

Defines if the record that is created, updated, upserted, or retrieved updates the list of most recently used (MRU) items. MRU items are shown in the Recent Items section of the sidebar in the Salesforce user interface. This header is available in API version 60.0 and later.

The MRU header can be used with these resources.

-   sObject Basic Information for POST requests
-   sObject Rows
-   sObject Rows by External ID
-   sObject Relationships

For examples of some of these APIs, see sObject Rows and sObject Rows by External ID in the See Also section.

REST APIs used to query records via SOQL never update the MRU, so the header field has no impact on the MRU and is always set to false.

## Header Field Name and Values

The default value for the updateMru field is true, except for with REST APIs that query records via SOQL. The default value is subject to change.

For integration users who make only API calls, Salesforce recommends setting the updateMru field to false to improve performance. MRU isn’t relevant for integration users using only APIs because they don’t use the Salesforce user interface.

Field name

updateMru

Field values

-   true—Update MRU with related records if the No MRU Updates field isn’t enabled for the user on the Users page in Setup. For information on how to enable this field, see the Edit Users page in the See Also section.
-   false—Don’t update MRU with related records.

Example

Indicates that the record updates the MRU.

```

```

#### See Also

-   [sObject Rows](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_sobject_retrieve.htm "sObject Rows - HTML (New Window)")

-   [sObject Rows by External ID](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_sobject_upsert.htm "sObject Rows by External ID - HTML (New Window)")

-   [*Salesforce Help*: Edit Users](https://help.salesforce.com/s/articleView?id=platform.editing_users.htm&type=5&language=en_US "Salesforce Help: Edit Users - HTML (New Window)")

## Code Examples

```
Sforce-Mru: updateMru=true
```
