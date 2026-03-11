---
title: "getInventoryAvailability(inventoryAvailabilityInputRepresentation)"
domain: apex-reference
topic: getinventoryavailabilityinventoryavailabilityinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.455Z
keywords: [getInventoryAvailability, inventoryAvailabilityInputRepresentation, Retrieve, inventory, availability, data, products, locations, location, groups., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getInventoryAvailability(inventoryAvailabilityInputRepresentation)

> Retrieve inventory availability data for one or more products at one
      or more inventory locations or location groups.

### getInventoryAvailability(inventoryAvailabilityInputRepresentation)

Retrieve inventory availability data for one or more products at one or more inventory locations or location groups.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OCIGetInventoryAvailabilityOutputRepresentation getInventoryAvailability(ConnectApi.OCIGetInventoryAvailabilityInputRepresentation inventoryAvailabilityInputRepresentation)

#### Parameters

inventoryAvailabilityInputRepresentation

Type: [ConnectApi.OCIGetInventoryAvailabilityInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_o_c_i_get_inventory_availability.htm "Details of a request to retrieve inventory availability.")

Details of a request to retrieve inventory availability.

#### Return Value

Type: [ConnectApi.OCIGetInventoryAvailabilityOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_get_inventory_availability_output.htm "Response to a request for inventory availability data.")