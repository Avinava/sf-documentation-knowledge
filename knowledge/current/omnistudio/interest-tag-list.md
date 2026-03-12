---
title: "Interest Tag List"
domain: omnistudio
topic: interest-tag-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:50.346Z
estimatedTokens: 73
keywords: [Interest, Tag, List, Output, representation, list, Tags.]
---

# Interest Tag List

> Output representation of the list of Interest Tags.

# Interest Tag List

Output representation of the list of Interest Tags.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| tags | Interest Tag[] | The list of Interest Tags. | Small, 54.0 | 54.0 |

## Code Examples

```
{
  "tags" : [ {
    "categories" : [ {
      "categoryId" : "0qRxx0000000001EAA",
      "name" : "life",
      “icon” : “custom:custom11”,
    }, {
      "categoryId" : "0qRxx000000001dEAA",
      "name" : "travel",
      “icon” : “custom:custom11”,
    } ],
    "name" : "fishing",
    "tagId" : "0qOxx0000004C93EAE",
    “recordAssignmentId” : “0qRxx0000004C9mm”,
  }, {
    "categories" : [ {
      "categoryId" : "0qRxx0000000001EAA",
      "name" : "life",
      “icon” : “custom:custom11”,
    } ],
    "name" : "flower",
    "tagId" : "0qOxx0000004C94EAE",
    “recordAssignmentId” : “0qRxx0000004C9mm”,
  }, {
    "categories" : [ {
      "categoryId" : "0qRxx0000000001EAA",
      "name" : "life",
      “icon” : “custom:custom11”,
    } ],
    "name" : "rose",
    "tagId" : "0qOxx0000004C95EAE",
    “recordAssignmentId” : “0qRxx0000004C9mm”,
  }, {
    "categories" : [ {
      "categoryId" : "0qRxx0000000001EAA",
      "name" : "life",
      “icon” : “custom:custom11”,
    } ],
    "name" : "school",
    "tagId" : "0qOxx0000004C92EAE",
    “recordAssignmentId” : “0qRxx0000004C9mm”
  } ]
}
```

## Related Topics

- Interest
                  Tag (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_interest_tag.htm)
