---
title: "ConnectApi.TransferRecordInputRepresentation"
domain: revenue-cloud
topic: connectapitransferrecordinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.105Z
estimatedTokens: 172
keywords: [ConnectApi.TransferRecordInputRepresentation, Input, representation, details, assets, transferred.]
---

# ConnectApi.TransferRecordInputRepresentation

> Input representation of the details of the assets to be transferred.

# ConnectApi.TransferRecordInputRepresentation

Input representation of the details of the assets to be transferred.

This Apex class is used by the transferRecords apex-defined input variable. See [Initiate Transfer Action](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_initiate_transfer.htm "Transfer an asset or multiple assets from one account to another.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| assetId | String | ID of the asset to transfer. | Required | 65.0 |
| transferQuantity | Double | Transfer quantity for the request. | Required | 65.0 |

## Related Topics

- Initiate Transfer Action (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_initiate_transfer.htm)
