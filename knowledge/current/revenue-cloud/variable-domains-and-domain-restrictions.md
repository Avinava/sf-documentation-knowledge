---
title: "Variable Domains and Domain Restrictions"
domain: revenue-cloud
topic: variable-domains-and-domain-restrictions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:01:57.726Z
estimatedTokens: 277
keywords: [Variable, Domains, Domain, Restrictions, fixed, permitted, specify, discrete, continuous, range, combination]
---

# Variable Domains and Domain Restrictions

> A variable can have a fixed domain that defines a set of permitted values. You can
    specify the domain as a list of discrete values, a continuous range, or a combination.

# Variable Domains and Domain Restrictions

A variable can have a fixed domain that defines a set of permitted values. You can specify the domain as a list of discrete values, a continuous range, or a combination.

## Variable Domains and Domain Restrictions

A variable can have a fixed domain that defines a set of permitted values. You can specify the domain as:

-   A list of discrete values
-   A continuous range
-   A combination of ranges and discrete values

For more information, see domainComputation in [Variable Annotations](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_variable_annotations.htm "You can annotate variables with properties such as configurable, defaultValue, domainComputation, and relatedAttributes.").

## Example

This example defines a SwitchgearBay type with three variables, each having a fixed domain.

-   BayType can be one of the specified string values.
-   Bay\_Number can be any integer between 1 and 9 (inclusive).
-   Total\_Power\_Required\_kW can be any integer between 1 and 100000 (inclusive).

```

```

## Code Examples

```
type SwitchgearBay {
  string BayType = ["load", "lv", "mv"];
  int Bay_Number = [1..9];
  int Total_Power_Required_kW = [1..100000];
}
```

## Related Topics

- Variable Annotations (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_variable_annotations.htm)
