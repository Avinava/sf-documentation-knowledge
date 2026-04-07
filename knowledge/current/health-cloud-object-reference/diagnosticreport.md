---
title: "DiagnosticReport"
domain: health-cloud-object-reference
topic: diagnosticreport
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:44.440Z
estimatedTokens: 1251
keywords: [DiagnosticReport, diagnostic​Report, FHIR, resource, maps, Diagnostic​Summary​, Salesforce, V4.0, Clinical​, Model, Mapping, Sample, Record, Diagram]
---

> The diagnostic​Report FHIR resource maps to the
      Diagnostic​Summary​ object in Salesforce.

# DiagnosticReport

The diagnostic​Report FHIR resource maps to the Diagnostic​Summary​ object in Salesforce.

## FHIR V4.0 - Clinical​ Data Model Mapping

Here’s how the fields defined by FHIR for [diagnostic​Report](https://www.hl7.org/fhir/diagnosticreport.html) map to the fields in Salesforce.

| Diagnostic Report Resource | Salesforce Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| identifier | Identifier | Object | 0.M | The identifier information for a diagnostic summary is represented as Identifier records that reference the Diagnostic​Summary​ record using their Identifier​.Parent​RecordId field. |
| basedOn | Diagnostic​Summary​.Based​OnId | Polymorphic Lookup: Medication​Statement, Clinical​Service​Request | 0.1 | While FHIR defines diagnostic​Report​.basedOn as a zero-to-many reference, the Salesforce implementation is a zero-to-one text field.Only references to medication statement and clinical service request records are supported. |
| status | Diagnostic​Summary​.Status | Picklist | 1.1 | While FHIR defines diagnostic​Report​.status as a reference to code set bundle, the Salesforce implementation is a picklist. |
| category | Diagnostic​Summary​.Category | Multi-Select Picklist | 0.M | While FHIR defines diagnostic​Report​.category as a reference to code set bundle, the Salesforce implementation is a multi-select picklist. |
| code | Diagnostic​Summary​.​CodeId | Lookup: ​CodeSet​Bundle | 1.1 | N/A |
| subject | Diagnostic​Summary​.PatientId | Master-Detail: Account | 1.1 | The Salesforce implementation of diagnostic​Report​.subject supports references to only patients. |
| encounter | Diagnostic​Summary​.Clinical​EncounterId | Lookup: Clinical​Encounter | 0.1 | N/A |
| effective​.effective​Date​Time | Diagnostic​Summary​.Effective​Start​Date​Time | Date​Time | 0.1 | N/A |
| effective​.effective​Period | Diagnostic​Summary​.Effective​Start​Date​Time | Date​Time | 0.1 | Because Salesforce doesn’t support a native period data type, the diagnostic​Report​.effective​.effective​Period field is flattened into a set of start date and end date fields. |
| Diagnostic​Summary​.Effective​End​Date​Time | Date​Time | 0.1 |
| issued | Diagnostic​Summary​.Issued​Date​Time | Date​Time | 0.1 | Because Salesforce doesn’t support a native instant data type, the diagnostic​Report​.issued FHIR resource is implemented as a date time field in Salesforce. |
| performer | Diagnostic​Summary​.IssuedById | Lookup: Care​Performer | 0.1 | While FHIR defines diagnostic​Report​.performer as a zero-to-many resource, the Salesforce implementation is a zero-to-one reference to Care​Performer. |
| resultsInterpreter | Diagnostic​Summary​.Interpreted​ById | Lookup: Care​Performer | 0.1 | While FHIR defines diagnostic​Report​.results​Interpreter as a zero-to-many resource, the Salesforce implementation is a zero-to-one reference to Care​Performer. |
| specimen | N/A | N/A | N/A | Not supported |
| result | Diagnostic​Summary​.Care​Observation​Id | Lookup: Care​Observation | 0.1 | While FHIR defines diagnostic​Report​.result as a zero-to-many resource, the Salesforce implementation is a zero-to-one reference to Care​Observation. |
| imaging​Study | N/A | N/A | N/A | Not supported |
| media​.comment | Diagnostic​Summary​.ImageComments1 | String | 0.1 | The zero-to-many diagnostic​Report​.media resource is flattened to five separate zero-to-one text fields and five separate zero-to-one URL fields in the Salesforce implementation. |
| Diagnostic​Summary​.ImageComments2 | String |  |
| Diagnostic​Summary​.ImageComments3 | String | 0.1 |
| Diagnostic​Summary​.ImageComments4 | String | 0.1 |
| Diagnostic​Summary​.ImageComments5 | String | 0.1 |
| media​.link | Diagnostic​Summary​.ImageUrl1 | URL | 0.1 |
| Diagnostic​Summary​.ImageUrl2 | URL | 0.1 |
| Diagnostic​Summary​.ImageUrl3 | URL | 0.1 |
| Diagnostic​Summary​.ImageUrl4 | URL | 0.1 |
| Diagnostic​Summary​.ImageUrl5 | URL | 0.1 |
| conclusion | Diagnostic​Summary​.Summary | String | 0.1 | N/A |
| conclusion​Code | Diagnostic​Summary​.Summary​CodeId | Lookup: ​CodeSet​Bundle | 0.1 | While FHIR defines diagnostic​Report​.conclusion​Code as a zero-to-many resource, the Salesforce implementation is a zero-to-one reference. |
| presented​Form | N/A | N/A | N/A | Not supported |

## Sample Record Diagram

Here's a diagram that shows an example of how this resource is represented in Salesforce.

![A diagram that shows how a daignostic report for the patient Charles Green is represented in Salesforce.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2FMappings_FHIR%2Fimages%2Fsrd_hc_diagnosticreport.png&folder=health_cloud_object_reference)

#### See Also

-   [DiagnosticSummary](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_DiagnosticSummary.htm "Represents the findings, interpretations, and summaries of tests performed on patients. This object is available in API version 51.0 and later.")

## Related Topics

- DiagnosticSummary (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_DiagnosticSummary.htm)
