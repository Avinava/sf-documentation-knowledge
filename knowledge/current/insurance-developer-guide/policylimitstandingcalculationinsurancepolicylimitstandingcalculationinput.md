---
title: "PolicyLimitStandingCalculation(InsurancePolicyLimitStandingCalculationInput)"
domain: insurance-developer-guide
topic: policylimitstandingcalculationinsurancepolicylimitstandingcalculationinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:37:49.294Z
estimatedTokens: 267
keywords: [PolicyLimitStandingCalculation, Calculate, current, standing, policy, limits, API, Requires, Chatter]
---

> Calculate the current standing for policy limits.

# PolicyLimitStandingCalculation(InsurancePolicyLimitStandingCalculationInput)

Calculate the current standing for policy limits.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.InsPolicyLmtCalcStandingRepresentation PolicyLimitStandingCalculation(ConnectApi.InsPolicyLmtCurrentStandingsInputRep InsurancePolicyLimitStandingCalculationInput)

## Parameters

InsurancePolicyLimitStandingCalculationInput

Type: [ConnectApi.InsPolicyLmtCurrentStandingsInputRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_ins_policy_lmt_current_standings.htm "Input representation for the current standings of the insurance policy limits.")

Details to calculate the current standings of the insurance policy limits.

## Return Value

Type: [ConnectApi.InsPolicyLmtCalcStandingRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_ins_policy_lmt_calc_standing.htm "Output representation for the current standings of the insurance policy limits.")

## Related Topics

- ConnectApi.InsPolicyLmtCurrentStandingsInputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_ins_policy_lmt_current_standings.htm)
- ConnectApi.InsPolicyLmtCalcStandingRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_ins_policy_lmt_calc_standing.htm)
