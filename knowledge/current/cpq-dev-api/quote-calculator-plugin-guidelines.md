---
title: "Quote Calculator Plugin Guidelines"
domain: cpq-dev-api
topic: quote-calculator-plugin-guidelines
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:23.745Z
estimatedTokens: 940
keywords: [Quote, Calculator, Plugin, Guidelines, Consider, key, planning, scripts, Javascript, Promises, QuoteModel, QuoteLineModel, Salesforce, JSForce, Availability]
---

# Quote Calculator Plugin Guidelines

> Consider these key guidelines when planning scripts for the Javascript Quote
    Calculator Plugin.

# Quote Calculator Plugin Guidelines

Consider these key guidelines when planning scripts for the Javascript Quote Calculator Plugin.

| Available in: Salesforce CPQ Winter ’16 and later |
| --- |


## Promises

A Promise is a built-in JavaScript object that allows for asynchronous programming in the browser. Promises let you delay a certain action until another one has completed. Promises support a .then(success, failure) method, where success is a function called when the promise resolves successfully, and failure is a function called when the promise is rejected. If you want to do any asynchronous programming in the plugin, such as a server callout, you must return a promise that resolves once that action is completed. This guarantees that calculation steps occur in the proper order. If a method doesn’t require asynchronous behavior, you can return a promise that resolves immediately as return Promise.resolve();. Promises can resolve to a value, which passes as a parameter to the .then() callbacks. You can use this fact in your own code, but remember that the promises that these methods return don’t need to resolve to a value. Always directly modify the quote and line models provided in the parameters.

## QuoteModel and QuoteLineModel Types

The JavaScript calculator represents Quote\_\_c and QuoteLine\_\_c objects as QuoteModel and QuoteLineModel objects respectively. You can access the underlying SObject through the .record property on both objects, which lets you reference fields by using their API name. For example, you can reference a custom field SBQQ\_\_MyCustomField\_\_c on a given QuoteLineModel by accessing the attribute record \[”SBQQ\_\_MyCustomField\_\_c”\]. You can also reference fields on related records. For example, if you want to reference the field MyField\_\_c on an account associated with a quote, access the record \["Account\_\_r"\]\["MyField\_\_c"\].

External fields aren’t loaded by default. To use an external field, such as one from an opportunity or account, create a custom quote formula field that pulls in the value of the desired field. Then include the custom quote field in your custom script. You can also reference this external field in a price action formula to preload and then include it in your custom script.

## Salesforce Field Types

You can change records stored in JavaScript Object Notation, or JSON. These records are serialized from your org. Number, Text, and Boolean fields are all stored without any conversion, but you can convert any other type. For example, dates are represented as strings of the format "YYYY-MM-DD." If you reference or change a field containing a date, you have to preserve that format.

## JSForce

JSForce is a third-party library that provides a unified way to perform queries, execute Apex REST calls, use the Metadata API, or make HTTP requests remotely. Methods access jsforce through the optional parameter conn.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=cpq_dev_api)

#### Note

-   The JSQCP is an ES6 module. It is transpiled via Babel and module-scoped by default. You can use any elements of the ES6 language or syntax. However, the plugin must be able to run in both browser and node environments. Global browser variables such as window may not be available.
-   With plugins, callouts (requests) to non-Salesforce endpoints aren’t supported for asynchronous calculations. For example, requestGet fails in asynchronous calculations.

## Field Availability

Javascript Quote Calculator plugins don't support custom fields on consumption rates and consumption schedules.

## Character Limits

You can't increase the maximum character limit of a custom script in Javascript Quote Calculator Plugin.
