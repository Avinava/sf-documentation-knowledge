---
title: "Decision Model Notation Export (POST)"
domain: omnistudio
topic: decision-model-notation-export-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.593Z
keywords: [Decision, Model, Notation, Export, POST, See]
---

# Decision Model Notation Export (POST)

# Decision Model Notation Export (POST)

Export decision matrix data to a file in the DMN (Decision Model Notation) format, an easily readable format for business rules designed by Object Management Group.

Resource

```

```

Resource Example

```

```

Available version

58.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| decision​Model​EntityIds | String[] | A list of decision matrix version IDs to export data from. | Required | 58.0 |

Response body for POST

[Decision Model Export Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_decision_model_export_output.htm "Output representation of a completed DMN (Decision Model Notation) export request.")

#### See Also

-   [DMN (Decision Model Notation)](https://www.omg.org/dmn/#:~:text=DMN%20is%20a%20modeling%20language,monitor%20their%20application%3B%20business%20analysts. "DMN (Decision Model Notation) - HTML (New Window)")