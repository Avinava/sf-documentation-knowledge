---
title: "ConnectApi.OCIUpdateReservationSingleInputRepresentation"
domain: apex-reference
topic: connectapiociupdatereservationsingleinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.384Z
keywords: [ConnectApi.OCIUpdateReservationSingleInputRepresentation]
---

# ConnectApi.OCIUpdateReservationSingleInputRepresentation

# ConnectApi.OCIUpdateReservationSingleInputRepresentation

Data to update one Omnichannel Inventory reservation item.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| locationGroupIdentifier | String | Identifier of the location group where the inventory is reserved. | Either locationGroupIdentifier or locationIdentifier are required, but not both | 61.0 |
| locationIdentifier | String | Identifier of the location where the inventory is reserved. | Either locationGroupIdentifier or locationIdentifier are required, but not both | 61.0 |
| quantity | Double | The quantity of the product to update. | Required | 61.0 |
| stockKeepingUnit | String | The SKU of the product to update. | Required | 61.0 |