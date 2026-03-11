---
title: "IntegrationStatus.Status Enum"
domain: apex-reference
topic: integrationstatusstatus-enum
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:40.530Z
keywords: [IntegrationStatus.Status, Enum, Values]
---

# IntegrationStatus.Status Enum

# IntegrationStatus.Status Enum

The IntegrationStatus.Status enum describes the status of the current integration.

## Enum Values

The following are the values of the sfdc\_checkout.IntegrationStatus.Status enum.

| Value | Description |
| --- | --- |
| FAILED | Indicates transient, unknown error, managed by the implementor. The buyer can retry this action. |
| SUCCESS | Indicates the integration executed successfully. |