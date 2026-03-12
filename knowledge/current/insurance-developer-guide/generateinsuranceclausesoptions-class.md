---
title: "GenerateInsuranceClausesOptions Class"
domain: insurance-developer-guide
topic: generateinsuranceclausesoptions-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:39.068Z
estimatedTokens: 1858
keywords: [GenerateInsuranceClausesOptions, options, generating, insurance, clauses, control, context, saving, manual, clause, generation, asynchronous, product, products, Usage]
---

# GenerateInsuranceClausesOptions Class

> Contains options for generating insurance clauses. Use this class to control context
    saving, manual clause generation, and asynchronous clause generation when generating product
    clauses for insurance products.

# GenerateInsuranceClausesOptions Class

Contains options for generating insurance clauses. Use this class to control context saving, manual clause generation, and asynchronous clause generation when generating product clauses for insurance products.

## Namespace

[runtime\_industries\_insurance](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_namespace_runtime_industries_insurance.htm "The runtime_industries_insurance namespace provides Options classes to control optional input parameters for managing insurance operations, such as creating and updating insurance quotes, generating insurance clauses, and running insurance ratings. Use these classes when calling Insurance APIs from Apex to control pricing, configuration rules, qualification rules, and product catalog validation.")

## Usage

Use GenerateInsuranceClausesOptions class when using the [Insurance Product Clause Generation](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_insurance_product_clauses_generate.htm) API or the [Generate Insurance Clauses](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_generate_insurance_clauses.htm) invocable action to generate insurance clauses so that you can control context saving and synchronous or asynchronous execution.

## Example

When calling the [Generate Insurance Clauses](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_generate_insurance_clauses.htm) invocable action from Apex, create a GenerateInsuranceClausesOptions instance and set the properties, then use it as optionFlags.

```

```

