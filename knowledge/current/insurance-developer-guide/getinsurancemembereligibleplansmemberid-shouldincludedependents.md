---
title: "getInsuranceMemberEligiblePlans(memberId, shouldIncludeDependents)"
domain: insurance-developer-guide
topic: getinsurancemembereligibleplansmemberid-shouldincludedependents
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.922Z
estimatedTokens: 235
keywords: [getInsuranceMemberEligiblePlans, memberId, shouldIncludeDependents, enrollment, plans, group, census, member, their, dependents, eligible, API, Version, Requires, Chatter]
---

# getInsuranceMemberEligiblePlans(memberId, shouldIncludeDependents)

> Get the enrollment plans for which a group census member and their dependents are
  eligible.

# getInsuranceMemberEligiblePlans(memberId, shouldIncludeDependents)

Get the enrollment plans for which a group census member and their dependents are eligible.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.InsuranceGetMembersPlans getInsuranceMemberEligiblePlans(String memberId, Boolean shouldIncludeDependents)

## Parameters

memberId

Type: String

ID of the group census member.

shouldIncludeDependents

Type: Boolean

Indicates whether to include eligible plans for the member's dependents in the response (true) or not (false).

## Return Value

Type: [ConnectApi.InsuranceGetMembersPlans](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_get_members_plans.htm "Output representation for a member's eligible plans.")

## Example

Here's an example of how to invoke the Insurance Get Member Eligible Plans API from Apex code.

```

```

## Code Examples

```apex
// Get Member Eligible Plans via Connect API (simple version)

// Replace with an existing Group Census Member Id
String memberId = '0r6xx00000007BrAAI';

// Optional: include dependents’ plans (requires API version >= 258)
Boolean includeDependents = true;

try {
    ConnectApi.InsuranceGetMembersPlans result =
        ConnectApi.InsuranceGroupBenefitsFamily.getInsuranceMemberEligiblePlans(memberId, includeDependents);

    System.debug('Eligible Plans response: ' + JSON.serializePretty(result));
} catch (Exception e) {
    System.debug('Error while fetching eligible plans: ' + e.getMessage());
}
```

## Related Topics

- ConnectApi.InsuranceGetMembersPlans (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_get_members_plans.htm)
