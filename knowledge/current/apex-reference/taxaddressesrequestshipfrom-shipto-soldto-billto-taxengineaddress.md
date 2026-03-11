---
title: "TaxAddressesRequest(shipFrom, shipTo, soldTo, billTo,
      taxEngineAddress)"
domain: apex-reference
topic: taxaddressesrequestshipfrom-shipto-soldto-billto-taxengineaddress
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.301Z
keywords: [TaxAddressesRequest, shipFrom, shipTo, soldTo, billTo, taxEngineAddress, Constructor, defining, addresses, tax, request., constructor, intended, test, usage, throws, exception, used, outside, Apex]
---

# TaxAddressesRequest(shipFrom, shipTo, soldTo, billTo,
      taxEngineAddress)

> Constructor for defining addresses for the tax addresses request.
      This constructor is intended for test usage and throws an exception if used outside of the
      Apex test context.

### TaxAddressesRequest(shipFrom, shipTo, soldTo, billTo, taxEngineAddress)

Constructor for defining addresses for the tax addresses request. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

global TaxAddressesRequest(commercetax.TaxAddressRequest shipFrom, commercetax.TaxAddressRequest shipTo, commercetax.TaxAddressRequest soldTo, commercetax.TaxAddressRequest billTo, commercetax.TaxAddressRequest taxEngineAddress)

#### Parameters

shipFrom

[TaxAddressRequest](#apex_class_commercetax_TaxAddressesRequest "Contains methods to get and set tax address values.")

The address where a line item was shipped from.

shipTo

[TaxAddressRequest](#apex_class_commercetax_TaxAddressesRequest "Contains methods to get and set tax address values.")

The address where a line item is shipped to.

soldTo

[TaxAddressRequest](#apex_class_commercetax_TaxAddressesRequest "Contains methods to get and set tax address values.")

The address of the line item's buyer.

billTo

[TaxAddressRequest](#apex_class_commercetax_TaxAddressesRequest "Contains methods to get and set tax address values.")

The person or group who was billed for the line item.

taxEngineAddress

[TaxAddressRequest](#apex_class_commercetax_TaxAddressesRequest "Contains methods to get and set tax address values.")

The address that the tax engine uses to calculate tax.