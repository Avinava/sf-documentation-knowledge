---
title: "configurable Annotation"
domain: revenue-cloud
topic: configurable-annotation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-05-10T00:39:02.180Z
estimatedTokens: 1152
keywords: [configurable, Annotation, CML, whether, model, configured, Configurator, Result]
---

> configurable is a CML annotation that controls whether
    a model element can be configured.

# configurable Annotation

configurable is a CML annotation that controls whether a model element can be configured.

configurable annotation specification: Variable

| Annotation | configurable |
| --- | --- |
| Applicable to | Variable |
| Value Type/Values | true, false |
| Description | If the configurable annotation is not explicitly specified, the engine sets it implicitly as true for the variable.If the configurable annotation is explicitly specified as true, the variable is indicated as configurable. The engine sets the value to the variable.If the configurable annotation is explicitly specified as false, the engine doesn't set a value to the variable. |

## Example 1

In this example, the configurable annotation is not specified for the variable (Cable Entry) of the VoltageConnection child products. The defaultValue is not defined.

```

```

## Example Description and Configurator Result

In this example, the configurable annotation is not explicitly specified for the variable cableEntry, but the system considers it as configurable = true by default. As a result, the system sets the "Top Entry" (the first value in the \["Top Entry", "Bottom Entry", "Side Entry"\] CML domain) as the initial value for the configurable Cable Entry variable.

## Example 2

In this example, the configurable annotation is specified as true for the variable (Cable Entry) of the VoltageConnection child products. The defaultValue is not specified.

```

```

## Example Description and Configurator Result

In this example, the configurable annotation is true for the variable. As a result, the system specifies the variable as configurable and sets the "Top Entry" (the first value in the \["Top Entry", "Bottom Entry", "Side Entry"\] CML domain) as the initial value for the Cable Entry.

## Example 3

In this example, the configurable annotation is specified as false for the variable (Cable Entry) of the VoltageConnection child products. The defaultValue is not specified

```

```

## Example Description and Configurator Result

In this example, the configurable annotation is false for the variable. As a result, the engine doesn't configure the variable with an initial value, and it is displayed empty on the Product Configuration UI.

## Example 4

In this example, the configurable is false and defaultValue annotation is true for the variable (Cable Entry) of the VoltageConnection child products.

```

```

## Example Description and Configurator Result

In this example, the system indicates the variable as configurable and sets the "Side Entry" as the initial value for the Cable Entry defined in the defaultValue annotation.

## Example 5

In this example, the configurable and defaultValue annotations are specified for the variable (Cable Entry) of the VoltageConnection child products.

```

```

## Example Description and Configurator Result

In this example, the system sets the "Side Entry" as the initial value for the Cable Entry according to the defaultValue annotation.

| Associated Example | Product Group Structure | Applicable to | "CONFIGURABLE" annotation | User Action | Engine Action | UI Behavior |
| --- | --- | --- | --- | --- | --- | --- |
| Example 1 | Individual product | Variable | not specified | Configure the product containing variable | Set the first value from the variable domain as initial value.If the User changes the variable value manually, reset it back to the first value from the variable domain.If the default value is defined in PCM, reset it back to the first value from the variable domain | Display defined by engine variable value as the default value |
| Example 2Example 4 | Individual product | Variable | TRUE | Configure the product containing variable | Set the first value from the variable domain as initial valueIf the User changes the variable value manually, reset it back to the first value from the variable domain.If the default value is defined in PCM, reset it back to the first value from the variable domainIf the defaultValue annotation is specified for the variable, set it as initial value | Display defined by engine variable value as the default value |
| Example 3Example 5 | Individual product | Variable | FALSE | Configure the product containing variable | Set emptiness for the variable as initial value (If the default value is specified in PCM for the variable, set it as initial value instead of emptiness).If the defaultValue annotation is specified for the variable, set it as initial value (despite of the PCM default value) | Display defined by engine or PCM variable value as the default value |

## Code Examples

```
type GeneratorSet {
    relation voltageConnections : VoltageConnection[1..999999];
}
type VoltageConnection {
    string cableEntry = ["Top Entry", "Bottom Entry", "Side Entry"];
}
```

```
type GeneratorSet {
    relation voltageConnections : VoltageConnection[1..999999];
}
type VoltageConnection {
    @(configurable = true)
    string cableEntry = ["Top Entry", "Bottom Entry", "Side Entry"];
}
```

```
type GeneratorSet {
    relation voltageConnections : VoltageConnection[1..999999];
}
type VoltageConnection {
    @(configurable = false)
    string cableEntry = ["Top Entry", "Bottom Entry", "Side Entry"];
}
```

```
type GeneratorSet {
    relation voltageConnections : VoltageConnection[1..999999];
}
type VoltageConnection {
    @(configurable = true, defaultValue = "Side Entry")
    string cableEntry = ["Top Entry", "Bottom Entry", "Side Entry"];
}
```

```
type GeneratorSet {
    relation voltageConnections : VoltageConnection[1..999999];
}
type VoltageConnection {
    @(configurable = false, defaultValue = "Side Entry")
    string cableEntry = ["Top Entry", "Bottom Entry", "Side Entry"];
}
```
