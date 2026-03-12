---
title: "ContentDistributionEventLog"
domain: object-reference
topic: contentdistributioneventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.037Z
estimatedTokens: 411
keywords: [ContentDistributionEventLog, Content, Distribution, events, contain, distributions, deliveries, users, API, version, 65.0, later, Calls, Special, Access]
---

# ContentDistributionEventLog

> Content Distribution events contain information about content distributions
         and deliveries to users. This object is available in API version 65.0 and later.

# ContentDistributionEventLog

Content Distribution events contain information about content distributions and deliveries to users. This object is available in API version 65.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To access this object, you must have the View Event Log Object Data user permission.

## Fields

| Field | Details |
| --- | --- |
| Action | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe action that’s used when a delivery is viewed. |
| DeliveryIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the content delivery. |
| DeliveryLocation | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe location of the delivery. |
| RelatedObjectIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the record that’s associated with the delivery distribution. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. For example, 20130715233322.670. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API. For example: 00530000009M943. |
| VersionIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the content version. |
