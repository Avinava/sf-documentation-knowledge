---
title: "setShipTo(shipTo)"
domain: apex-reference
topic: setshiptoshipto
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.198Z
keywords: [setShipTo, shipTo, Sets, value, ShipTo, address, field., Signature, Parameters, Return, Value]
---

# setShipTo(shipTo)

> Sets the value of a ShipTo address field.

### setShipTo(shipTo)

Sets the value of a ShipTo address field.

#### Signature

global void setShipTo(commercetax.AddressResponse shipTo)

#### Parameters

shipTo

Type: [AddressResponse](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_AddressResponse.htm#apex_class_commercetax_AddressResponse "Contains a location code sent from the external tax engine.")

Stores a single address. This is a generic address parameter and can be used to store any type of address, such as Ship From, Ship To, and Sold To details. Users set the specific address in an AddressResponse instance and then pass that instance to the AddressesResponse’s setShipTo(), setShipFrom(), and setSoldTo() methods as needed.

#### Return Value

Type: void