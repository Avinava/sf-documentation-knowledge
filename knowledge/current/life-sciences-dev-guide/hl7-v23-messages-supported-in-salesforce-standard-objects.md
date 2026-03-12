---
title: "HL7 v2.3 Messages Supported in Salesforce Standard Objects"
domain: life-sciences-dev-guide
topic: hl7-v23-messages-supported-in-salesforce-standard-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.682Z
estimatedTokens: 2045
keywords: [HL7, v2.3, Messages, Salesforce, Standard, Objects, support, ADT, ORM, ORU, MDM, VXU, RDE, systems]
---

# HL7 v2.3 Messages Supported in Salesforce Standard Objects

> Salesforce Standard objects support ADT, ORM, ORU, MDM, VXU, and RDE messages from HL7
  v2.3 based systems.

# HL7 v2.3 Messages Supported in Salesforce Standard Objects

Salesforce Standard objects support ADT, ORM, ORU, MDM, VXU, and RDE messages from HL7 v2.3 based systems.

These messages can be stored in Salesforce by mapping their constituent segments to fields in Salesforce standard objects.

-   **Admission, Discharge, and Transfer (ADT)**
    -   [Patient Identification (PID)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_PID.htm "The Patient Identification (PID) HL7 segment maps to the ContactPointPhone object in Salesforce.")
    -   [Patient Visit (PV1)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_PV1.htm "The Patient Visit (PV1) HL7 segment maps to the Encounter object, among other objects in Salesforce.")
    -   [Patient Visit - Additional Information (PV2)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_PV2.htm "The Patient Visit - Additional Information (PV2) HL7 segment maps primarily to the ClinicalEncounter object in Salesforce.")
    -   [Observation Segment (OBX)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_OBX.htm "The Observation Segment (OBX) HL7 segment maps to the CareObservation object in Salesforce.")
    -   [Patient Allergy Information (AL1)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_AL1.htm "The Patient Allergy Information (AL1) HL7 segment maps to the AllergyIntolerance object in Salesforce.")
-   **Order Message (ORM\_O01)**
    -   [Patient Identification (PID)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_PID.htm "The Patient Identification (PID) HL7 segment maps to the ContactPointPhone object in Salesforce.")
    -   [Patient Visit (PV1)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_PV1.htm "The Patient Visit (PV1) HL7 segment maps to the Encounter object, among other objects in Salesforce.")
    -   [Patient Visit - Additional Information (PV2)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_PV2.htm "The Patient Visit - Additional Information (PV2) HL7 segment maps primarily to the ClinicalEncounter object in Salesforce.")
    -   [Patient Allergy Information (AL1)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_AL1.htm "The Patient Allergy Information (AL1) HL7 segment maps to the AllergyIntolerance object in Salesforce.")
    -   [Common Order Segment (ORC)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_ORC.htm "The Common Order Segment (ORC) HL7 segment maps primarily to the ClinicalServiceRequest and MedicationRequest objects in Salesforce.")
-   **Unsolicited Transmission of an Observation Message (ORU\_R01)**
    -   [Patient Identification (PID)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_PID.htm "The Patient Identification (PID) HL7 segment maps to the ContactPointPhone object in Salesforce.")
    -   [Patient Visit (PV1)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_PV1.htm "The Patient Visit (PV1) HL7 segment maps to the Encounter object, among other objects in Salesforce.")
    -   [Patient Visit - Additional Information (PV2)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_PV2.htm "The Patient Visit - Additional Information (PV2) HL7 segment maps primarily to the ClinicalEncounter object in Salesforce.")
    -   [Common Order Segment (ORC)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_ORC.htm "The Common Order Segment (ORC) HL7 segment maps primarily to the ClinicalServiceRequest and MedicationRequest objects in Salesforce.")
    -   [Observation Request Segment (OBR)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_OBR.htm "The Observation Request Segment (OBR) HL7 segment maps primarily to the ClinicalServiceRequest, DiagnosticSummary, and PatientMEdicalProcedure objects in Salesforce.")
    -   [Observation Segment (OBX)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_OBX.htm "The Observation Segment (OBX) HL7 segment maps to the CareObservation object in Salesforce.")
