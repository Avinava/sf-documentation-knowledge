---
title: "setShipFrom(shipFrom)"
domain: apex-reference
topic: setshipfromshipfrom
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.198Z
keywords: [setShipFrom, shipFrom, Sets, value, ShipFrom, address, field., Signature, Parameters, Return, Value]
---

# setShipFrom(shipFrom)

> Sets the value of a
      ShipFrom
      address field.

### setShipFrom(shipFrom)

Sets the value of a ShipFrom address field.

#### Signature

global void setShipFrom(commercetax.AddressResponse shipFrom)

#### Parameters

shipFrom

Type: [AddressResponse](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_AddressResponse.htm#apex_class_commercetax_AddressResponse "Contains a location code sent from the external tax engine.")

A single address. Use this generic address parameter to store any type of address, such as Ship From, Ship To, and Sold To details. Users set the specific address in an AddressResponse instance and then pass that instance to the AddressesResponse’s setShipTo(), setShipFrom(), and setSoldTo() methods as needed.

#### Return Value

Type: void