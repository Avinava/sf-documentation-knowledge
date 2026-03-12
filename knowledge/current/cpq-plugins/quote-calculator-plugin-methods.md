---
title: "Quote Calculator Plugin Methods"
domain: cpq-plugins
topic: quote-calculator-plugin-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.934Z
estimatedTokens: 933
keywords: [Quote, Calculator, Plugin, seven, export, any, none, achieve, desired, behavior, API, Version, Management, onInit, onBeforeCalculate]
---

# Quote Calculator Plugin Methods

> The Quote Calculator Plugin can reference these seven methods. You can export any, all,
  or none of them to achieve your desired behavior.

# Quote Calculator Plugin Methods

The Quote Calculator Plugin can reference these seven methods. You can export any, all, or none of them to achieve your desired behavior.

| Available in: Salesforce CPQ Winter ’16 and later |
| --- |


## API Version Management

In general, Salesforce CPQ uses Salesforce API that's one version behind the newest Salesforce API. For example, Salesforce Summer '21 uses Salesforce API version 52.0, so Salesforce CPQ Summer '21 uses Salesforce API version 51.0.

If you need to reference entities or fields Salesforce API version that's newer than what you're using in Salesforce CPQ, use the JSforce property assignment conn.version='x';, replacing x with the version that you want to use. For example, the following method shows how to overwrite the default API version to version 52.0.

```

```

## onInit

| Param | Type | Description |
| --- | --- | --- |
| {QuoteLineModel[]} | quoteLineModels | An array containing Javascript representations of all lines in a quote. |

The calculator calls this method before formula fields are evaluated. Returns {promise}.

```

```

## onBeforeCalculate

| Param | Type | Description |
| --- | --- | --- |
| {QuoteModel} | quoteModel | Javascript representation of the quote you’re evaluating |
| (QuoteLineModel[]} | quoteLineModels | An array containing Javascript representations of all lines in the quote |

The calculator calls this method before calculation begins, but after formula fields have been evaluated. Returns {promise}.

```

```

## onBeforePriceRules

| Param | Type | Description |
| --- | --- | --- |
| {QuoteModel} | quoteModel | Javascript representation of the quote you’re evaluating |
| (QuoteLineModel[]} | quoteLineModels | An array containing Javascript representations of all lines in the quote |

The calculator calls this method before it evaluates price rules. Returns {promise}.

```

```

## onAfterPriceRules

| Param | Type | Description |
| --- | --- | --- |
| {QuoteModel} | quoteModel | Javascript representation of the quote you’re evaluating |
| (QuoteLineModel[]} | quoteLineModels | An array containing Javascript representations of all lines in the quote |

The calculator calls this method after it evaluates price rules. Returns {promise}.

```

```

## onAfterCalculate

| Param | Type | Description |
| --- | --- | --- |
| {QuoteModel} | quoteModel | Javascript representation of the quote you’re evaluating |
| (QuoteLineModel[]} | quoteLineModels | An array containing Javascript representations of all lines in the quote |

The calculator calls this method after it completes a calculation, but before re-evaluating formula fields. Returns {promise}

```

```

## isFieldVisible

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=cpq_plugins)

#### Note

This method can’t be used to alter data.

| Param | Type | Description |
| --- | --- | --- |
| {FieldName} | String | Name of the field that will be hidden or made visible |
| (QuoteLineModelRecord} | quoteLineModelRecord | Javascript representation of the SObject record of line you’re evaluating |

The calculator calls this method after it completes a calculation. Returns {Boolean}

```

```

## isFieldEditable

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=cpq_plugins)

#### Note

This method can’t be used to alter data.

| Param | Type | Description |
| --- | --- | --- |
| {FieldName} | String | Name of the field that will be made read-only or editable |
| (QuoteLineModelRecord} | quoteLineModelRecord | Javascript representation of the SObject record of line you’re evaluating |

The calculator calls this method after it completes a calculation. Returns {Boolean}

```

```

## Code Examples

```
export function onInit(quote, conn) {
   conn.version = '52.0';
   return conn.query("SELECT Name FROM ConsumptionSchedule")
      .then(function (results) {
         console.log(results);
         return Promise.resolve();
      })
}
```

```
export function onInit(quoteLineModels) {
return Promise.resolve();
};
```

```
export function onBeforeCalculate(quoteModel, quoteLineModels) {
return Promise.resolve();
};
```

```
export function onBeforePriceRules(quoteModel, quoteLineModels) {
return Promise.resolve();
};
```

```
export function onAfterPriceRules(quoteModel, quoteLineModels) {
return Promise.resolve();
};
```
