---
title: "CreateInsuranceQuoteOptions Class"
domain: insurance-developer-guide
topic: createinsurancequoteoptions-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:39.051Z
estimatedTokens: 2209
keywords: [CreateInsuranceQuoteOptions, options, creating, insurance, quote, control, pricing, execution, product, catalog, validation, configuration, qualification, rules, persistence]
---

# CreateInsuranceQuoteOptions Class

> Contains options for creating an insurance quote. Use this class to control pricing
    execution, product catalog validation, configuration and qualification rules, quote persistence,
    and the product selling model when creating group or individual insurance quotes.

# CreateInsuranceQuoteOptions Class

Contains options for creating an insurance quote. Use this class to control pricing execution, product catalog validation, configuration and qualification rules, quote persistence, and the product selling model when creating group or individual insurance quotes.

## Namespace

[runtime\_industries\_insurance](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_namespace_runtime_industries_insurance.htm "The runtime_industries_insurance namespace provides Options classes to control optional input parameters for managing insurance operations, such as creating and updating insurance quotes, generating insurance clauses, and running insurance ratings. Use these classes when calling Insurance APIs from Apex to control pricing, configuration rules, qualification rules, and product catalog validation.")

## Usage

Use the CreateInsuranceQuoteOptions class with the [Insurance Quote (POST)](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_insurance_quote.htm) API and the [Create Insurance Quote](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_create_quote.htm) invocable action to create an insurance quote so that you can specify which operations to run and whether to save the quote or not.

## Example

When calling the [Create Insurance Quote](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_create_quote.htm) invocable action from Apex, create a CreateInsuranceQuoteOptions instance, set the desired properties, and then use it as quoteOptions.

```

```