-   **Unsolicited Vaccination Record Update (VXU\_V04)**
    -   [Patient Identification (PID)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_PID.htm "The Patient Identification (PID) HL7 segment maps to the ContactPointPhone object in Salesforce.")
    -   [Patient Visit (PV1)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_PV1.htm "The Patient Visit (PV1) HL7 segment maps to the Encounter object, among other objects in Salesforce.")
    -   [Patient Visit - Additional Information (PV2)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_PV2.htm "The Patient Visit - Additional Information (PV2) HL7 segment maps primarily to the ClinicalEncounter object in Salesforce.")
    -   [Common Order Segment (ORC)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_ORC.htm "The Common Order Segment (ORC) HL7 segment maps primarily to the ClinicalServiceRequest and MedicationRequest objects in Salesforce.")
    -   [Pharmacy Administration Segment (RXA)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_RXA.htm "The Pharmacy Administration Segment (RXA) HL7 segment maps primarily to the PatientImmunization and Medication objects in Salesforce.")
    -   [Pharmacy Route Segment (RXR)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_RXR.htm "The Pharmacy Route Segment (RXR) HL7 segment maps primarily to the PatientImmunization and PatientMedicationDosage objects in Salesforce.")
    -   [Observation Segment (OBX)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_OBX.htm "The Observation Segment (OBX) HL7 segment maps to the CareObservation object in Salesforce.")
-   **Pharmacy/Treatment Encoded Order Message (RDE\_O01)**
    -   [Patient Identification (PID)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_PID.htm "The Patient Identification (PID) HL7 segment maps to the ContactPointPhone object in Salesforce.")
    -   [Patient Visit (PV1)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_PV1.htm "The Patient Visit (PV1) HL7 segment maps to the Encounter object, among other objects in Salesforce.")
    -   [Patient Visit - Additional Information (PV2)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_PV2.htm "The Patient Visit - Additional Information (PV2) HL7 segment maps primarily to the ClinicalEncounter object in Salesforce.")
    -   [Patient Allergy Information (AL1)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_AL1.htm "The Patient Allergy Information (AL1) HL7 segment maps to the AllergyIntolerance object in Salesforce.")
    -   [Common Order Segment (ORC)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_ORC.htm "The Common Order Segment (ORC) HL7 segment maps primarily to the ClinicalServiceRequest and MedicationRequest objects in Salesforce.")
    -   [Pharmacy Encoded Order Segment (RXE)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_RXE.htm "The Pharmacy Encoded Order Segment (RXE) HL7 segment maps primarily to the Medication object in Salesforce.")
    -   [Pharmacy Route Segment (RXR)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_RXR.htm "The Pharmacy Route Segment (RXR) HL7 segment maps primarily to the PatientImmunization and PatientMedicationDosage objects in Salesforce.")
    -   [Pharmacy Component Order Segment (RXC)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_RXC.htm "The Pharmacy Component Order Segment (RXC) HL7 segment maps to the Medication and MedicationRequestobjects in Salesforce.")
    -   [Observation Segment (OBX)](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_OBX.htm "The Observation Segment (OBX) HL7 segment maps to the CareObservation object in Salesforce.")

## Related Topics

- Patient Identification (PID) (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_PID.htm)
- Patient Visit (PV1) (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_PV1.htm)
- Patient Visit - Additional Information
        (PV2) (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_PV2.htm)
- Observation Segment (OBX) (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_OBX.htm)
- Patient Allergy Information (AL1) (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_AL1.htm)
- Common Order Segment (ORC) (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_ORC.htm)
- Observation Request Segment (OBR) (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_OBR.htm)
- Pharmacy Administration Segment
       (RXA) (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_RXA.htm)
- Pharmacy Route Segment (RXR) (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_RXR.htm)
- Pharmacy Encoded Order Segment
       (RXE) (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_hl7_RXE.htm)
