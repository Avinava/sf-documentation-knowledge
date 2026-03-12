---
title: "OCI Create Reservation Single Input"
domain: chatterapi
topic: oci-create-reservation-single-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.239Z
estimatedTokens: 211
keywords: [OCI, Reservation, Input, quantity, product, Omnichannel, Inventory, location, group, reserve]
---

# OCI Create Reservation Single Input

> A quantity of a product and an Omnichannel Inventory location or
      location group at which to reserve it.

# OCI Create Reservation Single Input

A quantity of a product and an Omnichannel Inventory location or location group at which to reserve it.

Root XML tag

<ociCreateReservationSingle>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| locationGroupIdentifier | String | Identifier of the location group at which to reserve inventory. | Either locationGroupIdentifier or locationIdentifier is required, but not both | 51.0 |
| locationIdentifier | String | Identifier of the location at which to reserve inventory. | Either locationGroupIdentifier or locationIdentifier is required, but not both | 51.0 |
| quantity | Double | The quantity of the product to reserve. | Required | 51.0 |
| stockKeepingUnit | String | The SKU of the product to reserve. | Required | 51.0 |
