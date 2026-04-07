---
title: "ResearchStudy"
domain: health-cloud-object-reference
topic: researchstudy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:44.692Z
estimatedTokens: 1796
keywords: [ResearchStudy, FHIR, resource, maps, Salesforce, V4.0, Clinical, Model, Mapping]
---

> The ResearchStudy FHIR resource maps to the
      ResearchStudy objects in Salesforce.

# ResearchStudy

The ResearchStudy FHIR resource maps to the ResearchStudy objects in Salesforce.

## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for [researchStudy](https://build.fhir.org/researchstudy.html) map to the fields in Salesforce.

| Research​Study ​Resource | Salesforce Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| url | Research​Study​.Uniform​Resource​Identifier | URL | 0.1 | N/A |
| identifier | Research​Study​.Identifier | Object | 0.M | The identifier information for a research study is represented as Identifier records that reference the ResearchStudy record using their Identifier​.Parent​RecordId field. |
| name | Research​Study​.Name | Text | 1.1 | While FHIR defines researchStudy​.name as a zero-to-one resource, the Salesforce implementation of ResearchStudy​.Name is one-to-one. |
| title | Research​Study​.Title | Long Text Area | 0.1 | While FHIR defines researchStudy.type as a text, the Salesforce implementation of ResearchStudy​.Title is a long text area. |
| date | Research​Study​.Source​System​Modified | Date/Time | 1.1 | N/A |
| status | Research​Study​.Publication​Status | Picklist | 1.1 | N/A |
| primary​Purpose​Type | Research​Study​​.Intent​Type | Picklist | 0.1 | N/A |
| phase | Research​Study​.Phase | Picklist | 0.1 | N/A |
| study​Design | Care​Program​Detail​.Detail​Record | Lookup: CodeSet, CodeSetBundle, OmniProcess, CarePlanTemplate | 1.M | While FHIR defines researchStudy​.studyDesign as a zero-to-many resource, the Salesforce implementation of CareProgram​Detail.Detail​Record is one-to-many. |
| focus | Care​Program​​Detail​.Detail​Record | Lookup: CodeSet, CodeSetBundle, OmniProcess, CarePlanTemplate | 1.M | While FHIR defines researchStudy​.focus as a zero-to-many resource, the Salesforce implementation of CareProgramDetail.Detail​Record is one-to-many. |
| condition | Care​Program​​Detail​.Detail​Record | Lookup: CodeSet, CodeSetBundle, OmniProcess, CarePlanTemplate | 1.M | While FHIR defines researchStudy​.condition as a zero-to-many resource, the Salesforce implementation of CareProgramDetail.Detail​Record is one-to-many. |
| keyword | Care​Program​​Detail​.Detail​Record | Lookup: CodeSet, CodeSetBundle, OmniProcess, CarePlanTemplate | 1.M | While FHIR defines researchStudy​.keyword as a zero-to-many resource, the Salesforce implementation of CareProgramDetail.Detail​Record is one-to-many. |
| region | Care​Program​​Detail​.Detail​Record | Lookup: CodeSet, CodeSetBundle, OmniProcess, CarePlanTemplate |  | While FHIR defines researchStudy​.region as a zero-to-many resource, the Salesforce implementation of CareProgramDetail.Detail​Record is one-to-many. |
| description​.Summary | Research​Study​.Summary | Long Text Area | 0.1 | N/A |
| description | Research​Study​.Description | Long Text Area | 0.1 | N/A |
| period | Research​Study​.Start​Date | Date/Time | 0.1 | Since Salesforce doesn’t natively support the period data type, researchStudy​.​Period is flattened into a set of start date and end date fields. The start date field is also used as the equivalent of researchStudy​.period​Date​Time. |
| Research​Study​.End​​Date | Date​/Time | 0.1 |
| site | Care​Program​Site.​Health​Care​Facility | Lookup: HealthCareFacility | 0.M | N/A |
| classifier | Care​Program​Site​.Detail​Record | Lookup: CodeSet, CodeSetBundle, OmniProcess, CarePlanTemplate | 1.M | While FHIR defines researchStudy​.classifier as a zero-to-many resource, the Salesforce implementation of CareProgramSite.DetailRecord is one-to-many. |
| associated​Party.name | Care​Program​Team​​Member.​Member | Polymorphic Lookup | 0.1 | While FHIR defines researchStudy.associatedParty.name as a text, the Salesforce implementation of CareProgramTeamMember.Member is a polymorphic lookup. |
| associated​Party.role | Care​Program​Team​Member​Role​​Period​.Role | DynamicEnum | 1.1 | N/A |
| associated​Party.period | CareProgram​Team​Member​Role​​Period​.Effective​Start​Date | Date/Time | 0.1 | Since Salesforce doesn’t natively support the period data type, researchStudy​.​associatedParty.period is flattened into a set of start date and end date fields. The start date field is also used as the equivalent of researchStudy​.period​Date​Time. |
| associated​Party.period | Care​Program​Team​Member​Role​​Period​.Effective​​End​Date | Date/Time | 0.1 | Since Salesforce doesn’t natively support the period data type, researchStudy​.​associatedParty.period is flattened into a set of start date and end date fields. The start date field is also used as the equivalent of researchStudy​.period​Date​Time. |
| associated​Party.classifier | Care​Program​Team​​Member​.Category | Multi-Select | 0.M | While FHIR defines researchStudy.associatedParty.name as a CodeSetBundle, the Salesforce implementation of CareProgramTeamMember.Category is Multi-Select. |
| progress​Status​.state | Care​Program​Status​Period​.Status | DynamicEnum | 1.M | While FHIR defines researchStudy​.state as a zero-to-many resource, the Salesforce implementation of CareProgramDetail.Detail​Record is one-to-many. |
| progress​Status​.actual | Care​Program​Status​​Period​.Are​Dates​Tentative | Boolean | 0.1 | N/A |
| progress​Status​.period | Care​Program​Status​Period​.Effective​Start​Date​Time | Date/Time | 0.1 | Since Salesforce doesn’t natively support the period data type, researchStudy​.​progressStatus.period is flattened into effective start date time field. |
| progress​Status​.period | Care​Program​Status​Period​.Effective​End​Date​Time | Date/Time | 0.1 | Since Salesforce doesn’t natively support the period data type, researchStudy​.​progressStatus.period is flattened into an effective end date time field. |
| why​Stopped | Research​Study​.Discontinuation​Reason | Picklist | 0.1 | While FHIR defines researchStudy.whyStopped as a code set bundle, the Salesforce implementation of ResearchStudy​.DiscontinuationReason is a picklist. |
| recruitment​.target​​number | Care​Program.​Target​​Enrollee​Count | Number | 0.1 | N/A |
| recruitment​.actual​​number | Care​​Program​.Current​​Enrollee​​Count | Number | 0.1 | N/A |
| recruitment​.eligibility | Research​Study​.Inclusion​Exclusion​Criteria | Rich Text Area | 0.1 | N/A |
| comparison​Group​.name | Research​Study​Comparison​Group​.Name | Text | 1.1 | N/A |
| comparison​Group​.type | Research​Study​Comparison​Group​.Type​Code | Lookup: CodeSet | 1.1 | While FHIR defines researchStudy​.comparisonGroup.type as a zero-to-one resource, the Salesforce implementation of CareProgramDetail.TypeCode is one-to-one. |
| comparison​Group​.description | Research​Study​Comparison​Group​.Description | Text | 0.1 | N/A |
| objective​.name | Care​Program​Goal​.Name | Long Text Area | 1.1 | While FHIR defines researchStudy​.objective.name as a zero-to-one resource, the Salesforce implementation of CareProgramGoal.Name is one-to-one. |
| objective​.type | Care​Program​Goal​.Type | Picklist | 0.1 | N/A |
| objective​.description | Care​Program​Goal​.Description | Long Text Area | 0.1 | N/A |
| result | Diagnostic​​Summary​.Based​On | Lookup: Medication Statement, Clinical Service Request | 0.1 | N/A |
