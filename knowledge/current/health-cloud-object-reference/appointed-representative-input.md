---
title: "Appointed Representative Input"
domain: health-cloud-object-reference
topic: appointed-representative-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.736Z
estimatedTokens: 226
keywords: [Appointed, Representative, Input, Person, member]
---

# Appointed Representative Input

> Person who is the appointed representative for the
    member.

# Appointed Representative Input

Person who is the appointed representative for the member.

Root XML tag

<appointedRepresentative>

JSON example

```

```

Properties

| Name | Type | Description | Required | Available Version |
| --- | --- | --- | --- | --- |
| firstName | String | First Name of the appointed representative. | No | 46.0 |
| lastName | String | Last Name of the appointed representative. | No | 46.0 |
| suffix | String | Name suffix of the appointed representative. | No | 46.0 |
| birthDate | String | Birth date of the appointed representative. | No | 46.0 |

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=health_cloud_object_reference)

#### Tip

All the fields in this input are optional. However, it is advisable to provide as much information as possible to find a unique appointed representative record to associate with your care request.

## Code Examples

```
{
  "firstName": "Jane",
  "lastName": "Doe"
}
```
