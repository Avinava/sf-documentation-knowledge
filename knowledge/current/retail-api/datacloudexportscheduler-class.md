---
title: "DataCloudExportScheduler Class"
domain: retail-api
topic: datacloudexportscheduler-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.714Z
estimatedTokens: 378
keywords: [DataCloudExportScheduler, trigger, data, cloud, process, processing, service, new, cgcloud.DataCloudExportScheduler, List<String>, tables, Usage]
---

# DataCloudExportScheduler Class

> This Class is used to trigger a data cloud process on the processing service.

# DataCloudExportScheduler Class

This Class is used to trigger a data cloud process on the processing service.

The data cloud process prepares the data in the processing service which can be retrieved later by data cloud to the platform. This implements [System.Schedulable](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_interface_system_schedulablecontext.htm#apex_interface_system_schedulablecontext) interface and typically scheduled every 24hrs. This Apex class has one method and two constructors.

## Namespace

cgcloud

## Signature of the Method

global voidexecute(SchedulableContext sc)

This method is overridden for the System.Schedulable interface. It calls the processing service to prepare processing service tables for Data Cloud.

## Parameters

sc: SchedulableContext

A platform class instance provided by the Salesforce platform when the class is scheduled via Apex.

## new cgcloud.DataCloudExportScheduler()

This is a no-parameter constructor. It prepares all available tables for Data Cloud in the processing service.

## DataCloudExportScheduler(List<String> tables)

Constructs the scheduler to prepare specific tables for Data Cloud.

Parameters

tables: List<String> - Represents the tables the customer wants to have in Data Cloud. Currently available tables include promotionmeasures, paymenttacticmeasures, dailymeasurereal, and dailymeasureint .

## Usage Example

This example shows how to schedule the DataCloudExportScheduler.

```

```

## Code Examples

```apex
cgcloud.DataCloudExportScheduler cgDataCloudScheduler = new cgcloud.DataCloudExportScheduler();
// Example: Schedule to run daily at 11 AM
String cronExp = '0 0 11 * * ?'; 
String jobID = System.schedule('CgDataCloud', cronExp, cgDataCloudScheduler);

// To schedule for specific tables:
// List<String> specificTables = new List<String>{'promotionmeasures', 'dailymeasurereal'};
// cgcloud.DataCloudExportScheduler specificTableScheduler = new cgcloud.DataCloudExportScheduler(specificTables);
// String specificJobId = System.schedule('CgDataCloudSpecific', cronExp, specificTableScheduler);
```
