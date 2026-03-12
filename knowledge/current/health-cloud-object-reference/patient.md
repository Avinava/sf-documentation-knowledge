---
title: "Patient"
domain: health-cloud-object-reference
topic: patient
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.346Z
estimatedTokens: 1620
keywords: [Patient, FHIR, resource, maps, Account, Contact, objects, Salesforce​, Patients, modeled, Person, Accounts, V4​.0, Clinical, ​Data]
---

# Patient

> The Patient FHIR resource maps to the Account and Contact objects
    in Salesforce​. Patients are modeled using Person Accounts.

# Patient

The Patient FHIR resource maps to the Account and Contact objects in Salesforce​. Patients are modeled using Person Accounts.

## FHIR V4​.0 - Clinical ​Data Model Mapping

Here’s how the fields defined by FHIR for [Patient](https://www.hl7.org/fhir/patient.html#patient) map to the fields in Salesforce​.

| Patient Resource | Salesforce Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| identifier | Identifier | Object | 0​.M | The identifier information for a patient is represented as Identifier records that reference the patient record using their Identifier​.Parent​RecordId field​. |
| active | Account​.IsActive | Boolean | 0​.1 | N/A |
| name | Person​Name | Object | 0​.M | The name information for a patient is represented as Person​Name records that reference the patient record using their Person​Name​.Parent​RecordId field​. |
| telecom | Contact​Point​Phone | Object | 0​.M | The telecom information for a patient is represented as Contact​Point​Phone records that reference the patient record using their Contact​Point​Phone​.ParentId field​. |
| gender | Contact​.Gender | Picklist | 0​.1 | While FHIR defines patient​.gender as a code set, its Salesforce implementation is a picklist​. |
| birth​Date | Contact​.Birthdate | ​Date | 0​.1 | N/A |
| deceased​.deceased​Boolean | N/A | N/A | N/A | Not supported |
| deceased​.deceased​Date​Time | Contact​.Deceased​Date | ​DateTime | 0​.1 | While FHIR defines patient​.deceased as either a boolean or a date, Salesforce supports only a date​. |
| address | Contact​Point​Address | Object | 0​.M | The address information for a patient is represented as Contact​Point​Address records that reference the patient record using their Contact​Point​Address​.ParentId field​. |
| marital​Status | Contact​.Marital​Status | Picklist | 0​.1 | While FHIR defines patient​.marital​Status as a code set bundle, its Salesforce implementation is a picklist​. |
| multiple​Birth​.multiple​Birth​Boolean | N/A | N/A | N/A | Not supported |
| multiple​Birth​.multiple​Birth​Integer | Contact​.Sequence​In​Multiple​Birth | Double | 0​.1 | While FHIR defines patient​.multiple​Birth as either a boolean or an integer, Salesforce supports only an integer​. |
| photo | N/A | N/A | N/A | Not supported |
| contact | Contact​Contact​Relation__c​.RelatedContact__c | Lookup: Contact | 0​.M | Contacts are connected to patients using the Contact​Contact​Relation__c junction object​. The Contact​​Contact​​Relation__c​​.Contact__c field references the contact record of the patient’s person account, and the Contact​​Contact​​Relation__c​​.Related​Contact__c field references the contact record of the contact’s person account​. |
| contact​.relationship | Contact​​Contact​​Relation__c​​.Role__c | Lookup: ReciprocalRole__c | 0​.M | While FHIR defines patient​.contact​.relationship as a code set bundle, its Salesforce implementation is a reference to ReicprocalRole__c​. |
| contact​.name | Person​Name | Object | 0​.M | The name information for a contact is represented as Person​Name records that reference the contact record of the contact’s person account using their Person​Name​.Parent​RecordId field​.While FHIR defines patient​.contact​.name as a zero-to-one resource, the Salesforce implementation can support zero-to-many references​. |
| contact​.telecom | Contact​Point​Phone | Object | 0​.M | The telecom information for a contact is represented as Contact​Point​Phone records that reference the contact’s person account record using their Contact​Point​Phone​.ParentId field​. |
| contact​.address | Contact​Point​Address | Object | 0​.M | The address information for a contact is represented as Contact​Point​Address records that reference the contact’s person account record using their Contact​Point​Address​.ParentId field​.While FHIR defines patient​.contact​.address as a zero-to-one resource, the Salesforce implementation can support zero-to-many references​. |
| contact​.gender | Contact​.Gender | Picklist | 0​.1 | While FHIR defines patient​.contact​.gender as a code set, its Salesforce implementation is a picklist​. |
| contact​.organization | N/A | N/A | N/A | Not supported |
| contact​.period | Contact​​Contact​​Relation__c​​.StartDate__c | ​Date | 0​.1 | Because Salesforce doesn’t support a native period data type, the patient​.contact​.period FHIR resource is flattened to a set of from and to dates​. |
| Contact​​Contact​​Relation__c​​.EndDate__c | ​Date | 0​.1 |
| communication | Person​Language | Object | 0​.M | The language information for a patient is represented as Person​Language records that reference the patient record using their Person​Language​.IndividualId field​. |
| communication​.language | Person​Language​.​Language | Picklist | 0​.1 | While FHIR defines patient​.communication​.language as a code set bundle, its Salesforce implementation is a picklist​. |
| communication​.preferred | Person​Language​.Rank | Double | 0​.1 | While FHIR defines patient​.communication​.preferred as a boolean, its Salesforce implementation is an integer field that ranks the degree of preference​. |
| general​Practitioner | Contact​Contact​Relation__c​.RelatedContact__c | Lookup: Contact | 0​.M | Practitioners are connected to patients using the Contact​Contact​Relation__c junction object​. The Contact​​Contact​​Relation__c​​.Contact__c field references the contact record of the patient’s person account, and the Contact​​Contact​​Relation__c​​.Related​Contact__c field references the contact record of the practitioner’s person account​.Salesforce doesn't support Practitioner​Role type values for patient.​general​Practitioner |
| managing​Organization | Account​Contact​Relation​.AccountId | Lookup: Account | 0​.M | Managing organizations are connected to patients using the Account​Contact​Relation​ junction object​. The Account​Contact​Relation​.AccountId field references the account record of the patient’s organization, and the Account​Contact​Relation​.ContactId field references the contact record of the patient’s person account​. |
| link | N/A | N/A | N/A | Not supported |

## Sample Record Diagram

Here's a diagram that shows an example of how this resource is represented in Salesforce.

![A diagram that shows how a patient Charles Green is represented in Salesforce.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2FMappings_FHIR%2Fimages%2Fsrd_hc_patient.png&folder=health_cloud_object_reference)
