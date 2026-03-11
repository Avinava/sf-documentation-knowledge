---
title: "ConnectApi.DistributePickedQuantitiesOutputRepresentation"
domain: apex-reference
topic: connectapidistributepickedquantitiesoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.600Z
keywords: [ConnectApi.DistributePickedQuantitiesOutputRepresentation]
---

# ConnectApi.DistributePickedQuantitiesOutputRepresentation

# ConnectApi.DistributePickedQuantitiesOutputRepresentation

Output representation of where the quantities were distributed in orders and any remaining quantity

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| fullyDistributed​OrdersList | List<ConnectApi.OrderQuantitiesOutputRepresentation> | Orders that have all quantities distributed. | 58.0 |
| notDistributed​OrdersList | List<ConnectApi.OrderQuantitiesOutputRepresentation> | Orders that have no quantities available after distribution. | 58.0 |
| partially​Distributed​OrdersList | List<ConnectApi.OrderQuantitiesOutputRepresentation> | Orders that have partially distributed quantities after distribution. | 58.0 |
| quantities​RemainingList | List<ConnectApi.ItemQuantityOutputRepresentation> | Quantities remaining after the distribution. | 58.0 |