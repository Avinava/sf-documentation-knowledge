---
title: "ConnectApi Enums"
domain: omnistudio
topic: connectapi-enums
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.972Z
keywords: [ConnectApi, Enums]
---

# ConnectApi Enums

# ConnectApi Enums

Enums specific to the ConnectApi namespace and Industries features.

ConnectApi enums inherit all properties and methods of Apex enums.

Enums are not versioned. Enum values are returned in all API versions. Clients should handle values they don't understand gracefully.

| Enum | Description |
| --- | --- |
| ConnectApi.​EthocaAlertOutcome | Type of Ethoca alert outcome.AccountSuspendedInProgressNotFoundNotProvidedOtherPartiallyStoppedPreviouslyCancelledPreviouslyRefundedResolvedShipperContactedStoppedTooLateUnresolvedDispute |
| ConnectApi.​EthocaAlertRefundStatus | Type of Ethoca alert refund status.NotRefundedNotSettledRefunded |
| ConnectApi.​EthocaEventType | Type of Ethoca event.AlertOutcomeUpdatedBatchProcessed |
| ConnectApi.​RecordAlertSourceTypeEnum | Type of source system.ApexInternal |
| ConnectApi.​RecordAlertSeverityType | Type of severity.ErrorInfoWarning |