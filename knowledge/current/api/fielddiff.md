---
title: "FieldDiff"
domain: api
topic: fielddiff
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.770Z
estimatedTokens: 286
keywords: [FieldDiff, matching, rule, how, compare, duplicate, record, Java, Sample]
---

# FieldDiff

> Represents the name of a matching rule field and how the values of the field compare for the duplicate and its matching record.

# FieldDiff

Represents the name of a matching rule field and how the values of the field compare for the duplicate and its matching record.

## Fields

| Field | Details |
| --- | --- |
| difference | TypedifferenceTypeDescriptionHow the values of the matching rule field compare for the duplicate and its matching record.Possible values include:Same: Indicates the field values match exactly.Different: Indicates that the field values do not match.Null: Indicates that the field values are a match because both values are blank. |
| name | TypestringDescriptionThe name of a field on a matching rule that detected duplicates. |

## Java Sample

Here is a sample that shows how to display the matching rule field differences when a duplicate is detected. See [DuplicateResult](atlas.en-us.api.meta/api/sforce_api_objects_duplicateresult.htm#sforce_api_objects_duplicateresult "Represents the details of a duplicate rule that detected duplicate records and information about those duplicate records.") for a full code sample that shows how to block users from entering duplicate leads and display an alert and a list of duplicates.

```

```

## Code Examples

```apex
for (FieldDiff f : mr.getFieldDiffs()) {
    System.out.println("For field " + f.getName() + " field difference is "
        + f.getDifference().name());
}
```

## Related Topics

- DuplicateResult (atlas.en-us.api.meta/api/sforce_api_objects_duplicateresult.htm)
