---
title: "Organization"
domain: life-sciences-dev-guide
topic: organization
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.540Z
estimatedTokens: 761
keywords: [Organization, FHIR, resource, maps, primarily, Account, Salesforce​, V4​.0, Clinical, ​Data, Model, Mapping]
---

# Organization

> The Organization FHIR resource maps primarily to
    the Account object in Salesforce​.

# Organization

The Organization FHIR resource maps primarily to the Account object in Salesforce​.

## FHIR V4​.0 - Clinical ​Data Model Mapping

Here’s how the fields defined by FHIR for [Organization](https://www.hl7.org/fhir/organization.html) map to the fields in Salesforce​.

| Organization Resource | Salesforce Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| identifier | Identifier | Object | 0​.M | The identifier information for an organization is represented as Identifier records that reference the organization record using their Identifier​.Parent​RecordId field​. |
| active | Account​.IsActive | Boolean | 0​.1 | N/A |
| type | Account​.Type | Picklist | 0.1 | While FHIR defines account​.type as a zero-to-many code set bundle reference, its Salesforce implementation is a zero-to-one picklist​. |
| name | Account​.Name | String | 0​.1 | N/A |
| alias | N/A | N/A | N/A | Not supported |
| telecom | Contact​Point​Phone | Object | 0​.M | The telecom information for an organization is represented as Contact​Point​Phone records that reference the organization record using their Contact​Point​Phone​.ParentId field​. |
| address | Contact​Point​Address | Object | 0​.M | The address information for an organization is represented as Contact​Point​Address records that reference the organization record using their Contact​Point​Address​.ParentId field​. |
| contact | Account​Contact​Relation​.ContactId | Lookup: Contact | 0​.M | Contacts are connected to organizations using the Account​Contact​Relation junction object​. The Account​Contact​Relation​.AccountId field references the organization’s account record, and the Account​Contact​Relation​.ContactId field references the contact record of the contact’s person account​. |
| contact​.relationship | Account​Contact​Relation​.Roles | Multi-Select picklist | 0​.M | While FHIR defines organization​.contact​.purpose as a code set bundle, its Salesforce implementation is a picklist​. |
| contact​.name | Person​Name | Object | 0​.M | The name information for a contact is represented as Person​Name records that reference the contact’s person account using their Person​Name​.Parent​RecordId field​.While FHIR defines patient​.contact​.name as a zero-to-one resource, the Salesforce implementation can support zero-to-many references​. |
| contact​.telecom | Contact​Point​Phone | Object | 0​.M | The telecom information for a contact is represented as Contact​Point​Phone records that reference the contact’s person account record using their Contact​Point​Phone​.ParentId field​. |
| contact​.address | Contact​Point​Address | Object | 0​.M | The address information for a contact is represented as Contact​Point​Address records that reference the contact’s person account record using their Contact​Point​Address​.ParentId field​.While FHIR defines patient​.contact​.address as a zero-to-one resource, the Salesforce implementation can support zero-to-many references​. |
| contact​.endPoint | N/A | N/A | N/A | Not supported |
