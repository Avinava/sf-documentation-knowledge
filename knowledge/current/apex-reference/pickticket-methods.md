---
title: "PickTicket Methods"
domain: apex-reference
topic: pickticket-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.549Z
keywords: [PickTicket, Methods, These, methods, PickTicket., static., distributePickedQuantities, distributePickedQuantitiesInput, API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# PickTicket Methods

> These methods are for PickTicket. All methods
  are static.

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