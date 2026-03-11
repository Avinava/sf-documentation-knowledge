---
title: "ConnectApi.OCILocationGroupAvailabilityOutputRepresentation"
domain: apex-reference
topic: connectapiocilocationgroupavailabilityoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.399Z
keywords: [ConnectApi.OCILocationGroupAvailabilityOutputRepresentation]
---

# ConnectApi.OCILocationGroupAvailabilityOutputRepresentation

# ConnectApi.OCILocationGroupAvailabilityOutputRepresentation

A set of inventory availability data for one inventory location group.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| inventoryRecords | List<ConnectApi.​OCIInventoryRecord​OutputRepresentation> | A list of availability data for individual products. The data combines the quantities for all locations belonging to this location group. | 51.0 |
| locationGroup​Identifier | String | The identifier of the location group. | 51.0 |