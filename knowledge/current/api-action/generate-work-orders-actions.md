---
title: "Generate Work Orders Actions"
domain: api-action
topic: generate-work-orders-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.044Z
estimatedTokens: 160
keywords: [Generate, Work, Orders, Actions, Generates, maintenance, plan, supports, manual, order, generation, sure, Auto-Generate, isn’t, selected]
---

# Generate Work Orders Actions

> Generates work orders from a maintenance plan. This object supports manual work order
  generation only. Before using this object, make sure that Auto-Generate Work Orders isn’t selected
  on the maintenance plan.

# Generate Work Orders Actions

Generates work orders from a maintenance plan. This object supports manual work order generation only. Before using this object, make sure that Auto-Generate Work Orders isn’t selected on the maintenance plan.

This object is available in API version 40.0 and later.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/generateWorkOrders

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| recordId | TypereferenceDescriptionThe ID of the maintenance plan from which you want to generate work orders. |
