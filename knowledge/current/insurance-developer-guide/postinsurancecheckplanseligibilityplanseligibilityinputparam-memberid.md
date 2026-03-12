---
title: "postInsuranceCheckPlansEligibility(plansEligibilityInputParam, memberId)"
domain: insurance-developer-guide
topic: postinsurancecheckplanseligibilityplanseligibilityinputparam-memberid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.949Z
estimatedTokens: 307
keywords: [postInsuranceCheckPlansEligibility, plansEligibilityInputParam, memberId, Check, eligibility, group, census, member, plans, new, context, API, Version, Requires, Chatter]
---

# postInsuranceCheckPlansEligibility(plansEligibilityInputParam, memberId)

> Check the eligibility of a group census member for a given set of plans and create a new
  eligibility context.

# postInsuranceCheckPlansEligibility(plansEligibilityInputParam, memberId)

Check the eligibility of a group census member for a given set of plans and create a new eligibility context.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.InsurancePlansEligibilityOutputRepresentation postInsuranceCheckPlansEligibility(ConnectApi.InsurancePlansEligibilityPostInputRepresentation plansEligibilityInputParam, String memberId)

## Parameters

plansEligibilityInputParam

Type: [ConnectApi.InsurancePlansEligibilityPostInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_plans_eligibility_post.htm "Input representation for checking plan eligibility by creating a new context.")

Input representation that contains the list of plans to check.

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
// Plans Eligibility (POST) via Connect API

// 1) Build the input with plans
ConnectApi.InsurancePlansEligibilityPostInputRepresentation input =
    new ConnectApi.InsurancePlansEligibilityPostInputRepresentation();

// Each plan requires a Contract Group Plan Id
ConnectApi.InsuranceGroupPlanInputRepresentation plan1 =
    new ConnectApi.InsuranceGroupPlanInputRepresentation();
plan1.planId = '0rgSG0000000fXPYAY';

// Optionally add coverages under the plan if applicable
// plan1.coverages = new List<ConnectApi.InsuranceGroupPlanInputRepresentation>{ /* coverage items */ };

// Provide one or more plans
input.plans = new List<ConnectApi.InsuranceGroupPlanInputRepresentation>{ plan1 };

// 2) Execute the POST with the Group Census Member Id
String memberId = '0r6SG0000008n3CYAQ';

try {
    ConnectApi.InsurancePlansEligibilityOutputRepresentation result =
        ConnectApi.InsuranceGroupBenefitsFamily.postInsuranceCheckPlansEligibility(
            input,
            memberId
        );

    System.debug('Eligibility (POST) result: ' + JSON.serializePretty(result));
} catch (Exception e) {
    System.debug('Eligibility (POST) error: ' + e.getMessage());
}
```

## Related Topics

- ConnectApi.InsurancePlansEligibilityPostInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_plans_eligibility_post.htm)
- ConnectApi.InsurancePlansEligibilityOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_plans_eligibility.htm)
