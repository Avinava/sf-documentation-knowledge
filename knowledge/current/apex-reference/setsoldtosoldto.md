---
title: "setSoldTo(soldTo)"
domain: apex-reference
topic: setsoldtosoldto
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.198Z
keywords: [setSoldTo, soldTo, Sets, value, SoldTo, address, field., Signature, Parameters, Return, Value]
---

# setSoldTo(soldTo)

> Sets the value of a SoldTo address field.

### setSoldTo(soldTo)

Sets the value of a SoldTo address field.

#### Signature

global void setSoldTo(commercetax.AddressResponse soldTo)

#### Parameters

soldTo

Type: [AddressResponse](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_AddressResponse.htm#apex_class_commercetax_AddressResponse "Contains a location code sent from the external tax engine.")

Stores a single address. This is a generic address parameter and can be used to store any type of address, such as Ship From, Ship To, Sold To details. Users set the specific address in an AddressResponse instance and then pass that instance to the AddressesResponse’s setShipTo(), setShipFrom(), and setSoldTo() methods as needed.

#### Return Value

Type: void