---
title: "CreateInsuranceRatingOptions Class"
domain: insurance-developer-guide
topic: createinsuranceratingoptions-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:39.060Z
estimatedTokens: 1927
keywords: [CreateInsuranceRatingOptions, options, creating, insurance, rating, control, pricing, execution, configuration, rules, data, context, JSON, product, results]
---

# CreateInsuranceRatingOptions Class

> Contains options for creating an insurance rating. Use this class to control pricing
    execution, configuration rules, and the response data, such as context JSON, product details,
    rating results, when running a rating operation.

# CreateInsuranceRatingOptions Class

Contains options for creating an insurance rating. Use this class to control pricing execution, configuration rules, and the response data, such as context JSON, product details, rating results, when running a rating operation.

## Namespace

[runtime\_industries\_insurance](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_namespace_runtime_industries_insurance.htm "The runtime_industries_insurance namespace provides Options classes to control optional input parameters for managing insurance operations, such as creating and updating insurance quotes, generating insurance clauses, and running insurance ratings. Use these classes when calling Insurance APIs from Apex to control pricing, configuration rules, qualification rules, and product catalog validation.")

## Usage

Use the CreateInsuranceRatingOptions class when using the [Create Insurance Rating](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_create_insurance_rating.htm) invocable action to create an insurance rating so that you can specify which operations to run and what response data to include.

## Example

