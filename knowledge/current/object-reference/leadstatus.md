---
title: "LeadStatus"
domain: object-reference
topic: leadstatus
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.664Z
estimatedTokens: 741
keywords: [LeadStatus, status, Lead, record, Open, Qualified, Converted, Calls, Usage]
---

# LeadStatus

> Represents the status of a Lead record, such as Open, Qualified, or
   Converted.

# LeadStatus

Represents the status of a Lead record, such as Open, Qualified, or Converted.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this object’s name.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesFilter, Group, idLookup, SortDescriptionUniquely identifies a picklist value so it can be retrieved without using an id or primary label. |
| IsConverted | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this lead status value represents a converted lead (true) or not (false). Multiple lead status values can represent a converted lead. |
| IsDefault | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this is the default lead status value (true) or not (false) in the picklist. |
| MasterLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionLabel for this lead status value. This display value is the internal label that does not get translated. |
| SortOrder | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber used to sort this value in the lead status picklist. These numbers are not guaranteed to be sequential, as some previous lead status values might have been deleted. |

## Usage

This object represents a value in the lead status picklist (see [Lead](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_lead.htm "Represents a prospect or lead.")). The lead status picklist provides additional information about the status of a [Lead](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_lead.htm "Represents a prospect or lead."), such as whether a given status value represents a converted [Lead](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_lead.htm "Represents a prospect or lead."). Query this object to retrieve the set of values in the lead status picklist, and then use that information while processing [Lead](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_lead.htm "Represents a prospect or lead.") objects to determine more information about a given lead. For example, the application could test whether a given lead is converted based on its Status value and the value of the IsConverted property in the associated LeadStatus record.

#### See Also

-   [LeadOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_leadownersharingrule.htm "Represents the rules for sharing a lead with users other than the owner.")

-   [LeadShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_leadshare.htm "Represents a sharing entry on a Lead.")

## Related Topics

- Lead (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_lead.htm)
- LeadOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_leadownersharingrule.htm)
- LeadShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_leadshare.htm)
