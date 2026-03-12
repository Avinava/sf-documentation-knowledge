---
title: "Tag Record Assignment Collection"
domain: omnistudio
topic: tag-record-assignment-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:50.808Z
estimatedTokens: 93
keywords: [Tag, Record, Assignment, Collection, Output, representation, collection, record, assignments, Interest, Tag.]
---

# Tag Record Assignment Collection

> Output representation of a collection of record assignments for an
      Interest Tag.

# Tag Record Assignment Collection

Output representation of a collection of record assignments for an Interest Tag.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| assignments | Tag Record Assignment[] | List of record assignments for an Interest Tag. | Small, 54.0 | 54.0 |

## Code Examples

```
{
   "assignments":
   [
       {
           "recordId":"001i000001AWbWuabc",
           "objectName":"Account",
           "recordName":"Square Pizza"
       },
       {
           "recordId":"003i000001AWbWugpu",
           "objectName":"Contact",
           "recordName":"Steven Crowder"
       }
   ]
}
```

## Related Topics

- Tag Record Assignment (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_tag_record_assignmen.htm)
