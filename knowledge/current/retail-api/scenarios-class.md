---
title: "Scenarios Class"
domain: retail-api
topic: scenarios-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:39:10.673Z
estimatedTokens: 2320
keywords: [Scenarios, APEX, programmatic, TPM, Promotion, Scenario, define, selectable, Level, Manual, Inputs, overrides, simulate, different, combinations, active, inactive, tactics, KPI, TPM_Scenarios, structure, contain, five, _Scenarios, ScenarioParameter, addScenarioParameter, API, List<ScenarioParameter>, getScenarioParameters, Map<String, Object>, toGenericObject, toGenericObjectParameters, toGenericObjectManualInputs, load, toJSONParameters, toJSON, toJSONManualInputs, setScenarioManualInputs, _ManualInputs, getScenarioManualInputs, clear, removeScenarioParameter]
---

> This APEX class provides programmatic access to the TPM Promotion Scenario information
  used in the Promotion. Scenarios define selectable sets of Promotion Level Manual Inputs overrides
  to simulate different combinations of active/inactive tactics and KPI overrides in a TPM
  Promotion. A TPM_Scenarios structure can contain up to five scenarios information.

# Scenarios Class

This APEX class provides programmatic access to the TPM Promotion Scenario information used in the Promotion. Scenarios define selectable sets of Promotion Level Manual Inputs overrides to simulate different combinations of active/inactive tactics and KPI overrides in a TPM Promotion. A TPM\_Scenarios structure can contain up to five scenarios information.

## Namespace

```

```

