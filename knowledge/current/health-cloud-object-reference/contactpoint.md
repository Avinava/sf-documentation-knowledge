---
title: "ContactPoint"
domain: health-cloud-object-reference
topic: contactpoint
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.243Z
estimatedTokens: 483
keywords: [ContactPoint, FHIR, resource, maps, Contact​Point​Phone​, Salesforce, V4.0, Clinical, Data, Model, Mapping]
---

# ContactPoint

> The ContactPoint FHIR resource maps to the
      Contact​Point​Phone​ object in Salesforce.

# ContactPoint

The ContactPoint FHIR resource maps to the Contact​Point​Phone​ object in Salesforce.

## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for [ContactPoint](https://www.hl7.org/fhir/datatypes.html#ContactPoint) map to the fields in Salesforce.

| Contact Point Resource | Salesforce Field | ​Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| system | Contact​Point​Phone​.Phone​Type | Picklist | 0.1 | While FHIR defines contact​Point​​.system as a reference to a code set bundle, the Salesforce implementation is a picklist. |
| value | Contact​Point​Phone​.Telephone​Number | Phone | 0.1 | While FHIR defines contact​Point​​.value as a string, Contact​Point​Phone​.Telephone​Number is a phone data type. |
| Contact​Point​Phone​.Area​Code | String | 0.1 | N/A |
| Contact​Point​Phone​.Extension​Number | String | 0.1 | N/A |
| Contact.​Email | ​Email | 0.1 | While FHIR defines contact​Point​​.value as a string, Contact.​Email is an email data type. |
| use | Contact​Point​Phone​.Usage​Type | Picklist | 0.1 | While FHIR defines contact​Point​​.use as a code, the Salesforce implementation is a picklist. |
| Contact​Point​Email​.Usage​Type | Picklist | 0.1 |
| rank | Contact​Point​Phone​.Preference​Rank | Double | 0.1 | N/A |
| Contact​Point​Email​.Preference​Rank | Double | 0.1 | N/A |
| period | Contact​Point​Phone​.Active​From​Date​ | ​Date​ | 0.1 | Because Salesforce doesn’t support a native period data type, the Salesforce implementation of contact​Point​​.period is flattened to a set of from and to dates. |
| Contact​Point​Phone​.Active​To​​Date​ | ​Date​ | 0.1 |
| Contact​Point​Email​.Active​From​Date​ | ​Date​ | 0.1 | Because Salesforce doesn’t support a native period data type, the Salesforce implementation of contact​Point​​.period is flattened to a set of from and to dates. |
| Contact​Point​Email​.Active​To​​Date​ | ​Date​ | 0.1 |
