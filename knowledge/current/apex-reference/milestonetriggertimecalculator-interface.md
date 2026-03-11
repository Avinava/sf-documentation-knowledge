---
title: "MilestoneTriggerTimeCalculator Interface"
domain: apex-reference
topic: milestonetriggertimecalculator-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.839Z
keywords: [MilestoneTriggerTimeCalculator, Interface, Calculates, milestone, trigger, time, based, specified, case, type, returns, minutes., calculateMilestoneTriggerTime, caseId, milestoneTypeId, Syntax, Parameters, Return, Value]
---

# MilestoneTriggerTimeCalculator Interface

> Calculates the milestone trigger time based on the specified
case and milestone type and returns the time in minutes.

### calculateMilestoneTriggerTime(caseId, milestoneTypeId)

Calculates the milestone trigger time based on the specified case and milestone type and returns the time in minutes.

#### Syntax

public Integer calculateMilestoneTriggerTime(String caseId, String milestoneTypeId)

#### Parameters

caseId

Type: String

ID of the case the milestone is applied to.

milestoneTypeId

Type: String

ID of the milestone type.

#### Return Value

Type: Integer

The calculated trigger time in minutes.