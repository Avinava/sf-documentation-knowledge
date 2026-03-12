---
title: "tpm-promotion Component"
domain: retail-api
topic: tpm-promotion-component
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:41.098Z
estimatedTokens: 7503
keywords: [tpm-promotion, Component, LWC, service, loads, TPM, promotion, exposing, state, events, keep, components, sync, changes, provided]
---

# tpm-promotion Component

> The tpm-promotion LWC is a service component that
        loads a TPM promotion, exposing methods to update the promotion state, and events to keep
        all UI components of the promotion page in sync when the promotion state changes. This
        component is provided as part of the released managed package.

# tpm-promotion Component

The tpm-promotion LWC is a service component that loads a TPM promotion, exposing methods to update the promotion state, and events to keep all UI components of the promotion page in sync when the promotion state changes. This component is provided as part of the released managed package.

## Namespace

```

```

## Events

Here’s the event payload structure.

```

```

## onfocusedareachange

This event is triggered when a different area of the application is navigated to.

```

```

The possible values of area are:

-   PROMOTION\_PLANNING: This area identifies the Promotion Planning UI.
-   PL\_GRID: This area identifies the Promotion PL.

The possible values of section are:

-   PROMOTION: Promotion level components section.
-   TACTIC: Tactic level components section.

## onisplgridfilteropenchange

This event is triggered when the P&L filters are opened (true) or closed (false).

```

```

## onstatuschange

This event is triggered when the lifecycle state of the TPM promotion component changes. Status changes are triggered by lifecycle operations on the promotion record.

```

```

The possible values are:

-   LOADING: The promotion is being loaded.
-   VALID: The promotion is loaded and can be interacted with.
-   SAVING: The promotion is being saved to the database.
-   ERROR: An irrecoverable error has occurred.

## oncalculationstatuschange

This event is triggered when the promotion grids are calculated or recalculated.

```

```

The possible values are:

-   LOADING: The calculations are being processed, or the engine is loading.
-   VALID: The calculations are completed and values can be requested
-   ERROR: An irrecoverable error has occurred.
-   DISABLED: Calculations Engine is disabled for the promotion.

## oneditmodechange

This event is triggered when the edit mode changes for the page.

```

```

## onselectedtacticidchange

This event is triggered when the focused tactic changes.

```

```

The possible values of are:

-   null: No focused tactic found.
-   A tactic ID: The ID of the focused tactic.

## onpromotionchange

This event is triggered when the promotion attributes change.

The event value contains all the Promotion SObject attributes.

```

```

## oneffectivecategorieschange

This event is triggered when the effective categories of the promotion change.

The event value contains an array of product IDs from the effective categories.

```

```

## oneffectivebrandschange

This event is triggered when the effective brands of the promotion change.

The event value contains an array of product IDs from the effective brands.

```

```

## ontacticschange

This event is triggered when the tactic attributes change.

The event value contains all the Tactic sObjects and their attributes.

```

```

## ontacticfundschange

This event is triggered when the Tactic fund properties change.

The event value contains all the Tactic Fund sObjects and their attributes.

```

```

## onpromotionattachmentlinkschange

This event is triggered when the properties of the Promotion Attachment link change.

Promotion attachment links are junction objects between a Promotion record and a Promotion Attachment Record.

The event value contains all the Promotion Attachment Link sObjects and their attributes.

```

```

## onpromotionattachmentschange

This event is triggered when the properties of the Promotion Attachment sObject change.

Promotion Attachment records must be created before they can be linked to a promotion during the save process.

The event value contains all the Promotion Attachment Link sObjects and their attributes.

```

```

## onpromotioncategorieschange

This event is triggered when the promotion categories change.

The event value is an array of Product2 IDs referencing Category records.

```

```

## onsubaccountschange

This event is triggered when the promotion sub-accounts change.

```

```

## onparticipatingcustomerschange

This event is triggered when the participating customers of a promotion change. The participating customers list is used to determine the customers the promotion is pushed to during the push process.

```

```

## ontacticconditioncreationdefinitionschange

This event is triggered when the Tactic Condition Creation definitions for the tactics included in the promotion change.

The event value is an array of Tactic Condition Creation Definition sObject records and their attributes.

```

```

## oncustomstatechange

This event is triggered when the custom state changes. Custom State is a special area of the promotion state where customers can set their custom structures that are processed and committed in Salesforce at the same time as the promotion.

```

```

## onpromotionproductschange

This event is triggered when the promotion products change.

The event value is an array of all promotion product IDs.

```

```

## onupliftpredictionavailablechange

