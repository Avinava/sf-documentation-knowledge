---
title: "Business Process"
domain: object-reference
topic: business-process
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.765Z
estimatedTokens: 767
keywords: [Business, Process, Processes, track, separate, sales, lead, support, solution, lifecycles, displaying, different, picklist, according, user’s]
---

# Business Process

> Represents a business process. Business Processes track separate sales, lead, support, and solution lifecycles by displaying different picklist values according to each user’s profile.

# Business Process

Represents a business process. Business Processes track separate sales, lead, support, and solution lifecycles by displaying different picklist values according to each user’s profile.

## Supported Calls

create(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

Customer Portal users can’t access this object.

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of this business process. Limit: 255 characters. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this business process can be presented to users in the Salesforce user interface (true) or not (false) when creating a new record type or changing the business process of an existing record type. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. Name of this business process. Limit: 80 characters. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| TableEnumOrId | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionRequired. One of the following values: Case, Opportunity, or Solution. Label is Entity Enumeration Or ID. |

## Usage

Use the BusinessProcess object to offer different subsets of picklist values to different users for the LeadStatus, CaseStatus, and OpportunityStage fields. Similar to a RecordType, a BusinessProcess identifies the type of a row in a Case, Lead, or Opportunity and implies a subset of picklist values for these three fields. The values for the remaining picklist fields are driven by RecordType.

#### See Also

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Related Topics

- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
