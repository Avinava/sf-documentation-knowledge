---
title: "patchInsuranceCheckPlansEligibility(plansEligibilityInputParamWithContextId, memberId)"
domain: insurance-developer-guide
topic: patchinsurancecheckplanseligibilityplanseligibilityinputparamwithcontextid-membe
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.930Z
estimatedTokens: 328
keywords: [patchInsuranceCheckPlansEligibility, plansEligibilityInputParamWithContextId, memberId, Check, eligibility, group, census, member, added, deleted, plans, context, API, Version, Requires]
---

# patchInsuranceCheckPlansEligibility(plansEligibilityInputParamWithContextId, memberId)

> Check the eligibility of a group census member for a set of added and deleted plans
  within an existing context.

# patchInsuranceCheckPlansEligibility(plansEligibilityInputParamWithContextId, memberId)

Check the eligibility of a group census member for a set of added and deleted plans within an existing context.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.InsurancePlansEligibilityOutputRepresentation patchInsuranceCheckPlansEligibility(ConnectApi.InsurancePlansEligibilityPatchInputRepresentation plansEligibilityInputParamWithContextId, String memberId)

## Parameters

plansEligibilityInputParamWithContextId

Type: [ConnectApi.InsurancePlansEligibilityPatchInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_plans_eligibility_patch.htm "Input representation for checking plan eligibility by updating an existing context.")

Input representation that contains the context ID and the plans that must be added or removed.

memberId

Type: String

ID of the group census member whose eligibility must be checked.

## Return Value

Type: [ConnectApi.InsurancePlansEligibilityOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_plans_eligibility.htm "Output representation for the employee plan eligibility check.")

## Example

```

```

## Code Examples

```apex
// Plans Eligibility (PATCH) via Connect API

// 1) Build the patch input
ConnectApi.InsurancePlansEligibilityPatchInputRepresentation input =
    new ConnectApi.InsurancePlansEligibilityPatchInputRepresentation();

// Required: contextId from a prior eligibility session (POST response)
input.contextId = '0000000i14tq18g00291764218838971ecb8e4a0905c434cbe3f9beeb9f0739e';

// Plans to add
ConnectApi.InsuranceGroupPlanInputRepresentation addPlan =
    new ConnectApi.InsuranceGroupPlanInputRepresentation();
addPlan.planId = '0rgSG0000000fjBYAQ';
input.addedPlans = new List<ConnectApi.InsuranceGroupPlanInputRepresentation>{ addPlan };

// Plans to remove
ConnectApi.InsuranceGroupPlanInputRepresentation removePlan =
    new ConnectApi.InsuranceGroupPlanInputRepresentation();
removePlan.planId = '0rgSG0000000fUlYAI';
input.deletedPlans = new List<ConnectApi.InsuranceGroupPlanInputRepresentation>{ removePlan };

// 2) Execute the PATCH with the same Group Census Member Id
String memberId = '0r6SG00000091EbYAI';

try {
    ConnectApi.InsurancePlansEligibilityOutputRepresentation result =
        ConnectApi.InsuranceGroupBenefitsFamily.patchInsuranceCheckPlansEligibility(
            input,
            memberId
        );

    System.debug('Eligibility (PATCH) result: ' + JSON.serializePretty(result));
} catch (Exception e) {
    System.debug('Eligibility (PATCH) error: ' + e.getMessage());
}
```

## Related Topics

- ConnectApi.InsurancePlansEligibilityPatchInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_plans_eligibility_patch.htm)
- ConnectApi.InsurancePlansEligibilityOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_plans_eligibility.htm)
