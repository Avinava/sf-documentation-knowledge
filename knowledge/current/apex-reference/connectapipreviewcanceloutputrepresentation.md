---
title: "ConnectApi.PreviewCancelOutputRepresentation"
domain: apex-reference
topic: connectapipreviewcanceloutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.615Z
keywords: [ConnectApi.PreviewCancelOutputRepresentation]
---

# ConnectApi.PreviewCancelOutputRepresentation

# ConnectApi.PreviewCancelOutputRepresentation

Expected financial values for a proposed cancel action.

Subclass of [ConnectApi.BaseOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm "Base Order Management output class.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| changeBalances | ConnectApi.​ChangeItem​OutputRepresentation | Expected financial values for the proposed cancel action. | 48.0 |
| orderSummaryId | String | ID of the OrderSummary. | 48.0 |