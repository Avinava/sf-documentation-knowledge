---
title: "ConnectApi.CdpIdentityResolutionMatchCriterionPartyIdentificationInfo"
domain: apex-reference
topic: connectapicdpidentityresolutionmatchcriterionpartyidentificationinfo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:24.818Z
estimatedTokens: 192
keywords: [Input, representation, party, identification, identity, resolution, ruleset's, match, rule, criterion]
---

# ConnectApi.CdpIdentityResolutionMatchCriterionPartyIdentificationInfo

> Input representation for information when party identification is used
      in an identity resolution ruleset's match rule criterion.

# ConnectApi.CdpIdentityResolutionMatchCriterionPartyIdentificationInfo

Input representation for information when party identification is used in an identity resolution ruleset's match rule criterion.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| partyName | String | Party identification name. | Required if the match rule criterion uses party identification for matching | 57.0 |
| partyType | String | Party identification type. | Optional | 57.0 |

#### See Also

-   [ConnectApi.CdpIdentityResolutionMatchCriterion](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_match_criteri.htm "Input representation for an identity resolution ruleset's match rule criterion.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.CdpIdentityResolutionMatchCriterion (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_match_criteri.htm)
