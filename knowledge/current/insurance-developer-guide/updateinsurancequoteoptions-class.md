---
title: "UpdateInsuranceQuoteOptions Class"
domain: insurance-developer-guide
topic: updateinsurancequoteoptions-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:39.078Z
estimatedTokens: 1959
keywords: [UpdateInsuranceQuoteOptions, options, updating, insurance, quote, control, pricing, execution, configuration, qualification, rules, product, catalog, validation, persistence]
---

# UpdateInsuranceQuoteOptions Class

> Contains options for updating an existing insurance quote. Use this class to control
    pricing execution, configuration and qualification rules, product catalog validation, and quote
    persistence when updating insurance quotes.

# UpdateInsuranceQuoteOptions Class

Contains options for updating an existing insurance quote. Use this class to control pricing execution, configuration and qualification rules, product catalog validation, and quote persistence when updating insurance quotes.

## Namespace

[runtime\_industries\_insurance](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_namespace_runtime_industries_insurance.htm "The runtime_industries_insurance namespace provides Options classes to control optional input parameters for managing insurance operations, such as creating and updating insurance quotes, generating insurance clauses, and running insurance ratings. Use these classes when calling Insurance APIs from Apex to control pricing, configuration rules, qualification rules, and product catalog validation.")

## Usage

Use the UpdateInsuranceQuoteOptions class when calling the [Update Insurance Quote](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_update_insurance_quote.htm) invocable action to update an insurance quote so that you can specify which operations to run and whether to save the updated quote.

## Example

When calling the [Update Insurance Quote](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_update_insurance_quote.htm) invocable action from Apex, create an UpdateInsuranceQuoteOptions instance, set the desired properties, and use it as quoteOptions.

```

```

