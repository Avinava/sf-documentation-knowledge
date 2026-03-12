---
title: "Context Node List"
domain: omnistudio
topic: context-node-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:49.866Z
estimatedTokens: 142
keywords: [Context, Node, List, Output, representation, list, context, nodes.]
---

# Context Node List

> Output representation of the list of context nodes.

# Context Node List

Output representation of the list of context nodes.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contextNode​ListId | String | Unique ID of the context node list, which is required for Salesforce Lightning Design System (LDS). | Small, 59.0 | 59.0 |
| contextNodes | Context Node [] | List of context nodes. | Small, 59.0 | 59.0 |
| isSuccess | Boolean | Indicates whether the operation is successful (true) or not (false). | Small, 59.0 | 59.0 |

## Code Examples

```
{
  "contextNodeListId": "ebaf2554-88f2-4cb2-8418-cd3c250a9535",
  "contextNodes": [
    {
      "attributes": [
        {
          "attributeTags": [],
          "contextAttributeId": "11nxx000001hJm5AAE",
          "dataType": "REFERENCE",
          "domainSet": "Contact_AccountSibRef",
          "fieldType": "INPUT",
          "isKey": false,
          "isValue": false,
          "name": "ParentReference",
          "parentNodeId": "11oxx000001G3xEAAS"
        }
      ],
      "canonicalNodeId": "11oxx000001G1CGAA0",
      "childNodes": [],
      "contextDefinitionVersionId": "11pxx0000004UvYAAU",
      "contextNodeId": "11oxx000001G3xEAAS",
      "displayName": "Mobile_Contact_AccountSibRef",
      "isTransposable": false,
      "name": "Mobile_Contact_AccountSibRef",
      "parentNodeId": "11oxx000001G1AeAAK",
      "tags": []
    }
  ],
  "isSuccess": true
}
```

## Related Topics

- Context
                  Node [] (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_node.htm)