-   **[GenerateInsuranceClausesOptions Constructors](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_GenerateInsuranceClausesOptions.htm#apex_runtime_industries_insurance_GenerateInsuranceClausesOptions_constructors)**
    Learn more about the constructors that are available with the GenerateInsuranceClausesOptions class.
-   **[GenerateInsuranceClausesOptions Properties](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_GenerateInsuranceClausesOptions.htm#apex_runtime_industries_insurance_GenerateInsuranceClausesOptions_properties)**
    Set the properties in the GenerateInsuranceClausesOptions class to generate insurance product clauses.

## GenerateInsuranceClausesOptions Constructors

Learn more about the constructors that are available with the GenerateInsuranceClausesOptions class.

The GenerateInsuranceClausesOptions class includes these constructors.

-   **[GenerateInsuranceClausesOptions(saveContext, generateManualClauses, generateClausesAsync)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_GenerateInsuranceClausesOptions.htm#apex_runtime_industries_insurance_GenerateInsuranceClausesOptions_ctor)**
    Creates an options instance with full control over context saving, manual clause generation, and asynchronous execution.
-   **[GenerateInsuranceClausesOptions(saveContext, generateManualClauses)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_GenerateInsuranceClausesOptions.htm#apex_runtime_industries_insurance_GenerateInsuranceClausesOptions_ctor_2)**
    Creates an options instance for synchronously generating insurance clauses with context and manual clause settings.
-   **[GenerateInsuranceClausesOptions()](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_GenerateInsuranceClausesOptions.htm#apex_runtime_industries_insurance_GenerateInsuranceClausesOptions_ctor_3)**
    Creates an options instance with the default settings for generating insurance clauses.

### GenerateInsuranceClausesOptions(saveContext, generateManualClauses, generateClausesAsync)

Creates an options instance with full control over context saving, manual clause generation, and asynchronous execution.

#### Signature

public GenerateInsuranceClausesOptions(Boolean saveContext, Boolean generateManualClauses, Boolean generateClausesAsync)

#### Parameters

saveContext

Type: Boolean

Indicates whether to save the operation context (true) or not (false). The default value is true.

generateManualClauses

Type: Boolean

Indicates whether to generate manual clauses along with automated clauses (true) or not (false). The default value is false.

generateClausesAsync

Type: Boolean

Indicates whether to generate clauses asynchronously (true) or not (false). The default value is false.

### GenerateInsuranceClausesOptions(saveContext, generateManualClauses)

Creates an options instance for synchronously generating insurance clauses with context and manual clause settings.

#### Signature

public GenerateInsuranceClausesOptions(Boolean saveContext, Boolean generateManualClauses)

#### Parameters

saveContext

Type: Boolean

Indicates whether to save the operation context (true) or not (false).

generateManualClauses

Type: Boolean

Indicates whether to generate manual clauses along with automated clauses (true) or not (false).

### GenerateInsuranceClausesOptions()

Creates an options instance with the default settings for generating insurance clauses.

#### Signature

public GenerateInsuranceClausesOptions()

## GenerateInsuranceClausesOptions Properties

Set the properties in the GenerateInsuranceClausesOptions class to generate insurance product clauses.

The GenerateInsuranceClausesOptions class includes these properties.

-   **[generateClausesAsync](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_GenerateInsuranceClausesOptions.htm#apex_runtime_industries_insurance_GenerateInsuranceClausesOptions_generateClausesAsync)**
    Indicates whether clauses are generated asynchronously (true) or synchronously (false).
-   **[generateManualClauses](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_GenerateInsuranceClausesOptions.htm#apex_runtime_industries_insurance_GenerateInsuranceClausesOptions_generateManualClauses)**
    Indicates whether to generate manual clauses along with system-generated clauses (true) or not (false).
-   **[saveContext](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_GenerateInsuranceClausesOptions.htm#apex_runtime_industries_insurance_GenerateInsuranceClausesOptions_saveContext)**
    Indicates whether to save the operation context (true) or not (false).

### generateClausesAsync

Indicates whether clauses are generated asynchronously (true) or synchronously (false).

#### Signature

public Boolean generateClausesAsync {get; set;}

#### Property Value

Type: Boolean

### generateManualClauses

Indicates whether to generate manual clauses along with system-generated clauses (true) or not (false).

#### Signature

public Boolean generateManualClauses {get; set;}

#### Property Value

Type: Boolean

### saveContext

Indicates whether to save the operation context (true) or not (false).

#### Signature

public Boolean saveContext {get; set;}

#### Property Value

Type: Boolean

## Code Examples

```apex
// Optional optionFlags for generateInsuranceClauses
if (inputs != null && inputs.containsKey('optionFlags')) {
    Map<String, Object> generateClauseOptions =
        (Map<String, Object>) inputs.get('optionFlags');
    if (generateClauseOptions != null) {
        runtime_industries_insurance.GenerateInsuranceClausesOptions generateClauseApexOptions =
            new runtime_industries_insurance.GenerateInsuranceClausesOptions();
        if (generateClauseOptions.containsKey('saveContext')) {
            apexOptions.saveContext =
                (Boolean) generateClauseOptions.get('saveContext');
        }
        if (generateClauseOptions.containsKey('generateManualClauses')) {
            apexOptions.generateManualClauses =
                (Boolean) generateClauseOptions.get('generateManualClauses');
        }
        if (generateClauseOptions.containsKey('generateClausesAsync')) {
            generateClauseApexOptions.generateClausesAsync =
                (Boolean) generateClauseOptions.get('generateClausesAsync');
        }
        action.setInvocationParameter('optionFlags', generateClauseApexOptions);
    }
}
```

## Related Topics

- runtime_industries_insurance (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_namespace_runtime_industries_insurance.htm)
- GenerateInsuranceClausesOptions Constructors (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_GenerateInsuranceClausesOptions.htm)
- GenerateInsuranceClausesOptions Properties (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_GenerateInsuranceClausesOptions.htm)
- GenerateInsuranceClausesOptions(saveContext, generateManualClauses, generateClausesAsync) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_GenerateInsuranceClausesOptions.htm)
- GenerateInsuranceClausesOptions(saveContext, generateManualClauses) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_GenerateInsuranceClausesOptions.htm)
- GenerateInsuranceClausesOptions() (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_GenerateInsuranceClausesOptions.htm)
- generateClausesAsync (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_GenerateInsuranceClausesOptions.htm)
- generateManualClauses (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_GenerateInsuranceClausesOptions.htm)
- saveContext (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_GenerateInsuranceClausesOptions.htm)
