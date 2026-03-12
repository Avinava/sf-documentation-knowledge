---
title: "MatchResult"
domain: api
topic: matchresult
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.780Z
estimatedTokens: 392
keywords: [MatchResult, duplicate, results, matching, rule, Usage, Java, Sample]
---

# MatchResult

> Represents the duplicate results for a matching rule.

# MatchResult

Represents the duplicate results for a matching rule.

A MatchResult object has these fields.

| Field | Details |
| --- | --- |
| errors | TypeError[]DescriptionErrors that occurred during matching for the matching rule. |
| entityType | TypestringDescriptionThe entity type of the matching rule. |
| matchEngine | TypestringDescriptionThe match engine for the matching rule. |
| matchRecords | TypeMatchRecord[]DescriptionInformation about the duplicates detected by the matching rule. |
| rule | TypestringDescriptionThe developer name of the matching rule that detected duplicates. |
| size | TypeintDescriptionThe number of duplicates detected by the matching rule. |
| success | TypebooleanDescriptiontrue if the matching rule successfully ran. false if there’s an error with the matching rule. |

## Usage

MatchResult and its constituent objects are available to organizations that use duplicate rules.

There’s one MatchResult for each saved record that has duplicates. The MatchResult contains all duplicates for that saved record.

## Java Sample

Here’s a sample that shows how to display the ID and type of all duplicates detected when leads are saved. See [DuplicateResult](atlas.en-us.api.meta/api/sforce_api_objects_duplicateresult.htm#sforce_api_objects_duplicateresult "Represents the details of a duplicate rule that detected duplicate records and information about those duplicate records.") for a full code sample that shows how to block users from entering duplicate leads and display an alert and a list of duplicates.

```

```

## Code Examples

```apex
for (MatchResult m : dupeResult.getMatchResults()) {
    if (m.isSuccess()) {
        System.out.println("The match rule that was triggered was " + m.getRule());
        for (MatchRecord mr : m.getMatchRecords()) {
            System.out.println("Your record matched " + mr.getRecord().getId() + " of type "
                + mr.getRecord().getType());
            System.out.println("The match confidence is " + mr.getMatchConfidence());
        }
    }
}
```

## Related Topics

- Error (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- MatchRecord (atlas.en-us.api.meta/api/sforce_api_objects_matchrecord.htm)
- DuplicateResult (atlas.en-us.api.meta/api/sforce_api_objects_duplicateresult.htm)
