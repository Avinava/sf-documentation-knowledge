---
title: "Events Detail Input"
domain: loyalty
topic: events-detail-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:50.894Z
estimatedTokens: 150
keywords: [Events, Detail, Input, representation, customer, event, eligible, promotion]
---

# Events Detail Input

> Input representation details of the customer event that is eligible for the
    promotion.

# Events Detail Input

Input representation details of the customer event that is eligible for the promotion.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| event | String | Customer event eligible for the promotion. Possible values are:CustomerBirthdayMemberAnniversaryMemberBirthdayMemberAnniversary and MemberBirthday are valid only for the loyalty program-related promotions. | Optional | 60.0 |
| eventPeriod​Unit | String | Period for which the promotion is eligible. Possible values are:DateWeekMonth | Optional | 60.0 |
