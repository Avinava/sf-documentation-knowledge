---
title: "ConnectApi.CartInventoryReservationOutputRepresentation (Pilot)"
domain: apex-reference
topic: connectapicartinventoryreservationoutputrepresentation-pilot
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.113Z
keywords: [ConnectApi.CartInventoryReservationOutputRepresentation, Pilot, Note]
---

# ConnectApi.CartInventoryReservationOutputRepresentation (Pilot)

# ConnectApi.CartInventoryReservationOutputRepresentation (Pilot)

Inventory Reservation

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

This feature is not generally available and is being piloted with certain Customers subject to additional terms and conditions. It is not part of your purchased Services. This feature is subject to change, may be discontinued with no notice at any time in Salesforce’s sole discretion, and Salesforce may never make this feature generally available. Make your purchase decisions only on the basis of generally available products and features. This feature is made available on an AS IS basis and use of this feature is at your sole risk.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errorCode | String | Error code for this reservation. | 58.0 |
| errorMessage | String | Error message for this reservation. | 58.0 |
| inventoryItem​Reservations | List<ConnectApi.​CartInventory​ItemReservation​OutputRepresentation> | Collection of inventory item reservations. | 58.0 |
| reservation​Identifier | String | Reservation identifier. | 58.0 |
| success | Boolean | Indicates whether the transaction was successful. | 58.0 |