---
title: "JsonXform Transformation Resource"
domain: bi-dev-guide-rest
topic: jsonxform-transformation-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.757Z
estimatedTokens: 279
keywords: [JsonXform, Transformation, Resource, Performs, JSON, invoking, rules, expressions, document, transformed, REST, isn't, saved, server, service]
---

# JsonXform Transformation Resource

> Performs a JSON transformation by invoking a set of rules and expressions on a JSON document. The transformed JSON is returned in the REST
 response and isn't saved on the server. This service is provided to test rules used in Analytics templates.

# JsonXform Transformation Resource

Performs a JSON transformation by invoking a set of rules and expressions on a JSON document. The transformed JSON is returned in the REST response and isn't saved on the server. This service is provided to test rules used in Analytics templates.

## Resource URL

```

```

## Formats

JSON

## Available Version

43.0

## HTTP Methods

POST

## Request body for POST

[Json Transformation Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_json_transformation_input.htm "The JSON request to perform transformation rules on.")

## Response body for POST

[Json Transformation](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_json_transformation.htm "The transformed JSON after processing the transformation rules.")

For more information about testing JSON transformations, see [Rules Testing with jsonxform/transformation endpoint](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_jsonxform_transformation.htm) in the Analytics Templates Developer Guide.

## Code Examples

```
/wave/jsonxform/transformation
```

## Related Topics

- Json Transformation Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_json_transformation_input.htm)
- Json Transformation (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_json_transformation.htm)
