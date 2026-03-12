---
title: "RelatedPerson"
domain: health-cloud-object-reference
topic: relatedperson
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.592Z
estimatedTokens: 799
keywords: [RelatedPerson, FHIR, resource, maps, Account, Contact, objects, Salesforce, connected, person, person’s, ContactContactRelation__c, object​, V4​.0, Clinical]
---

# RelatedPerson

> The relatedPerson FHIR resource maps to the
      Account and Contact
    objects in Salesforce, and is connected to the person that person’s related to using the ContactContactRelation__c object​.

# RelatedPerson

The relatedPerson FHIR resource maps to the Account and Contact objects in Salesforce, and is connected to the person that person’s related to using the ContactContactRelation\_\_c object​.

## FHIR V4​.0 - Clinical ​Data Model Mapping

Here’s how the fields defined by FHIR for [RelatedPerson](https://www.hl7.org/fhir/relatedperson.html) map to the fields in Salesforce​.

| RelatedPerson Resource | Salesforce Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| identifier | Identifier | Object | 0​.M | The identifier information for a related person is represented as Identifier records that reference the related person’s person account using their Identifier​.Parent​RecordId field​. |
| active | Account​.IsActive | Boolean | 0​.1 | N/A |
| patient | Contact​Contact​Relation__c​.Contact__c | Lookup: Contact | 1.1 | Though Salesforce can tehnically accommodate patient as a zero-to-many association, it is recommended to align with the FHIR defined one-to-one association. |
| relationship | Contact​​Contact​​Relation__c​​.Role__c | Lookup: ReciprocalRole__c | 0​.M | While FHIR defines relatedPerson​.relationship as a code set bundle, its Salesforce implementation is a reference to ReicprocalRole__c​. |
| name | Person​Name | Object | 0​.M | The name information for a related person is represented as Person​Name records that reference the related person’s person account using their Person​Name​.Parent​RecordId field​. |
| telecom | Contact​Point​Phone | Object | 0​.M | The telecom information for a related person is represented as Contact​Point​Phone records that reference the related person’s person account using their Contact​Point​Phone​.ParentId field​. |
| gender | Contact​.Gender | Picklist | 0​.1 | While FHIR defines relatedPerson​.gender as a code set, its Salesforce implementation is a picklist​. |
| birth​Date | Contact​.Birthdate | ​Date | 0​.1 | N/A |
| address | Contact​Point​Address | Object | 0​.M | The address information for a related person is represented as Contact​Point​Address records that reference the related person’s person account using their Contact​Point​Address​.ParentId field​. |
| photo | N/A | N/A | N/A | Not supported |
| period | Contact​​Contact​​Relation__c​​.StartDate__c | ​Date | 0​.1 | Because Salesforce doesn’t support a native period data type, the relatedPerson.period FHIR resource is flattened to a set of strart and end dates​. |
| Contact​​Contact​​Relation__c​​.EndDate__c | ​Date | 0​.1 |
| communication | Person​Language | Object | 0​.M | The language information for a related person is represented as Person​Language records that reference the related person’s person account using their Person​Language​.IndividualId field​. |
| communication​.language | Person​Language​.​Language | Picklist | 0​.1 | While FHIR defines relatedPerson​.communication​.language as a code set bundle, its Salesforce implementation is a picklist​. |
| communication​.preferred | Person​Language​.Rank | Double | 0​.1 | While FHIR defines relatedPerson​.communication​.preferred as a boolean, its Salesforce implementation is an integer field that ranks the degree of preference​. |
