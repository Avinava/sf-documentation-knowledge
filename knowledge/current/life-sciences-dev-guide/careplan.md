---
title: "Care​Plan"
domain: life-sciences-dev-guide
topic: careplan
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.433Z
estimatedTokens: 2340
keywords: [Care​Plan, FHIR, resource, maps, Care​Plan​, Care​PlanDetail​, Care​Plan​Activity, Care​PlanActivityDetail​, objects, Salesforce, V4.0, Clinical, Data, Model, Mapping]
---

# Care​Plan

> The Care​Plan FHIR resource maps to the Care​Plan​, Care​PlanDetail​, Care​Plan​Activity, and Care​PlanActivityDetail​ objects in Salesforce.

# Care​Plan

The Care​Plan FHIR resource maps to the Care​Plan​, Care​PlanDetail​, Care​Plan​Activity, and Care​PlanActivityDetail​ objects in Salesforce.

## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for [Care​Plan](http://hl7.org/fhir/R4/careplan.html#CarePlan) map to the fields in Salesforce.

| Care​Plan Resource | Salesforce Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| identifier | Identifier | Object | 0​.M | The identifier information for a care plan is represented as Identifier records that reference the CarePlan record using their Identifier​.Parent​RecordId field​. |
| instantiates​Canonical | N/A | N/A | N/A | Not supported |
| instantiates​Uri | N/A | N/A | N/A | Not supported |
| basedOn | Care​Plan​Detail​.Detail​Type | Picklist | 0.M | Select Based On as the picklist value in detailType. . |
| Care​Plan​Detail​.Detail​RecordId | Lookup: CarePlan | Select Care Plan as the domain set in DetailRecordId. |
| replaces | Care​Plan​Detail​.Detail​Type | Picklist | 0.M | Select Replaced Care Plan as the picklist value in detailType. . |
| Care​Plan​Detail​.Detail​RecordId | Lookup: CarePlan | Select Care Plan as the domain set in DetailRecordId. |
| partOf | Care​Plan​Detail​.Detail​Type | Picklist | 0.M | Select Part Of as the picklist value in detailType. . |
| Care​Plan​Detail​.Detail​RecordId | Lookup: CarePlan | Select Care Plan as the domain set in DetailRecordId. |
| status | Care​Plan​.Status | Picklist | 1.1 | While FHIR defines this field as a code, the Salesforce implementation is a picklist. |
| intent | Care​Plan​.Authorization​Type | Picklist | 0.1 | While FHIR defines this field as a one-to-one code, the salesforce implementation is a zero-to-one picklist. |
| category | Care​Plan​Detail​.Detail​Type | Picklist | 0.M | Select Category as the picklist value in detailType. . |
| Care​Plan​Detail​.Detail​CodeId | Lookup: CodeSet​Bundle, Code​Set |
| title | Care​Plan​.Name | Text | 1.1 | While FHIR defines this as a zero-to-one value, the Salesforce implementation is one-to-one.. |
| description | Care​Plan​.Description | Text Area | 0.1 | N/A |
| subject | Care​Plan​.ParticipantId | Lookup: Account | 1.1 | The Salesforce implementation doesn’t support Groups. |
| encounter | Care​Plan​.Clinical​EncounterId | Lookup: Clinical​Encounter | 0.1 | N/A |
| period | Care​Plan​.Created​Date | DateTime | 0.1 | While FHIR defines this field as a Period field, the Salesforce implementation uses a pair of DateTime fields. |
| Care​Plan​.EndDate | DateTime | 0.1 |
| created | Care​Plan​.Start​Date | Date | 0.1 | N/A |
| author | Care​Plan​.AuthorId | Lookup: Account, Healthcare​Provider, Healthcare​Practitioner​Facility, Care​Registered​Device | 0.1 | The Salesforce implementation doesn’t support careTeam calues for this field. |
| contributor | Care​Plan​Detail​.Detail​Type | Picklist | 0.M | Select Part Of as the picklist value in detailType. . |
| Care​Plan​Detail​.Detail​RecordId | Lookup: Account, Healthcare​Provider, Healthcare​Practitioner​Facility, Care​Registered​Device | Select an appropriate domain set for DetailRecordId. |
| careTeam | CaseTeam | Object | 0.M | Create case teams for the Case record that’s the parent record of the CarePlan record. |
| status​Reason | Care​Plan​.status​Reason | Text | 0.1 | N/A |
| addresses | Care​Plan​Detail​.Detail​Type | Picklist | 0.M | Select Addressed Item as the picklist value in detailType. |
| Care​Plan​Detail​.Detail​RecordId | Lookup: Health​Condition | Select HealthCondition as the domain set for DetailRecordId. |
| supporting​Info | Care​Plan​Detail​.Detail​Type | Picklist | 0.M | Select Supporting Information as the picklist value in detailType. |
| Care​Plan​Detail​.Detail​RecordId | Lookup: Care​Plan,Account,Healthcare​Provider,Healthcare​Practitioner​Facility,Care​Registered​Device,Health​Condition | Select an appropriate domain set for DetailRecordId. |
| goal | Goal​Assignment | Object | 0.M | Associate the Goal​Assignment record to its parent care plan using the Parent​RecordId field. |
| activity | Care​Plan​Activity | Object | 0.M | The activity subset of a carePlan FHIR resource is represented in Salesforce as CarePlanActivity records that reference the care plan as its parent. |
| activity​.outcome​Codeable​Concept | Care​Plan​Activity​Detail​.Detail​Type | Picklist | 0.M | Select Outcome Code as the picklist value in detailType. . |
| Care​Plan​Activity​Detail​.Detail​CodeId | Lookup: CodeSet​Bundle, Code​Set | N/A |
| activity​. |  |  |  |  |
| activity​.outcome​Reference | Care​Plan​Activity​Detail​.Detail​Type | Picklist | 0.M | Select Outcome Code as the picklist value in detail​Type. . |
| Care​Plan​Activity​Detail​.Detail​RecordId | Lookup: Clinical​Encounter,Patient​Medical​Procedure,Health​Condition,Care​Observation,Diagnostic​Summary,Account,Healthcare​Provider,Healthcare​Practitioner​Facility,Care​Registered​Device | Select an appropriate domain set for Detail​RecordId. |
| activity​.progress | AuthorNote | Object | 0. | Represented as Author​Note records that reference Care​Plan​Activity records as their parent. |
| activity​.reference | Care​Plan​Activity​​.Reference​RecordId | Lookup: Medication​Statement,Medication​Request,Clinical​Service​Request | 0.1 | The Salesforce implementation of this field doesn’t support Appointment, Communication​Request, Device​Request, Nutrition​Order, Vision​Prescription, and Request​Group. |
| Care​Plan​Activity​​.Reference​TaskId | Lookup: Task | 0.1 | The Salesforce implementation implements the Task data type for this field as a separate field on the object. |
| activity​.detail​.kind | Care​Plan​Activity​​.Activity​Type | Picklist | 0.1 | While FHIR defines this field as a code, the Salesforce implementation is a code. |
| activity​.detail​.instantiates​Canonical | N/A | N/A | N/A | Not supported |
| activity​.detail​.instantiates​Uri | N/A | N/A | N/A | Not supported |
| activity​.detail​.code | Care​Plan​Activity​​.Activity​CodeId | Lookup: CodeSet​Bundle, Code​Set | 0.1 | N/A |
| activity​.detail​.reason​Code | Care​Plan​Activity​Detail​.Detail​Type | Picklist | 0.M | Select Reason Code as the picklist value in detailType. . |
| Care​Plan​Activity​Detail​.Detail​CodeId | Lookup: CodeSet​Bundle, Code​Set | N/A |
| activity​.detail​.reason​Reference | Care​Plan​Activity​Detail​.Detail​Type | Picklist | 0.M | Select Reason Code as the picklist value in detail​Type. . |
| Care​Plan​Activity​Detail​.Detail​RecordId | Lookup: Health​Condition,Care​Observation,Diagnostic​Summary | Select an appropriate domain set for Detail​RecordId. |
| activity​.detail​.goal | Goal​Assignment | Object | 0.M | Associate the Goal​Assignment record to its parent care plan activity using the Parent​RecordId field. |
| activity​.detail​.status | Care​Plan​Activity​​.Status | Picklist | 0.1 | While FHIR defines this field as a one-to-one code, the Salesforce implementation is a zero-to-one picklist. |
| activity​.detail​.status​Reason | Care​Plan​Activity​​.Status​Reason​CodeId | Lookup: CodeSet​Bundle, Code​Set | 0.1 | N/A |
| activity​.detail​.do​Not​Perform | Care​Plan​Activity​​.Prohibited​Activity | Picklist | 0.1 | The Salesforce implementation is a picklist with the values Default, True, and False. |
| activity​.detail​.scheduled​Timing | Care​Plan​Activity​​.Activity​TimingId | Lookup: Activity​Timing | 0.1 | N/A |
| activity​.detail​.scheduled​Period | Care​Plan​Activity​​.Scheduled​Period​Start​Date​Time | DateTime | 0.1 | The Salesforce implementation uses a pair of DateTime fields instead of a period field. |
| Care​Plan​Activity​​.Scheduled​Period​End​Date​Time | DateTime | 0.1 |
| activity​.detail​.scheduled​String | Care​Plan​Activity​​.Schedule​​Description | Text | 0.1 | N/A |
| activity​.detail​.location | Care​Plan​Activity​​.LocationId | Lookup: Location, Healthcare​Facility | 0.1 | N/A |
| activity​.detail​.performer | Care​Plan​Activity​Detail​.Detail​Type | Picklist | 0.M | Select Reason Code as the picklist value in detail​Type. . |
| Care​Plan​Activity​Detail​.Detail​RecordId | Lookup: Account,Healthcare​Provider,Healthcare​Practitioner​Facility,Care​Registered​Device | Select an appropriate domain set for Detail​RecordId. The Salesforce implementation doesn’t support care​Team and health​Service values for this field. |
| activity​.detail​.product​Codeable​Concept | Care​Plan​Activity​​.Administered​Product​CodeId | Lookup: CodeSet​Bundle, Code​Set | 0.1 | N/A |
| activity​.detail​.product​Reference | Care​Plan​Activity​​.Administered​Product​Id | Lookup: Medication | 0.1 | N/A |
| activity​.detail​.daily​Amount | Care​Plan​Activity​​.Daily​Dose​Quantity | Number | 0.1 | Salesforce implements the quantity data type as a pair of number and unit fields. |
| Care​Plan​Activity​​.Daily​Dose​UnitId | Lookup: Unit​Of​Measure | 0.1 |
| activity​.detail​.quantity | Care​Plan​Activity​​.Supplied​Quantity | Number | 0.1 | Salesforce implements the quantity data type as a pair of number and unit fields. |
| Care​Plan​Activity​​.Supplied​Quantity​UnitId | Lookup: Unit​Of​Measure | 0.1 |
| activity​.detail​.description | Care​Plan​Activity​​.Description | Text | 0.1 | N/A |
| note | AuthorNote | Object | 0. | Represented as Author​Note records that reference Care​Plan records as their parent. |