Create a CreateInsuranceRatingOptions instance and set properties, then use it (or a serialized map) as ratingOptions when calling the [Create Insurance Rating](https://developer.salesforce.com/docs/atlas.en-us.260.0.insurance_developer_guide.meta/insurance_developer_guide/actions_obj_create_insurance_rating.htm) invocable action from Apex.

```

```

-   **[CreateInsuranceRatingOptions Constructors](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceRatingOptions.htm#apex_runtime_industries_insurance_CreateInsuranceRatingOptions_constructors)**
    Learn more about the constructors that are available with the CreateInsuranceRatingOptions class.
-   **[CreateInsuranceRatingOptions Properties](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceRatingOptions.htm#apex_runtime_industries_insurance_CreateInsuranceRatingOptions_properties)**
    Set the properties in the CreateInsuranceRatingOptions class to create insurance ratings.

## CreateInsuranceRatingOptions Constructors

Learn more about the constructors that are available with the CreateInsuranceRatingOptions class.

The CreateInsuranceRatingOptions class includes these constructors.

-   **[CreateInsuranceRatingOptions(executePricing, executeConfigurationRules, returnContextJSON, returnProductDetails, returnRatingResults)](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceRatingOptions.htm#apex_runtime_industries_insurance_CreateInsuranceRatingOptions_ctor)**
    Creates an options instance for rating with explicit control over pricing, configuration rules, and which data is returned in the response.
-   **[CreateInsuranceRatingOptions()](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceRatingOptions.htm#apex_runtime_industries_insurance_CreateInsuranceRatingOptions_ctor_2)**
    Creates an options instance with the default settings for creating an insurance rating.

### CreateInsuranceRatingOptions(executePricing, executeConfigurationRules, returnContextJSON, returnProductDetails, returnRatingResults)

Creates an options instance for rating with explicit control over pricing, configuration rules, and which data is returned in the response.

#### Signature

public CreateInsuranceRatingOptions(Boolean executePricing, Boolean executeConfigurationRules, Boolean returnContextJSON, Boolean returnProductDetails, Boolean returnRatingResults)

#### Parameters

executePricing

Type: Boolean

Indicates whether to execute pricing for the rating (true) or not (false). The default value is true.

executeConfigurationRules

Type: Boolean

Indicates whether to run product configuration rules (true) or not (false). The default value is false.

returnContextJSON

Type: Boolean

Indicates whether to include context as JSON in the response (true) or not (false). The default value is false.

returnProductDetails

Type: Boolean

Indicates whether to include product details in the response (true) or not (false). The default value is false.

returnRatingResults

Type: Boolean

Indicates whether to include rating results in the response (true) or not (false). The default value is false.

### CreateInsuranceRatingOptions()

Creates an options instance with the default settings for creating an insurance rating.

#### Signature

public CreateInsuranceRatingOptions()

## CreateInsuranceRatingOptions Properties

Set the properties in the CreateInsuranceRatingOptions class to create insurance ratings.

The following are properties for CreateInsuranceRatingOptions.

-   **[executeConfigurationRules](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceRatingOptions.htm#apex_runtime_industries_insurance_CreateInsuranceRatingOptions_executeConfigurationRules)**
    Indicates whether to run product configuration rules (true) or not (false).
-   **[executePricing](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceRatingOptions.htm#apex_runtime_industries_insurance_CreateInsuranceRatingOptions_executePricing)**
    Indicates whether to execute pricing for the rating (true) or not (false).
-   **[returnContextJSON](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceRatingOptions.htm#apex_runtime_industries_insurance_CreateInsuranceRatingOptions_returnContextJSON)**
    Indicates whether to include context as JSON in the response (true) or not (false).
-   **[returnProductDetails](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceRatingOptions.htm#apex_runtime_industries_insurance_CreateInsuranceRatingOptions_returnProductDetails)**
    Indicates whether to include product details in the response (true) or not (false).
-   **[returnRatingResults](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceRatingOptions.htm#apex_runtime_industries_insurance_CreateInsuranceRatingOptions_returnRatingResults)**
    Indicates whether to include rating results in the response (true) or not (false).

### executeConfigurationRules

Indicates whether to run product configuration rules (true) or not (false).

#### Signature

public Boolean executeConfigurationRules {get; set;}

#### Property Value

Type: Boolean

### executePricing

Indicates whether to execute pricing for the rating (true) or not (false).

#### Signature

public Boolean executePricing {get; set;}

#### Property Value

Type: Boolean

### returnContextJSON

Indicates whether to include context as JSON in the response (true) or not (false).

#### Signature

public Boolean returnContextJSON {get; set;}

#### Property Value

Type: Boolean

### returnProductDetails

Indicates whether to include product details in the response (true) or not (false).

#### Signature

public Boolean returnProductDetails {get; set;}

#### Property Value

Type: Boolean

### returnRatingResults

Indicates whether to include rating results in the response (true) or not (false).

#### Signature

public Boolean returnRatingResults {get; set;}

#### Property Value

Type: Boolean

## Code Examples

```
// Build rating options for createInsuranceRating
runtime_industries_insurance.CreateInsuranceRatingOptions ratingOptions =
    new runtime_industries_insurance.CreateInsuranceRatingOptions(
        true,   // executePricing
        true,   // executeConfigurationRules
        false,  // returnContextJSON
        true,   // returnProductDetails
        true    // returnRatingResults
    );
// Pass ratingOptions when invoking the createInsuranceRating action
action.setInvocationParameter('ratingOptions', ratingOptions);
```

## Related Topics

- runtime_industries_insurance (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_namespace_runtime_industries_insurance.htm)
- CreateInsuranceRatingOptions Constructors (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceRatingOptions.htm)
- CreateInsuranceRatingOptions Properties (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceRatingOptions.htm)
- CreateInsuranceRatingOptions(executePricing, executeConfigurationRules, returnContextJSON, returnProductDetails, returnRatingResults) (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceRatingOptions.htm)
- CreateInsuranceRatingOptions() (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceRatingOptions.htm)
- executeConfigurationRules (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceRatingOptions.htm)
- executePricing (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceRatingOptions.htm)
- returnContextJSON (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceRatingOptions.htm)
- returnProductDetails (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceRatingOptions.htm)
- returnRatingResults (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_class_runtime_industries_insurance_CreateInsuranceRatingOptions.htm)
