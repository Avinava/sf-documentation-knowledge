---
title: "Account Plan LWC Reference"
domain: retail-api
topic: account-plan-lwc-reference
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:41.030Z
estimatedTokens: 2187
keywords: [Account, Plan, LWC, tpm-account-plan, service, component, loads, TPM, exposing, state, events, keep, components, sync, changes]
---

# Account Plan LWC Reference

> The tpm-account-plan LWC is a service component
        that loads a TPM account plan, exposing methods to update the account plan state, and events
        to keep all UI components of the account plan page in sync when the account plan state
        changes.

# Account Plan LWC Reference

The tpm-account-plan LWC is a service component that loads a TPM account plan, exposing methods to update the account plan state, and events to keep all UI components of the account plan page in sync when the account plan state changes.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=retail_api)

#### Important

The content in this Consumer Goods Cloud Trade Promotion Management documentation is confidential and may be viewed only by customers or partners as authorized by Salesforce, and copying and further distribution is prohibited without prior written consent from Salesforce. The content is the highly confidential and proprietary information of Salesforce and is protected under the confidentiality obligations of your Agreement with Salesforce. Accordingly, the content may be used only as necessary in order to implement the Consumer Goods Cloud Trade Promotion Management functionality.

## Properties

account-plan-id: Id. Required. The ID of the account plan record to load.

## Namespace

```

```

## Events

Here’s the event payload structure.

```

```

## onstatuschange

This event is triggered when the lifecycle state of the TPM account plan component changes. Status changes are triggered by lifecycle operations on the account plan record.

```

```

The possible values are:

-   LOADING: The account plan is being loaded.
-   VALID: The account plan is loaded and can be interacted with.
-   SAVING: The account plan is being saved to the database.
-   ERROR: An irrecoverable error has occurred.

## oncalculationstatuschange

This event is triggered when the account plan grids are calculated or recalculated.

```

```

The possible values are:

-   LOADING: The calculations are being processed, or the engine is loading.
-   VALID: The calculations are completed, and values can be requested.
-   ERROR: An irrecoverable error has occurred.
-   DISABLED: The calculations engine is disabled for the account plan.

## oncategoryfilterchange

This event is triggered when the account plan’s selected product category filter changes. The event contains the selected category product ID.

```

```

## onkpisubsetsfilterchange

This event is triggered when the account plan subset filter changes. The event contains the selected category product ID.

```

```

## Example Implementation

Here’s an example of how to use the tpm-account-plan component.

```

```

```

```

```

```

