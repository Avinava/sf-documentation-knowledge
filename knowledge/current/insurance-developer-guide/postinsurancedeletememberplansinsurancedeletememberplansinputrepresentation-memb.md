---
title: "postInsuranceDeleteMemberPlans(insuranceDeleteMemberPlansInputRepresentation, memberId)"
domain: insurance-developer-guide
topic: postinsurancedeletememberplansinsurancedeletememberplansinputrepresentation-memb
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.963Z
estimatedTokens: 319
keywords: [postInsuranceDeleteMemberPlans, memberId, plans, group, census, member, API, Version, Requires, Chatter]
---

# postInsuranceDeleteMemberPlans(insuranceDeleteMemberPlansInputRepresentation, memberId)

> Delete the specified plans for a group census member.

# postInsuranceDeleteMemberPlans(insuranceDeleteMemberPlansInputRepresentation, memberId)

Delete the specified plans for a group census member.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.InsuranceDeleteMemberPlansOutputRepresentation postInsuranceDeleteMemberPlans(ConnectApi.InsuranceDeleteMemberPlansInputRepresentation insuranceDeleteMemberPlansInputRepresentation, String memberId)

## Parameters

insuranceDeleteMemberPlansInputRepresentation

Type: [ConnectApi.InsuranceDeleteMemberPlansInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_delete_member_plans.htm "Input representation for deleting a member's plans.")

The input representation containing the list of plans to delete.

memberId

Type: String

ID of the group census member whose plans are being deleted.

## Return Value

Type: [ConnectApi.InsuranceDeleteMemberPlansOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_delete_member_plans.htm "Output representation for the member plan deletion process.")

## Example

Here's an example of how to invoke the Insurance Delete Member Plans API from Apex code.

```

```

## Code Examples

```apex
// Delete Member Plan(s) for a Group Census Member via Connect API (simple version)

// 1) Create the top-level input
ConnectApi.InsuranceDeleteMemberPlansInputRepresentation input = new ConnectApi.InsuranceDeleteMemberPlansInputRepresentation();
// 2) Provide the list of existing Group Census Member Plan record Ids to delete
//    Uses a simple string list wrapper
List<String> planIdsToDelete = new List<String>{
    '0rgxx000000003LAAQ',
    '0rgxx000000003UAAQ'
};
input.plans = planIdsToDelete;
// 3) Execute the POST Delete Member Plans API
//  URL param is the Group Census Member Id whose plans you want to delete
String memberId = '0r6xx00000004LGAAY';
try {
    ConnectApi.InsuranceDeleteMemberPlansOutputRepresentation result =
        ConnectApi.InsuranceGroupBenefitsFamily.postInsuranceDeleteMemberPlans(input, memberId);
    System.debug('Delete Member Plans result: ' + JSON.serializePretty(result));
} catch (Exception e) {
    System.debug('Error while deleting member plans: ' + e.getMessage());
}
```

## Related Topics

- ConnectApi.InsuranceDeleteMemberPlansInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_delete_member_plans.htm)
- ConnectApi.InsuranceDeleteMemberPlansOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_delete_member_plans.htm)
