---
title: "LineTaxAddressesRequest(shipFrom, shipTo, soldTo, billTo,
            taxEngineAddress)"
domain: apex-reference
topic: linetaxaddressesrequestshipfrom-shipto-soldto-billto-taxengineaddress
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.275Z
keywords: [LineTaxAddressesRequest, shipFrom, shipTo, soldTo, billTo, taxEngineAddress, Constructor, initializing, required, addresses, line, item, tax, request, such, ship, bill, addresses., constructor, intended]
---

# LineTaxAddressesRequest(shipFrom, shipTo, soldTo, billTo,
            taxEngineAddress)

> Constructor for initializing the required addresses for a line
            item of the tax addresses request such as the ship to, ship from, and bill to
            addresses.
            This constructor is intended for test usage and throws an exception if used outside of
            the Apex test context.

### LineTaxAddressesRequest(shipFrom, shipTo, soldTo, billTo, taxEngineAddress)

Constructor for initializing the required addresses for a line item of the tax addresses request such as the ship to, ship from, and bill to addresses. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

global LineTaxAddressesRequest(commercetax.TaxAddressRequest shipFrom, commercetax.TaxAddressRequest shipTo, commercetax.TaxAddressRequest soldTo, commercetax.TaxAddressRequest billTo, commercetax.TaxAddressRequest taxEngineAddress)

#### Parameters

shipFrom

[TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressesRequest.htm#apex_class_commercetax_TaxAddressesRequest "Contains methods to get and set tax address values.")

Address where a line item was shipped from.

shipTo

[TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressesRequest.htm#apex_class_commercetax_TaxAddressesRequest "Contains methods to get and set tax address values.")

Address where a line item is shipped to.

soldTo

[TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressesRequest.htm#apex_class_commercetax_TaxAddressesRequest "Contains methods to get and set tax address values.")

Address of the line item's buyer.

billTo

[TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressesRequest.htm#apex_class_commercetax_TaxAddressesRequest "Contains methods to get and set tax address values.")

Person or group who was billed for the line item.

taxEngineAddress

[TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressesRequest.htm#apex_class_commercetax_TaxAddressesRequest "Contains methods to get and set tax address values.")

Address that the tax engine uses to calculate tax.