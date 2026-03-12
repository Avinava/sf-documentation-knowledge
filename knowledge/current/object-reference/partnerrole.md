---
title: "PartnerRole"
domain: object-reference
topic: partnerrole
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.346Z
estimatedTokens: 590
keywords: [PartnerRole, role, account, Partner, consultant, supplier, Calls, Special, Access, Rules, Usage]
---

# PartnerRole

> Represents a role for an account Partner,
   such as consultant, supplier, and so on.

# PartnerRole

Represents a role for an account Partner, such as consultant, supplier, and so on.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

Customer Portal users can't access this object.

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesFilter, Group, idLookup, SortDescriptionUniquely identifies a picklist value so it can be retrieved without using an id or master label. |
| MasterLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionMaster label for this partner role value. This display value is the internal label that does not get translated. Limit: 255 characters. |
| ReverseRole | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionName of the reverse role that corresponds to this partner role. For example, if the role is “subcontractor,” then the reverse role might be “general contractor.” In the user interface, assigning a partner role to an account creates a reverse partner relationship so that both accounts list the other as a partner. |
| SortOrder | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber used to sort this value in the partner role picklist. These numbers are not guaranteed to be sequential, as some previous partner role values might have been deleted. |

## Usage

This object represents a value in the partner role picklist. In the user interface, the partner role picklist provides additional information about the role of a Partner, such as their corresponding reverse role. Query this object to retrieve the set of values in the partner role picklist, and then use that information while processing PartnerRole records to determine more information about a given partner role. For example, the application could determine the reverse role of a given Partner Role value and the value of the ReverseRole property in the associated PartnerRole object.

#### See Also

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Related Topics

- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
