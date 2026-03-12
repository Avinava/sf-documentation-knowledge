---
title: "TaxEngines Interface"
domain: blng-dev
topic: taxengines-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.198Z
estimatedTokens: 674
keywords: [TaxEngines, tax, engine, implements, calculating, clearing, in-memory, entities, previous, call, legal, references, resetSObjectListofIds, resetLegalEntityReferences, calculateTax]
---

# TaxEngines Interface

> Your tax engine implements this interface. It contains methods for
      calculating tax, clearing in-memory entities from the previous call, and clearing legal
      references from the previous call.

# TaxEngines Interface

Your tax engine implements this interface. It contains methods for calculating tax, clearing in-memory entities from the previous call, and clearing legal references from the previous call.

## Namespace

blng

-   **[TaxEngines Methods](atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_TaxEngines.htm#apex_blng_TaxEngines_methods)**
    Learn more about the methods available with the TaxEngines interface.

## TaxEngines Methods

Learn more about the methods available with the TaxEngines interface.

The TaxEngines interface includes these methods.

-   **[resetSObjectListofIds()](atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_TaxEngines.htm#apex_blng_TaxEngines_resetSObjectListofIds)**
    Sets the in-memory IDs, such as credit note IDs, debit note IDs, to null.
-   **[resetLegalEntityReferences()](atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_TaxEngines.htm#apex_blng_TaxEngines_resetLegalEntityReferences)**
    Sets the in-memory list of legal entities to null.
-   **[calculateTax(taxParametersInstance)](atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_TaxEngines.htm#apex_blng_TaxEngines_calculateTax)**
    Returns the calculated tax for the specified taxParametersInstance parameter.

### resetSObjectListofIds()

Sets the in-memory IDs, such as credit note IDs, debit note IDs, to null.

#### Signature

global static Void resetSObjectListofIds()

#### Return Value

Type: Void

### resetLegalEntityReferences()

Sets the in-memory list of legal entities to null.

#### Signature

global static Void resetLegalEntityReferences()

#### Return Value

Type: Void

### calculateTax(taxParametersInstance)

Returns the calculated tax for the specified taxParametersInstance parameter.

#### Signature

global static Map<Id,TaxResults> calculateTax(TaxParameters taxParametersInstance)

#### Parameters

taxParametersInstance

Type: [TaxParameters](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxParameters.htm#apex_class_blng_TaxParameters "Contains a list of setters to populate the data needed for a tax calculation. The data is passed in the tax callout.")

The taxParametersInstance parameter is populated based on the process that uses tax calculation. These examples show the sample values for each process.

Order is created

```

```

Bill Now or Invoice is created

```

```

Invoice is manually posted

```

```

#### Return Value

Type: Map<Id,[TaxResults](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxResults.htm#apex_class_blng_TaxResults "Contains a list of setter methods to populate the data returned from a tax callout. The data is passed back to Salesforce Billing from the tax connector.")\>

## Code Examples

```
TaxParameters:[
 isCommitOnGetTax=false,
 isStandardFromBatch=false,
 legalEntityReference=80105000000i1MqAAI,
 listOfSObjectIds=(),
 listOfSObjects=(),
 mapOfSObjectByUniqueId={},
 mapOfTaxResultsById={},
 mapOfTaxTreatmentById={},
 sObjectId=null,
 sObjectTypeInstance=OrderItem,
 sobjectInstance=null,
 taxMethod=null
]
```

```
TaxParameters:[
 isCommitOnGetTax=false,
 isStandardFromBatch=false,
 legalEntityReference=a2305000000BKIoAAO,
 listOfSObjectIds=(),
 listOfSObjects=(),
 mapOfSObjectByUniqueId={},
 mapOfTaxResultsById={},
 mapOfTaxTreatmentById={},
 sObjectId=null,
 sObjectTypeInstance=blng__InvoiceLine__c,
 sobjectInstance=null,
 taxMethod=null
]
```

```
TaxParameters:[
isCommitOnGetTax=false,
 isStandardFromBatch=false,
 legalEntityReference=null,
 listOfSObjectIds=(a2305000000BKIoAAO),
 listOfSObjects=(),
 mapOfSObjectByUniqueId={},
 mapOfTaxResultsById={},
 mapOfTaxTreatmentById={},
 sObjectId=null,
 sObjectTypeInstance=blng__Invoice__c,
 sobjectInstance=null,
 taxMethod=postTax
]
```

## Related Topics

- TaxEngines Methods (atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_TaxEngines.htm)
- resetSObjectListofIds() (atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_TaxEngines.htm)
- resetLegalEntityReferences() (atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_TaxEngines.htm)
- calculateTax(taxParametersInstance) (atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_TaxEngines.htm)
- TaxParameters (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxParameters.htm)
- TaxResults (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TaxResults.htm)
