---
title: "SiteDetail"
domain: tooling-api
topic: sitedetail
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.778Z
keywords: [SiteDetail, Supported, Calls, REST, HTTP, Methods, Fields, Note]
---

# SiteDetail

# SiteDetail

Represents the details of a Salesforce site or Experience Cloud site. Available in API version 38.0 and later.

## Supported Calls

describeSObjects(), query()

## Supported REST HTTP Methods

GET

## Fields

| Field | Details |
| --- | --- |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the Site object. |
| IsRegistrationEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the site allows users to sign up. |
| SecureUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URL of the website. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

SiteDetail fields are exposed in SOAP API version 45.0 and later. You can use Tooling API to query for SiteDetail fields in guest user mode in API version 44.0 and earlier. In API version 45.0 and later, use SOAP API to get this data in guest user mode. SiteDetail is still exposed in Tooling API to User Profiles with the ViewSetup permission.