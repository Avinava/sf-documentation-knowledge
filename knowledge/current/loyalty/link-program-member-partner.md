---
title: "Link Program Member Partner"
domain: loyalty
topic: link-program-member-partner
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.111Z
estimatedTokens: 272
keywords: [Link, Program, Member, Partner, loyalty, Enable, integration, members, ecosystems, allowing, earn, redeem, manage, benefits, across, Output, representation, linkage]
---

# Link Program Member Partner

> Link a loyalty program member with a specified partner program. Enable integration
    between loyalty members and partner ecosystems, allowing members to earn, redeem, and manage
    benefits across connected programs. This API simplifies account linkage, enhances transparency,
    and supports real-time synchronization between loyalty and partner systems.

# Link Program Member Partner

Link a loyalty program member with a specified partner program. Enable integration between loyalty members and partner ecosystems, allowing members to earn, redeem, and manage benefits across connected programs. This API simplifies account linkage, enhances transparency, and supports real-time synchronization between loyalty and partner systems.

Resource

```

```

Resource example

```

```

Available version

66.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalAttributes | Object | Attributes of the member that must be saved in the linkage record. | Optional | 66.0 |
| externalId | String | External ID of the loyalty program member associated with the partner. | Optional | 66.0 |

Response body for POST

[Link Program Member Partner](atlas.en-us.loyalty.meta/loyalty/connect_responses_link_program_member_partner.htm "Output representation of the program member and partner linkage request.")

## Code Examples

```
/loyalty/programs/programName/members/membershipNumber/partners/partnerName/link
```

```
https://yourInstance.salesforce.com/services/data/v66.0/loyalty/programs/MarriottBonvoy/members/M0001/partners/AMEX/link
```

```
{
  "externalId": "U10001",
  "additionalAttributes": {
    "Card_Type__c": "Green Card"
  }
```

```
{
  "linkNumber": "00000028",
  "message": null,
  "status": true
}
```

## Related Topics

- Link Program Member Partner (atlas.en-us.loyalty.meta/loyalty/connect_responses_link_program_member_partner.htm)
