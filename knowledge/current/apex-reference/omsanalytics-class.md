---
title: "OMSAnalytics Class"
domain: apex-reference
topic: omsanalytics-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:18.542Z
estimatedTokens: 509
namespace: ConnectApi
keywords: [OMSAnalytics, OMSAnalytics., static., Get, products, rates, get, text, classified, different, classifications, analysis, capture, reasons, external, sources, based, product, ids.]
---

# OMSAnalytics Class

> These methods are for OMSAnalytics. All methods are static.

**Namespace:** `ConnectApi`

# OMSAnalytics Class

These methods are for OMSAnalytics. All methods are static.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

-   **[getTextClassificationsBulkResults(ids)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OMSAnalytics_getTextClassificationsBulkResults.htm)**
    Gets text classification results for request IDs.
-   **[productsExpand(scope, products, expand)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OMSAnalytics_productExpand.htm)**
    Fetches expanded details of a product that aren’t found in the sObject. The expanded variable fields, such as return reasons, are added as output. This method supports an extensibility framework that lets the context user override the existing implementation so they can fetch the data from third-party apps. The application doesn’t require two separate APIs to get return reasons.
-   **[productsReturnRate(pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OMSAnalytics_productReturnRate.htm)**
    Gets pages of data showing the return rates of products that are calculated by the Customer Data Platform. Return data is paginated in descending order.
-   **[productsReturnRate(pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OMSAnalytics_productsReturnRate_1.htm)**
    Get a page of products and their return rates.
-   **[productsReturnRate(pageParam, pageSize, products)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OMSAnalytics_productsReturnRate_2.htm)**
    Get a page of products and their return rates for a list of product IDs.
-   **[submitTextClassificationsRequest(textClassificationsRequestInput, llmType)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OMSAnalytics_submitTextClassificationsRequest.htm)**
    Submits a text classification request to Einstein

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- getTextClassificationsBulkResults(ids) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OMSAnalytics_getTextClassificationsBulkResults.htm)
- productsExpand(scope, products, expand) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OMSAnalytics_productExpand.htm)
- productsReturnRate(pageParam, pageSize) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OMSAnalytics_productReturnRate.htm)
- productsReturnRate(pageParam, pageSize) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OMSAnalytics_productsReturnRate_1.htm)
- productsReturnRate(pageParam, pageSize, products) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OMSAnalytics_productsReturnRate_2.htm)
- submitTextClassificationsRequest(textClassificationsRequestInput, llmType) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OMSAnalytics_submitTextClassificationsRequest.htm)
- OMSAnalytics Class (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OMSAnalytics_methods.htm)