-   **[UpdateInsuranceQuoteOptions Constructors](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_UpdateInsuranceQuoteOptions.htm#apex_runtime_industries_insurance_UpdateInsuranceQuoteOptions_constructors)**
    Learn more about the constructors that are available with the UpdateInsuranceQuoteOptions class.
-   **[UpdateInsuranceQuoteOptions Properties](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_UpdateInsuranceQuoteOptions.htm#apex_runtime_industries_insurance_UpdateInsuranceQuoteOptions_properties)**
    Set the properties in the UpdateInsuranceQuoteOptions class to update an insurance quote.

## UpdateInsuranceQuoteOptions Constructors

Learn more about the constructors that are available with the UpdateInsuranceQuoteOptions class.

The UpdateInsuranceQuoteOptions class includes these constructors.

-   **[UpdateInsuranceQuoteOptions(executePricing, executeConfigurationRules, executeQualificationRules, validateProductCatalog, saveQuote)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_UpdateInsuranceQuoteOptions.htm#apex_runtime_industries_insurance_UpdateInsuranceQuoteOptions_ctor)**
    Creates an options instance for quote updates with explicit control over pricing, configuration and qualification rules, catalog validation, and quote saving.
-   **[UpdateInsuranceQuoteOptions()](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_UpdateInsuranceQuoteOptions.htm#apex_runtime_industries_insurance_UpdateInsuranceQuoteOptions_ctor_2)**
    Creates an options instance with the default settings for updating an insurance quote.

### UpdateInsuranceQuoteOptions(executePricing, executeConfigurationRules, executeQualificationRules, validateProductCatalog, saveQuote)

Creates an options instance for quote updates with explicit control over pricing, configuration and qualification rules, catalog validation, and quote saving.

#### Signature

public UpdateInsuranceQuoteOptions(Boolean executePricing, Boolean executeConfigurationRules, Boolean executeQualificationRules, Boolean validateProductCatalog, Boolean saveQuote)

#### Parameters

executePricing

Type: Boolean

Indicates whether to execute pricing when updating the quote (true) or not (false). The default value is false.

executeConfigurationRules

Type: Boolean

Indicates whether to run product configuration rules when updating the quote (true) or not (false). The default value is false.

executeQualificationRules

Type: Boolean

Indicates whether to run qualification rules when updating the quote (true) or not (false). The default value is false.

validateProductCatalog

Type: Boolean

Indicates whether to validate against the product catalog when updating the quote (true) or not (false). The default value is false.

saveQuote

Type: Boolean

Indicates whether to save the updated quote (true) or not (false). The default value is false.

### UpdateInsuranceQuoteOptions()

Creates an options instance with the default settings for updating an insurance quote.

#### Signature

public UpdateInsuranceQuoteOptions()

## UpdateInsuranceQuoteOptions Properties

Set the properties in the UpdateInsuranceQuoteOptions class to update an insurance quote.

The UpdateInsuranceQuoteOptions class includes these properties.

-   **[executeConfigurationRules](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_UpdateInsuranceQuoteOptions.htm#apex_runtime_industries_insurance_UpdateInsuranceQuoteOptions_executeConfigurationRules)**
    Indicates whether to run product configuration rules when updating the quote (true) or not (false).
-   **[executePricing](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_UpdateInsuranceQuoteOptions.htm#apex_runtime_industries_insurance_UpdateInsuranceQuoteOptions_executePricing)**
    Indicates whether to execute pricing when updating the quote (true) or not (false).
-   **[executeQualificationRules](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_UpdateInsuranceQuoteOptions.htm#apex_runtime_industries_insurance_UpdateInsuranceQuoteOptions_executeQualificationRules)**
    Indicates whether to run qualification rules when updating the quote (true) or not (false).
-   **[saveQuote](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_UpdateInsuranceQuoteOptions.htm#apex_runtime_industries_insurance_UpdateInsuranceQuoteOptions_saveQuote)**
    Indicates whether to save the updated quote (true) or not (false).
-   **[validateProductCatalog](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_UpdateInsuranceQuoteOptions.htm#apex_runtime_industries_insurance_UpdateInsuranceQuoteOptions_validateProductCatalog)**
    Indicates whether to validate against the product catalog when updating the quote (true) or not (false).

### executeConfigurationRules

Indicates whether to run product configuration rules when updating the quote (true) or not (false).

#### Signature

public Boolean executeConfigurationRules {get; set;}

#### Property Value

Type: Boolean

### executePricing

Indicates whether to execute pricing when updating the quote (true) or not (false).

#### Signature

public Boolean executePricing {get; set;}

#### Property Value

Type: Boolean

### executeQualificationRules

Indicates whether to run qualification rules when updating the quote (true) or not (false).

#### Signature

public Boolean executeQualificationRules {get; set;}

#### Property Value

Type: Boolean

### saveQuote

Indicates whether to save the updated quote (true) or not (false).

#### Signature

public Boolean saveQuote {get; set;}

#### Property Value

Type: Boolean

### validateProductCatalog

Indicates whether to validate against the product catalog when updating the quote (true) or not (false).

#### Signature

public Boolean validateProductCatalog {get; set;}

#### Property Value

Type: Boolean

## Code Examples

```apex
// quoteOptions for updateInsuranceQuote
if (inputs != null && inputs.containsKey('quoteOptions')) {
    Map<String, Object> optionsFromInput =
        (Map<String, Object>) inputs.get('quoteOptions');
    if (optionsFromInput != null) {
        runtime_industries_insurance.UpdateInsuranceQuoteOptions updateQuoteOptions 
                = new runtime_industries_insurance.UpdateInsuranceQuoteOptions();
            Map<String, Object> optionsFromInput = (Map<String, Object>)quotePayload.get('quoteOptions');
            if (optionsFromInput.containsKey('executePricing')) {
                updateQuoteOptions.executePricing = (Boolean)optionsFromInput.get('executePricing');
            }
            if (optionsFromInput.containsKey('validateProductCatalog')) {            
                updateQuoteOptions.validateProductCatalog = (Boolean)optionsFromInput.get('validateProductCatalog');
            }
            if (optionsFromInput.containsKey('executeConfigurationRules')) {            
                updateQuoteOptions.executeConfigurationRules = (Boolean)optionsFromInput.get('executeConfigurationRules');
            }
            if (optionsFromInput.containsKey('executeQualificationRules')) {            
                updateQuoteOptions.executeQualificationRules = (Boolean)optionsFromInput.get('executeQualificationRules');
            }
            if (optionsFromInput.containsKey('saveQuote')) {            
                updateQuoteOptions.saveQuote = (Boolean)optionsFromInput.get('saveQuote');
            }
            action.setInvocationParameter('quoteOptions', updateQuoteOptions);
    }
}
```

## Related Topics

- runtime_industries_insurance (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_namespace_runtime_industries_insurance.htm)
- UpdateInsuranceQuoteOptions Constructors (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_UpdateInsuranceQuoteOptions.htm)
- UpdateInsuranceQuoteOptions Properties (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_UpdateInsuranceQuoteOptions.htm)
- UpdateInsuranceQuoteOptions(executePricing, executeConfigurationRules, executeQualificationRules, validateProductCatalog, saveQuote) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_UpdateInsuranceQuoteOptions.htm)
- UpdateInsuranceQuoteOptions() (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_UpdateInsuranceQuoteOptions.htm)
- executeConfigurationRules (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_UpdateInsuranceQuoteOptions.htm)
- executePricing (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_UpdateInsuranceQuoteOptions.htm)
- executeQualificationRules (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_UpdateInsuranceQuoteOptions.htm)
- saveQuote (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_UpdateInsuranceQuoteOptions.htm)
- validateProductCatalog (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_UpdateInsuranceQuoteOptions.htm)
