---
title: "createReservation(createReservationInputRepresentation)"
domain: apex-reference
topic: createreservationcreatereservationinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.455Z
keywords: [createReservation, createReservationInputRepresentation, Create, inventory, reservation, Omnichannel, Inventory., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# createReservation(createReservationInputRepresentation)

> Create an inventory reservation in Omnichannel
    Inventory.

### createReservation(createReservationInputRepresentation)

Create an inventory reservation in Omnichannel Inventory.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OCICreateReservationOutputRepresentation createReservation(ConnectApi.OCICreateReservationInputRepresentation createReservationInputRepresentation)

#### Parameters

createReservationInputRepresentation

Type: [ConnectApi.OCICreateReservationInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_o_c_i_create_reservation.htm "Data to reserve inventory at one or more Omnichannel Inventory locations or location groups.")

Data to reserve inventory at one or more Omnichannel Inventory locations or location groups.

#### Return Value

Type: [ConnectApi.OCICreateReservationOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_create_reservation_output.htm "Result of an Omnichannel Inventory reservation creation request.")