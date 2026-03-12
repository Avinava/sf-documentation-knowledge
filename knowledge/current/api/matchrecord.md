---
title: "MatchRecord"
domain: api
topic: matchrecord
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.774Z
estimatedTokens: 365
keywords: [MatchRecord, duplicate, record, detected, matching, rule, Usage, Java, Sample]
---

# MatchRecord

> Represents a duplicate record detected by a matching rule.

# MatchRecord

Represents a duplicate record detected by a matching rule.

## Fields

| Field | Details |
| --- | --- |
| additionalInformation | TypeAdditionalInformationMapDescriptionOther information about matched records. |
| fieldDiffs | TypeFieldDiff[]DescriptionMatching rule fields and how each field value compares for the duplicate and its matching record. |
| matchConfidence | TypedoubleDescriptionThe ranking of how similar a matched record’s data is to the data in your request. Must be equal to or greater than the value of the minMatchConfidence specified in your request. Returns -1 if unused. |
| record | TypesObjectDescriptionThe fields and field values for the duplicate record. |

## Usage

MatchRecord and its constituent objects are available to organizations that use duplicate rules.

Each MatchRecord represents a duplicate detected when a record is saved. There can be multiple MatchRecord objects for a saved record if multiple duplicates are detected.

## Java Sample

Here is a sample that shows how to display the ID and type of all duplicates detected when a lead is saved. See [DuplicateResult](atlas.en-us.api.meta/api/sforce_api_objects_duplicateresult.htm "Represents the details of a duplicate rule that detected duplicate records and information about those duplicate records.") for a full code sample that shows how to block users from entering duplicate leads and display an alert and a list of duplicates.

```

```

## Code Examples

```apex
for (MatchRecord mr : m.getMatchRecords()) {
    System.out.println("Your record matched " + mr.getRecord().getId() + " of type "
        + mr.getRecord().getType());
    System.out.println("The match confidence is " + mr.getMatchConfidence());
}
```

## Related Topics

- AdditionalInformationMap (atlas.en-us.api.meta/api/sforce_api_objects_additionalinformationmap.htm)
- FieldDiff (atlas.en-us.api.meta/api/sforce_api_objects_fielddiff.htm)
- DuplicateResult (atlas.en-us.api.meta/api/sforce_api_objects_duplicateresult.htm)
