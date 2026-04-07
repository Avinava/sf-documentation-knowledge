---
title: "OCI Update Reservation Single Input"
domain: chatterapi
topic: oci-update-reservation-single-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:09.327Z
estimatedTokens: 201
keywords: [OCI, Reservation, Omnichannel, Inventory, item]
---

> Data to update one Omnichannel Inventory reservation item.

# OCI Update Reservation Single Input

Data to update one Omnichannel Inventory reservation item.

Root XML tag

<ociUpdateReservationSingle>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| locationGroupIdentifier | String | Identifier of the location group where the inventory is reserved. | Either locationGroupIdentifier or locationIdentifier are required, but not both | 61.0 |
| locationIdentifier | String | Identifier of the location where the inventory is reserved. | Either locationGroupIdentifier or locationIdentifier are required, but not both | 61.0 |
| quantity | Double | The quantity of the product to update. | Required | 61.0 |
| stockKeepingUnit | String | The SKU of the product to update. | Required | 61.0 |
