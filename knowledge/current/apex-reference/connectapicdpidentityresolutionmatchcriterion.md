---
title: "ConnectApi.CdpIdentityResolutionMatchCriterion"
domain: apex-reference
topic: connectapicdpidentityresolutionmatchcriterion
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:24.545Z
estimatedTokens: 367
keywords: [ConnectApi.CdpIdentityResolutionMatchCriterion, Input, representation, identity, resolution, ruleset's, match, rule, criterion.]
---

# ConnectApi.CdpIdentityResolutionMatchCriterion

> Input representation for an identity resolution ruleset's match rule
      criterion.

# ConnectApi.CdpIdentityResolutionMatchCriterion

Input representation for an identity resolution ruleset's match rule criterion.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| caseSensitiveMatch | Boolean | Specifies whether the criterion match is case sensitive (true) or not (false). Available only when matching is based on the party identifier. | Optional | 58.0 |
| entityName | String | API name of the Data Model Object the match rule applies to. | Required | 57.0 |
| fieldName | String | Name of the field the criterion applies to. | Required | 57.0 |
| matchMethodType | ConnectApi.​CdpIdentityResolution​MatchMethodType | Match method for a match rule criterion. Values are:Exact—Exact match.ExactNormalized—Exact normalized match.Fuzzy—Fuzzy match with medium precision.FuzzyHigh—Fuzzy match with high precision.FuzzyLow—Fuzzy match with low precision. | Required | 57.0 |
| partyIdentification​Info | ConnectApi.​CdpIdentityResolution​MatchCriterionParty​IdentificationInfo | Party Identifier information. | Optional | 57.0 |
| shouldMatch​OnBlank | Boolean | Specifies whether blank fields can be used for matching (true) or not (false). | Required | 57.0 |

#### See Also

-   [ConnectApi.CdpIdentityResolutionMatchRule](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_match_rul.htm "Input representation for an identity resolution ruleset’s match rule.")

## Related Topics

- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​CdpIdentityResolution​MatchMethodType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.​CdpIdentityResolution​MatchCriterionParty​IdentificationInfo (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_match_criteria_party_identification_inf.htm)
- ConnectApi.CdpIdentityResolutionMatchRule (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_match_rul.htm)
