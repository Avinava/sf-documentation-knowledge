---
title: "Scenarios.ScenarioParameter Class"
domain: retail-api
topic: scenariosscenarioparameter-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.582Z
estimatedTokens: 809
keywords: [Scenarios.ScenarioParameter, APEX, programmatic, access, scenario, contained, TPM_Scenarios, instance, TPM, _Scenarios, isApplied, API, Version, Decimal, getValue]
---

# Scenarios.ScenarioParameter Class

> This APEX class provides programmatic access to a single scenario parameter information
  contained in a TPM_Scenarios instance.

# Scenarios.ScenarioParameter Class

This APEX class provides programmatic access to a single scenario parameter information contained in a TPM\_Scenarios instance.

## Namespace

```

```

-   **[TPM\_Scenarios Methods](atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.ScenarioParameter.htm#tpm_global_secnarios_parameter_method)**


## TPM\_Scenarios Methods

The following are methods for TPM\_Scenarios.ScenarioParameter.

-   **[global Boolean isApplied](atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.ScenarioParameter.htm#global_scenario_parameter)**
    Returns the scenario parameter applied flag. If applied, UI will not re-apply the value when loading the scenario information. If not applied, when loading the scenario, UI will apply the value of the parameter to the total of the KPI) .
-   **[global Decimal getValue](atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.ScenarioParameter.htm#unique_340836871)**
    Returns the KPI Value of the Scenario Parameter.
-   **[global ScenarioParameter setKPIName](atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.ScenarioParameter.htm#unique_472008222)**
    Sets the scenario parameter KPI Name.
-   **[global ScenarioParameter setApplied](atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.ScenarioParameter.htm#unique_518099745)**
    Sets the scenario parameter applied flag. If applied, UI will not re-apply the value when loading the scenario information. If not applied, when loading the scenario, UI will apply the value of the parameter to the total of the KPI) .
-   **[global ScenarioParameter setValue](atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.ScenarioParameter.htm#unique_1844488747)**
    Sets the scenario parameter KPI value.
-   **[global String getKPIName](atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.ScenarioParameter.htm#unique_6897232)**
    Returns the KPI Name of the Scenario Parameter.

### global Boolean isApplied

Returns the scenario parameter applied flag. If applied, UI will not re-apply the value when loading the scenario information. If not applied, when loading the scenario, UI will apply the value of the parameter to the total of the KPI) .

#### API Version

55

#### Signature

global Boolean isApplied()

### global Decimal getValue

Returns the KPI Value of the Scenario Parameter.

#### API Version

55

#### Signature

global Decimal getValue()

### global ScenarioParameter setKPIName

Sets the scenario parameter KPI Name.

#### API Version

55

#### Signature

global ScenarioParameter setKPIName(String kpi)

### global ScenarioParameter setApplied

Sets the scenario parameter applied flag. If applied, UI will not re-apply the value when loading the scenario information. If not applied, when loading the scenario, UI will apply the value of the parameter to the total of the KPI) .

#### API Version

55

#### Signature

global ScenarioParameter setApplied(Boolean applied)

### global ScenarioParameter setValue

Sets the scenario parameter KPI value.

#### API Version

55

#### Signature

global ScenarioParameter setValue(Decimal value)

### global String getKPIName

Returns the KPI Name of the Scenario Parameter.

#### API Version

55

#### Signature

global String getKPIName()

## Related Topics

- TPM_Scenarios Methods (atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.ScenarioParameter.htm)
- global Boolean isApplied (atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.ScenarioParameter.htm)
- global Decimal getValue (atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.ScenarioParameter.htm)
- global ScenarioParameter setKPIName (atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.ScenarioParameter.htm)
- global ScenarioParameter setApplied (atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.ScenarioParameter.htm)
- global ScenarioParameter setValue (atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.ScenarioParameter.htm)
- global String getKPIName (atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.ScenarioParameter.htm)
