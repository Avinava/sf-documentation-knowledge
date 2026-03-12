---
title: "Workplace Strategy Planner Data Triggers"
domain: workdotcom-dev-guide
topic: workplace-strategy-planner-data-triggers
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.610Z
estimatedTokens: 510
keywords: [Workplace, Strategy, Planner, Data, Triggers, managed, package, installed, org, Crisis, Location, Assessment, added, Trigger, Enable]
---

# Workplace Strategy Planner Data Triggers

> When the Workplace Strategy Planner managed package is installed into an org, data
    triggers on Crisis, Location, and Location Assessment are added.

# Workplace Strategy Planner Data Triggers

When the Workplace Strategy Planner managed package is installed into an org, data triggers on Crisis, Location, and Location Assessment are added.

## Crisis Trigger

When a crisis record is created or updated, wkplan\_\_CrisisTrigger executes and creates a location assessment record for each location associated with the crisis. This trigger also executes when installing the Workplace Strategy Planner managed package, and creates a location assessment record for each workplace location associated with a crisis.

## Location Trigger

When a location record is created, wkplan\_\_LocationTrigger executes and creates a location assessment record for each location associated with a crisis. This trigger also executes when installing the Workplace Strategy Planner managed package, and creates a location assessment record for each workplace location associated with a crisis.

## Location Assessment Trigger

The wkplan\_\_LocationAssessmentTrigger creates a unique value to the index field, location assessment name, when a location assessment record is created after installing the Workplace Strategy Planner package in an org.

## Enable and Disable Triggers

By default, all Workplace Strategy Planner triggers are enabled in your org. Although it’s possible to disable any of these triggers, we recommend that they remain enabled.

If you disable either the wkplan\_\_CrisisTrigger or the wkplan\_\_LocationTrigger, location assessment records aren’t created automatically for any new location or crisis. If you decide to disable and re-enable either trigger, manually create location assessment records for any crisis and location pair created in your org while the trigger was disabled.

If you disable the wkplan\_\_LocationAssessmentTrigger, you can duplicate location assessment records for crisis and location pairs. If you disable and re-enable this trigger, manually review and delete any duplicate location assessment records that were created while the trigger was disabled.
