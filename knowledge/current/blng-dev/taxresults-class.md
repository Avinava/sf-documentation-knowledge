---
title: "TaxResults Class"
domain: blng-dev
topic: taxresults-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.092Z
estimatedTokens: 1037
keywords: [TaxResults, setter, populate, data, tax, callout, passed, back, Salesforce, Billing, connector, getId, getRate, getSummary, getTax]
---

# TaxResults Class

> Contains a list of setter methods to populate the data returned from a
      tax callout. The data is passed back to Salesforce Billing from the tax
    connector.

# TaxResults Class

Contains a list of setter methods to populate the data returned from a tax callout. The data is passed back to Salesforce Billing from the tax connector.

## Namespace

blng

-   **[TaxResults Methods](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxResults.htm#apex_blng_TaxResults_methods)**


## TaxResults Methods

The following are methods for TaxResults.

-   **[getId()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxResults.htm#apex_blng_TaxResults_getId)**
    Returns the ID of the entity where tax was calculated.
-   **[getRate()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxResults.htm#apex_blng_TaxResults_getRate)**
    Returns the tax rate.
-   **[getSummary()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxResults.htm#apex_blng_TaxResults_getSummary)**
    Returns the summary that contains the error message.
-   **[getTax()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxResults.htm#apex_blng_TaxResults_getTax)**
    Returns the tax amount.
-   **[isSuccess](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxResults.htm#apex_blng_TaxResults_isSuccess)**
    Returns true if tax calculation was successful or false if tax calculation fails.
-   **[setRate(rate)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxResults.htm#apex_blng_TaxResults_setRate)**
    Sets the tax rate to the percentage specified by the parameter.
-   **[setTax(tax)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxResults.htm#apex_blng_TaxResults_setTax)**
    Sets the tax amount.
-   **[setIsSuccess(isSuccess)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxResults.htm#apex_blng_TaxResults_setIsSuccess)**
    Sets isSuccess to true if tax calculation was successful, otherwise sets isSuccess to false.
-   **[setId(id)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxResults.htm#apex_blng_TaxResults_setId)**
    Sets the ID of the entity where tax was calculated.
-   **[setSummary(summary)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxResults.htm#apex_blng_TaxResults_setSummary)**
    If tax isn't calculated successfully, assign error message to the summary.

### getId()

Returns the ID of the entity where tax was calculated.

#### Signature

global static void getId()

#### Parameters

id

Type: String

#### Return Value

Type: void

### getRate()

Returns the tax rate.

#### Signature

global static void getRate()

#### Parameters

rate

Type: Decimal

#### Return Value

Type: void

### getSummary()

Returns the summary that contains the error message.

#### Signature

global static void getSummary()

#### Parameters

summary

Type: String

#### Return Value

Type: void

### getTax()

Returns the tax amount.

#### Signature

global static void getTax()

#### Parameters

tax

Type: Decimal

#### Return Value

Type: void

### isSuccess

Returns true if tax calculation was successful or false if tax calculation fails.

#### Signature

global static void isSuccess()

#### Parameters

isSuccess

Type: Boolean

#### Return Value

Type: void

### setRate(rate)

Sets the tax rate to the percentage specified by the parameter.

#### Signature

global static void setRate(Decimal rate)

#### Parameters

rate

Type: Decimal

#### Return Value

Type: void

### setTax(tax)

Sets the tax amount.

#### Signature

global static void setTax(Decimal tax)

#### Parameters

tax

Type: Decimal

Assigns tax.

#### Return Value

Type: void

### setIsSuccess(isSuccess)

Sets isSuccess to true if tax calculation was successful, otherwise sets isSuccess to false.

#### Signature

global static void setIsSuccess(Boolean isSuccess)

#### Parameters

isSuccess

Type: Boolean

#### Return Value

Type: void

### setId(id)

Sets the ID of the entity where tax was calculated.

#### Signature

global static void setId(String id)

#### Parameters

id

Type: String

```

```

#### Return Value

Type: void

### setSummary(summary)

If tax isn't calculated successfully, assign error message to the summary.

#### Signature

global static void setSummary(String summary)

#### Parameters

summary

Type: String

#### Return Value

Type: void

## Code Examples

```
In case of GET Tax Call: Assign Invoiceline/Orderproduct Id
In case of Post/Cancel Tax Call: Assign Invoice Id
```

## Related Topics

- TaxResults Methods (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxResults.htm)
- getId() (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxResults.htm)
- getRate() (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxResults.htm)
- getSummary() (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxResults.htm)
- getTax() (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxResults.htm)
- isSuccess (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxResults.htm)
- setRate(rate) (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxResults.htm)
- setTax(tax) (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxResults.htm)
- setIsSuccess(isSuccess) (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxResults.htm)
- setId(id) (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxResults.htm)
