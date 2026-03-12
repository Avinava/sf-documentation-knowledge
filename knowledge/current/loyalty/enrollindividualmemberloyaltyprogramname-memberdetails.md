---
title: "enrollIndividualMember(loyaltyProgramName, memberDetails)"
domain: loyalty
topic: enrollindividualmemberloyaltyprogramname-memberdetails
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.460Z
estimatedTokens: 421
keywords: [enrollIndividualMember, loyaltyProgramName, memberDetails, Enroll, individual, members, loyalty, program, API, Version, Requires, Chatter]
---

# enrollIndividualMember(loyaltyProgramName, memberDetails)

> Enroll individual members in a loyalty program.

# enrollIndividualMember(loyaltyProgramName, memberDetails)

Enroll individual members in a loyalty program.

## API Version

55.0

## Requires Chatter

No

## Signature

public static ConnectApi.IndividualMemberOutput enrollIndividualMember(String loyaltyProgramName, ConnectApi.IndividualMemberInput memberDetails)

## Parameters

loyaltyProgramName

Type: String

The name of the loyalty program in which the member is enrolled.

memberDetails

Type: [ConnectApi.IndividualMemberInput](atlas.en-us.loyalty.meta/loyalty/apex_connectapi_input_individual_member_enrollment.htm "Input representation of the individual member create request.")

Input representation of the individual member create request.

## Return Value

Type: [ConnectApi.IndividualMemberOutput](atlas.en-us.loyalty.meta/loyalty/apex_connectapi_output_individual_member_enrollment_output.htm "Output representation of the individual member create request.")

## Example

public class TestIndividualEnrollment { Map<String, String> additionalDetails = new Map<String, String>(); ConnectApi.MemberContactInput contact = new ConnectApi.MemberContactInput(); additionalDetails.put('PersonMailingCity', 'Delhi'); contact.additionalContactFieldValues = additionalDetails; contact.lastName = 'BBBB'; ConnectApi.IndividualMemberInput member = new ConnectApi.IndividualMemberInput(); member.associatedContactDetails = contact; DateTime myDateTime = DateTime.newInstance(2021, 1, 31, 7, 8, 16); member.enrollmentDate = myDateTime; member.membershipNumber = 'abcdefg'; member.memberStatus = 'Active'; ConnectApi.IndividualMemberOutput output = ConnectApi.LoyaltyManagementConnect.enrollIndividualMember('Program1',member); }

## Related Topics

- ConnectApi.IndividualMemberInput (atlas.en-us.loyalty.meta/loyalty/apex_connectapi_input_individual_member_enrollment.htm)
- ConnectApi.IndividualMemberOutput (atlas.en-us.loyalty.meta/loyalty/apex_connectapi_output_individual_member_enrollment_output.htm)
