---
title: "ConnectApi.RegisterGuestBuyerOutputRepresentation"
domain: apex-reference
topic: connectapiregisterguestbuyeroutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.919Z
keywords: [ConnectApi.RegisterGuestBuyerOutputRepresentation]
---

# ConnectApi.RegisterGuestBuyerOutputRepresentation

# ConnectApi.RegisterGuestBuyerOutputRepresentation

Indicates success or failure of a register guest buyer action.

Subclass of [ConnectApi.BaseOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm "Base Order Management output class.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errors | List<ConnectApi.​ErrorResponse> | Any errors that were returned. | 48.0 |
| success | Boolean | Indicates whether the transaction was successful. | 48.0 |