---
title: "Relationships Input"
domain: omnistudio
topic: relationships-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.489Z
keywords: [Relationships, Input]
---

# Relationships Input

# Relationships Input

Input representation of the relationship among members of a party relationship group.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| ccrId | String | Record ID of the ContactContactRelationship object. | Optional | 58.0 |
| customFields | Map<String, Object> | Custom fields associated with the ContactRelationship object. | Optional | 58.0 |
| endDate | String | Date when the contact relationship ends. | Optional | 58.0 |
| hierarchyType | String | Hierarchy among the contacts that are related. | Optional | 58.0 |
| isActive | Boolean | Indicates whether the relationship is active (true) or not (false). | Optional | 58.0 |
| relatedContactId | String | Record ID of the RelatedContact object. | Required | 58.0 |
| relatedInverseRecordId | String | Record ID of the related inverse record. | Optional | 58.0 |
| roleRelationId | String | Record ID of the PartyRoleRelation object. | Required | 58.0 |
| startDate | String | Date when the contact relationship starts. | Optional | 58.0 |