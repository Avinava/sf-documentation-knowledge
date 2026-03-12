---
title: "Care Request Subscriber Input"
domain: life-sciences-dev-guide
topic: care-request-subscriber-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.444Z
estimatedTokens: 246
keywords: [Care, Subscriber, Input, primary, member, plan]
---

# Care Request Subscriber Input

> The primary member on the plan.

# Care Request Subscriber Input

The primary member on the plan.

Root XML tag

<subscriber>

Properties

| Name | Type | Description | Required | Available Version |
| --- | --- | --- | --- | --- |
| addressLine1 | String | Subscriber’s address line 1. | No | 46.0 |
| addressLine2 | String | Subscriber’s address line 2. | No | 46.0 |
| city | String | Subscriber’s city. | No | 46.0 |
| firstName | String | First name of the subscriber. Maps to: Account.FirstName | No | 46.0 |
| lastName | String | Last name of the subscriber. Maps to: Account.LastName | Yes | 46.0 |
| memberId | String | Subscriber Member ID. | Yes | 46.0 |
| middleName | String | Middle name of the subscriber. Maps to: Account.MiddleName | No | 46.0 |
| state | String | Subscriber’s state. | No | 46.0 |
| suffix | String | Name suffix of the subscriber for a person account. Maximum size is 40 characters. Maps to: Account.Suffix | No | 46.0 |
| zipCode | String | Subscriber’s zip code. | No | 46.0 |
