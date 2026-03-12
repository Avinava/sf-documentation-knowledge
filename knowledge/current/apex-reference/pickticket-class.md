---
title: "PickTicket Class"
domain: apex-reference
topic: pickticket-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:18.678Z
estimatedTokens: 416
namespace: ConnectApi
keywords: [PickTicket, Distribute, picked, quantities, among, orders, pick, ticket., distributePickedQuantities, distributePickedQuantitiesInput, API, Version, Requires, Chatter]
---

# PickTicket Class

> Distribute picked quantities among orders in a pick
    ticket.

**Namespace:** `ConnectApi`

# PickTicket Class

Create tickets to fulfill orders.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## PickTicket Methods

These methods are for PickTicket. All methods are static.

-   **[distributePickedQuantities(distributePickedQuantitiesInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_PickTicket_static_methods.htm#apex_ConnectAPI_PickTicket_distributePickedQuantities_1)**
    Distribute picked quantities among orders in a pick ticket.

### distributePickedQuantities(distributePickedQuantitiesInput)

Distribute picked quantities among orders in a pick ticket.

#### API Version

58.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.DistributePickedQuantitiesOutputRepresentation distributePickedQuantities(ConnectApi.DistributePickedQuantitiesInputRepresentation distributePickedQuantitiesInput)

#### Parameters

distributePickedQuantitiesInput

Type: [ConnectApi.DistributePickedQuantitiesInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_distribute_picked_quantities.htm "Input representation to Distribute Picked Quantities")

Input to distribute picked quantities.

#### Return Value

Type: [ConnectApi.DistributePickedQuantitiesOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_distribute_picked_quantities_output.htm "Output representation of where the quantities were distributed in orders and any remaining quantity")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- distributePickedQuantities(distributePickedQuantitiesInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_PickTicket_static_methods.htm)
- ConnectApi.DistributePickedQuantitiesInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_distribute_picked_quantities.htm)
- ConnectApi.DistributePickedQuantitiesOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_distribute_picked_quantities_output.htm)
