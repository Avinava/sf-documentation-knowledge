---
title: "getMemberProfileUsingMembershipNumber(loyaltyProgramName, membershipNumber, programCurrencyName)"
domain: loyalty
topic: getmemberprofileusingmembershipnumberloyaltyprogramname-membershipnumber-program
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.466Z
estimatedTokens: 299
keywords: [getMemberProfileUsingMembershipNumber, loyaltyProgramName, membershipNumber, programCurrencyName, loyalty, program, member, membership, number, API, Version, Requires, Chatter]
---

# getMemberProfileUsingMembershipNumber(loyaltyProgramName, membershipNumber, programCurrencyName)

> Get the details of a loyalty program member using the program
      membership number.

# getMemberProfileUsingMembershipNumber(loyaltyProgramName, membershipNumber, programCurrencyName)

Get the details of a loyalty program member using the program membership number.

## API Version

55.0

## Requires Chatter

No

## Signature

public static ConnectApi.MemberDetailsOutput getMemberProfileUsingMembershipNumber(String loyaltyProgramName, String membershipNumber, String programCurrencyName)

## Parameters

loyaltyProgramName

Type: String

The name of the loyalty program.

membershipNumber

Type: String

The membership number of the loyalty program member.

programCurrencyName

Type: String

The name of the loyalty program currency associated with the member.

Use this parameter to get the details of the member’s points-related information for a specific currency.

## Return Value

Type: [ConnectApi.MemberDetailsOutput](atlas.en-us.loyalty.meta/loyalty/apex_connectapi_output_member_profile_output.htm "Output representation of the details of a loyalty program member.")

## Example

public class TestMembershipNumber { ConnectApi.MemberDetailsOutput details = ConnectApi.LoyaltyManagementConnect.getMemberProfileUsingMembershipNumber('program1', 'Member15', 'ruble'); }

## Related Topics

- ConnectApi.MemberDetailsOutput (atlas.en-us.loyalty.meta/loyalty/apex_connectapi_output_member_profile_output.htm)
