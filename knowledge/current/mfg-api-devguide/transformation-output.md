---
title: "Transformation Output"
domain: mfg-api-devguide
topic: transformation-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.022Z
estimatedTokens: 128
keywords: [Transformation, Output, source, target]
---

# Transformation Output

> Represents the details of the transformation from source object to
      target object.

# Transformation Output

Represents the details of the transformation from source object to target object.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| outputObjectDetails | Object Details Output[] | Provides information on the input and output IDs, error details, and the status of the transformation. | Small, 55.0 | 55.0 |
| status | String | The status of the transformation request. | Small, 55.0 | 55.0 |

## Code Examples

```
{
  "outputObjectDetails": [
    {
      "outputId": "Y_id1",
      "inputIds": [
        "X_id1",
        "X_id2"
      ]
    }
  ], 
  "errorDetails": [
    {
      "inputIds": [
        "X_id3",
        "X_id4"
      ],
      "errorReason": "Mandatory field1 missing value"
    }
  ],
  "Status" : ""
}
```

## Related Topics

- Object
                  Details Output (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/connect_responses_output_object_detail.htm)
