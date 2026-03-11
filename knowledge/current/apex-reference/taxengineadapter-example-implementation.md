---
title: "TaxEngineAdapter Example Implementation"
domain: apex-reference
topic: taxengineadapter-example-implementation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.770Z
keywords: [TaxEngineAdapter, Example, Implementation, Refer, example, implementation, interface, accept, information, tax, engine, evaluate, define, details., Namespace, Usage]
---

# TaxEngineAdapter Example Implementation

> Refer to the example implementation of the TaxEngineAdapter interface to accept information from a tax engine and
        evaluate the information to define tax details.

## TaxEngineAdapter Example Implementation

Refer to the example implementation of the TaxEngineAdapter interface to accept information from a tax engine and evaluate the information to define tax details.

### Namespace

[commercetax](atlas.en-us.apexref.meta/apexref/apex_namespace_commercetax.htm "Manage the communication between Salesforce and an external tax engine.")

### Usage

The TaxEngineAdapter interface accepts information from the tax engine through the TaxEngineContext class. The interface evaluates the information to define tax in the response with details, such as tax amount and addresses. The response is used to update and create entities in the Salesforce org.

Use these steps to build a sample tax adapter implementation. Each tax adapter implementation varies based on your implementation requirements. Customize this example to suit your business requirements.

### Example

-   The custom adapter class implements the TaxEngineAdapter interface. The processRequest method takes an instance of TaxEngineContext class and returns a response with the calculated tax details through the TaxDetailsResponse class or an error response through the ErrorResponse class.
    
    ```
    
    ```
    
-   This example shows the CalculateTaxService class.
    
    ```
    
    ```
    
-   In the HttpService class, replace the test value in the endpoint variable with the name of the TaxTypedNamedCredential record. This class contains the credentials that are required to access your Avalara account through Salesforce.
    
    ```
    
    ```
    
-   Parse the JsonSuccessParser response object by using the AvalaraJSONBuilder class to build the response for your adapter.
    
    This example shows the JsonSuccessParser class.
    
    ```
    
    ```
    
    Prepare your JSON request to call the Avalara endpoint by using the AvalaraJSONBuilder class.
    
    ```
    
    ```
    
-   Use the JsonErrorParser class to extract the error details, if any.
    
    ```
    
    ```