This event is triggered when the uplift prediction availability changes. It indicates if the feature is enabled for the promotion.

```

```

## onupliftpredictionenabledchange

This event is triggered based on whether the uplift prediction can be performed on the current promotion or not. It indicates possible errors with the promotion state that prevent uplift prediction from being executed.

```

```

## onupliftpredictionprocessstatuschange

This event is triggered when the uplift prediction process state changes.

The possible values are:

-   RUNNING
-   IDLE

```

```

## onmanualinputschange

This event is triggered when the promotion manual inputs change. The event payload contains an array of TPMManualInput instances being used for the TPM Grids.

```

```

## onaclchange

This event is triggered when the edit access rights in the Access Control List (ACL) changes for a promotion or tactic. This event notifies about an ACL change. Get the actual value of an edit access right element using the isVisible and isEditable methods of the tpm-promotion class.

```

```

## onkpivalidationschanges

This event is triggered when the promotion grids are calculated or recalculated, and validation KPIs are emitting error messages.

```

```

## Example Implementation

Here’s an example of how to use the tpm-promotion component to interact with a promotion:

```

```

```

```

-   **[tpm-promotion Component Methods](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#tpm-promotionComponentReference_method)**
    Here are all the tpm-promotion methods.

## tpm-promotion Component Methods

Here are all the tpm-promotion methods.

-   **[exportKPIs](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#exportKPIs)**
    This method returns a promise resolving to the values of the KPIs for the selected KPI subsets or names, levels, and period types.
-   **[duplicateTactic](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#duplicateTactic)**
    The method returns a promise resolving to a JavaScript object with all the tactic attributes preset.
-   **[generateTactic](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#generateTactic)**
    This method generates a Tactic record using the tacticTemplateId as a base. The method returns a promise resolving to a Javascript object with all the tactic attributes preset. After generating the tactic, it can be added to the promotion data by calling setTacticField for all the fields.
-   **[getProperty](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#getProperty)**
    Imperatively retrieve promotion state properties.
-   **[getLevelNames](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#getLevelNames)**
    This method returns a promise resolving to the list of levels that are currently loaded in the Calculation Engine. If the calculation status isn’t valid, the method returns an error.
-   **[getKPISubsets](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#getKPISubsets)**
    This method returns a promise resolving to the list of KPI Subsets that are currently loaded in the Calculation Engine. If the calculation status isn’t valid, the method returns an error.
-   **[getKPIs](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#getKPIs)**
    This method returns a promise resolving to the list of KPIs that are currently loaded in the Calculation Engine. If the calculation status isn’t valid, the method returns an error.
-   **[getPeriods](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#getPeriods)**
    This method returns a promise resolving to the list of Periods that are currently loaded in the Calculation Engine. If the calculation status isn’t valid, the method returns an error.
-   **[getPeriodTypes](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#getPeriodTypes)**
    This method returns a promise resolving to the list of Period Types that are currently loaded in the Calculation Engine. If the calculation status isn’t valid, the method returns an error.
-   **[isEditable](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#isEditable)**
    This method returns true if an EARight element is flagged as editable for the passed record ID.
-   **[isVisible](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#isVisible)**
    This method returns true if an EARight element is flagged as visible for the passed record ID.
-   **[navigateTo](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#navigateto)**
    Moves the page focus to the passed in target. The target object requires an area attribute and an optional section attribute:
-   **[push](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#push)**
    Begins the promotion push process. Saves the current state of the promotion SObject and all of its related SObjects.
-   **[reload](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#reload)**
    Reloads the promotion SObject and all the related records.
-   **[removeCallback](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#removeCallback)**
    Remove already setup callback functions that will be called as part of method flows.
-   **[save](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#save)**
    Begins the promotion save process. Saves the current state of the promotion SObject and all of its related SObjects. I’ll also save the custom state. During the save process, the component will emit events to notify custom components about different events that might happen during the process.
-   **[close](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#closePromotion)**
    This process initiates the close promotion process. It sets the promotion phase to ToBeFinanciallyClosed and initiates the save process. This triggers the financial closure workflow in Processing Services, which handles the promotion's accruals and final calculations. The method also saves the related SObjects and custom state.
-   **[selectTactic](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#selectTactic)**
    Sets the internally selected tactic to the passed in tactic ID.
-   **[setCallback](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#setCallback)**
    Setup callback functions that will be called as part of method flows.
-   **[setCustomState](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#setCustomState)**
    This object will be sent along with the promotion information during save to SFDC in order to be processed and committed. Using the custom state, customers can set up additional data to send along the promotion data to be saved in the same transaction as the promotion. This custom state will be forwarded to the customized APEX class handling promotion save customizations..
-   **[setEditMode](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#setEditMode)**
    Sets the promotion into edit mode or exits edit mode.
-   **[setEditable](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#setEditable)**
    This method sets the editability value of an EARight element for the given promotion or tactic record ID.
-   **[setVisible](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#setVisible)**
    This method sets the visibility value of an EARight element for the given promotion, or tactic record ID.
-   **[setParticipatingCustomers](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#setParticipatingCustomers)**
    Lists the objects with the participating customers format.
-   **[setPLGridFilterOpen](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#setPLGridFilterOpen)**
    Displays or hides the P&L filter section on the promotion P&L view.
-   **[setPromotionAttachmentLinks](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#setPromotionAttachmentLinks)**
    Sets the related promotion attachment links to the promotion.
-   **[setPromotionAttachments](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#setPromotionAttachments)**
    Sets the related promotion attachments to the promotion. Promotion attachments cannot be created or deleted from the tpm-promotion component API. Promotion attachment records need to be previously created before linking them to a promotion with a promotion attachment link record.
-   **[setPromotionCategories](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#setPromotionCategories)**
    Sets the list of categories of the promotion. TPM Application will only detect category changes after a reload.
-   **[setPromotionField](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#setPromotionField)**
    Sets a promotion SObject field.
-   **[setPromotionManualInputs](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#setPromotionManualInputs)**
    This method sets an array of manual inputs in the TPM promotion service component.
-   **[setSubAccounts](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#setSubAccounts)**
    Lists the objects with the SubAccounts format.
-   **[setTacticConditionCreationDefinitions](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#setTacticConditionCreationDefinitions)**
    Sets the related tactic condition creation definition records to the promotion.
-   **[setTacticField](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#setTacticField)**
    Sets the tactic SObject field.
-   **[setTacticFunds](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#setTacticFunds)**
    Sets the related tactic funds to the Promotion. To delete the tactic fund record, set the IsDeleted attribute to true. To flag a record as new, set the IsNew attribute to true. If the Sales Org has Fund Autodetermination enabled, TPM Application will always overwrite tactic funds with the records generated by the autodetermination process.
-   **[predictUplift](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm#predictUplift)**
    This method returns a promise resolved when an uplift prediction is completed for the promotion. If the uplift prediction is disabled or the promotion isn’t in a correct status, the promise is rejected with an error stating the cause.

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

### duplicateTactic

The method returns a promise resolving to a JavaScript object with all the tactic attributes preset.

#### API Version

This method generates a tactic record using the tacticId as a base. You can add the generated tactic record to the promotion data by calling setTacticField for all the fields.

60.0

#### Signature

duplicateTactic(tacticTemplateId)

tacticTemplateId: String. Record ID of the tactic template.

#### Example Implementation

```

```

### generateTactic

This method generates a Tactic record using the tacticTemplateId as a base. The method returns a promise resolving to a Javascript object with all the tactic attributes preset. After generating the tactic, it can be added to the promotion data by calling setTacticField for all the fields.

#### API Version

55

#### Signature

generateTactic(tacticTemplateId)

#### Example Implementation

```

```

### getProperty

Imperatively retrieve promotion state properties.

#### API Version

55.0

#### Signature

getProperty(propName)

The available properties to retrieve are:

-   focusedArea
-   status
-   calculationStatus
-   editMode
-   selectedTacticId
-   promotion
-   tactics
-   tacticFunds
-   promotionAttachments
-   promotionAttachmentLinks
-   promotionCategories
-   productFilter
-   subAccounts
-   participatingCustomers
-   tacticConditionCreationDefinitions
-   upliftPredictionProcessStatus
-   upliftPredictionEnabled
-   upliftPredictionAvailable
-   promotionProducts
-   manualInputs
-   kpiValidations
-   customState

#### Example Implementation

```

```

### getLevelNames

This method returns a promise resolving to the list of levels that are currently loaded in the Calculation Engine. If the calculation status isn’t valid, the method returns an error.

#### API Version

58.0

#### Signature

getLevelNames()

#### Example Implementation

```

```

### getKPISubsets

This method returns a promise resolving to the list of KPI Subsets that are currently loaded in the Calculation Engine. If the calculation status isn’t valid, the method returns an error.

#### API Version

58.0

#### Signature

getKPISubsets()

#### Example Implementation

```

```

### getKPIs

This method returns a promise resolving to the list of KPIs that are currently loaded in the Calculation Engine. If the calculation status isn’t valid, the method returns an error.

#### API Version

58.0

#### Signature

getKPIs()

#### Example Implementation

```

```

### getPeriods

This method returns a promise resolving to the list of Periods that are currently loaded in the Calculation Engine. If the calculation status isn’t valid, the method returns an error.

#### API Version

58.0

#### Signature

getPeriods()

#### Example Implementation

```

```

### getPeriodTypes

This method returns a promise resolving to the list of Period Types that are currently loaded in the Calculation Engine. If the calculation status isn’t valid, the method returns an error.

#### API Version

58.0

#### Signature

getPeriodTypes()

#### Example Implementation

```

```

### isEditable

This method returns true if an EARight element is flagged as editable for the passed record ID.

#### API Version

The record ID must be a promotion ID or a tactic ID.

60.0

#### Signature

isEditable(recordId, eaRight)

### isVisible

This method returns true if an EARight element is flagged as visible for the passed record ID.

#### API Version

The record ID must be a promotion ID or a tactic ID.

60.0

#### Signature

isVisible(recordId, eaRight)

### navigateTo

Moves the page focus to the passed in target. The target object requires an area attribute and an optional section attribute:

#### API Version

55

#### Signature

navigateTo(target)

#### Example Implementation

```

```

### push

Begins the promotion push process. Saves the current state of the promotion SObject and all of its related SObjects.

#### API Version

55

#### Signature

push()

#### Example Implementation

```

```

### reload

Reloads the promotion SObject and all the related records.

#### API Version

55

#### Signature

reload()

#### Example Implementation

```

```

### removeCallback

Remove already setup callback functions that will be called as part of method flows.

#### API Version

55

#### Signature

removeCallback(event, callback)

#### Example Implementation

```

```

### save

Begins the promotion save process. Saves the current state of the promotion SObject and all of its related SObjects. I’ll also save the custom state. During the save process, the component will emit events to notify custom components about different events that might happen during the process.

#### API Version

55

#### Signature

save()

#### Example Implementation

```

```

### close

This process initiates the close promotion process. It sets the promotion phase to ToBeFinanciallyClosed and initiates the save process. This triggers the financial closure workflow in Processing Services, which handles the promotion's accruals and final calculations. The method also saves the related SObjects and custom state.

#### Example

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

Promotion Closure should be enabled in the Promotion Template before using this method.

#### API Version

65

#### Signature

close()

During the close promotion process, the TPM component notifies custom components about different events that might happen during the process. Before using the close promotion method, you must set a callback using the setCallback(event, callback) method. During the close promotion process, the following callbacks are executed:

-   onBeforeSave: Executes before the promotion saves to SFDC.
-   onAfterSave: Executes after the promotion saves to SFDC.
-   onAfterSync: Executes after the promotion synchronizes to Processing Services.
-   onError: Executes if any error occurs during all the close steps.

In the callback function, it's possible to return a promise. If it returns a promise, the process pauses until the promise is resolved. If the promise is resolved correctly, the next step continues. If the promise is rejected, it is treated as an error and the onError callback is executed.

#### Example Implementation

```

```

### selectTactic

Sets the internally selected tactic to the passed in tactic ID.

#### API Version

55

#### Signature

selectTactic(tacticId)

#### Example Implementation

```

```

### setCallback

Setup callback functions that will be called as part of method flows.

#### API Version

55

#### Signature

setCallback(tacticFunds)

#### Example Implementation

```

```

### setCustomState

This object will be sent along with the promotion information during save to SFDC in order to be processed and committed. Using the custom state, customers can set up additional data to send along the promotion data to be saved in the same transaction as the promotion. This custom state will be forwarded to the customized APEX class handling promotion save customizations..

#### API Version

55

#### Signature

setCustomState(customState)

#### Example Implementation

```

```

### setEditMode

Sets the promotion into edit mode or exits edit mode.

#### API Version

55

#### Signature

setEditMode(value)

#### Example Implementation

```

```

### setEditable

This method sets the editability value of an EARight element for the given promotion or tactic record ID.

#### API Version

After the editability value of an EARight element is set for the record, the promotion UI is re-rendered to reflect the changes. But, after you save the promotion, the EARight elements are reset to the initial values provided by TPM and the customization hook.

60.0

#### Signature

setEditable(recordId, eaRight, value)

-   recordId: ID of a promotion or tactic
-   eaRight: An EARight element
-   value: A boolean value

### setVisible

This method sets the visibility value of an EARight element for the given promotion, or tactic record ID.

#### API Version

After the EARight element visibility value is set for a record, the promotion UI is re-rendered to reflect the changes. But, after you save the promotion, the EARight elements are reset to the initial values provided by TPM and the customization hook.

60.0

#### Signature

setVisible(recordId, eaRight, value)

-   recordId: ID of a promotion or tactic
-   eaRight: An EARight element
-   value: A Boolean value

### setParticipatingCustomers

Lists the objects with the participating customers format.

#### API Version

55

#### Signature

setParticipatingCustomers(participatingCustomers)

#### Example Implementation

```

```

### setPLGridFilterOpen

Displays or hides the P&L filter section on the promotion P&L view.

#### API Version

55

#### Signature

setPLGridFilterOpen(value)

#### Example Implementation

```

```

### setPromotionAttachmentLinks

Sets the related promotion attachment links to the promotion.

#### API Version

55

#### Signature

setPromotionAttachmentLinks(attachmentLinks)

#### Example Implementation

```

```

### setPromotionAttachments

Sets the related promotion attachments to the promotion. Promotion attachments cannot be created or deleted from the tpm-promotion component API. Promotion attachment records need to be previously created before linking them to a promotion with a promotion attachment link record.

#### API Version

55

#### Signature

setPromotionAttachments(attachments)

#### Example Implementation

```

```

### setPromotionCategories

Sets the list of categories of the promotion. TPM Application will only detect category changes after a reload.

#### API Version

55

#### Signature

setPromotionCategories(categories)

#### Example Implementation

```

```

### setPromotionField

Sets a promotion SObject field.

#### API Version

55

#### Signaturei

setPromotionField(field, value)

#### Example Implementation

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

The field value sets that are managed by KPI Maps are ignored if provided through Business Objects API. This behaviour prevents any outdated data being sent to Trade Promotion Management.

### setPromotionManualInputs

This method sets an array of manual inputs in the TPM promotion service component.

#### API Version

Manual grid edits are an array of TPMManualInput instances. You can add new entries, or remove entries from the existing array of elements.

60.0

#### Signature

setPromotionManualInputs(manualInputs)

#### Example Implementation

```

```

### setSubAccounts

Lists the objects with the SubAccounts format.

#### API Version

55

#### Signature

setSubAccounts(subAccounts)

#### Example Implementation

```

```

### setTacticConditionCreationDefinitions

Sets the related tactic condition creation definition records to the promotion.

#### API Version

55

#### Signature

setTacticConditionCreationDefinitions(tacticConditionCreationDefinitions)

#### Example Implementation

```

```

### setTacticField

Sets the tactic SObject field.

#### API Version

55

#### Signature

setTacticField(tacticId, field, value)

#### Example Implementation

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

The field value sets that are managed by KPI Maps are ignored if provided through Business Objects API. This behaviour prevents any outdated data being sent to Trade Promotion Management.

### setTacticFunds

Sets the related tactic funds to the Promotion. To delete the tactic fund record, set the IsDeleted attribute to true. To flag a record as new, set the IsNew attribute to true. If the Sales Org has Fund Autodetermination enabled, TPM Application will always overwrite tactic funds with the records generated by the autodetermination process.

#### API Version

55

#### Signature

setTacticFunds(tacticFunds)

#### Example Implementation

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

The field value sets that are managed by KPI Maps are ignored if provided through Business Objects API. This behaviour prevents any outdated data being sent to Trade Promotion Management.

### predictUplift

This method returns a promise resolved when an uplift prediction is completed for the promotion. If the uplift prediction is disabled or the promotion isn’t in a correct status, the promise is rejected with an error stating the cause.

#### API Version

58.0

#### Signature

predictUplift()

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
    detail: {
        value: {
            area: 'PROMOTION_PLANNING',
            section: 'PROMOTION'
        },
        property: 'focusedArea',
        promotionId: 'a2WTC0000000F772AE'
    }
}
```

```
{
    detail : {
        value: true,
        property: 'isPLGridFilterOpen',
        promotionId: 'a2WTC0000000F772AE'
    }
}
```

```
{
    detail : {
        value: 'VALID',
        property: 'status',
        promotionId: 'a2WTC0000000F772AE'
    }
}
```

```
{
    detail : {
        value: 'LOADING',
        property: 'calculationStatus',
        promotionId: 'a2WTC0000000F772AE'
    }
}
```

## Related Topics

- tpm-promotion Component Methods (atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm)
- exportKPIs (atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm)
- duplicateTactic (atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm)
- generateTactic (atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm)
- getProperty (atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm)
- getLevelNames (atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm)
- getKPISubsets (atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm)
- getKPIs (atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm)
- getPeriods (atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm)
- getPeriodTypes (atlas.en-us.retail_api.meta/retail_api/tpm_promotion_component_referance.htm)
