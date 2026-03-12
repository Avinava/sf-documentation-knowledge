---
title: "Document​Reference"
domain: life-sciences-dev-guide
topic: documentreference
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.480Z
estimatedTokens: 1211
keywords: [Document​Reference, F​HI​R, resource, maps, Diagnostic​Summary, Diagnostic​SummaryDetail, objects, Salesforce​, V4​.0, ​Clinical, ​Data, ​Model, ​Mapping, Sample, Record]
---

# Document​Reference

> The Document​Reference F​HI​R resource maps to
    the Diagnostic​Summary and Diagnostic​SummaryDetail objects in Salesforce​.

# Document​Reference

The Document​Reference F​HI​R resource maps to the Diagnostic​Summary and Diagnostic​SummaryDetail objects in Salesforce​.

## F​HI​R V4​.0 - ​Clinical ​Data ​Model ​Mapping

​Here’s how the fields defined by F​HI​R for [Document​Reference](https://www.hl7.org/fhir/documentreference.html) map to the fields in Salesforce​.

| Document​Reference ​Resource | Salesforce Field | ​Type | Salesforce ​Cardinality | Notes |
| --- | --- | --- | --- | --- |
| Master​Identifier | N/​A | N/​A | N/​A | Not supported |
| identifier | ​​​Identifier | Object | 0​.​M | The identifier information for a documentReference is represented as Identifier records that reference the DiagnosticSummary record using their ​​​Identifier​.​Parent​RecordId field​. |
| status | ​​Diagnostic​Summary​.Status | Picklist | 1.1 | While FHIR defines document​Reference.status as a code, the Salesforce implementation is a picklist. |
| docStatus | ​​Diagnostic​Summary​.Document​Stage | Picklist | 0.1 | While FHIR defines document​Reference.docStatus as a code, the Salesforce implementation is a picklist. |
| type | ​​Diagnostic​Summary​.Document​Type​CodeId | Lookup: CodeSet​Bundle | 0.1 | N/A |
| category | ​​Diagnostic​Summary​.Category | Multi-Select Picklist | 0.M | While FHIR defines documentReference.category as a codeable concept, the Salesforce implementation is a picklist. |
| subject | ​​Diagnostic​Summary​.PatientId | Maste-Detail: Account | 1.1 | The Salesforce implementation supports only patients as subjects of a document reference. |
| date | ​​Diagnostic​Summary​.Issued​Date​Time | DateTime | 0.1 | N/A |
| author | ​​Diagnostic​Summary​Detail | Object | 0.M | The author information of a document reference is represented using the DiagnosticSummaryDetail child object. The DetailRecordId field references the author, the DetailTypefield specifies the child record type as Author, and the DiagnosticSummaryId field references the parent DiagnosticSummary record that represents the document reference. |
| authenticator | ​​Diagnostic​Summary​.Authenticator​Id | Lookup: Healthcare Provider, Account, Contact, User | 0.1 | The Salesforce implementation doesn’t directly support practitionerRole or HealthcarePractitionerFacility records as authenticators. |
| custodian | ​​Diagnostic​Summary​.Custodian​Id | Lookup: Account | 0.1 | N/A |
| relatesTo​.code | ​​Diagnostic​Summary​Detail​.Document​Relation​Type | Picklist | 0.M | The related document information of a document reference is represented using the DiagnosticSummaryDetail child object. The DetailRecordId field references the related document, the Document​Relation​Type field specifies the type of relation, the DetailTypefield specifies the child record type as Related Document, and the DiagnosticSummaryId field references the parent DiagnosticSummary record that represents the document reference. |
| relatesTo​.target | ​​Diagnostic​Summary​Detail​.Detail​Record | Lookup: Diagnostic​Summary | 0​.M |
| description | ​​Diagnostic​Summary.​Summary | String | 0.1 | While F​HI​R defines document​Reference.status​Reason as a zero-to-many codeable concept, the Salesforce implementation is a zero-to-one picklist​. |
| security​Label | ​​Diagnostic​Summary.​Document​Security​Code | Lookup: CodeSet​Bundle | 0.1 | N/A |
| content​.attachment | ​​Diagnostic​Summary​.Report​AttachmentId | Lookup: Attachment | 0.1 | While FHIR defines documentReference.Content as a one-to-many resource, the Salesforce implementation is zero-to-one. |
| content​.format | ​​Diagnostic​Summary.​Document​Format​Code | Lookup: CodeSet​ | 0.1 | N/A |
| context​.encounter | ​​Diagnostic​Summary​Detail | Object | 0.M | The encounter context information of a document reference is represented using the DiagnosticSummaryDetail child object. The DetailRecordId field references the clincial encounter record, the DetailTypefield specifies the child record type as Clinical Encounter, and the DiagnosticSummaryId field references the parent DiagnosticSummary record that represents the document reference. |
| context​.event | N/​A | N/​A | N/​A | Not supported |
| context​.period | N/​A | N/​A | N/​A | Not supported |
| context​.facility​Type | N/​A | N/​A | N/​A | Not supported |
| context​.practice​Setting | N/​A | N/​A | N/​A | Not supported |
| context​.source​Patient​Info | N/​A | N/​A | N/​A | Not supported |
| context​.related | N/​A | N/​A | N/​A | Not supported |

## Sample Record Diagram

Here's a diagram that shows an example of how this resource is represented in Salesforce.

![A diagram that shows an example of how a document related to the patient Charles Green is represented in Salesforce.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2FMappings_FHIR%2Fimages%2Fsrd_hc_documentreference.png&folder=life_sciences_dev_guide)
