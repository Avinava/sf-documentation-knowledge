---
title: "Territory Management 2.0"
domain: apex-guide
topic: territory-management-20
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:46.217Z
keywords: [Territory, Management, 2.0, Sample, Trigger, Territory2, UserTerritory2Association]
---

# Territory Management 2.0

# Territory Management 2.0

With trigger support for the Territory2 and UserTerritory2Association standard objects, you can automate actions and processes related to changes in these territory management records.

## Sample Trigger for Territory2

This example trigger fires after Territory2 records have been created or deleted. This example trigger assumes that an organization has a custom field called TerritoryCount\_\_c defined on the Territory2Model object to track the net number of territories in each territory model. The trigger code increments or decrements the value in the TerritoryCount\_\_c field each time a territory is created or deleted.

```

```

## Sample Trigger for UserTerritory2Association

This example trigger fires after UserTerritory2Association records have been created. This example trigger sends an email notification to the Sales Operations group letting them know that users have been added to territories. It identifies the user who added users to territories. Then, it identifies each added user along with which territory the user was added to and which territory model the territory belongs to.

```

```