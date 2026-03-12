---
title: "Goal"
domain: life-sciences-dev-guide
topic: goal
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.503Z
estimatedTokens: 810
keywords: [Goal, FHIR, resource, maps, Goal​Assignment​, Goal​AssignmentDetail​, objects, Salesforce, V4.0, Clinical, Data, Model, Mapping]
---

# Goal

> The Goal FHIR resource maps to the Goal​Assignment​ and Goal​AssignmentDetail​ objects in Salesforce.

# Goal

The Goal FHIR resource maps to the Goal​Assignment​ and Goal​AssignmentDetail​ objects in Salesforce.

## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for [Goal](http://hl7.org/fhir/R4/goal.html#resource) map to the fields in Salesforce.

| Goal Resource | Salesforce Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| Identifier | N/A | N/A | N/A | Not supported |
| life​cycle​Status | Goal​Assignment​.Status | Picklist | 0.1 | While FHIR defines this field as a one-to-one code value, the Salesforce implementation is a zero-to-one picklist. |
| achievementStatus | Goal​Assignment​.Progression​Status | Picklist | 0.1 | While FHIR defines this value as a codeable concept, the Salesforce implementation is a picklist. |
| category | N/A | N/A | N/A | Not supported |
| continuous | Goal​Assignment​.IsContinuous​Goal | Boolean | 0.1 | N/A |
| priority | Goal​Assignment​.Priority | Picklist | 0.1 | While FHIR defines this field as a codeable concept, the Salesforce implementation is a picklist. |
| description | Goal​Assignment​.Description | Text Area | 0.1 | While FHIR defines this field as a one-to-one codeable concept, the salesforce implementation supports both zero-to-one text values and zero-to-one codeable concept and codeset values. |
| Goal​Assignment​.Description​CodeId | Lookup: CodeSet​Bundle, Code​Set | 0.1 |
| subject | Goal​Assignment​.Parent​RecordId | Lookup: Account, Care​Plan. Goal​Assignment, CarePlan​Activity | 1.1 | The Salesforce implementation additionally supports goal and carePlan as valid subject values for goal. |
| start | Goal​Assignment​.Start​Date | Date | 0.1 | N/A |
| Goal​Assignment​.Start​Event​CodeId | Lookup: CodeSet​Bundle, Code​Set | 0.1 | N/A |
| target | N/A | N/A | N/A | Not Supported |
| status​Date | Goal​Assignment​.Status​Date | DateTime | 0.1 | The Salesforce Implementation uses the DateTime data type instead of Date. |
| status​Reason | Goal​Assignment​.status​Reason | Text | 0.1 | N/A |
| expressedBy | Goal​Assignment​.Assigned​ById | Lookup: Account, Contact, Healthcare Provider, Healthcare Practitioner Facility | 0.1 | The Salesforce implementation doesn’t support careTeam values for this field. |
| addresses | Goal​Assignment​Detail​.Detail​Type | Picklist | 0.M | Select Addressed Item as the picklist value in detailType and select one of the supported domain sets in detailRecord. |
| Goal​Assignment​Detail​.Detail​RecordId | Lookup: Health​Condition, Care​Observation, Medication​Statement, Medication​Request, Clinical​Service​Request | The Salesforce implementation doesn’t support procedure, nutrition​Order, and Risk​Assessment values. |
| outcome​Code | Goal​Assignment​Detail​.Detail​Type | Picklist | 0.M | Select Outcome Code as the picklist value in detailType. |
| Goal​Assignment​Detail​.Detail​CodeId | Lookup: CodeSet​Bundle, Code​Set | N/A |
| outcome​Reference | Goal​Assignment​Detail​.Detail​Type | Picklist | 0.M | Select Outcome Reference as the picklist value in detail​Type. |
| Goal​Assignment​Detail​.Detail​RecordId | Lookup: Care​Observation | Select Care Observation as the domain set in Detail​RecordId. |
| note | N/A | N/A | N/A | Not supported |
