---
title: "Question Responses Input"
domain: omnistudio
topic: question-responses-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.645Z
estimatedTokens: 102
keywords: [Question, Responses, Input, assessment]
---

# Question Responses Input

> Input for assessment question responses.

# Question Responses Input

Input for assessment question responses.

JSON example

The properties under questionResponses are in the following format:

```

```

For example:

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| question​Responses | Map<String, Object> | Responses map for Assessment Questions. | Optional | 60.0 |

## Code Examples

```
{
  "questionResponses": {
    "Element_APIName or AssessmentQuestion uniqueIndex 1": "value",
    "Element_APIName or AssessmentQuestion uniqueIndex 2": {
      "Child_element_APIName or Question uniqueIndex 1": "value",
      "Child_element_APIName or Question uniqueIndex 2": "value",
     ...
    }
  }
}
```

```
{
  "questionResponses": {
    "ootb__DF_API_MSelect1": "Y;N",
    "ootb__DF_API_MSelect2": "1;2;3",
    "ootb__DF_API_RG1": {
      "ootb__DF_API_Radio1": "Y",
      "ootb__DF_API_Radio2": "N",
      "ootb__DF_API_Radio3": "M"
    },
    "ootb__DF_API_Text": "TestingDF",
    "ootb__DF_API_Select1": "1",
    "ootb__DF_API_Select2": "w",
    "ootb__DF_API_EditBlock2": {
      "ootb__DF_API_Int": 5
    },
    "ootb__DF_API_Boolean": true,
    "ootb__DF_API_Formula": true
  }
}
```
