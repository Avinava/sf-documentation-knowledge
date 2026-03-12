---
title: "IntegrationStatus Class"
domain: apex-reference
topic: integrationstatus-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:23.629Z
estimatedTokens: 346
keywords: [IntegrationStatus, Supports, synchronous, execution, Apex, integrations, B2B, Commerce, implementation, status, Usage]
---

# IntegrationStatus Class

> Supports synchronous execution of Apex integrations for B2B Commerce.
      The implementation must return the status of the execution.

# IntegrationStatus Class

Supports synchronous execution of Apex integrations for B2B Commerce. The implementation must return the status of the execution.

## Namespace

[sfdc\_checkout](atlas.en-us.apexref.meta/apexref/apex_namespace_sfdc_checkout.htm "The Sfdc_Checkout namespace provides an interface and classes for B2B Commerce apps in Salesforce.")

## Usage

You must specify the sfdc\_checkout namespace when creating an instance of this class.

-   **[IntegrationStatus Properties](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_checkout_IntegrationStatus.htm#apex_sfdc_checkout_IntegrationStatus_properties)**


## IntegrationStatus Properties

The following are properties for IntegrationStatus.

-   **[status](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_checkout_IntegrationStatus.htm#apex_sfdc_checkout_IntegrationStatus_status)**
    Indicates the status of the integration process and whether or not it completed successfully.

### status

Indicates the status of the integration process and whether or not it completed successfully.

#### Signature

public sfdc\_checkout.IntegrationStatus.Status status {get; set;}

#### Property Value

Type: [sfdc\_checkout.IntegrationStatus.Status](atlas.en-us.apexref.meta/apexref/apex_enum_sfdc_checkout_IntegrationStatus.Status.htm "The IntegrationStatus.Status enum describes the status of the current integration.")

## Related Topics

- sfdc_checkout (atlas.en-us.apexref.meta/apexref/apex_namespace_sfdc_checkout.htm)
- IntegrationStatus Properties (atlas.en-us.apexref.meta/apexref/apex_class_sfdc_checkout_IntegrationStatus.htm)
- status (atlas.en-us.apexref.meta/apexref/apex_class_sfdc_checkout_IntegrationStatus.htm)
- sfdc_checkout.IntegrationStatus.Status (atlas.en-us.apexref.meta/apexref/apex_enum_sfdc_checkout_IntegrationStatus.Status.htm)
