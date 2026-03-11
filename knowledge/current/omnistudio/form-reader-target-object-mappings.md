---
title: "Form Reader Target Object Mappings"
domain: omnistudio
topic: form-reader-target-object-mappings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:10.400Z
keywords: [Form, Reader, Target, Object, Mappings]
---

# Form Reader Target Object Mappings

# Form Reader Target Object Mappings

Output representation of the mappings between the text extracted by the document reader and the Salesforce object.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| formReaderObject​FieldMapping | Form Reader Object Field Mapping[] | List of mappings between the extracted text values and the fields of the Salesforce object. | Small, 55.0 | 55.0 |
| targetObjectName | String | Name of the target object to which mappings are done. | Small, 55.0 | 55.0 |
| targetObject​RecordType | String | Developer name of the record type of the target object. | Small, 57.0 | 57.0 |