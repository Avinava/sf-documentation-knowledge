---
title: "EmbeddedServiceCustomLabel"
domain: tooling-api
topic: embeddedservicecustomlabel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.692Z
keywords: [EmbeddedServiceCustomLabel, Supported, Calls, REST, HTTP, Methods, Fields]
---

# EmbeddedServiceCustomLabel

# EmbeddedServiceCustomLabel

Represents a customized label that appears in the embedded component for a particular Embedded Service deployment. Labels can be customized for both Embedded Chat and embedded Appointment Management (beta). Available in API version 44.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

DELETE, GET, POST, PUT, PATCH

## Fields

| Field | Details |
| --- | --- |
| CustomLabel | TypeCustomLabelPropertiesFilter, Group, Nillable, SortDescriptionThe developer name of the custom label that appears in the embedded component. |
| CustomLabelId | TypeIDPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe label record ID for the custom label. |
| EmbeddedServiceConfig | TypeEmbeddedServiceConfigPropertiesFilter, Group, Nillable, SortDescriptionThe EmbeddedServiceConfig setup associated with the Embedded Service deployment. |
| EmbeddedServiceConfigId | TypeIDPropertiesCreate, Filter, Group, Nillable, SortDescriptionUnique ID for the Embedded Service deployment. |
| LabelKey | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of label for this embedded component. The value corresponds to the label within a label group (substate of chat state or page type). |