---
title: "Manual Inputs Class"
domain: retail-api
topic: manual-inputs-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.528Z
estimatedTokens: 1354
keywords: [Manual, Inputs, APEX, programmatic, access, TPM, Promotion, Calculation, Overrides, Scenario, _ManualInputs, ManualCalculationInput, API, Version, removeManualInput]
---

# Manual Inputs Class

> This APEX class provides programmatic access to the TPM Promotion Manual Inputs for
  Calculation Overrides. This class is used also for Scenario Manual Inputs on Promotion.

# Manual Inputs Class

This APEX class provides programmatic access to the TPM Promotion Manual Inputs for Calculation Overrides. This class is used also for Scenario Manual Inputs on Promotion.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

You can override the manual fields only after creating an instance of this class.

## Namespace

cgcloud

-   **[TPM\_ManualInputs Methods](atlas.en-us.retail_api.meta/retail_api/TPM_ManualInputs.htm#tpm_manual_inputs)**


## TPM\_ManualInputs Methods

The following are methods for TPM\_ManualInputs.

-   **[global ManualCalculationInput](atlas.en-us.retail_api.meta/retail_api/TPM_ManualInputs.htm#global_manual_calculation)**
    Adds a new Manual Input entry to the instance.
-   **[global List](atlas.en-us.retail_api.meta/retail_api/TPM_ManualInputs.htm#unique_1656981137)**
    Returns the list of all Manual Inputs in the current instance.
-   **[global void removeManualInput](atlas.en-us.retail_api.meta/retail_api/TPM_ManualInputs.htm#unique_301275579)**
    Removes the passed in manual input from the instance. If the manual input is not contained in the instance, nothing is removed.
-   **[global Object toGenericObject](atlas.en-us.retail_api.meta/retail_api/TPM_ManualInputs.htm#generic_object)**
    Serializes the manual inputs information to a generic Object instance. Useful for using the information in Remote calls.
-   **[global String toJSON](atlas.en-us.retail_api.meta/retail_api/TPM_ManualInputs.htm#global_TPM_json)**
    Serializes the manual inputs information for storage.
-   **[global TPM\_ManualInputs](atlas.en-us.retail_api.meta/retail_api/TPM_ManualInputs.htm#method_promotion.do.work)**
    Creates an empty structure with no manual inputs.
-   **[global TPM\_ManualInputs load](atlas.en-us.retail_api.meta/retail_api/TPM_ManualInputs.htm#global_TPM_ManualInputs)**
    Deserializes the received manual inputs from the input generic object. The current instance will be cleared and the manual inputs represented by the input will be loaded.
-   **[global TPM\_ManualInputs load](atlas.en-us.retail_api.meta/retail_api/TPM_ManualInputs.htm#manual_input)**
    Deserializes the received manual inputs from the input payload. The current instance will be cleared and the manual inputs represented by the payload will be loaded.
-   **[global void clear](atlas.en-us.retail_api.meta/retail_api/TPM_ManualInputs.htm#global_void_clear)**
    Deletes all manual inputs from the instance. Similar state as creating a new instance.
-   **[global List<ManualCalculationInput.ManualInput> getManualInputs](atlas.en-us.retail_api.meta/retail_api/TPM_ManualInputs.htm#globalTPM_GetManualInputs)**
    Returns a list of all manual inputs in the current instance.
-   **[global ManualCalculationInput.ManualInput addManualInput](atlas.en-us.retail_api.meta/retail_api/TPM_ManualInputs.htm#globalTPM_AddManualInputs)**
    Adds a new manual input entry to the instance.

### global ManualCalculationInput

Adds a new Manual Input entry to the instance.

#### API Version

55

#### Signature

global ManualCalculationInput.ManualInput addManualInput(ManualCalculationInput.ManualInput mi)

### global List

Returns the list of all Manual Inputs in the current instance.

#### API Version

55

#### Signature

global List<ManualCalculationInput.ManualInput> getManualInputs()

### global void removeManualInput

Removes the passed in manual input from the instance. If the manual input is not contained in the instance, nothing is removed.

#### API Version

55

#### Signature

global void removeManualInput(ManualCalculationInput.ManualInput mi)

### global Object toGenericObject

Serializes the manual inputs information to a generic Object instance. Useful for using the information in Remote calls.

#### API Version

55

#### Signature

global Object toGenericObject()

### global String toJSON

Serializes the manual inputs information for storage.

#### API Version

55

#### Signature

global String toJSON()

### global TPM\_ManualInputs

Creates an empty structure with no manual inputs.

#### API Version

55

#### Signature

global TPM\_ManualInputs()

### global TPM\_ManualInputs load

Deserializes the received manual inputs from the input generic object. The current instance will be cleared and the manual inputs represented by the input will be loaded.

#### API Version

55

#### Signature

global TPM\_ManualInputs load(Object data)

### global TPM\_ManualInputs load

Deserializes the received manual inputs from the input payload. The current instance will be cleared and the manual inputs represented by the payload will be loaded.

#### API Version

55

#### Signature

global TPM\_ManualInputs load(String payload)

### global void clear

Deletes all manual inputs from the instance. Similar state as creating a new instance.

#### API Version

55

#### Signature

global void clear()

### global List<ManualCalculationInput.ManualInput> getManualInputs

Returns a list of all manual inputs in the current instance.

#### API Version

55.0

#### Signature

global List<ManualCalculationInput.ManualInput> getManualInputs()

### global ManualCalculationInput.ManualInput addManualInput

Adds a new manual input entry to the instance.

#### API Version

55.0

#### Signature

global ManualCalculationInput.ManualInput addManualInput(ManualCalculationInput.ManualInput mi)

## Related Topics

- TPM_ManualInputs Methods (atlas.en-us.retail_api.meta/retail_api/TPM_ManualInputs.htm)
- global ManualCalculationInput (atlas.en-us.retail_api.meta/retail_api/TPM_ManualInputs.htm)
- global List (atlas.en-us.retail_api.meta/retail_api/TPM_ManualInputs.htm)
- global void removeManualInput (atlas.en-us.retail_api.meta/retail_api/TPM_ManualInputs.htm)
- global Object toGenericObject (atlas.en-us.retail_api.meta/retail_api/TPM_ManualInputs.htm)
- global String toJSON (atlas.en-us.retail_api.meta/retail_api/TPM_ManualInputs.htm)
- global TPM_ManualInputs (atlas.en-us.retail_api.meta/retail_api/TPM_ManualInputs.htm)
- global TPM_ManualInputs load (atlas.en-us.retail_api.meta/retail_api/TPM_ManualInputs.htm)
- global void clear (atlas.en-us.retail_api.meta/retail_api/TPM_ManualInputs.htm)
- global List<ManualCalculationInput.ManualInput> getManualInputs (atlas.en-us.retail_api.meta/retail_api/TPM_ManualInputs.htm)
