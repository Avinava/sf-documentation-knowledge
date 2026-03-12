---
title: "Business Objects API"
domain: retail-api
topic: business-objects-api
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:36.687Z
estimatedTokens: 834
keywords: [Business, Objects, API, feature, designed, facilitate, integrations, external, systems, processes, TPM, SObjects, Installing, Base, Configurations]
---

# Business Objects API

> Business Object API is a feature designed to facilitate integrations of external
        systems and processes with TPM related SObjects.

# Business Objects API

Business Object API is a feature designed to facilitate integrations of external systems and processes with TPM related SObjects.

SObjects are complex in nature as they require specific attributes and processes to be executed when manipulating them to ensure data is consistent and correctly calculated. Business Object API acts as a middle layer transforming simplified payloads into the required SObject records.

Business Object API features are:

-   Same behavior when used from within Salesforce LWC components and API
-   Supports up to 10000 records per transaction
-   Input payload validation through Schema validation
-   Extensive configurability and extension capabilities through point & click customization and APEX class plugins
-   Transactional integrity
-   Out of the box operations logging and traceability

## Installing Base Business Object API Configurations

In order to install base Business Object API configurations in an org for a Sales Organization, execute the following APEX snippet:

```

```

You can track the install progress through the related Batch Run Status record.

## Process Overview

When a Business Object API request is received, the following steps are executed in order to process the request for each input:

1.  Spawn a Queueable job for each input record.
2.  Input validation: Based on the workflow configuration records, the received input is validated against the expected schema. If the validation fails, an error is emitted and the process stops
3.  Transformation phase: At this point, all the Workflow Steps defined for the Workflow start executing in the defined order:
    1.  For each Workflow Step:
        1.  Find entities to be sent as input to the workflow step
        2.  Execute the Workflow Step for each found input: The workflow step APEX class will be executed for each input
    2.  After all Workflow Steps are executed, the output object is completed
4.  Business Logic Save: The generated output object is passed to the relevant Business Logic save function. This will generate all the required SObject DML operations
5.  Database Commit: After all the Steps are executed, data is committed to the Database

If the system detects any DML Row Lock exception during steps 3, 4 or 5, the operation will be retried.

All Business Object API requests are logged into the Business Object API Transaction Log SObject for traceability.

-   **[Process Configuration Settings](atlas.en-us.retail_api.meta/retail_api/cg_retail_process_overview.htm)**
    When executing BO API process, the system reads the following configuration values from System Setting Custom setting in order to define it’s behavior.
-   **[Configuration Entities](atlas.en-us.retail_api.meta/retail_api/cg_retail_configuration_entities.htm)**
    Business Object API records contains Workflows and Output Entities.
-   **[Implementing Workflow Steps](atlas.en-us.retail_api.meta/retail_api/cg_retail_implementing_workflow_steps.htm)**
    Workflow Steps are implemented as APEX classes that are used in implementing the System.Callable interface.
-   **[Promotion Business Object API](atlas.en-us.retail_api.meta/retail_api/cg_tpm_promotion_business_object_api_wrapper.htm)**
    This section describes the base configuration provided for the Promotion Business Object.

## Code Examples

```
cgcloud.TPMSetupData.setupBOApi('<sales org>');
```

## Related Topics

- Process Configuration Settings (atlas.en-us.retail_api.meta/retail_api/cg_retail_process_overview.htm)
- Configuration Entities (atlas.en-us.retail_api.meta/retail_api/cg_retail_configuration_entities.htm)
- Implementing Workflow Steps (atlas.en-us.retail_api.meta/retail_api/cg_retail_implementing_workflow_steps.htm)
- Promotion Business Object API (atlas.en-us.retail_api.meta/retail_api/cg_tpm_promotion_business_object_api_wrapper.htm)