-   **[TPM Account Plan Component Methods](atlas.en-us.retail_api.meta/retail_api/tpm_account_plan_component_referance.htm#tpm-accountPlanComponentReference)**


## TPM Account Plan Component Methods

Here are the methods supported by the tpm-account-plan LWC.

-   **[exportKPIs](atlas.en-us.retail_api.meta/retail_api/tpm_account_plan_component_referance.htm#tpm_account_plan_exportKPIs)**
    This method returns a promise resolving to the values of the KPIs for the selected KPI subsets or names, levels, and period types.
-   **[getProperty](atlas.en-us.retail_api.meta/retail_api/tpm_account_plan_component_referance.htm#tpm_account_plan_getProperty)**
    Imperatively retrieve the account plan state properties.
-   **[getLevelNames](atlas.en-us.retail_api.meta/retail_api/tpm_account_plan_component_referance.htm#tpm_account_plan_getLevelNames)**
    This method returns a promise resolving to the list of levels that are currently loaded in the calculation engine. If the calculation status isn’t valid, the method returns an error.
-   **[getKPISubsets](atlas.en-us.retail_api.meta/retail_api/tpm_account_plan_component_referance.htm#tpm_account_plan_getKPISubsets)**
    This method returns a promise resolving to the list of KPI subsets that are currently loaded in the calculation engine. If the calculation status isn’t valid, the method returns an error.
-   **[getKPIs](atlas.en-us.retail_api.meta/retail_api/tpm_account_plan_component_referance.htm#tpm_account_plan_getKPIs)**
    This method returns a promise resolving to the list of KPIs that are currently loaded in the calculation engine. If the calculation status isn’t valid, the method returns an error.
-   **[getPeriods](atlas.en-us.retail_api.meta/retail_api/tpm_account_plan_component_referance.htm#tpm_account_plan_getPeriods)**
    This method returns a promise resolving to the list of periods that are currently loaded in the calculation engine. If the calculation status isn’t valid, the method returns an error.
-   **[getPeriodTypes](atlas.en-us.retail_api.meta/retail_api/tpm_account_plan_component_referance.htm#tpm_account_plan_getPeriodTypes)**
    This method returns a promise resolving to the list of period types that are currently loaded in the calculation engine. If the calculation status isn’t valid, the method returns an error.
-   **[setManualInputs](atlas.en-us.retail_api.meta/retail_api/tpm_account_plan_component_referance.htm#tpm_account_plan_seManualInputs)**
    This method sets an array of manual inputs in the account plan service component.

### exportKPIs

This method returns a promise resolving to the values of the KPIs for the selected KPI subsets or names, levels, and period types.

#### API Version

58.0

#### Signature

exportKPIs(options)

#### Properties

| Name | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| options.subsets | List<String> | List of loaded KPI subsets to retrieve data from.You can get a list of loaded subsets using the getKPISubsets() method.Provide either the KPI subsets or the KPI names. | Optional |
| options.kpis | List<String> | List of KPI names to retrieve data from.You can get a list of loaded KPI names using the getKPIs() method.Provide either the KPI subsets or the KPI names. | Optional |
| options.levels | List<String> | List of loaded levels to retrieve data from. You can get a list of loaded levels using the getLevelNames() method. | Optional |
| options.periods | List<String> | List of loaded period types to retrieve data.You can get a list of loaded period types using the getPeriodTypes() method. | Optional |
| options.format | List<String> | Format in which the response is returned.Possible formats are:JSON: The response is an array of JavaScript objects.Serialized: The response is a JSON string of JavaScript objects.CSV: The response is a CSV string.The default format is JSON. | Optional |

The returned data is a list of rows (JavaScript objects or CSV rows). Each row represents the value of the KPI for the determined level. Each row contains values for all the periods specified in the request.

#### Example Implementation

```

```

### getProperty

Imperatively retrieve the account plan state properties.

#### API Version

59.0

#### Signature

getProperty(propName)

The available properties to retrieve are:

-   status
-   calculationStatus
-   manualInputs
-   kpiSubsetFilter
-   categoryFilter

### getLevelNames

This method returns a promise resolving to the list of levels that are currently loaded in the calculation engine. If the calculation status isn’t valid, the method returns an error.

#### API Version

59.0

#### Signature

getLevelNames()

#### Example Implementation

```

```

### getKPISubsets

This method returns a promise resolving to the list of KPI subsets that are currently loaded in the calculation engine. If the calculation status isn’t valid, the method returns an error.

#### API Version

59.0

#### Signature

getKPISubsets()

#### Example Implementation

```

```

### getKPIs

This method returns a promise resolving to the list of KPIs that are currently loaded in the calculation engine. If the calculation status isn’t valid, the method returns an error.

#### API Version

59.0

#### Signature

getKPIs()

#### Example Implementation

```

```

### getPeriods

This method returns a promise resolving to the list of periods that are currently loaded in the calculation engine. If the calculation status isn’t valid, the method returns an error.

#### API Version

59.0

#### Signature

getPeriods()

#### Example Implementation

```

```

### getPeriodTypes

This method returns a promise resolving to the list of period types that are currently loaded in the calculation engine. If the calculation status isn’t valid, the method returns an error.

#### API Version

59.0

#### Signature

getPeriodTypes()

#### Example Implementation

```

```

### setManualInputs

This method sets an array of manual inputs in the account plan service component.

#### API Version

Manual grid edits are an array of TPMManualInput instances. You can add new entries or remove entries from the existing array of elements.

60.0

#### Signature

setManualInputs(manualInputs)

#### Example Implementation

```

```

## Code Examples

```
{
    detail : {
        value: <<new value of the property>>,
        property: <<property name>>,
        recordId: <<promotionId>>
    }
}
```

```
{
    detail : {
        value: 'VALID',
        property: 'status',
        recordId: 'a2WTC0000000F772AE'
    }
}
```

```
{
    detail : {
        value: 'LOADING',
        property: 'calculationStatus',
        recordId: 'a2WTC0000000F772AE'
    }
}
```

```
{
    detail : {
        value: '01pXXXXXXXXXXXXXXX000',
        property: 'categoryFilter',
        recordId: 'a2WTC0000000F772AE'
    }
}
```

```
{
    detail : {
        value: 'BaselineManagement',
        property: 'kpiSubsetFilter',
        recordId: 'a2WTC0000000F772AE'
    }
}
```

## Related Topics

- TPM Account Plan Component Methods (atlas.en-us.retail_api.meta/retail_api/tpm_account_plan_component_referance.htm)
- exportKPIs (atlas.en-us.retail_api.meta/retail_api/tpm_account_plan_component_referance.htm)
- getProperty (atlas.en-us.retail_api.meta/retail_api/tpm_account_plan_component_referance.htm)
- getLevelNames (atlas.en-us.retail_api.meta/retail_api/tpm_account_plan_component_referance.htm)
- getKPISubsets (atlas.en-us.retail_api.meta/retail_api/tpm_account_plan_component_referance.htm)
- getKPIs (atlas.en-us.retail_api.meta/retail_api/tpm_account_plan_component_referance.htm)
- getPeriods (atlas.en-us.retail_api.meta/retail_api/tpm_account_plan_component_referance.htm)
- getPeriodTypes (atlas.en-us.retail_api.meta/retail_api/tpm_account_plan_component_referance.htm)
- setManualInputs (atlas.en-us.retail_api.meta/retail_api/tpm_account_plan_component_referance.htm)
