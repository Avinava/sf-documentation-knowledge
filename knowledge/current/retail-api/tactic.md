---
title: "Tactic"
domain: retail-api
topic: tactic
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:40.998Z
estimatedTokens: 322
keywords: [Tactic, loadTacticDefaults2, setTacticDates2]
---

# Tactic

> This section provides information about tactic.

# Tactic

This section provides information about tactic.

## loadTacticDefaults2

-   Description: Loads tactic values. If the ID is provided, the record values are added. If not, it instantiates a new tactic with theRecordType provided by the template. If the Input Id matches and existing tactic by Id or by External Id, the tactic will be loaded. If not, a new tactic will be created.
-   Classname: Promotion2BoApiCoreWorkflowSteps
-   Method: loadTacticDefaults

| Property | Description | Required or Optional |
| --- | --- | --- |
| .Id | SFDC ID or external ID for the tactic. | Optional |
| .TacticTemplate | Tactic template name or SFDC ID of the tactic template. | Required |

## setTacticDates2

-   Description: Sets the dates (from, through, commit, placement, order, delivery for a promotion)
-   Classname: Promotion2BoApiCoreWorkflowSteps
-   Method: setTacticDates

| Property | Description | Required or Optional |
| --- | --- | --- |
| .DateFrom | Start date. | Optional |
| .DateThru | Dates from start to end. | Optional |
| .InStoreDateFrom | In store start date. | Optional |
| .InStoreDateThru | In store start to end date. | Optional |
| .ShipmentDateFrom | Shipment start date. | Optional |
| .ShipmentDateThru | Shipment date start to end date. | Optional |
