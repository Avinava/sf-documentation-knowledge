---
title: "blockingRules"
domain: field-service
topic: blockingrules
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:11.900Z
keywords: [blockingRules, Signature, Property, Value]
---

# blockingRules

# blockingRules

Array of blocking rules with the rule name and number of slots

## Signature

global List<BlockingRule> blockingRules {get; set;}

## Property Value

Type: [List](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_list.htm)[<BlockingRule>](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_BlockingRule.htm "Represents a global class that holds an array of blocking rules. . BlockingRule is a required parameter for AppointmentInsightsResult, which is the response class for the getAppointmentInsights method of ScheduleService.")