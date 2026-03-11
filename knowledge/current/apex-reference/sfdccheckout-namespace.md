---
title: "Sfdc_Checkout Namespace"
domain: apex-reference
topic: sfdccheckout-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.202Z
keywords: [Sfdc_Checkout, Namespace, Sfdc, _Checkout]
---

# Sfdc_Checkout Namespace

# Sfdc\_Checkout Namespace

The Sfdc\_Checkout namespace provides an interface and classes for B2B Commerce apps in Salesforce.

The following are the classes in the Sfdc\_Checkout namespace.

-   **[AsyncCartProcessor Interface](atlas.en-us.apexref.meta/apexref/apex_interface_sfdc_checkout_AsyncCartProcessor.htm#apex_interface_sfdc_checkout_AsyncCartProcessor)**  
    Use this interface to implement asynchronous integrations in B2B Commerce.
-   **[B2BCheckoutController Class](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_checkout_B2BCheckoutController.htm#apex_class_sfdc_checkout_B2BCheckoutController)**  
    Communicate with simple checkout Apex methods to work with data related to B2B Commerce checkout.
-   **[IntegrationInfo Class](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_checkout_IntegrationInfo.htm#apex_class_sfdc_checkout_IntegrationInfo)**  
    Provides the values that B2B Commerce Checkout uses to map requests to responses, necessary metadata, and context.
-   **[IntegrationStatus Class](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_checkout_IntegrationStatus.htm#apex_class_sfdc_checkout_IntegrationStatus)**  
    Supports synchronous execution of Apex integrations for B2B Commerce. The implementation must return the status of the execution.
-   **[IntegrationStatus.Status Enum](atlas.en-us.apexref.meta/apexref/apex_enum_sfdc_checkout_IntegrationStatus.Status.htm)**  
    The IntegrationStatus.Status enum describes the status of the current integration.