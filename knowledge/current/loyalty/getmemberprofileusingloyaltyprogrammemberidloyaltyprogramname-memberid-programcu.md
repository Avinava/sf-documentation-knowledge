---
title: "getMemberProfileUsingLoyaltyProgramMemberId(loyaltyProgramName, memberId, programCurrencyName)"
domain: loyalty
topic: getmemberprofileusingloyaltyprogrammemberidloyaltyprogramname-memberid-programcu
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.463Z
estimatedTokens: 301
keywords: [loyaltyProgramName, memberId, programCurrencyName, loyalty, program, member, API, Version, Requires, Chatter]
---

# getMemberProfileUsingLoyaltyProgramMemberId(loyaltyProgramName, memberId, programCurrencyName)

> Get the details of a loyalty program member using the program member
      ID.

# getMemberProfileUsingLoyaltyProgramMemberId(loyaltyProgramName, memberId, programCurrencyName)

Get the details of a loyalty program member using the program member ID.

## API Version

55.0

## Requires Chatter

No

## Signature

public static ConnectApi.MemberDetailsOutput getMemberProfileUsingLoyaltyProgramMemberId(String loyaltyProgramName, String memberId, String programCurrencyName)

## Parameters

loyaltyProgramName

Type: String

The name of the loyalty program.

memberId

Type: String

The ID of the loyalty program member.The ID of the loyalty program member.

programCurrencyName

Type: String

The name of the loyalty program currency associated with the member.

Use this parameter to get the details of the member’s points-related information for a specific currency.

## Return Value

Type: [ConnectApi.MemberDetailsOutput](atlas.en-us.loyalty.meta/loyalty/apex_connectapi_output_member_profile_output.htm "Output representation of the details of a loyalty program member.")

## Example

public class TestMemberId { ConnectApi.MemberDetailsOutput details = ConnectApi.LoyaltyManagementConnect.getMemberProfileUsingLoyaltyProgramMemberId('program1', '0lMxx00000007XlEAI', 'ruble'); }

## Related Topics

- ConnectApi.MemberDetailsOutput (atlas.en-us.loyalty.meta/loyalty/apex_connectapi_output_member_profile_output.htm)
