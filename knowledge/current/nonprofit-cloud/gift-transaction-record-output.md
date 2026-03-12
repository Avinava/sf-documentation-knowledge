---
title: "Gift Transaction Record Output"
domain: nonprofit-cloud
topic: gift-transaction-record-output
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:01.038Z
estimatedTokens: 197
keywords: [Gift, Transaction, Record, Output, representation]
---

# Gift Transaction Record Output

> Output representation of a gift transaction record.

# Gift Transaction Record Output

Output representation of a gift transaction record.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| amount | Double | Transaction amount. | Small, 59.0 | 59.0 |
| commitmentId | String | ID of the gift commitment record. | Small, 59.0 | 59.0 |
| commitment​ScheduleId | String | ID of the gift commitment schedule record. | Small, 59.0 | 59.0 |
| paymentMethod | String | Mode of payment for the transaction. | Small, 59.0 | 59.0 |
| status | String | Status of the transaction.This field is not applicable for future transactions. | Small, 59.0 | 59.0 |
| transaction​Date | String | Payment due date.This field is applicable only for future transactions. | Small, 59.0 | 59.0 |
