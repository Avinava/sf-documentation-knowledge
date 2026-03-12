---
title: "Device"
domain: life-sciences-dev-guide
topic: device
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.457Z
estimatedTokens: 1100
keywords: [Device, F​HI​R, resource, maps, Asset, ​​Care​Registered​Device​, objects, Salesforce​, V4​.0, ​Clinical, ​Data, ​Model, ​Mapping]
---

# Device

> The Device F​HI​R resource maps to the Asset and ​​Care​Registered​Device​ objects in Salesforce​.

# Device

The Device F​HI​R resource maps to the Asset and ​​Care​Registered​Device​ objects in Salesforce​.

## F​HI​R V4​.0 - ​Clinical ​Data ​Model ​Mapping

​Here’s how the fields defined by F​HI​R for [Device](https://www.hl7.org/fhir/device.html) map to the fields in Salesforce​.

| Device ​Resource | Salesforce Field | ​Type | Salesforce ​Cardinality | Notes |
| --- | --- | --- | --- | --- |
| identifier | ​​​Identifier | Object | 0​.​M | The identifier information for a device is represented as Identifier records that reference the CareRegisteredDevice record using their ​​​Identifier​.​Parent​RecordId field​. |
| uidCarrier​.Device​Identifier | ​​Care​Registered​Device​​.Unique​Device​Id1 | External Lookup | 0.3 | While FHIR defines uidCarrier​.Device​Identifier as a zero-to-many value, the Salesforce implementation supports a maximum of three values using three fields. |
| ​​Care​Registered​Device​​.Unique​Device​Id2 | External Lookup |
| ​​Care​Registered​Device​​.Unique​Device​Id3 | External Lookup |
| uidCarrier​.Issuer | ​​Care​Registered​Device​​.Unique​Device​Id1​Issuer | URL | 0.3 | While FHIR defines uidCarrier​.Issuer as a zero-to-many value, the Salesforce implementation supports a maximum of three values using three fields. |
| ​​Care​Registered​Device​​.Unique​Device​Id2​Issuer | URL |
| ​​Care​Registered​Device​​.Unique​Device​Id3​Issuer | URL |
| uidCarrier​.jurisdiction | N/​A | N/​A | N/​A | Not supported |
| uidCarrier​.carrierAIDC | N/​A | N/​A | N/​A | Not supported |
| uidCarrier​.arrierHRF | N/​A | N/​A | N/​A | Not supported |
| uidCarrier​.entryType | N/​A | N/​A | N/​A | Not supported |
| status | ​​Asset.​Status | Picklist | 0​.1 | While F​HI​R defines device.status​ as code, the Salesforce implementation is a picklist​. |
| status​Reason | ​​Asset.​Status​Reason | Picklist | 0.1 | While F​HI​R defines device.status​Reason as a zero-to-many codeable concept, the Salesforce implementation is a zero-to-one picklist​. |
| distinct​Identifier | ​​Asset.​Uuid | String | 0.1 | N/A |
| manufacturer | ​​Asset.​Asset​Provider​By | Lookup: Account | 0.1 | While F​HI​R defines device.manufacturer​ as string, the Salesforce implementation is a lookup to Account (Organization)​. |
| manufacture​Date | ​​Asset.​Manufacture​Date | Date | 0.1 | While F​HI​R defines device.manufactureDate as DateTime, the Salesforce implementation is a of the data type Date. |
| expiration​Date | ​​Asset.​Usage​End​Date | Date | 0​.1 | While F​HI​R defines device.expirationDate as DateTime, the Salesforce implementation is a of the data type Date. |
| lot​Number | N/​A | N/​A | N/​A | Not supported |
| serial​Number | ​​Asset.​Serial​Number | String | 0​.1 | N/A |
| ​​device​​Name​.name | ​​Care​Registered​Device​.Name | String | 0.1 | While F​HI​R defines device.deviceName as a zero-to-many resource, the Salesforce implementation is zero-to-one​. |
| ​​device​​Name​.type | Lookup: ​​Care​Registered​Device​.Name​Type | Multi-Select Picklist | 0.M |
| model​Number | ​​Asset​.Product​Code | String | 0​.1 | N/​A |
| part​Number | N/​A | N/​A | N/​A | Not supported |
| type | ​​Care​Registered​Device​.Device​TypeId | Lookup: Code​Set | 0.1 | While F​HI​R defines device.type as a codeable concept value, the Salesforce implementation is a code set. |
| specialization | N/​A | N/​A | N/​A | Not supported |
| version | N/​A | N/​A | N/​A | Not supported |
| property | N/​A | N/​A | N/​A | Not supported |
| patient | ​​Care​Registered​Device​​.PatientId | Lookup: Account | 0.1 | N/A |
| owner | ​​Asset.​Asset​Serviced​By | Lookup: Account | 0.1 | N/A |
| contact | ​​Care​Registered​Device​.Support​Contact​Detail | String | 0​.1 | While F​HI​R defines device.contact as a contact point value, the Salesforce implementation is a string. |
| location | N/​A | N/​A | N/​A | N/​A |
| url | ​​Asset.​Product​2Id​.Display​Url | URL | 0​.1 | N/​A |
| account | N/​A | N/​A | N/​A | Not supported |
| note​. | Author​Note | Object | 0​.M | The notes for a device are represented as AuthorNote records that reference the CareRegisteredDevice record using their ​​​AuthorNote​.​Parent​RecordId field​. |
| safety | ​​Care​Registered​Device​​.​Safety​Information | String | 0​.1 | While F​HI​R defines device.safety as a codeable concept, the Salesforce implementation is a string field. |
| parent | ​​Asset.​ParentId | Lookup Asset | 0​.1 | N/A |
