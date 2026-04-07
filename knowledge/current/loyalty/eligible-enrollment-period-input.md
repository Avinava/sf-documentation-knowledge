---
title: "Eligible Enrollment Period Input"
domain: loyalty
topic: eligible-enrollment-period-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:07.221Z
estimatedTokens: 154
keywords: [Eligible, Enrollment, Period, eligibility, promotion]
---

> Input representation of the enrollment eligibility details for the promotion.

# Eligible Enrollment Period Input

Input representation of the enrollment eligibility details for the promotion.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| enrollment​EndDate | String | Date until which customers can enroll for the promotion. | Optional | 60.0 |
| enrollment​StartDate | String | Date from which customers can enroll for the promotion. | Optional | 60.0 |
| isEnrollment​Required | Boolean | Indicates whether customers must enroll for the promotion (true) or not (false).The default value is false. | Optional | 60.0 |
