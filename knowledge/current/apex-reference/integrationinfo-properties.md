---
title: "IntegrationInfo Properties"
domain: apex-reference
topic: integrationinfo-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.045Z
keywords: [IntegrationInfo, Properties, unique, B2B, Commerce, integration., integrationId, Signature, Property, Value, jobId, siteLanguage]
---

# IntegrationInfo Properties

> The unique ID of a B2B Commerce integration.

## IntegrationInfo Properties

The following are properties for IntegrationInfo.

-   **[integrationId](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_checkout_IntegrationInfo.htm#apex_sfdc_checkout_IntegrationInfo_integrationId)**  
    The unique ID of a B2B Commerce integration.
-   **[jobId](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_checkout_IntegrationInfo.htm#apex_sfdc_checkout_IntegrationInfo_jobId)**  
    The ID of the job, specific to the Salesforce Background Operation framework.
-   **[siteLanguage](atlas.en-us.apexref.meta/apexref/apex_class_sfdc_checkout_IntegrationInfo.htm#apex_sfdc_checkout_IntegrationInfo_siteLanguage)**  
    Site language to be used by third party services.

### integrationId

The unique ID of a B2B Commerce integration.

#### Signature

public String integrationId {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### jobId

The ID of the job, specific to the Salesforce Background Operation framework.

#### Signature

public String jobId {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### siteLanguage

Site language to be used by third party services.

#### Signature

public String siteLanguage {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")