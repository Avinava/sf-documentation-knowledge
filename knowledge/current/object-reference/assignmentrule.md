---
title: "AssignmentRule"
domain: object-reference
topic: assignmentrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.093Z
estimatedTokens: 420
keywords: [AssignmentRule, assignment, rule, associated, Case, Lead, Calls, Special, Access, Rules, Usage]
---

# AssignmentRule

> Represents an assignment rule associated with a Case or
    Lead.

# AssignmentRule

Represents an assignment rule associated with a Case or Lead.

## Supported Calls

describeSObjects(), query(), retrieve(), search()

## Special Access Rules

-   This object is read only. Assignment rules are created, configured, and deleted in the user interface.
-   Customer Portal users can’t access this object.

## Fields

| Field | Details |
| --- | --- |
| Active | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this assignment rule is active (true) or not (false). |
| Name | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of this assignment rule. |
| SobjectType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionType of assignment rule—Case or Lead. |

## Usage

Before creating or updating a new Case or Lead, a client application can query (by name) the AssignmentRule to obtain the ID of the assignment rule to use, and then assign that ID to the assignmentRuleId field of the AssignmentRuleHeader. The AssignmentRuleHeader can be set using either SOAP API or REST API.

Assignment rules can also be specified when creating or upserting Case or Lead objects via the Bulk API or the Bulk 2.0 API.

#### See Also

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Related Topics

- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
