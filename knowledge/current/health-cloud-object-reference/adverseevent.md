---
title: "AdverseEvent"
domain: health-cloud-object-reference
topic: adverseevent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:35.395Z
estimatedTokens: 1505
keywords: [AdverseEvent, FHIR, resource, maps, objects, Salesforce, V4.0, Clinical, Data, Model, Mapping]
---

# AdverseEvent

> The AdverseEvent FHIR resource maps to the
      AdverseEvent objects in Salesforce.

# AdverseEvent

The AdverseEvent FHIR resource maps to the AdverseEvent objects in Salesforce.

## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for [adverseEvent](https://build.fhir.org/adverseevent-definitions.html) map to the fields in Salesforce.

| Adverse​Event Resource | Salesforce Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| status | Adverse​Event​Entry.​Status | Dynamic Enum | 1.1 | While FHIR defines adverse​Event​Entry​.status as a code set, the Salesforce implementation of Adverse​Event​Entry​.Status is text. |
| actuality | Adverse​Event​Entry​.​Type | Dynamic Enum | 1.1 | While FHIR defines adverse​Event​Entry​.actuality as a code set, the Salesforce implementation of Adverse​Event​Entry​.type is dynamic enum. |
| category | Adverse​Event​​Entry​.Category | Picklist (Multi-Select) | 0.M | While FHIR defines adverse​Event​Entry​.category as a code set bundle, the Salesforce implementation of Adverse​Event​Entry​.Category is picklist (Multi-Select). |
| code | Adverse​Event​Entry​.Event​Code | Look​up: Code Set, Code Set Bundle | 0.1 | While FHIR defines adverse​Event​Entry​.event​Code as a code set bundle, the Salesforce implementation of Adverse​Event​Entry​.EventCode is a lookup. |
| subject | Adverse​Event​Entry​.Subject | Polymorphic Look​up: Care​Program​​​Enrollee, Account, Team​Member, Care​Program​Group, Team, Health​Care​Provider | 1.1 | N/A |
| encounter | Adverse​Event​Entry​.Clinical​Encounter | Look​up: Clinical Encounter | 0.1 | N/A |
| cause | Adverse​Event​Entry.​Cause​Start​Date​Time | Date/Time | 0.1 | Since Salesforce doesn’t natively support the period data type, adverse​Event​.​cause is flattened into a set of cause start date time and cause end date time fields. |
| Adverse​Event​Entry​.Cause​End​Date​Time | Date​/Time | 0.1 |
| effect | Adverse​Event​Entry​.Event​Start​Date​Time | Date/Time | 0.1 | Since Salesforce doesn’t natively support the period data type, adverse​Event​.​effect is flattened into a set of event start date time and event end date time fields. |
| Adverse​Event​Entry​.Event​End​Date​Time | Date/Time | 0.1 |
| detected | Adverse​Event​Entry​.Detected​Date | Date/Time | 0.1 | N/A |
| recorded​Date | Adverse​Event​Entry​.Recorded​Date | Date/Time | 0.1 | N/A |
| resulting​Effect | Adverse​Event​Resulting​Effect​.Effect | Lookup: Health Condition, Care Observation | 1.1 | While FHIR defines adverse​Event​Resulting​Effect​.resulting​Effect as a zero-to-many resource, the Salesforce implementation of Adverse​Event​Resulting​Effect​.Effect is one-to-many. |
| location | Adverse​Event​Entry​.Location | Lookup: Healthcare Facility, Care Program Site | 0.1 | N/A |
| seriousness | Adverse​Event​Entry​.Severity | Picklist | 0.1 | While FHIR defines adverse​Event​Entry​.Severity as a code set bundle, the Salesforce implementation of Adverse​Event​Entry​.Severity is picklist. |
| outcome | Adverse​Event​Outcome​.Outcome​Code | Look​up: Code Set, Code Set Bundle | 1.1 | While FHIR defines adverse​Event​Outcome.outcome as a Code​Set​Bundle, the Salesforce implementation of Adverse​Event​​Outcome.Outcome​Code is a lookup. |
| recorder | Adverse​Event​Entry.​Recorded​By | Look​up: Account Care Program Enrollee | 1.1 | While FHIR defines adverse​Event​Outcome​.recorder as a zero-to-many resource, the Salesforce implementation of Adverse​Event​Outcome​.RecordedBy is one-to-one. |
| participant​.function | Adverse​Event​Party​.Role | Dynamic Enum | 0.1 | N/A |
| participant​.actor | Adverse​Event​Party​.Party | Look​up: Account, Contact, Care Program Enrollee, Healthcare Facility, Care Registered Device, Healthcare Practitioner Facility | 1.1 | N/A |
| expected​In​Research​Study | Adverse​Event​Entry​.Expected | Boolean | 0.1 | N/A |
| suspect​Entity​.instance | Adverse​Event​Cause.​Cause | Look​up: Patient Immunization, Medication, Medication Statement, Research Study, Patient Medical Procedure, Care Registered Device | 1.1 | While FHIR defines adverse​Event​Cause​.suspect​Entity​.instance as a Code​Set​Bundle, the Salesforce implementation of Adverse​Event​Cause​.Cause is a lookup. |
| suspect​Entity.​causality​.assessment​Method | Adverse​Event​Cause.​Assessment​Method​Code | Look​up: Code​Set, Code​Set​Bundle | 0.1 | N/A |
| suspect​Entity.​causality.​entity​Relatedness | Adverse​Event​Cause.​Probability | Dynamic Enum | 0.1 | N/A |
| suspect​Entity.​causality​.author | Adverse​Event​Cause.​Authored​By | Polymorphic Look​up: Account, Contact, User, Healthcare​Facility, Healthcare​Practitioner​Facility, Research​Study​Participant | 0.1 | N/A |
| contributing​Factor​.item | Adverse​Event​Contributing​Factor.​Contributing​Factor | Polymorphic Look​up: Health​Condition, Care​Observation, Allergy​Intolerance, Patient​Immunization, Care​Registered​Device, Medication, Medication​Statement, Diagnostic​Summary, Patient​Medical​Procedure, Medication​Administration | 1.M | While FHIR defines adverse​Event​Contributing​Factor.​contributing​Factor​.item as a zero-to-many resource, the Salesforce implementation of Adverse​Event​Contributing​Factor.​Contributing​Factor is one-to-many. |
| preventive​Action​.item | Adverse​Event​Action​.Action​Code | Polymorphic Look​up: Code​Set, Code​Set​Bundle | 0.1 | While FHIR defines adverse​Event​Action.​preventive​Action​.item as a one-to-one resource, the Salesforce implementation of Adverse​Event​Action​.ActionCode is zero-to-one. |
| mitigating​Action​.item | Adverse​Event​Action​.Action​Code | Polymorphic Look​up: Code​Set, Code​Set​Bundle | 0.1 | While FHIR defines adverse​Event​Action.​mitigating​Action​.item as a one-to-one resource, the Salesforce implementation of Adverse​Event​Action​.ActionCode is zero-to-one. |
| supporting​Info​.item | Adverse​Event​Supporting​Information​.Supporting​Information | Polymorphic Look​up: Health​Condition, Care​Observation, Allergy​Intolerance, Patient​Immunization, Diagnostic​Summary, Medication, Medication​Statement | 1.1 | N/A |
