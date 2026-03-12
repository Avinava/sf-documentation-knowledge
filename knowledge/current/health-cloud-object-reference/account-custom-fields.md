---
title: "Account Custom Fields"
domain: health-cloud-object-reference
topic: account-custom-fields
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.053Z
estimatedTokens: 327
keywords: [Account, Custom, extend, standard, Emergency, Management]
---

# Account Custom Fields

> Custom fields extend the standard Account object for use in Emergency Response
      Management.

# Account Custom Fields

Custom fields extend the standard Account object for use in Emergency Response Management.

## Fields

| Field | Details |
| --- | --- |
| ConditionStatus__pc | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents a person’s condition based on their most recent test or assessment. Possible values are:AsymptomaticAsymptomatic - Declined to ParticipateCuredEvaluated - No RiskSymptomaticSymptomatic - Declined to Participate |
| Monitored_at_Home__pc | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionWhether a person’s condition is being monitored at their home, rather than a clinical setting. Possible values are:NoYes |
| StatusGroup__pc | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionCategorizes a person’s stage within the testing and monitoring process. Possible values are:MonitoredPositiveReady for intakeUnknownUnmonitored |
| Testing_Status__pc | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRepresents the result of a person’s most recent test. Possible values are:Negative TestPositive TestTest Results Pending—Test Results AwaitedTest ScheduledTesting RecommendedUnknown |
