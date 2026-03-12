---
title: "AddEligibleInsuranceClausesOptions Class"
domain: insurance-developer-guide
topic: addeligibleinsuranceclausesoptions-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:39.041Z
estimatedTokens: 1193
keywords: [AddEligibleInsuranceClausesOptions, options, adding, eligible, product, clauses, insurance, configuring, exclusions, coverage, terms, selection, Usage, saveContext]
---

# AddEligibleInsuranceClausesOptions Class

> Contains options for adding eligible product clauses to an insurance product. Use this
    class when configuring which clauses, such as exclusions or coverage terms, are available for
    selection on an insurance product.

# AddEligibleInsuranceClausesOptions Class

Contains options for adding eligible product clauses to an insurance product. Use this class when configuring which clauses, such as exclusions or coverage terms, are available for selection on an insurance product.

## Namespace

[runtime\_industries\_insurance](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_namespace_runtime_industries_insurance.htm "The runtime_industries_insurance namespace provides Options classes to control optional input parameters for managing insurance operations, such as creating and updating insurance quotes, generating insurance clauses, and running insurance ratings. Use these classes when calling Insurance APIs from Apex to control pricing, configuration rules, qualification rules, and product catalog validation.")

## Usage

Use the AddEligibleInsuranceClausesOptions class with the [Add Eligible Insurance Clauses](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_add_eligible_insurance_clauses.htm) invocable action to add eligible insurance clauses.

## Example

When calling the [Add Eligible Insurance Clauses](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_add_eligible_insurance_clauses.htm) invocable action from Apex, create an AddEligibleInsuranceClausesOptions instance and set the properties, then use it as addClauseOptions.

```

```

-   **[AddEligibleInsuranceClausesOptions Constructors](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_AddEligibleInsuranceClausesOptions.htm#apex_runtime_industries_insurance_AddEligibleInsuranceClausesOptions_constructors)**
    Learn more about the constructors that are available with the AddEligibleInsuranceClausesOptions class.
-   **[AddEligibleInsuranceClausesOptions Properties](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_AddEligibleInsuranceClausesOptions.htm#apex_runtime_industries_insurance_AddEligibleInsuranceClausesOptions_properties)**
    Set the AddEligibleInsuranceClausesOptions class property to save the context of a quote.

## AddEligibleInsuranceClausesOptions Constructors

Learn more about the constructors that are available with the AddEligibleInsuranceClausesOptions class.

The AddEligibleInsuranceClausesOptions class includes these constructors.

-   **[AddEligibleInsuranceClausesOptions(saveContext)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_AddEligibleInsuranceClausesOptions.htm#apex_runtime_industries_insurance_AddEligibleInsuranceClausesOptions_ctor)**
    Creates an options instance with the specified context-saving behavior for adding eligible insurance clauses.
-   **[AddEligibleInsuranceClausesOptions()](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_AddEligibleInsuranceClausesOptions.htm#apex_runtime_industries_insurance_AddEligibleInsuranceClausesOptions_ctor_2)**
    Creates an options instance with default settings for adding eligible insurance clauses. Context is not saved by default.

### AddEligibleInsuranceClausesOptions(saveContext)

Creates an options instance with the specified context-saving behavior for adding eligible insurance clauses.

#### Signature

public AddEligibleInsuranceClausesOptions(Boolean saveContext)

#### Parameters

saveContext

Type: Boolean

Indicates whether to save the operation context when adding eligible insurance clauses (true) or not (false).

The default value is true.

### AddEligibleInsuranceClausesOptions()

Creates an options instance with default settings for adding eligible insurance clauses. Context is not saved by default.

#### Signature

public AddEligibleInsuranceClausesOptions()

## AddEligibleInsuranceClausesOptions Properties

Set the AddEligibleInsuranceClausesOptions class property to save the context of a quote.

The AddEligibleInsuranceClausesOptions class includes this property.

-   **[saveContext](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_AddEligibleInsuranceClausesOptions.htm#apex_runtime_industries_insurance_AddEligibleInsuranceClausesOptions_saveContext)**
    Indicates whether to save the operation context when adding eligible insurance clauses (true) or not (false).

### saveContext

Indicates whether to save the operation context when adding eligible insurance clauses (true) or not (false).

#### Signature

public Boolean saveContext {get; set;}

#### Property Value

Type: Boolean

## Code Examples

```apex
// Optional optionFlags for addEligibleInsuranceClauses
if (inputs != null && inputs.containsKey('optionFlags')) {
    Map<String, Object> addClauseOptions =
        (Map<String, Object>) inputs.get('optionFlags');
    if (addClauseOptions != null) {
        runtime_industries_insurance.AddEligibleInsuranceClausesOptions addClauseApexOptions =
            new runtime_industries_insurance.AddEligibleInsuranceClausesOptions();
        if (addClauseOptions.containsKey('saveContext')) {
            addClauseApexOptions.saveContext =
                (Boolean) addClauseOptions.get('saveContext');
        }
        action.setInvocationParameter('addClauseOptions', addClauseApexOptions);
    }
}
```

## Related Topics

- runtime_industries_insurance (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_namespace_runtime_industries_insurance.htm)
- AddEligibleInsuranceClausesOptions Constructors (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_AddEligibleInsuranceClausesOptions.htm)
- AddEligibleInsuranceClausesOptions Properties (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_AddEligibleInsuranceClausesOptions.htm)
- AddEligibleInsuranceClausesOptions(saveContext) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_AddEligibleInsuranceClausesOptions.htm)
- AddEligibleInsuranceClausesOptions() (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_AddEligibleInsuranceClausesOptions.htm)
- saveContext (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_AddEligibleInsuranceClausesOptions.htm)
