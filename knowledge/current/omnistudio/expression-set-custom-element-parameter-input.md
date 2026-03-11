---
title: "Expression Set Custom Element Parameter Input"
domain: omnistudio
topic: expression-set-custom-element-parameter-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.266Z
keywords: [Expression, Set, Custom, Element, Parameter, Input]
---

# Expression Set Custom Element Parameter Input

# Expression Set Custom Element Parameter Input

Input representation of a custom element parameter in an expression set.

Root XML tag

<ExpressionSetCustomElementParameterInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| input | Boolean | Indicates whether the custom element parameter is an input parameter (true) or not (false). | Required | 58.0 |
| name | String | Name of the custom element parameter. | Required | 58.0 |
| output | Boolean | Indicates whether the custom element parameter is an output parameter (true) or not (false). | Required | 58.0 |
| type | String | Type of custom element parameter.Valid values are:FormulaLiteralLookupParameterPicklistThe default value is Parameter. | Optional | 58.0 |
| value | String | Name of the expression set variable. | Required | 58.0 |