---
title: "Validating sObjects and Fields"
domain: apex-guide
topic: validating-sobjects-and-fields
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:48.002Z
keywords: [Validating, sObjects, Fields]
---

# Validating sObjects and Fields

# Validating sObjects and Fields

When Apex code is parsed and validated, all sObject and field references are validated against actual object and field names, and a parse-time exception is thrown when an invalid name is used.

In addition, the Apex parser tracks the custom objects and fields that are used, both in the code's syntax as well as in embedded SOQL and SOSL statements. The platform prevents users from making the following types of modifications when those changes cause Apex code to become invalid:

-   Changing a field or object name
-   Converting from one data type to another
-   Deleting a field or object
-   Making certain organization-wide changes, such as record sharing, field history tracking, or record types