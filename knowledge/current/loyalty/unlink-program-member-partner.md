---
title: "Unlink Program Member Partner"
domain: loyalty
topic: unlink-program-member-partner
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.230Z
estimatedTokens: 358
keywords: [Unlink, Program, Member, Partner, Unlinks, association, loyalty, API, securely, removes, linkage, updates, records, ensure, data, Output, representation]
---

# Unlink Program Member Partner

> Unlinks an existing association between a loyalty program member and a partner program.
    The API securely removes the linkage and updates related records to ensure data consistency
    across loyalty and partner systems.

# Unlink Program Member Partner

Unlinks an existing association between a loyalty program member and a partner program. The API securely removes the linkage and updates related records to ensure data consistency across loyalty and partner systems.

Resource

```

```

Resource example

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

#### Note

A record is uniquely identified by membershipNumber and partnerName. If either isn’t provided, the API returns an error requesting additional filter criteria.

Available version

66.0

HTTP methods

POST

Request body for POST

JSON example

Sample request to unlink the program member and partner.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| comments | String | Description for the unlink reason. | Optional | 66.0 |
| externalId | String | Partner membership number of the loyalty program member. | Optional | 66.0 |
| linkNumber | String | Unique identifier for the program member and partner linkage. | Optional | 66.0 |
| unlinkReasonType | String | Reason to unlink a loyalty program member and a partner. | Optional | 66.0 |

Response body for POST

[Unlink Program Member Partner](atlas.en-us.loyalty.meta/loyalty/connect_responses_unlink_program_member_partner.htm "Output representation of the program member and partner unlink request.")

## Code Examples

```
/loyalty/programs/programName/members/membershipNumber/partners/partnerName/unlink
```

```
https://yourInstance.salesforce.com/services/data/v66.0/loyalty/programs/MarriottBonvoy/members/M0001/partners/AMEX/unlink
```

```
{
  "linkNumber": "00000029",
  "externalId": "U10001",
  "unlinkReasonType": "USER_REQUEST",
  "comments": "Member requested to unlink the partner account."
}
```

```
{
  "message": null,
  "status": true
}
```

## Related Topics

- Unlink Program Member Partner (atlas.en-us.loyalty.meta/loyalty/connect_responses_unlink_program_member_partner.htm)
