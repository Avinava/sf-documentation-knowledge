---
title: "​Observation"
domain: life-sciences-dev-guide
topic: observation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:37:58.375Z
estimatedTokens: 3008
keywords: [​Observation, observation, FHIR, resource, maps, Care​Observation, Care​Observation​Component, Salesforce​, V4​.0, Clinical, Model, Mapping]
---

> The observation FHIR resource maps to the Care​Observation and Care​Observation​Component objects in Salesforce​.

# ​Observation

The observation FHIR resource maps to the Care​Observation and Care​Observation​Component objects in Salesforce​.

## FHIR V4​.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for [observation](https://www.hl7.org/fhir/observation.html) map to the fields in Salesforce​.

| ​Observation Resource | Salesforce Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| identifier | N/A | N/A | N/A | Not supported |
| basedOn | Care​Observation​.​Based​OnId | Polymorphic Lookup: Medication​​Request, Clinical​Service​Request | 0​.1 | While FHIR defines observation​.basedOn as a zero-to-many reference, the Salesforce implementation is a zero-to-one text field​.Only references to medication request and clinical service request records are supported​. |
| partOf | Care​Observation​.Part​OfId | Polymorphic Lookup: Medication​Statement, Patient​Immunization, Patient​Medical​Procedure | 0​.1 | While FHIR defines observation​.partOf as a zero-to-many reference, the Salesforce implementation is a zero-to-one text field​.Only references to medication statement, patient immunization, and patient medical procedure records are supported​. |
| status | Care​Observation​.​Observation​Status | Picklist | 1​.1 | While FHIR defines observation​.status as a reference to code set bundle, the Salesforce implementation is a picklist​. |
| category | Care​Observation​.Category | Picklist | 0​.1 | While FHIR defines observation​.category as a zero-to-many reference to code set bundle, the Salesforce implementation is a zero-to-one picklist​. |
| code | Care​Observation​.CodeId | Lookup: CodeSet | 1​.1 | While FHIR defines observation​.code as a one-to-one reference to code set bundle, Salesforce implements this as three separate CodeSet reference fields​. The first one is a one-to-one field, while the other two are zero-to-one fields​. |
| Care​Observation​.AdditionalCode1Id | Lookup: CodeSet | 0​.1 |
| Care​Observation​.AdditionalCode2Id | Lookup: CodeSet | 0​.1 |
| subject | Care​Observation​.​Observed​Subject​Id | Master-Detail: Account | 1​.1 | The Salesforce implementation of observation​.subject supports references to only patients​. |
| focus | N/A | N/A | N/A | Not supported |
| encounter | Care​Observation​.Encounter​Id | Lookup: Clinical​Encounter | 0​.1 | N/A |
| effective​.effective​Date​Time | Care​Observation​.Effective​Date​Time | Date​Time | 0​.1 | N/A |
| effective​.effective​Period | Care​Observation​.Effective​Date​Time | Date​Time | 0​.1 | Because Salesforce doesn’t support a native period data type, the observation​.effective​.effective​Period field is flattened into a set of effective date and end date fields​. |
| Care​Observation​.​End​Date​Time | Date​Time | 0​.1 |
| effective​.effective​Timing | N/A | N/A | N/A | Not supported |
| effective​.effective​Instant | N/A | N/A | N/A | Not supported |
| issued | Care​Observation​.Issued​Date​Time | Date​Time | 0​.1 | Because Salesforce doesn’t support a native instant data type, the observation​.issued FHIR resource is implemented as a date time field in Salesforce​. |
| performer | Care​Observation​.​ObserverId | Polymorphic Lookup: Account, Healthcare Provider | 0​.1 | While FHIR defines observation​.performer as a zero-to-many resource, the Salesforce implementation is a zero-to-one reference to Account and Healthcare Provider​.References to care teams are not supported​. |
| results​Interpreter | Care​Observation​.Interpreted​ById | Lookup: Care​Performer | 0​.1 | While FHIR defines observation​.results​Interpreter as a zero-to-many resource, the Salesforce implementation is a zero-to-one reference to Care​Performer​. |
| value​ | Care​Observation​.​Observed​Value​​Type | Static Picklist | 0​.1 | A Salesforce-original field that determines whether the value​ stored in Care​Observation​.​Observed​Value​​Numerator and Care​Observation​.​Observed​Value​​Denominator is a range, ratio, or quantity​. This field is used only when the data entered for observation​.value​ is one these data types​. |
| Care​Observation​.​Observed​Value​​Numerator | Double | 0​.1 | Because Salesforce doesn’t support native range, ratio, and quantity data types, the observation​.value​ FHIR resource is flattened to a set of numerator, denominator, and unit fields for this type of data​.The Salesforce implementation of observation​.value​ doesn’t support observation​.value​​.value​Sample​Data and observation​.value​​.value​Time​.Care​Observation​.​Observed​Value​UnitId is a duplicate field that stores the same information as Care​Observation​.​UnitOf​MeasureId. Use only one of these two fields to specify the unit of a quantity value. |
| Care​Observation​.​Observed​Value​​Denominator | Double | 0​.1 |
| Care​Observation​.​Observed​Value​UnitId | Lookup: ​UnitOf​Measure | 0​.1 |
| Care​Observation​.​Observed​Value​​Denominator | Lookup: CodeSet​Bundle | 0​.1 | N/A |
| Care​Observation​.​Numberic​Value | Double | 0.1 | N/A |
| Care​Observation​.​Observed​Value​Text | String | 0​.1 | N/A |
| Care​Observation​.IsOutcome​Positive | Boolean | 0​.1 | Care​Observation​.IsObserved is a duplicate field that can store the same information. Use only one of these two fields. |
| Care​Observation​.​Observation​Start​Time | Date​Time | 0​.1 | Care​Observation​.​Observation​Start​Time is used for both observation​.component​.value​​.value​Date​Time and observation​.component​.value​​.value​Period​.Because Salesforce doesn’t support a native period data type, the observation​.value​​.value​Period FHIR resource is flattened to a set of start and end dates​. |
| Care​Observation​.​Observation​EndTime | Date​Time | 0​.1 |
| data​Absent​Reason | N/A | N/A | N/A | Not supported |
| interpretation | Care​Observation​.​Value​Interpretation | Picklist | 0​.1 | While FHIR defines observation​.interpretation as a zero-to-many code set bundle, the Salesforce implementation is a zero-to-one picklist​. |
| note | N/A | N/A | N/A | Not supported |
| body​Site | Care​Observation​.Body​SiteId | Lookup: CodeSet​Bundle | 0​.1 | N/A |
| method | Care​Observation​.MethodId | Lookup: CodeSet​Bundle | 0​.1 | N/A |
| specimen | N/A | N/A | N/A | Not supported |
| device | Care​Observation​.DeviceId | Lookup: Asset | 0​.1 | References to device metrics records aren’t supported​. |
| reference​Range​.low | Care​Observation​.Lower​Baseline​Value​ | Double | 0​.1 | Because Salesforce doesn’t support a native quantity data type, the observation​.reference​Range​.low FHIR resource is flattened to a set of value​ and unit fields for this type of data​. |
| Care​Observation​.​Baseline​UnitId | Lookup: ​UnitOf​Measure | 0​.1 |
| reference​Range​.high | Care​Observation​.Upper​Baseline​Value​ | Double | 0​.1 | Because Salesforce doesn’t support a native quantity data type, the observation​.reference​Range​.high FHIR resource is flattened to a set of value​ and unit fields for this type of data​. |
| Care​Observation​.​Baseline​UnitId | Lookup: ​UnitOfMeasure | 0​.1 |
| reference​Range​.type | N/A | N/A | N/A | Not supported |
| reference​Range​.appliesTo | N/A | N/A | N/A | Not supported |
| reference​Range​.age | N/A | N/A | N/A | Not supported |
| reference​Range​.text | Care​Observation​.​Baseline​Value​Text | String | 0​.1 | N/A |
| hasMember | Care​Observation​.Related​Observation​Id | Lookup: Care​Observation | 0​.1 | While FHIR defines observation​.hasMember as a zero-to-many resource, the Salesforce implementation is zero-to-one​.Only references to observation records are supported​. |
| derived​From | Care​Observation​.Derivation​SourceId | Lookup: Care​Observation, Diagnostic​Summary | 0.1 | While FHIR defines observation​.derivedFrom as a zero-to-many resource, the Salesforce implementation is zero-to-one​. |
| component | Care​Observation​Component | Object | 0​.M | The component information for a care observation is represented as Care​Observation​Component records that reference the Care​Observation record using their Identifier​.Care​Observation​Id field​. |
| component​.code | Care​Observation​Component​.​Component​Type​CodeId | Lookup: CodeSet​Bundle | 1​.1 | N/A |
| component​.value​ | Care​Observation​Component​.​Value​Type | Static Picklist | 0​.1 | A Salesforce-original field that determines whether the value​ stored in Care​Observation​Component.​Observed​Value​​Numerator and Care​Observation​Component​.​Observed​Value​Denominator is a range, ratio, or quantity​. This field is used only when the data entered for observation​.component​.value​ is one these data types​. |
| Care​Observation​Component​.​Observed​Value​Numerator | Double | 0​.1 | Because Salesforce doesn’t support native range, ratio, and quantity data types, the observation​.component​.value​ FHIR resource is flattened to a set of numerator, denominator, and unit fields for this type of data​.The Salesforce implementation of observation​.component​.value​ doesn’t support observation​.component​.value​​.value​Sample​Data and observation​.component​.value​​.value​Time​. |
| Care​Observation​Component​.​Observed​Value​Denominator | Double | 0​.1 |
| Care​Observation​Component​.​Observed​Value​​UnitId | Lookup: ​UnitOf​Measure | 0​.1 |
| Care​Observation​Component​.​Observed​Value​CodeId | Lookup: CodeSet​Bundle | 0​.1 | N/A |
| Care​Observation​Component​.​Numeric​Value​ | Double | 0.1 | N/A |
| Care​Observation​Component​.​Observed​Value​Text | String | 0​.1 | N/A |
| Care​Observation​Component​.Is​Observed | Boolean | 0​.1 | N/A |
| Care​Observation​Component​.​Observation​Start​Time | Date​Time | 0​.1 | Care​Observation​Component​.​Observation​Start​Time is used for both observation​.component​.value​​.value​​Date​Time and observation​.component​.value​​.value​​Period​.Because Salesforce doesn’t support a native period data type, the observation​.component​.value​​.value​​Period FHIR resource is flattened to a set of start and end dates​. |
| Care​Observation​Component​.​Observation​EndTime | Date​Time | 0​.1 |
| component​.data​Absent​Reason | Care​Observation​Component​.Missing​Data​Reason | String | 0​.1 | While FHIR defines observation​.component​.data​Absent​Reason as a code set bundle reference, the Salesforce implementation is a text field​. |
| component​.interpretation | Care​Observation​Component​.​Value​Interpretation | Lookup: CodeSet​Bundle | 0​.1 | While FHIR defines observation​.component​.interpretation as a code set bundle reference, the Salesforce implementation is a picklist​. |
| component​.reference​Range​.low | Care​Observation​Component​.Lower​Baseline​Value​ | Double | 0​.1 | Because Salesforce doesn’t support a native quantity data type, the observation​.component​.reference​Range​.low FHIR resource is flattened to a set of value​ and unit fields for this type of data​. |
| Care​Observation​Component​.​Baseline​UnitId | Lookup: ​UnitOf​Measure | 0​.1 |
| component​.reference​Range​.high | Care​Observation​Component​.Upper​Baseline​Value​ | Double | 0​.1 | Because Salesforce doesn’t support a native quantity data type, the observation​.component​.reference​Range​.high FHIR resource is flattened to a set of value​ and unit fields for this type of data​. |
| Care​Observation​Component​.​Baseline​UnitId | Lookup: ​UnitOf​Measure | 0​.1 |
| component​.reference​Range​.type | N/A | N/A | N/A | Not supported |
| component​.reference​Range​.applies​To | N/A | N/A | N/A | Not supported |
| component​.reference​Range​.age | N/A | N/A | N/A | Not supported |
| component​.reference​Range​.text | Care​Observation​Component​.​Baseline​Value​Text | String | 0​.1 | N/A |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=life_sciences_dev_guide)

#### Note

The fields Care​Observation​.IsOutcome​Positive and Care​Observation​.​UnitOf​MeasureId don’t have FHIR-defined validation rules built into them because these fields are used in other features and data models. You can define your own custom validation rules on them based on your business requirements.
