---
title: "RecordVisibility (Pilot)"
domain: object-reference
topic: recordvisibility-pilot
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.093Z
estimatedTokens: 725
keywords: [RecordVisibility, Pilot, visibility, attributes, determine, record’s, access, API, version, 46.0, later, Calls, Special, Rules, Usage]
---

# RecordVisibility (Pilot)

> Represents the visibility attributes that determine a record’s read
			access. This object is read only and is available in API version 46.0 and
		later.

# RecordVisibility (Pilot)

Represents the visibility attributes that determine a record’s read access. This object is read only and is available in API version 46.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To access this object, you need a CRM Analytics license or to contact Salesforce to participate in the pilot program. You must also have the “View All Data” or “Enable RecordVisibility API” user permission.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

We provide the RecordVisibility object to selected customers through a pilot program that requires agreement to specific terms and conditions. To be nominated to participate in the program, contact Salesforce. Pilot programs are subject to change, and we can’t guarantee acceptance. The RecordVisibility object isn’t generally available unless or until Salesforce announces its general availability in documentation or in press releases or public statements. We can’t guarantee general availability within any particular time frame or at all. Make your purchase decisions only on the basis of generally available products and features. You can provide feedback and suggestions for the RecordVisibility object in the group in the [Trailblazer Community](https://success.salesforce.com/_ui/core/chatter/groups/GroupProfilePage?g=0F93A000000DN7N).

## Fields

| Field Name | Details |
| --- | --- |
| RecordId | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe ID of the record. |
| VisibilityAttribute | TypestringPropertiesFilter, Nillable, SortDescriptionThe visibility attributes that determine the read access of a given record. For example, a user ID, parent record ID, or group ID.The output of visibility attributes is in JSON format and must be deserialized. |

## Usage

Use this object to query the attributes that determine the visibility of one or more records. You can’t create, delete, or update any records using this object.

Up to 200 record IDs can be queried. You can include an ORDER BY clause for any field that is being selected in the query.

This sample query returns the visibility attributes for the indicated record.

```

```

The RecordId and VisibilityAttribute fields must be a part of the fields that are being selected despite RecordId being used in the filter criteria as well.

RecordVisibility is a foreign key on the records. This query returns the visibility attributes for Account records:

```

```

You can’t filter RecordId fields when using RecordVisibility as a lookup or foreign key.

You can use RecordVisibilityContext to filter WITH clauses in queries. For more information, see [WITH *filteringExpression*](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_with.htm) in the SOQL and SOSL Reference.

## Code Examples

```
SELECT RecordId, VisibilityAttribute
FROM RecordVisibility
WHERE RecordId=[single ID]      // or Record IN [list of IDs]
```

```
SELECT Id, Name, RecordVisibility.VisibilityAttribute
FROM Account
```
