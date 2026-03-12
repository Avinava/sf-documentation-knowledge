---
title: "AgentVendorStatusInfo"
domain: service-connector-api-developer-guide
topic: agentvendorstatusinfo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.478Z
estimatedTokens: 121
keywords: [AgentVendorStatusInfo, rep’s, vendor-side, status]
---

# AgentVendorStatusInfo

> Represents the rep’s vendor-side status information.

# AgentVendorStatusInfo

Represents the rep’s vendor-side status information.

## Signature

AgentVendorStatusInfo

## Fields

| Field | Details |
| --- | --- |
| statusId | TypestringDescriptionUnique identifier for the vendor status (for example, an ARN).RequiredNo |
| statusType | TypestringDescriptionThe availability state category (for example, routable or offline).RequiredNo |
| statusName | TypestringDescriptionHuman-readable label for the rep’s current status.RequiredNo |
