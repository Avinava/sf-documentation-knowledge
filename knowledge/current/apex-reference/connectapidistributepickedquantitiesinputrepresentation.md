---
title: "ConnectApi.DistributePickedQuantitiesInputRepresentation"
domain: apex-reference
topic: connectapidistributepickedquantitiesinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.091Z
keywords: [ConnectApi.DistributePickedQuantitiesInputRepresentation]
---

# ConnectApi.DistributePickedQuantitiesInputRepresentation

# ConnectApi.DistributePickedQuantitiesInputRepresentation

Input representation to Distribute Picked Quantities

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| distributeToOrders | List<ConnectApi.DistributeToOrdersInputRepresentation> | List of orders that need quantities distributed. |  | 58.0 |
| optimization​Criteria | String | Criteria used for distributing picked quantities to orders. |  | 58.0 |
| quantities​PickedList | List<ConnectApi.ItemQuantityInputRepresentation> | Quantities for each item picked. |  | 58.0 |