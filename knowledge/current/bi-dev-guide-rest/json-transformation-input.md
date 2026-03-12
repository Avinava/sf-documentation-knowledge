---
title: "Json Transformation Input"
domain: bi-dev-guide-rest
topic: json-transformation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.751Z
estimatedTokens: 261
keywords: [Json, Transformation, Input, perform, rules]
---

# Json Transformation Input

> The JSON request to perform transformation rules on.

# Json Transformation Input

The JSON request to perform transformation rules on.

Properties

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| definition | Rule​Definition​Input | The definition of constants, macros, and rules to apply to the provided document parameter. | Required | 43.0 |
| document | Map<String, Object> | The arbitrary JSON document to run the rules from the definition parameter against. | Required | 43.0 |
| values | Map<String, Object> | A map of value objects used to resolve variables in the definition parameter expressions | Required | 43.0 |

#### See Also

-   [JsonXform Transformation Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_jsonxform_transformation.htm "Performs a JSON transformation by invoking a set of rules and expressions on a JSON document. The transformed JSON is returned in the REST response and isn't saved on the server. This service is provided to test rules used in Analytics templates.")

## Related Topics

- Rule​Definition​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_rule_definition_input.htm)
- JsonXform Transformation Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_jsonxform_transformation.htm)
