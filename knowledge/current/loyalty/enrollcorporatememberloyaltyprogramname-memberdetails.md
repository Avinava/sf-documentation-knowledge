---
title: "enrollCorporateMember(loyaltyProgramName, memberDetails)"
domain: loyalty
topic: enrollcorporatememberloyaltyprogramname-memberdetails
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.457Z
estimatedTokens: 418
keywords: [enrollCorporateMember, loyaltyProgramName, memberDetails, Enroll, corporate, members, loyalty, program, API, Version, Requires, Chatter]
---

# enrollCorporateMember(loyaltyProgramName, memberDetails)

> Enroll corporate members in a loyalty program.

# enrollCorporateMember(loyaltyProgramName, memberDetails)

Enroll corporate members in a loyalty program.

## API Version

55.0

## Requires Chatter

No

## Signature

public static ConnectApi.CorporateMemberOutput enrollCorporateMember(String loyaltyProgramName, ConnectApi.CorporateMemberInput memberDetails)

## Parameters

loyaltyProgramName

Type: String

The name of the loyalty program in which the member is enrolled.

memberDetails

Type: [ConnectApi.CorporateMemberInput](atlas.en-us.loyalty.meta/loyalty/apex_connectapi_input_corporate_member_enrollment.htm "Input representation of the corporate member create request.")

Input representation of the corporate member create request.

## Return Value

Type: [ConnectApi.CorporateMemberOutput](atlas.en-us.loyalty.meta/loyalty/apex_connectapi_output_corporate_member_enrollment_output.htm "Output representation of the corporate member enrollment create request.")

## Example

public class TestCorporateEnrollment { Map<String, String> additionalDetails = new Map<String, String>(); ConnectApi.MemberAccountInput account = new ConnectApi.MemberAccountInput(); additionalDetails.put('BillingCity', 'Delhi'); account.additionalAccountFieldValues = additionalDetails; account.name = 'BBBB'; ConnectApi.CorporateMemberInput member = new ConnectApi.CorporateMemberInput(); member.associatedAccountDetails = account; DateTime myDateTime = DateTime.newInstance(2021, 1, 31, 7, 8, 16); member.enrollmentDate = myDateTime; member.membershipNumber = 'abcdefgh'; member.memberStatus = 'Active'; ConnectApi.CorporateMemberOutput output = ConnectApi.LoyaltyManagementConnect.enrollCorporateMember('Program-999',member); }

## Related Topics

- ConnectApi.CorporateMemberInput (atlas.en-us.loyalty.meta/loyalty/apex_connectapi_input_corporate_member_enrollment.htm)
- ConnectApi.CorporateMemberOutput (atlas.en-us.loyalty.meta/loyalty/apex_connectapi_output_corporate_member_enrollment_output.htm)
