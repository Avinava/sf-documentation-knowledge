---
title: "TriggeredSendStatusEnum"
domain: mc-apis
topic: triggeredsendstatusenum
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:25.537Z
estimatedTokens: 284
keywords: [TriggeredSendStatusEnum, status, triggered, send]
---

# TriggeredSendStatusEnum

> The TriggeredSendStatusEnum object defines the status of a triggered send.

# TriggeredSendStatusEnum

The TriggeredSendStatusEnum object defines the status of a triggered send.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Active | Enumeration | Represents a triggered send that is currently sending messages. Allow a TriggeredSendDefinition to receive and send TriggeredSends. |
| Canceled | Enumeration | Indicates the triggered send exists within the system but does not accept any new triggered send calls. This status represents a triggered send with sends that were canceled by the account owner. This property relates to the archive status of a triggered send in Marketing Cloud. Once a triggered send has this status, it cannot revert to active or inactive status. |
| Deleted | Enumeration | SubscriberStatus: The subscriber has been deleted from Marketing Cloud. TriggeredSendStatusEnum: SendDefinitionStatusEnum: |
| Inactive | Enumeration | Indicates a subscriber address is not currently being used. |
| Moved | Enumeration | Indicates the triggered send moved to a new location in Marketing Cloud. |
| New | Enumeration | Indicates the triggered send status of new. |
