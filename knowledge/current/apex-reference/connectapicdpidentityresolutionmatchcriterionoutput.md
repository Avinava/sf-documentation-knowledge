---
title: "ConnectApi.CdpIdentityResolutionMatchCriterionOutput"
domain: apex-reference
topic: connectapicdpidentityresolutionmatchcriterionoutput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:26.615Z
estimatedTokens: 337
keywords: [Identity, resolution, ruleset's, match, rule, criterion]
---

# ConnectApi.CdpIdentityResolutionMatchCriterionOutput

> Identity resolution ruleset's match rule criterion.

# ConnectApi.CdpIdentityResolutionMatchCriterionOutput

Identity resolution ruleset's match rule criterion.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| caseSensitiveMatch | Boolean | Specifies whether the criterion match is case sensitive (true) or not (false). Available only when matching is based on the party identifier. | 58.0 |
| entityName | String | API name of the Data Model Object the match rule applies to. | 57.0 |
| fieldName | String | Name of the field the criterion applies to. | 57.0 |
| matchMethodType | ConnectApi.​CdpIdentityResolution​MatchMethodType | Match method for a match rule criterion. Values are:Exact—Exact match.ExactNormalized—Exact normalized match.Fuzzy—Fuzzy match with medium precision.FuzzyHigh—Fuzzy match with high precision.FuzzyLow—Fuzzy match with low precision. | 57.0 |
| partyIdentification​Info | ConnectApi.​CdpIdentityResolution​MatchCriterionParty​IdentificationInfoOutput | Party Identifier information. | 57.0 |
| shouldMatchOnBlank | Boolean | Specifies whether blank fields can be used for matching (true) or not (false). | 57.0 |

#### See Also

-   [ConnectApi.CdpIdentityResolutionMatchRuleOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_identity_resolution_match_rule_outpu.htm "Identity resolution ruleset’s match rule.")

## Related Topics

- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​CdpIdentityResolution​MatchMethodType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.​CdpIdentityResolution​MatchCriterionParty​IdentificationInfoOutput (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_identity_resolution_match_criteria_party_identification_info_outpu.htm)
- ConnectApi.CdpIdentityResolutionMatchRuleOutput (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_identity_resolution_match_rule_outpu.htm)