-   **[TPM\_Scenarios Methods](atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.htm#tpm_global_secnarios_method.)**


## TPM\_Scenarios Methods

The following are methods for TPM\_Scenarios.

-   **[global ScenarioParameter addScenarioParameter](atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.htm#global_tpm_scenarios)**
    Index must be an scenario index between 1 and 5 (included) Adds a parameter to the scenario parameters of the selected scenario. The required attributes are the scenario index, the KPI Name to set (must be a Scenario KPI defined on the Promotion Template), the numeric value of the KPI and if the parameter is already applied (If applied, UI will not re-apply the value when loading the scenario information. If not applied, when loading the scenario, UI will apply the value of the parameter to the total of the KPI) .
-   **[global List<ScenarioParameter> getScenarioParameters](atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.htm#unique_1543439235)**
    Index must be an scenario index between 1 and 5 (included) Returns all the scenario parameters for the selected scenario.
-   **[global Map<String, Object> toGenericObject](atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.htm#unique_1776020113)**
    Serializes the scenarios information into a generic object. Useful for usage on remote calls.
-   **[global Object toGenericObjectParameters](atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.htm#unique_2036236062)**
    Index must be an scenario index between 1 and 5 (included) Serializes the parameters information for the selected scenario into a generic object. Useful for usage on remote calls.
-   **[global Object toGenericObjectManualInputs](atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.htm#unique_2053063041)**
    Index must be an scenario index between 1 and 5 (included) Serializes the manual inputs information for the selected scenario into a generic object. Useful for usage on remote calls.
-   **[global TPM\_Scenarios load](atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.htm#unique_1512468439)**
    Loads the serialized scenarios information into the current instance. The current instance will be cleared and the scenarios represented by the payload will be loaded.
-   **[global String toJSONParameters](atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.htm#unique_849559209)**
    Index must be an scenario index between 1 and 5 (included) Serializes the parameters information for the selected scenario into a String used for storage.
-   **[global String toJSON](atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.htm#unique_1228022724)**
    Serializes the scenarios information into a Sstring used for storage.
-   **[global String toJSONManualInputs](atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.htm#unique_179446510)**
    Index must be an scenario index between 1 and 5 (included) Serializes the manual inputs information for the selected scenario into a String used for storage.
-   **[global TPM\_Scenarios](atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.htm#unique_825964919)**
    Creates an empty scenario sctructure.
-   **[global TPM\_Scenarios load](atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.htm#unique_816637800)**
    Loads the scenarios information from the parameter generic object. The current instance will be cleared and the scenarios represented by the payload will be loaded.
-   **[global TPM\_Scenarios setScenarioManualInputs](atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.htm#unique_1391585740)**
    Index must be an scenario index between 1 and 5 (included) Sets the parameter manual inputs as manual inputs for the selected scenario.
-   **[global TPM\_ManualInputs getScenarioManualInputs](atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.htm#unique_1728300572)**
    Index must be an scenario index between 1 and 5 (included) Returns the manual inputs for the selected scenario.
-   **[global void clear](atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.htm#unique_628317354)**
    Removes all information for the five possible scenarios.
-   **[global void removeScenarioParameter](atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.htm#unique_256081428)**
    Index must be an scenario index between 1 and 5 (included) Removes the passed in scenario parameter from the parameters of the selected scenario. If the ScenarioParameter is not part of the scenario, nothing is removed.

### global ScenarioParameter addScenarioParameter

Index must be an scenario index between 1 and 5 (included) Adds a parameter to the scenario parameters of the selected scenario. The required attributes are the scenario index, the KPI Name to set (must be a Scenario KPI defined on the Promotion Template), the numeric value of the KPI and if the parameter is already applied (If applied, UI will not re-apply the value when loading the scenario information. If not applied, when loading the scenario, UI will apply the value of the parameter to the total of the KPI) .

#### API Version

55

#### Signature

global ScenarioParameter addScenarioParameter(Integer scenarioIdx, String kpiName, Decimal value, Boolean applied)

### global List<ScenarioParameter> getScenarioParameters

Index must be an scenario index between 1 and 5 (included) Returns all the scenario parameters for the selected scenario.

#### API Version

55

#### Signature

global List<ScenarioParameter> getScenarioParameters(Integer scenarioIdx)

### global Map<String, Object> toGenericObject

Serializes the scenarios information into a generic object. Useful for usage on remote calls.

#### API Version

55

#### Signature

global Map<String, Object\> toGenericObject()

### global Object toGenericObjectParameters

Index must be an scenario index between 1 and 5 (included) Serializes the parameters information for the selected scenario into a generic object. Useful for usage on remote calls.

#### API Version

55

#### Signature

global Object toGenericObjectParameters(Integer idx)

### global Object toGenericObjectManualInputs

Index must be an scenario index between 1 and 5 (included) Serializes the manual inputs information for the selected scenario into a generic object. Useful for usage on remote calls.

#### API Version

55

#### Signature

global Object toGenericObjectManualInputs(Integer idx)

### global TPM\_Scenarios load

Loads the serialized scenarios information into the current instance. The current instance will be cleared and the scenarios represented by the payload will be loaded.

#### API Version

55

#### Signature

global TPM\_Scenarios load(String payload)

### global String toJSONParameters

Index must be an scenario index between 1 and 5 (included) Serializes the parameters information for the selected scenario into a String used for storage.

#### API Version

55

#### Signature

global String toJSONParameters(Integer idx)

### global String toJSON

Serializes the scenarios information into a Sstring used for storage.

#### API Version

55

#### Signature

global String toJSON()

### global String toJSONManualInputs

Index must be an scenario index between 1 and 5 (included) Serializes the manual inputs information for the selected scenario into a String used for storage.

#### API Version

55

#### Signature

global String toJSONManualInputs(Integer idx)

### global TPM\_Scenarios

Creates an empty scenario sctructure.

#### API Version

55

#### Signature

global TPM\_Scenarios()

### global TPM\_Scenarios load

Loads the scenarios information from the parameter generic object. The current instance will be cleared and the scenarios represented by the payload will be loaded.

#### API Version

55

#### Signature

global TPM\_Scenarios load(Object data)

### global TPM\_Scenarios setScenarioManualInputs

Index must be an scenario index between 1 and 5 (included) Sets the parameter manual inputs as manual inputs for the selected scenario.

#### API Version

55

#### Signature

global TPM\_Scenarios setScenarioManualInputs(Integer scenarioIdx, TPM\_ManualInputs manualInputs)

### global TPM\_ManualInputs getScenarioManualInputs

Index must be an scenario index between 1 and 5 (included) Returns the manual inputs for the selected scenario.

#### API Version

55

#### Signature

global TPM\_ManualInputs getScenarioManualInputs(Integer scenarioIdx)

### global void clear

Removes all information for the five possible scenarios.

#### API Version

55

#### Signature

global void clear()

### global void removeScenarioParameter

Index must be an scenario index between 1 and 5 (included) Removes the passed in scenario parameter from the parameters of the selected scenario. If the ScenarioParameter is not part of the scenario, nothing is removed.

#### API Version

55

#### Signature

global void removeScenarioParameter(Integer scenarioIdx, ScenarioParameter param)

## Related Topics

- TPM_Scenarios Methods (atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.htm)
- global ScenarioParameter addScenarioParameter (atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.htm)
- global List<ScenarioParameter> getScenarioParameters (atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.htm)
- global Map<String, Object> toGenericObject (atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.htm)
- global Object toGenericObjectParameters (atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.htm)
- global Object toGenericObjectManualInputs (atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.htm)
- global TPM_Scenarios load (atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.htm)
- global String toJSONParameters (atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.htm)
- global String toJSON (atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.htm)
- global String toJSONManualInputs (atlas.en-us.retail_api.meta/retail_api/TPM_Scenarios.htm)
