---
title: "SetupAuditTrail"
domain: object-reference
topic: setupaudittrail
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:16.994Z
estimatedTokens: 611
keywords: [SetupAuditTrail, changes, admins, made, org’s, Setup, area, least, days, Calls]
---

# SetupAuditTrail

> Represents changes you or other admins made in
            your org’s Setup area for at least the last 180 days.

# SetupAuditTrail

Represents changes you or other admins made in your org’s Setup area for at least the last 180 days. This object is available in API version 15.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

SetupAuditTrail is not a supported standard controller. Using SetupAuditTrail as a standard controller in a Visualforce page results in an error.

## Supported Calls

query(), retrieve()

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Aggregate queries aren’t supported on this object. For example, SELECT count() FROM SetupAuditTrail works but SELECT count(Id) FROM SetupAuditTrail fails.

## Fields

| Field | Details |
| --- | --- |
| Action | TypestringPropertiesFilter, SortDescriptionThe category of the change made in Setup. For example, a value of PermSetCreate indicates that an administrator created a permission set. The Display field contains more specific information. |
| CreatedByContext | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe context under which the Setup change was made. For example, if Einstein uses cloud-to-cloud services to make a change in Setup, the value of this field is Einstein. This field is available in API version 48.0 and later. |
| CreatedByIssuer | TypestringPropertiesFilter, Group, Nillable, SortDescriptionReserved for future use. |
| DelegateUser | TypestringPropertiesFilter, Nillable, SortDescriptionThe Login-As user who executed the action in Setup. If a Login-As user didn’t perform the action, this field is blank. This field is available in API version 35.0 and later. |
| Display | TypestringPropertiesNillable, SortDescriptionThe full description of changes made in Setup. For example, if the Action field has a value of PermSetCreate, the Display field has a value like “Created permission set MAD: with user license Salesforce.” |
| Section | TypestringPropertiesNillable, SortDescriptionThe section in the Setup menu where the action occurred. For example, Manage Users or Company Profile. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

You can use SOQL joins to get the information you need more quickly. For example, running SELECT CreatedBy.Name FROM SetupAuditTrail LIMIT 10 returns the first and last names of the last 10 people to make changes in Setup.
