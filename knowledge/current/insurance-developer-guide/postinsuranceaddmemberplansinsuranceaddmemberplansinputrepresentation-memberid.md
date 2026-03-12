---
title: "postInsuranceAddMemberPlans(insuranceAddMemberPlansInputRepresentation, memberId)"
domain: insurance-developer-guide
topic: postinsuranceaddmemberplansinsuranceaddmemberplansinputrepresentation-memberid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.940Z
estimatedTokens: 293
keywords: [postInsuranceAddMemberPlans, memberId, Add, plans, group, census, member, API, Version, Requires, Chatter]
---

# postInsuranceAddMemberPlans(insuranceAddMemberPlansInputRepresentation, memberId)

> Add plans for a group census member.

# postInsuranceAddMemberPlans(insuranceAddMemberPlansInputRepresentation, memberId)

Add plans for a group census member.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.InsuranceAddMemberPlansOutputRepresentation postInsuranceAddMemberPlans(ConnectApi.InsuranceAddMemberPlansInputRepresentation insuranceAddMemberPlansInputRepresentation, String memberId)

## Parameters

insuranceAddMemberPlansInputRepresentation

Type: [ConnectApi.InsuranceAddMemberPlansInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_add_member_plans.htm "Input representation for adding plans to a group census member.")

Details to add plans.

memberId

Type: String

ID of the group census member to add plans for.

## Return Value

Type: [ConnectApi.InsuranceAddMemberPlansOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_add_member_plans.htm "Output representation for adding plans to a member.")

## Example

Here's an example of how to invoke the Insurance Add Member Plans API from Apex code.

```

```

## Code Examples

```apex
// Add Member Plan(s) for a Group Census Member via Connect API (simple version)

// 1) Create the top-level input
ConnectApi.InsuranceAddMemberPlansInputRepresentation input = new ConnectApi.InsuranceAddMemberPlansInputRepresentation();

// 2) Build one or more member plan entries
//    Required: contractGroupPlanId (the plan you want to add for the member)
//    Tip: You don't need to set groupCensusMemberId on each plan here because it's passed as a separate argument.
List<ConnectApi.GroupCensusMemberPlanInputRepresentation> plans = new List<ConnectApi.GroupCensusMemberPlanInputRepresentation>();

ConnectApi.GroupCensusMemberPlanInputRepresentation plan1 = new ConnectApi.GroupCensusMemberPlanInputRepresentation();
plan1.contractGroupPlanId = '0rgxx000000003kAAA'; // e.g., a2Cxx0000001234AAA
// Optional fields:
// plan1.name = 'Employee Medical Gold';
// plan1.id = 'existingMemberPlanIdIfUpdating'; // not used for add
plans.add(plan1);

ConnectApi.GroupCensusMemberPlanInputRepresentation plan2 = new ConnectApi.GroupCensusMemberPlanInputRepresentation();
plan2.contractGroupPlanId = '0rgxx000000003jAAA';
// If adding more plans, repeat and add to the list
plans.add(plan2);

// 3) Wrap plans list into the input
//    The wrapper expects a list container object
input.groupCensusMemberPlans = plans;

// 4) Execute the POST API
//    URL param is the Group Census Member Id the plans will be added to
String memberId = '0r6xx00000009CzAAI';

try {
    ConnectApi.InsuranceAddMemberPlansOutputRepresentation result =
        ConnectApi.InsuranceGroupBenefitsFamily.postInsuranceAddMemberPlans(input, memberId);

    System.debug('Add Member Plans result: ' + JSON.serializePretty(result));
} catch (Exception e) {
    System.debug('Error while adding member plans: ' + e.getMessage());
}
```

## Related Topics

- ConnectApi.InsuranceAddMemberPlansInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_add_member_plans.htm)
- ConnectApi.InsuranceAddMemberPlansOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_add_member_plans.htm)
