---
title: "RecordApexRepresentation(objectType, recordData, relatedRecordData)"
domain: apex-reference
topic: recordapexrepresentationobjecttype-recorddata-relatedrecorddata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.451Z
keywords: [RecordApexRepresentation, objectType, recordData, relatedRecordData, Initializes, new, instance, class, specified, object, type, primary, record, data, related, data., constructor, represents, structured, its]
---

# RecordApexRepresentation(objectType, recordData, relatedRecordData)

> Initializes a new instance of the RecordApexRepresentation class with the specified
    object type, primary record data, and related record data. This constructor represents a
    structured record and its relationships for consumption by embedded AI logic.

### RecordApexRepresentation(objectType, recordData, relatedRecordData)

Initializes a new instance of the RecordApexRepresentation class with the specified object type, primary record data, and related record data. This constructor represents a structured record and its relationships for consumption by embedded AI logic.

#### Signature

public RecordApexRepresentation(String objectType, List<embeddedai.ApexMap> recordData, List<embeddedai.RecordApexRepresentation> relatedRecordData)

#### Parameters

objectType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The object type represented by this record (for example, Account, Case, or a custom object). This value defines the context in which the record data is interpreted by embedded AI processing.

recordData

Type: List<[embeddedai.ApexMap](atlas.en-us.apexref.meta/apexref/apex_class_embeddedai_ApexMap.htm#apex_class_embeddedai_ApexMap "Create, clone, and convert string based key-value pairs to a JSON string format.")\>

The field-level data for the primary record as a collection of key–value pairs. Each ApexMap entry corresponds to a field name and its associated value used to construct the record context.

relatedRecordData

Type: List<[embeddedai.RecordApexRepresentation](#apex_class_embeddedai_RecordApexRepresentation "Contains properties and a method to create a serializable representation of a record and its associated data for AI service integration and data processing.")\>

Related records associated with the primary record. Each entry represents a related object and its data, enabling hierarchical or relational record context to be passed to embedded AI logic.