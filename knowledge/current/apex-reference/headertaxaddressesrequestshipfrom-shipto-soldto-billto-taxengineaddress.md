---
title: "HeaderTaxAddressesRequest(shipFrom, shipTo, soldTo,
            billTo, taxEngineAddress)"
domain: apex-reference
topic: headertaxaddressesrequestshipfrom-shipto-soldto-billto-taxengineaddress
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.244Z
keywords: [HeaderTaxAddressesRequest, shipFrom, shipTo, soldTo, billTo, taxEngineAddress, Constructor, initializing, required, addresses, tax, request, such, ship, sold, bill, addresses., constructor, intended, test]
---

# HeaderTaxAddressesRequest(shipFrom, shipTo, soldTo,
            billTo, taxEngineAddress)

> Constructor for initializing the required addresses of the tax
            addresses request such as the ship from, ship to, sold to, and bill to addresses. This
            constructor is intended for test usage and throws an exception if used outside of the
            Apex test context.

### HeaderTaxAddressesRequest(shipFrom, shipTo, soldTo, billTo, taxEngineAddress)

Constructor for initializing the required addresses of the tax addresses request such as the ship from, ship to, sold to, and bill to addresses. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

global HeaderTaxAddressesRequest(commercetax.TaxAddressRequest shipFrom, commercetax.TaxAddressRequest shipTo, commercetax.TaxAddressRequest soldTo, commercetax.TaxAddressRequest billTo, commercetax.TaxAddressRequest taxEngineAddress)

#### Parameters

shipFrom

Type: [TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressRequest.htm#apex_class_commercetax_TaxAddressRequest "Contains address details used for tax calculation.")

Address where a line item was shipped from.

shipTo

Type: [TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressRequest.htm#apex_class_commercetax_TaxAddressRequest "Contains address details used for tax calculation.")

Address where a line item was shipped to.

soldTo

Type: [TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressRequest.htm#apex_class_commercetax_TaxAddressRequest "Contains address details used for tax calculation.")

Address of the line item's buyer.

billTo

Type: [TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressRequest.htm#apex_class_commercetax_TaxAddressRequest "Contains address details used for tax calculation.")

Person or group who was billed for the line item.

taxEngineAddress

Type: [TaxAddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxAddressRequest.htm#apex_class_commercetax_TaxAddressRequest "Contains address details used for tax calculation.")

Address that the tax engine uses to calculate tax.