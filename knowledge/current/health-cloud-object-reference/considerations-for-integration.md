---
title: "Considerations for Integration"
domain: health-cloud-object-reference
topic: considerations-for-integration
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:37:44.396Z
estimatedTokens: 1051
keywords: [Considerations, Integration, Salesforce, implementation, FHIR, resources, differs, specification, Built, core, platform, FHIR-aligned, clinical, model, comes, mappings, help, integrate]
---

> The Salesforce implementation of FHIR resources differs from the FHIR specification.
  Built on the core Salesforce platform, the FHIR-aligned clinical data model comes with field
  mappings that help you integrate with the FHIR R4 specification.

# Considerations for Integration

The Salesforce implementation of FHIR resources differs from the FHIR specification. Built on the core Salesforce platform, the FHIR-aligned clinical data model comes with field mappings that help you integrate with the FHIR R4 specification.

| Available in: Enterprise and Unlimited Editions. |
| --- |


A middleware integration solution is required to convert messages from HL7 and FHIR-based systems to the fields and objects in Salesforce. But before you integrate, here are a few things to remember:

-   The HumanName FHIR resource maps to the PersonName field in Salesforce. The FHIR resource stores names in the FirstName, MiddleName, and LastName fields, while Salesforce’s clinical data model stores information in the FirstName, LastName, and FullName fields. LastName can store the family name and any middle name, or any consequent names after the first name. FullName stores the combination of the patient’s first and last name. The ParentRecordId field relates this name to the person by referencing the Account or Contact record of the person’s Person Account.
-   If a coding or codeable concept in FHIR has a value set with conceptually simple values, then Salesforce uses a picklist. For example, the FHIR identifier​.use resource, which is a code data type, maps to the Identifier​.IdUsage​Type field of the Identifier object, which is a picklist in Salesforce.
-   For resources that FHIR defines as code data types, Salesforce uses a string. For example, the FHIR coding​.code resource, which is code data type, maps to the CodeSet​.Code field of the CodeSet object, which is a string in Salesforce.
-   For two resources that FHIR defines as URI, Salesforce uses a string. These two resources are the Identifier​.Source​System field and the CodeSet​.Source​System field. The FHIR identifier​.system resource, which is a URI, maps to the Identifier​.Source​System field of the Identifier object, which is a string in Salesforce. Similarly, the FHIR coding​.system resource, which is a URI, maps to the CodeSet​.Source​System field of the CodeSet object, which is also a string in Salesforce.
-   According to FHIR, Codeable​Concept has a zero-to-many coding resource. Because Salesforce doesn’t support zero-to-many references, Code Set ​Bundle flattens this zero-to-many reference to 15 zero-to-one Code Set references. The Code Set references are CodeSet1Id, CodeSet2Id, CodeSet3Id, and so on, until CodeSet15Id.

Salesforce doesn’t have data types for periods, quantities, ranges, and ratios. Instead, resources that need these data types are flattened to sets of two or three fields in their implementation.

-   Period fields are flattened into a set of start date and end date fields. For example, allergy​Intolerance​.onset​.onset​Period in the FHIR specification maps to the Allergy​Intolerance​.Onset​Start​Date​Time and Allergy​Intolerance​.Onset​End​Date​Time fields in Salesforce.
-   Quantity fields are flattened into a combination of a numeric quantity and unit fields. The unit field indicates the unit of measure. The quantity field, which is a double field, represents the numeric value. For example, medication​​Request​.dispense​​Request​.initial​Fill​.quantity is flattened into a set of quantity and unit fields​.
-   Range fields are flattened into a set of upper and lower limits and unit fields. To reference the unit, we have a Lookup to the UnitofMeasure object. For example, procedure​.performed​.performed​Range in the FHIR specification maps to the Patient​Medical​​Procedure​.PerformedAt​AgeLower​Limit, Patient​Medical​​Procedure​.PerformedAt​​AgeUpper​Limit, and Patient​Medical​​Procedure​.Performed​AgeRange​Unit fields in Salesforce.
-   Ratio fields are flattened into a set of numerator and denominator fields. If the ratio refers to a quantity, then a unit field is added. To reference the unit, we have a Lookup to the UnitofMeasure object. For example, service​Request​.quantity​.quantity​Ratio in the FHIR specification maps to the Clinical​Service​Request​.Quantity​Numerator, Clinical​Service​Request​.Quantity​Denominator, and Clinical​Service​Request​.Quantity​Numerator​Unit​Id fields in Salesforce.
