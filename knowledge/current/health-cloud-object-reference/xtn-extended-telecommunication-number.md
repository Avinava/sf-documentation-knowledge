---
title: "XTN - Extended Telecommunication Number"
domain: health-cloud-object-reference
topic: xtn---extended-telecommunication-number
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.700Z
estimatedTokens: 321
keywords: [XTN, Extended, Telecommunication, Number, HL7, segment, maps, ContactPointPhone, Salesforce, V2.3, Clinical, Data, Model, Mapping]
---

# XTN - Extended Telecommunication Number

> The Extended Telecommunication Number (XTN) HL7 segment maps to the ContactPointPhone object in Salesforce.

# XTN - Extended Telecommunication Number

The Extended Telecommunication Number (XTN) HL7 segment maps to the ContactPointPhone object in Salesforce.

## HL7 V2.3 - Clinical Data Model Mapping

Here’s how the segments defined by HL7 V2.3 for XTN map to fields in Salesforce standard objects.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=health_cloud_object_reference)

#### Note

Only the segments supported by Salesforce are mentioned below.

| XTN | Salesforce Field | Type | Notes |
| --- | --- | --- | --- |
| XTN.1 - Telephone Number | ContactPointPhone.Telephone​Number | Phone | N/A |
| XTN.2 - Telecommunication Use Code | Contact​Point​Phone​.Usage​Type | Picklist | N/A |
| Contact​Point​Email​.Usage​Type | Picklist | N/A |
| XTN.3 - Telecommunication Equipment Type | Contact​Point​Phone​.Phone​Type | Picklist | N/A |
| XTN.4 - Email Address | Contact​Point​Email​.EmailAddress | Email | N/A |
| XTN.6 - Area/City Code | Contact​Point​Phone​.AreaCode | String | Some systems may break down the phone number into multiple components, such as country code, area code, local number, extension, and so on. In such cases, the full number may have to be assembled. |
| XTN.8 - Extension | Contact​Point​Phone​.ExtensionNumber | String | N/A |
