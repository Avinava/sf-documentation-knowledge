---
title: "match()"
domain: api
topic: match
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.405Z
estimatedTokens: 216
keywords: [match, Evaluates, sObjects, provided, input, matches, among, Leads, matching, rule, MatchOptions, call, Standard, Accounts, Arguments]
---

# match()

> Evaluates sObjects provided as an input for matches among Leads, using
      the matching rule specified in the input MatchOptions. This call can be used only with the
      Standard Matching Rule for Leads on Accounts.

# match()

Evaluates sObjects provided as an input for matches among Leads, using the matching rule specified in the input MatchOptions. This call can be used only with the Standard Matching Rule for Leads on Accounts.

This operation is available in API versions 42.0 and later, in **Professional**, **Enterprise**, **Performance**, and **Unlimited** Editions with **Pardot Pro** or **Pardot Ultimate** Edition.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| inputSObjectArray | Array of sObject | A list of sObjects to evaluate for matches. |
| matchOptions | MatchOptions | Options, such as the match rule, used during the match operation. |

## Response

[MatchResult](atlas.en-us.api.meta/api/sforce_api_objects_matchresult.htm#sforce_api_objects_matchresult "Represents the duplicate results for a matching rule.")

## Code Examples

```
MatchResult[] callResults = connection.match(SObject[] inputSObjectArray, MatchOptions
   matchOptions);
```

## Related Topics

- MatchOptions (atlas.en-us.api.meta/api/sforce_api_calls_matchoptions.htm)
- MatchResult (atlas.en-us.api.meta/api/sforce_api_objects_matchresult.htm)
