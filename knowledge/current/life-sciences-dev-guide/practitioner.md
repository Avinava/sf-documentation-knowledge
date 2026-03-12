---
title: "Practitioner"
domain: life-sciences-dev-guide
topic: practitioner
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.561Z
estimatedTokens: 1267
keywords: [Practitioner, FHIR, resource, maps, HealthcareProvider, person, accounts, Salesforce​, V4​.0, Clinical, ​Data, Model, Mapping, Sample, Record]
---

# Practitioner

> The Practitioner FHIR resource maps to the
      HealthcareProvider object and person accounts in
    Salesforce​.

# Practitioner

The Practitioner FHIR resource maps to the HealthcareProvider object and person accounts in Salesforce​.

The Practitioner resource in FHIR is represented as a combination of HealthcareProvider records and person accounts in Salesforce, where the HealthcareProvider record is the base. The person account is associated to the HealthcareProvider record by referencing the person account record using the AccountId field on HealthcareProvider.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=life_sciences_dev_guide)

#### Note

If your implementation models providers as contacts instead of person accounts, you can’t associate the fields mapped to Account to your providers. You can instead associate your HealthcareProvider record to the Contact record using the PractitionerId field on HealthcareProvider.

## FHIR V4​.0 - Clinical ​Data Model Mapping

Here’s how the fields defined by FHIR for [Practitioner](https://www.hl7.org/fhir/practitioner.html) map to the fields in Salesforce​.

| Practitioner Resource | Salesforce Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| identifier | ​​​Identifier | Object | 0​.​M | The identifier information for a documentReference is represented as Identifier records that reference the Healthcare​Provider record using their ​​​Identifier​.​Parent​RecordId field​. |
| active | Account​.IsActive | Boolean | 0​.1 | The practitioner​​.active field is mapped to the account record of the provider’s person account. This account record is referenced using the Healthcare​Provider​.AccountId field.If your Implementation models providers as Contacts instead of Person Accounts, then you can’t map practitioner​​.active to your providers. |
| name | Person​Name | Object | 0​.M | The name information for a practitioner is represented as Person​Name records that reference the practitioner’s person account record using their Person​Name​.Parent​RecordId field​. |
| telecom | Contact​Point​Phone | Object | 0​.M | The telecom information for a practitioner is represented as Contact​Point​Phone records that reference the account record of the practitioner’s person account using the Contact​Point​Phone​.ParentId field​.If your Implementation models providers as Contacts instead of Person Accounts, then you can’t map practitioner​​.telecom to your providers. |
| address | Contact​Point​Address | Object | 0​.M | The address information for a practitioner is represented as Contact​Point​Address records that reference the account record of the practitioner’s person account using the Contact​Point​Address​.ParentId field​.If your Implementation models providers as Contacts instead of Person Accounts, then you can’t map practitioner​​.address to your providers. |
| gender | Contact​.Gender | Picklist | 0​.1 | While FHIR defines practitioner​.gender as a code set, its Salesforce implementation is a picklist​.The practitioner’s gender is mapped to the contact record of their person account. This contact record is referenced using the Healthcare​Provider​.PractitionerId field on HealthcareProvider. |
| birth​Date | Contact​.Birthdate | ​Date | 0​.1 | N/A |
| photo | N/A | N/A | N/A | Not supported |
| qualification | Board​Certification | Object | 0​.M | The qualification information for a practitioner is represented as Board​Certification records that reference the practitioner’s Healthcare​Provider record using their Board​Certification​.Healthcare​ProviderId field​. |
| qualification​.identifier | ​​​Identifier | Object | 0​.​M | The identifier information for a qualification is represented as Identifier records that reference the Board​Certification record using their ​​​Identifier​.​Parent​RecordId field​. |
| qualification​.code | Board​Certification​.Certification​Type | Picklist | 0​.1 | While FHIR defines practitioner​.qualification​.code as a code set bundle, its Salesforce implementation is a picklist​. |
| qualification​.period | Board​Certification​.Effective​From | ​Date | 0​.1 | Because Salesforce doesn’t support a native period data type, the practitioner​.qualification​.period FHIR resource is flattened to a set of from and to dates​. |
| Board​Certification​.Effective​To | ​Date | 0​.1 |
| qualification​.issuer | Board​Certification​.Board​Name | String | 0.1 | N/A |
| communication | Person​Language | Object | 0​.M | The language information for a practitioner is represented as Person​Language records that reference the practitioner’s person account using their Person​Language​.IndividualId field​.While FHIR defines practitioner​.communication as a code set bundle, the Salesforce implementation is a reference to Person​Language. |

## Sample Record Diagram

Here's a diagram that shows an example of how this resource is represented in Salesforce.

![A diagram that shows how a practitioner Carol Peterson is represented in Salesforce.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2FMappings_FHIR%2Fimages%2Fsrd_hc_practitioner.png&folder=life_sciences_dev_guide)
