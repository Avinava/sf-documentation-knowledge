---
title: "postInsuranceMembersRating(insuranceMemberRatingInputParam, memberId)"
domain: insurance-developer-guide
topic: postinsurancemembersratinginsurancememberratinginputparam-memberid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.974Z
estimatedTokens: 304
keywords: [postInsuranceMembersRating, insuranceMemberRatingInputParam, memberId, Calculate, pricing, individual, members, group, census, support, plan, coverages, API, Version, Requires]
---

# postInsuranceMembersRating(insuranceMemberRatingInputParam, memberId)

> Calculate pricing for individual members of a group census, with the support for plan
  and individual coverages within the plan.

# postInsuranceMembersRating(insuranceMemberRatingInputParam, memberId)

Calculate pricing for individual members of a group census, with the support for plan and individual coverages within the plan.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.InsuranceMemberRatingRepresentation postInsuranceMembersRating(ConnectApi.InsuranceMemberRatingInputRepresentation insuranceMemberRatingInputParam, String memberId)

## Parameters

insuranceMemberRatingInputParam

Type: [ConnectApi.InsuranceMemberRatingInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_member_rating.htm "Input representation for the individual member rating API.")

Input representation for rating the members.

memberId

Type: String

ID of the group census member.

## Return Value

Type: [ConnectApi.InsuranceMemberRatingRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_member_rating.htm "Output representation of the rating results for individual members.")

## Example

Here's an example of how to invoke the Insurance Member Rating API from Apex code.

```

```

## Code Examples

```apex
// Individual Member Rating via Connect API (simple version)

// 1) Build the input
ConnectApi.InsuranceMemberRatingInputRepresentation input =
    new ConnectApi.InsuranceMemberRatingInputRepresentation();

// Optional: Effective date (ISO-8601)
input.effectiveDate = '2025-11-26T15:26:00.000';

// Members to rate (one or more)
ConnectApi.InsuranceMemberRatingDetailsInputRepresentation memberDetails =
    new ConnectApi.InsuranceMemberRatingDetailsInputRepresentation();
memberDetails.memberId = '0r6SG0000008n8XYAQ'; // member to rate

// Plan(s) to rate for this member
ConnectApi.InsuranceMemberRatingPlansInputRepresentation plan =
    new ConnectApi.InsuranceMemberRatingPlansInputRepresentation();
plan.planId = '0rgSG0000000fgIYAQ';
plan.planCoverageIds = new List<String>{
    '0rgSG0000000fgJYAQ'
};

// Assign plans to the member and add to input
memberDetails.plans = new List<ConnectApi.InsuranceMemberRatingPlansInputRepresentation>{ plan };
input.members = new List<ConnectApi.InsuranceMemberRatingDetailsInputRepresentation>{ memberDetails };

// 2) Execute the POST API with the primary Group Census Member Id (family anchor)
String primaryMemberId = '0r6SG0000008n8OYAQ';

try {
    ConnectApi.InsuranceMemberRatingRepresentation result =
        ConnectApi.InsuranceGroupBenefitsFamily.postInsuranceMembersRating(
            input,
            primaryMemberId
        );

    System.debug('Member Rating ID: ' + result.id);
    System.debug('Pricing Results: ' + JSON.serializePretty(result.pricingResults));
    System.debug('Errors: ' + JSON.serializePretty(result.errors));
} catch (Exception e) {
    System.debug('Member Rating error: ' + e.getMessage());
}
```

## Related Topics

- ConnectApi.InsuranceMemberRatingInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_member_rating.htm)
- ConnectApi.InsuranceMemberRatingRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_member_rating.htm)
