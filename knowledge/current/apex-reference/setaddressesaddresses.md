---
title: "setAddresses(addresses)"
domain: apex-reference
topic: setaddressesaddresses
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.267Z
keywords: [setAddresses, addresses, Sets, Addresses, field, LineItemResponse, instance, AddressesResponse, class., Signature, Parameters, Return, Value]
---

# setAddresses(addresses)

> Sets the Addresses field on the LineItemResponse using an instance of AddressesResponse class.

### setAddresses(addresses)

Sets the Addresses field on the LineItemResponse using an instance of AddressesResponse class.

#### Signature

global void setAddresses(commercetax.AddressesResponse addresses)

#### Parameters

addresses

Type: [AddressesResponse](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_AddressesResponse.htm#apex_class_commercetax_AddressesResponse "Sets the tax address fields based on a response from the external tax engine. Contains setter methods for the Ship From, Ship To, and Sold To addresses.")

Class that contains methods to set the Ship To, Ship From, and Sold To address information.

#### Return Value

Type: void