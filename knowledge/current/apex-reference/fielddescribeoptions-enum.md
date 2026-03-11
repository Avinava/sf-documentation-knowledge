---
title: "FieldDescribeOptions Enum"
domain: apex-reference
topic: fielddescribeoptions-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.418Z
keywords: [FieldDescribeOptions, Enum, Usage, Values]
---

# FieldDescribeOptions Enum

# FieldDescribeOptions Enum

A Schema.FieldDescribeOptions enum value is a parameter in the SObjectType.getDescribe method.

## Usage

For more information about the method using this enum, see [getDescribe(options)](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectField.htm#apex_Schema_SObjectField_getDescribe_2 "Returns the describe field result for this field. This method also provides an option to get all the describe field results for an object.").

## Enum Values

The following are the values of the Schema.FieldDescribeOptions enum.

| Value | Description |
| --- | --- |
| DEFAULT | Compute context-specific, describe field results. |
| FULL_DESCRIBE | Compute all aspects of describe field results. |