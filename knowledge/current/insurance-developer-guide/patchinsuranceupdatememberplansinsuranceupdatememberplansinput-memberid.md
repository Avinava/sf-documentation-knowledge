---
title: "patchInsuranceUpdateMemberPlans(insuranceUpdateMemberPlansInput, memberId)"
domain: insurance-developer-guide
topic: patchinsuranceupdatememberplansinsuranceupdatememberplansinput-memberid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.934Z
estimatedTokens: 315
keywords: [patchInsuranceUpdateMemberPlans, insuranceUpdateMemberPlansInput, memberId, plans, associated, group, census, member, API, Version, Requires, Chatter]
---

# patchInsuranceUpdateMemberPlans(insuranceUpdateMemberPlansInput, memberId)

> Update the plans that are associated with a group census member.

# patchInsuranceUpdateMemberPlans(insuranceUpdateMemberPlansInput, memberId)

Update the plans that are associated with a group census member.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.InsuranceUpdateMemberPlansOutputRepresentation patchInsuranceUpdateMemberPlans(ConnectApi.InsuranceUpdateMemberPlansInputRepresentation insuranceUpdateMemberPlansInput, String memberId)

## Parameters

insuranceUpdateMemberPlansInput

Type: [ConnectApi.InsuranceUpdateMemberPlansInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_update_member_plans.htm "Input representation for updating the plans for a group census member.")

Details to update the insurance plans for the census member.

memberId

Type: String

ID of the group census member whose plans must be updated.

## Return Value

Type: [ConnectApi.InsuranceUpdateMemberPlansOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_update_member_plans.htm "Output representation for the member plan update process.")

## Example

Here's an example of how to invoke the Insurance Update Member Plans API from Apex code.

```

```

## Code Examples

```apex
// Update Member Plan(s) for a Group Census Member via Connect API (simple version)

// 1) Create the top-level input
ConnectApi.InsuranceUpdateMemberPlansInputRepresentation input = new ConnectApi.InsuranceUpdateMemberPlansInputRepresentation();

// 2) Plans to ADD (provide Contract Group Plan Ids to add)
List<ConnectApi.GroupCensusMemberPlanInputRepresentation> added = new List<ConnectApi.GroupCensusMemberPlanInputRepresentation>();

ConnectApi.GroupCensusMemberPlanInputRepresentation addPlan1 = new ConnectApi.GroupCensusMemberPlanInputRepresentation();
addPlan1.contractGroupPlanId = '0rgxx000000003UAAQ'; // e.g., a2Cxx0000001234AAA
added.add(addPlan1);

// Assign added plans
input.addedPlans = added;

// 3) Plans to DELETE (provide existing Group Census Member Plan record Ids)
input.deletedPlans = new List<String>{
    // 'REPLACE_WITH_MEMBER_PLAN_ID_1',
    // 'REPLACE_WITH_MEMBER_PLAN_ID_2'
};

// 4) Execute the PATCH API with the Group Census Member Id
String memberId = '0r6xx00000004LGAAY';

try {
    ConnectApi.InsuranceUpdateMemberPlansOutputRepresentation result =
        ConnectApi.InsuranceGroupBenefitsFamily.patchInsuranceUpdateMemberPlans(input, memberId);

    System.debug('Update Member Plans result: ' + JSON.serializePretty(result));
} catch (Exception e) {
    System.debug('Error while updating member plans: ' + e.getMessage());
}
```

## Related Topics

- ConnectApi.InsuranceUpdateMemberPlansInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_update_member_plans.htm)
- ConnectApi.InsuranceUpdateMemberPlansOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_update_member_plans.htm)
