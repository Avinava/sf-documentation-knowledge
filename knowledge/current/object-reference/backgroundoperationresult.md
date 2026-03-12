---
title: "BackgroundOperationResult"
domain: object-reference
topic: backgroundoperationresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.484Z
estimatedTokens: 648
keywords: [BackgroundOperationResult, Stores, error, messages, generated, importing, data, big, objects, Bulk, API, version, 37.0, later, Calls]
---

# BackgroundOperationResult

> Stores error messages generated when or importing data into big objects
   using Bulk API. This is a big object, available in API version 37.0 and
   later.

# BackgroundOperationResult

Stores error messages generated when or importing data into big objects using Bulk API. This is a big object, available in API version 37.0 and later.

Each instance of BackgroundOperationResult represents one error. The Message field stores the text of the error message. The ParentID field stores the:

-   Batch ID for the data import, in case of Bulk API

Bulk API validates data at the time of import, and generates an error message for the first occurrence of invalid data in any row of the data file. The validation performed depends on the type of data being imported.

-   **Text**—The length of the input string must be less than or equal to the length of the corresponding text field in the target object.
-   **Number**—The input data must be a number, whose scale and precision are compatible with the corresponding number field in the target object.
-   **ID—**The input data must be a valid 15- or 18-character ID.
-   **DateTime**—The input data must be a valid dateTime value, in the approved format.
-   **Lookup**—The lookup value must be a valid 15- or 18-character ID.

## Supported Calls

describeSObjects(), query()

## Fields

| Field Name | Details |
| --- | --- |
| CreatedById | TypeIDPropertiesNillableDescriptionThe user ID of the user initiating the Bulk API request. |
| CreatedDate | TypedateTimePropertiesDefaulted on createDescriptionThe date and time at which the Bulk API request was made. |
| Data | TypestringPropertiesNillableDescriptionThe data that generated the error message. The total length is limited to 2,000 characters, and each column can occupy a maximum of 50 characters. Any data exceeding those limits is truncated. |
| Id | TypeIDPropertiesDefaulted on create, idLookupDescriptionThe ID of the error message. |
| Message | TypestringPropertiesNillableDescriptionThe text of the error message. |
| MessageType | TypepicklistPropertiesNillable, Restricted picklistDescriptionThe type of error message. The possible values are: ERROR, WARNING, or INFO. |
| ParentId | TypereferencePropertiesFilter, SortDescriptionThe batch ID in Bulk API. |

## Usage

You can check for errors by querying the BackgroundOperationResult object. For example, this query returns details of all errors in a data file imported using Bulk API, whose batch ID is 751xx000000006OAAQ.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

You can only view errors resulting from Bulk API requests that you initiated, unless you have the global permission to view all data.

## Code Examples

```
SELECT CreatedbyId, CreatedDate, Id, Message, MessageType, ParentId FROM BackgroundOperationResult WHERE ParentId = “751xx000000006OAAQ”
```
