---
title: "DocumentClause"
domain: netzero-cloud-dev-guide
topic: documentclause
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:58.228Z
estimatedTokens: 409
keywords: [DocumentClause, clause, associated, multiple, documents, Calls]
---

# DocumentClause

> Represents a clause that can be associated with multiple
      documents.

# DocumentClause

Represents a clause that can be associated with multiple documents.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BusinessUnit | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe business unit relevant to the document clause. |
| Country | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country relevant to the document clause. |
| DataSource | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies where the data was sourced from. |
| Organization | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe organization relevant to the document clause. |
| Region | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe region relevant to the document clause. |
| ReportingYear | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reporting year applicable for the document clause. |
| ValidEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the document clause becomes valid. |
| ValidStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the document clause becomes invalid. |

For more information, see [DocumentClause in Salesforce Contracts](https://developer.salesforce.com/docs/atlas.en-us.260.0.clm_developer_guide.meta/clm_developer_guide/sforce_api_objects_documentclause.htm).
