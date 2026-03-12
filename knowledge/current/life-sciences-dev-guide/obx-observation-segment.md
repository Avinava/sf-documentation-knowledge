---
title: "OBX - Observation Segment"
domain: life-sciences-dev-guide
topic: obx---observation-segment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:44.626Z
estimatedTokens: 669
keywords: [OBX, Observation, Segment, HL7, maps, CareObservation, Salesforce, V2.3, Clinical, Data, Model, Mapping]
---

# OBX - Observation Segment

> The Observation Segment (OBX) HL7 segment maps to the CareObservation object in Salesforce.

# OBX - Observation Segment

The Observation Segment (OBX) HL7 segment maps to the CareObservation object in Salesforce.

## HL7 V2.3 - Clinical Data Model Mapping

Here’s how the segments defined by HL7 V2.3 for OBX map to fields in Salesforce standard objects.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=life_sciences_dev_guide)

#### Note

Only the Segments supported by Salesforce are mentioned below.

| OBX | Salesforce Field | Type | Notes |
| --- | --- | --- | --- |
| OBX.2 - Value Type | CareObservation.ObservedValueType | Picklist | N/A |
| OBX.3 - Observation Identifier | Care​Observation​.CodeId | Lookup: CodeSetBundle | N/A |
| Care​Observation​Component​.​Component​Type​CodeId | Lookup: CodeSetBundle | N/A |
| OBX.5 - Observation Value | Care​Observation​.​Observed​Value​​NumeratorCare​Observation​.​Observed​Value​​DenominatorCare​Observation​.​Observed​Value​​CodeIdCare​Observation​.​Observed​Value​​TextCare​Observation​.​Is​ObservedCare​Observation​.​Observation​Start​TimeCare​Observation​.​Observation​End​TimeCare​ObservationComponent​.​Observed​Value​​NumeratorCare​Observation​Component.​Observed​Value​​DenominatorCare​ObservationComponent​.​Observed​Value​​CodeIdCare​ObservationComponent​.​Observed​Value​​TextCare​ObservationComponent​.​Is​ObservedCare​Observation​Component.​Observation​Start​TimeCare​ObservationComponent​.​Observation​End​TimeAttachment​.​ContentTypeAttachment​.​BodyPatient​Medical​​Procedure​.ReportId | Multiple Data types; Refer Object reference documentation | N/A |
| OBX.6 - Units | Care​Observation​.​Observed​Value​​UnitIdCare​Observation​Component​.​Observed​Value​​UnitId | Lookup: UnitOfMeasure | N/A |
| OBX.7 - Reference Range | Care​Observation​​.Lower​Baseline​Value​Care​Observation​​.Upper​Baseline​Value​Care​Observation​Component​.Lower​Baseline​Value​Care​Observation​Component​.Upper​Baseline​Value​ | Double | N/A |
| OBX.8 - Abnormal Flags | Care​Observation​.​Value​InterpretationCare​Observation​Component​.​Value​Interpretation | Lookup: CodeSetBundle | N/A |
| OBX.11 - Observation Result Status | CareObservation.ObservationStatus | Picklist | N/A |
| OBX.14 - Date/Time of the Observation | CareObservation.IssuedDateTime | DateTime | N/A |
| OBX.16 - Responsible Observer | CareObservation.ObserverId | Lookup: HealthcareProvider, Account | N/A |
| CarePerformer | Object | The performer information for a ​Procedure is represented as Care​Performer records that reference the Patient​Medical​​Procedure record using their Care​Performer​.Parent​RecordId field​. |
| OBX.17 - Observation Method | CareObservation.MethodId | Lookup: CodeSetBundle | N/A |