-   **[CreateInsuranceQuoteOptions Constructors](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceQuoteOptions.htm#apex_runtime_industries_insurance_CreateInsuranceQuoteOptions_constructors)**
    Learn more about the constructors that are available with the CreateInsuranceQuoteOptions class.
-   **[CreateInsuranceQuoteOptions Properties](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceQuoteOptions.htm#apex_runtime_industries_insurance_CreateInsuranceQuoteOptions_properties)**
    Set the CreateInsuranceQuoteOptions class properties to create an insurance quote.

## CreateInsuranceQuoteOptions Constructors

Learn more about the constructors that are available with the CreateInsuranceQuoteOptions class.

The CreateInsuranceQuoteOptions class includes these constructors.

-   **[CreateInsuranceQuoteOptions(executePricing, validateProductCatalog, executeConfigurationRules, executeQualificationRules, saveQuote, productSellingModel)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceQuoteOptions.htm#apex_runtime_industries_insurance_CreateInsuranceQuoteOptions_ctor)**
    Creates an options instance for quote creation with explicit control over pricing, validation, rules execution, quote saving, and product selling model.
-   **[CreateInsuranceQuoteOptions()](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceQuoteOptions.htm#apex_runtime_industries_insurance_CreateInsuranceQuoteOptions_ctor_2)**
    Creates an options instance with the default settings for creating an insurance quote.

### CreateInsuranceQuoteOptions(executePricing, validateProductCatalog, executeConfigurationRules, executeQualificationRules, saveQuote, productSellingModel)

Creates an options instance for quote creation with explicit control over pricing, validation, rules execution, quote saving, and product selling model.

#### Signature

public CreateInsuranceQuoteOptions(Boolean executePricing, Boolean validateProductCatalog, Boolean executeConfigurationRules, Boolean executeQualificationRules, Boolean saveQuote, String productSellingModel)

#### Parameters

executePricing

Type: Boolean

Indicates whether to execute pricing when creating the quote (true) or not (false). The default value is false.

validateProductCatalog

Type: Boolean

Indicates whether to validate against product catalog (true) or not (false). The default value is false.

executeConfigurationRules

Type: Boolean

Indicates whether to run product configuration rules (true) or not (false). The default value is false.

executeQualificationRules

Type: Boolean

Indicates whether to run qualification rules (true) or not (false). The default value is false.

saveQuote

Type: Boolean

Indicates whether to save the details after the quote is created (true) or not (false). The default value is false.

productSellingModel

Type: String

ID of the product selling model for the quote.

### CreateInsuranceQuoteOptions()

Creates an options instance with the default settings for creating an insurance quote.

#### Signature

public CreateInsuranceQuoteOptions()

## CreateInsuranceQuoteOptions Properties

Set the CreateInsuranceQuoteOptions class properties to create an insurance quote.

The CreateInsuranceQuoteOptions class includes these properties.

-   **[executeConfigurationRules](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceQuoteOptions.htm#apex_runtime_industries_insurance_CreateInsuranceQuoteOptions_executeConfigurationRules)**
    Indicates whether product configuration rules are executed when creating the insurance quote (true) or not (false).
-   **[executePricing](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceQuoteOptions.htm#apex_runtime_industries_insurance_CreateInsuranceQuoteOptions_executePricing)**
    Indicates whether pricing is executed when creating the insurance quote (true) or not (false).
-   **[executeQualificationRules](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceQuoteOptions.htm#apex_runtime_industries_insurance_CreateInsuranceQuoteOptions_executeQualificationRules)**
    Indicates whether qualification rules are executed when creating the insurance quote (true) or not (false).
-   **[productSellingModel](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceQuoteOptions.htm#apex_runtime_industries_insurance_CreateInsuranceQuoteOptions_productSellingModel)**
    Identifies the product selling model that's used for the insurance quote, for example, group or individual.
-   **[saveQuote](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceQuoteOptions.htm#apex_runtime_industries_insurance_CreateInsuranceQuoteOptions_saveQuote)**
    Indicates whether the created quote is saved in the database (true) or not (false).
-   **[validateProductCatalog](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceQuoteOptions.htm#apex_runtime_industries_insurance_CreateInsuranceQuoteOptions_validateProductCatalog)**
    Indicates whether the product catalog is validated when creating the insurance quote (true) or not (false).

### executeConfigurationRules

Indicates whether product configuration rules are executed when creating the insurance quote (true) or not (false).

#### Signature

public Boolean executeConfigurationRules {get; set;}

#### Property Value

Type: Boolean

### executePricing

Indicates whether pricing is executed when creating the insurance quote (true) or not (false).

#### Signature

public Boolean executePricing {get; set;}

#### Property Value

Type: Boolean

### executeQualificationRules

Indicates whether qualification rules are executed when creating the insurance quote (true) or not (false).

#### Signature

public Boolean executeQualificationRules {get; set;}

#### Property Value

Type: Boolean

### productSellingModel

Identifies the product selling model that's used for the insurance quote, for example, group or individual.

#### Signature

public String productSellingModel {get; set;}

#### Property Value

Type: String

### saveQuote

Indicates whether the created quote is saved in the database (true) or not (false).

#### Signature

public Boolean saveQuote {get; set;}

#### Property Value

Type: Boolean

### validateProductCatalog

Indicates whether the product catalog is validated when creating the insurance quote (true) or not (false).

#### Signature

public Boolean validateProductCatalog {get; set;}

#### Property Value

Type: Boolean

## Code Examples

```apex
runtime_industries_insurance.CreateInsuranceQuoteOptions createQuoteOptions 
                = new runtime_industries_insurance.CreateInsuranceQuoteOptions();
            Map<String, Object> optionsFromInput = (Map<String, Object>)quotePayload.get('quoteOptions');
            if (optionsFromInput.containsKey('executePricing')) {
                createQuoteOptions.executePricing = (Boolean)optionsFromInput.get('executePricing');
            }
            if (optionsFromInput.containsKey('validateProductCatalog')) {            
                createQuoteOptions.validateProductCatalog = (Boolean)optionsFromInput.get('validateProductCatalog');
            }
            if (optionsFromInput.containsKey('executeConfigurationRules')) {            
                createQuoteOptions.executeConfigurationRules = (Boolean)optionsFromInput.get('executeConfigurationRules');
            }
            if (optionsFromInput.containsKey('executeQualificationRules')) {            
                createQuoteOptions.executeQualificationRules = (Boolean)optionsFromInput.get('executeQualificationRules');
            }
            if (optionsFromInput.containsKey('saveQuote')) {            
                createQuoteOptions.saveQuote = (Boolean)optionsFromInput.get('saveQuote');
            }
            if (optionsFromInput.containsKey('productSellingModel')) {            
                createQuoteOptions.productSellingModel = (String)optionsFromInput.get('productSellingModel');
            }
            action.setInvocationParameter('quoteOptions', createQuoteOptions);
```

## Related Topics

- runtime_industries_insurance (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_namespace_runtime_industries_insurance.htm)
- CreateInsuranceQuoteOptions Constructors (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceQuoteOptions.htm)
- CreateInsuranceQuoteOptions Properties (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceQuoteOptions.htm)
- CreateInsuranceQuoteOptions(executePricing, validateProductCatalog, executeConfigurationRules, executeQualificationRules, saveQuote, productSellingModel) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceQuoteOptions.htm)
- CreateInsuranceQuoteOptions() (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceQuoteOptions.htm)
- executeConfigurationRules (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceQuoteOptions.htm)
- executePricing (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceQuoteOptions.htm)
- executeQualificationRules (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceQuoteOptions.htm)
- productSellingModel (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceQuoteOptions.htm)
- saveQuote (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceQuoteOptions.htm)
