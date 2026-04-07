---
title: "Fields on Contact"
domain: health-cloud-object-reference
topic: fields-on-contact
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:43.835Z
estimatedTokens: 197
keywords: [Contact, Health, Cloud, extend, standard, represent, individual]
---

> Health Cloud fields extend the standard Contact object to represent information about
      an individual.

# Fields on Contact

Health Cloud fields extend the standard Contact object to represent information about an individual.

## Fields

| Field | Details |
| --- | --- |
| MaritalStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe individual's marital status.Possible values are:DivorcedMarriedSeparatedSingleWidowed |
| PersonSequenceInMultipleBirth | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf the individual is part of a birth involving multiple babies, the sequence of the individual in that multiple birth. |

#### See Also

-   [*Object Reference for the Salesforce Platform*: Contact](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contact.htm)
