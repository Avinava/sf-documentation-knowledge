---
title: "GradeSlotsService Class"
domain: field-service
topic: gradeslotsservice-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:12.001Z
keywords: [GradeSlotsService, Class, Returns, matrix, resource, IDs, graded, time, slots., information, similar, shown, Candidates, quick, action., getGradedMatrix, _ResultsInUserTimeZone, Signature, Parameters, Return]
---

# GradeSlotsService Class

> Returns a matrix of resource IDs and graded time slots. The
      information is similar to that shown in the Candidates quick action.

### getGradedMatrix(i\_ResultsInUserTimeZone)

Returns a matrix of resource IDs and graded time slots. The information is similar to that shown in the Candidates quick action.

#### Signature

public FSL.AdvancedGapMatrix getGradedMatrix(Boolean i\_ResultsInUserTimeZone)

#### Parameters

i\_ResultsInUserTimeZone

Type: [Boolean](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_boolean.htm#apex_methods_system_boolean "HTML (New Window)")

If true, all DateTimes are returned in the user’s time zone. If false, all DateTimes are returned in UTC.

#### Return Value

Type: [FSL.AdvancedGapMatrix](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AdvancedGapMatrix.htm#apex_class_FSL_AdvancedGapMatrix "Represents a matrix of service resource IDs and graded time slots. An instance of this class is used only within the context of the results returned by the GradeSlotsService class.")

#### Usage

If Enhanced Scheduling and Optimization (ESO) is enabled, this method runs synchronously. If ESO isn’t enabled, this method can be called with only one service appointment at a time, and runs asynchronously. To examine results that the asynchronous method returns, use the streaming API and subscribe to MstCompletedChannel, the channel for the Field Service managed package.

#### Example

This example illustrates how to parse the results in the FSL.AdvancedGapMatrix to extract the service resource ID, start and end times, and grade of each slot.

```

```