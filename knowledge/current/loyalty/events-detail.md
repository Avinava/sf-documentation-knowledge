---
title: "Events Detail"
domain: loyalty
topic: events-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:04:17.649Z
estimatedTokens: 121
keywords: [Events, Detail, Output, representation, customer, event, eligible, promotion]
---

# Events Detail

> Output representation of the customer event eligible for a promotion.

# Events Detail

Output representation of the customer event eligible for a promotion.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| event | String [] | Customer event eligible for the promotion. Possible values are:CustomerBirthdayMemberAnniversaryMemberBirthday | Small, 60.0 | 60.0 |
| eventPeriodUnit | String [] | Period the promotion is eligible for. Possible values:DateWeekMonth | Small, 60.0 | 60.0 |
