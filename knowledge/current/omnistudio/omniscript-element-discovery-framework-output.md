---
title: "Omniscript Element Discovery Framework Output"
domain: omnistudio
topic: omniscript-element-discovery-framework-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:50.446Z
estimatedTokens: 389
namespace: String
keywords: [Omniscript, Element, Discovery, Framework, Output, representation, custom, details, elements, Framework., Note]
---

# Omniscript Element Discovery Framework Output

> Output representation of the custom type details of the Omniscript elements for
    Discovery Framework.

**Namespace:** `String`

# Omniscript Element Discovery Framework Output

Output representation of the custom type details of the Omniscript elements for Discovery Framework.

JSON example

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

When you receive a GET response, HTML replaces reserved characters with their corresponding entities. For example, "What's your address" will appear as "What&#39; s your address."

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Description of the question for the Discovery Framework question type element. | Small, 63.0 | 63.0 |
| displayTextCategory | String | The category of the display text when the data type is Text Block. This field valued is returned for Health Cloud customers only. | Small, 63.0 | 63.0 |
| question​Category | String | Category of the question for the Discovery Framework question type element. | Small, 60.0 | 60.0 |
| question​DataType | String | Data type of the question for the Discovery Framework question type element. | Small, 60.0 | 60.0 |
| question​Developer​Name | String | Developer name of the question for the Discovery Framework question type element. | Small, 60.0 | 60.0 |
| question​Namespace | String | Namespace of the question for the Discovery Framework question type element. | Small, 60.0 | 60.0 |
| question​Text | String | Text of the question for the Discovery Framework question type element. | Small, 60.0 | 60.0 |

## Code Examples

```
"discoveryFramework": {
       "questionText": "Can you provide more details about the transaction"
    }
```
