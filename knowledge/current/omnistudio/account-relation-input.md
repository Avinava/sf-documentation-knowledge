---
title: "Account Relation Input"
domain: omnistudio
topic: account-relation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:07.983Z
keywords: [Account, Relation, Input]
---

# Account Relation Input

# Account Relation Input

Input representation of an account relationship.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| aarId | String | Record ID of the AccountRelationship object. | Optional | 58.0 |
| accountId | String | Primary account involved in the relationship. If the account relationship type is direct, then Account ID is required. | Optional | 58.0 |
| custom​Fields | Map<String, Object> | Custom fields associated with the AccountRelationship object. | Optional | 58.0 |
| endDate | String | Date when the account relationship ends. | Optional | 58.0 |
| hierarchy​Type | String | Hierarchy among the accounts that are related. For example, an account is related to another account as a parent, a peer, or a child. | Optional | 58.0 |
| isActive | Boolean | Indicates whether the account is actively involved with the related account (true) or not (false). | Optional | 58.0 |
| related​AccountId | String | Record ID of the related account. If the account relationship type is direct, then the related account ID is required. | Optional | 58.0 |
| related​Inverse​RecordId | String | Record ID of the related inverse relationship record. | Optional | 58.0 |
| role​Relation​Id | String | Record ID of the party role relationship. | Required | 58.0 |
| startDate | String | Date when the account relationship starts. | Optional | 58.0 |
| type | String | Type of account relationship, such as a direct or indirect relationship. The default value is false. If the related​Inverse​RecordId property is specified, then the relationship type is indirect. | Optional | 58.0 |