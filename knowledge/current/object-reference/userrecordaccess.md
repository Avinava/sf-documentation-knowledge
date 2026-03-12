---
title: "UserRecordAccess"
domain: object-reference
topic: userrecordaccess
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.992Z
estimatedTokens: 900
keywords: [UserRecordAccess, user’s, access, records, API, version, 24.0, later, doesn’t, consider, whether, blocked, restriction, rule, Calls]
---

# UserRecordAccess

> Represents a user’s access to a set of records. This object
            is read only and is available in API version 24.0 and later. This object doesn’t
            consider whether a user’s access is blocked by a restriction rule.

# UserRecordAccess

Represents a user’s access to a set of records. This object is read only and is available in API version 24.0 and later. This object doesn’t consider whether a user’s access is blocked by a restriction rule.

## Supported Calls

describeSObjects(), query()

## Fields

| Field | Details |
| --- | --- |
| HasAllAccess | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether a user can share the record. |
| HasDeleteAccess | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether a user has delete access to the record (true) or not (false). |
| HasEditAccess | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether a user has edit access to the record (true) or not (false). |
| HasTransferAccess | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether a user has transfer access to the record (true) or not (false). |
| HasReadAccess | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether a user has read access to the record (true) or not (false). |
| MaxAccessLevel | TypepicklistPropertiesGroup, Nillable, Restricted picklist, SortDescriptionIndicates a user’s maximum level of access to a record.Valid values are:NoneReadEditDeleteTransferAll |
| RecordId | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionID of the record. |
| UserId | TypereferencePropertiesFilter, GroupDescriptionID of the user. |

## Usage

Use this object to query a user’s access to records. You can only query records of objects listed on the Sharing Settings Setup page. You can’t create, delete, or update any records using this object.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

UserRecordAccess doesn’t consider whether a user’s access is blocked due to a [restriction rule](https://developer.salesforce.com/docs/atlas.en-us.260.0.restriction_rules.meta/restriction_rules/restriction_rules_about.htm). If a user’s access is blocked even though query results state that they should have access, check to see if a restriction rule on the object prevents the user’s access.

Up to 200 record IDs can be queried. You can include an ORDER BY clause for any field that is being selected in the query.

The following sample query returns the records, whether the queried user has read and transfer access to each record, and the user’s maximum access level to each record.

```

```

The following query returns the records to which a queried user has read access.

```

```

Using API version 30.0 and later, UserRecordAccess is a foreign key on the records. You can’t filter by or provide the UserId or RecordId fields when using this object as a lookup or foreign key. The previous sample queries can be run as:

```

```

```

```

SOQL restrictions:

-   When the running user is querying a user's access to a set of records, records that the running user doesn’t have read access to are filtered out of the results.
-   When filtering by UserId and RecordId only, you must use SELECT RecordId and optionally one or more of the access level fields:HasReadAccess, HasEditAccess, HasDeleteAccess, HasTransferAccess, and HasAllAccess. You can include MaxAccessLevel.
-   When filtering by UserId, RecordId, and an access level field, you must use SELECT RecordId only.

#### See Also

-   [*Developer Guide*: Restriction Rules](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_sharingrules.htm)

## Code Examples

```
SELECT RecordId, HasReadAccess, HasTransferAccess, MaxAccessLevel
     FROM UserRecordAccess
     WHERE UserId = [single ID]
     AND RecordId = [single ID]      //or Record IN [list of IDs]
```

```
SELECT RecordId
     FROM UserRecordAccess
     WHERE UserId = [single ID]
     AND RecordId = [single ID]      //or Record IN [list of IDs]
     AND HasReadAccess = true
```

```
SELECT Id, Name, UserRecordAccess.HasReadAccess, UserRecordAccess.HasTransferAccess, UserRecordAccess.MaxAccessLevel 
      FROM Account
```

```
SELECT Id, Name, UserRecordAccess.HasReadAccess 
      FROM Account
```
