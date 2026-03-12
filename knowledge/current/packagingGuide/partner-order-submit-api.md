---
title: "Partner Order Submit API"
domain: packagingGuide
topic: partner-order-submit-api
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:20.729Z
estimatedTokens: 616
keywords: [Partner, Order, Submit, API, longer, version, 1.39, earlier, Channel, App, Migrate, Apex, Send, orders, Salesforce]
---

# Partner Order Submit API

> (No longer supported and available only in version 1.39 and earlier of the Channel
      Order App. Migrate to the Channel Order Apex API.) Send orders to Salesforce immediately or
      asynchronously using the Partner Order Submit API.

# Partner Order Submit API

(No longer supported and available only in version 1.39 and earlier of the Channel Order App. Migrate to the Channel Order Apex API.) Send orders to Salesforce immediately or asynchronously using the Partner Order Submit API.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=packagingGuide)

#### Important

In Channel Order App (COA) v2.0 and later, the Channel Order Apex API replaces the Partner Order Submit API. If you have any existing integrations with the Partner Order Submit API, migrate them to the Channel Order Apex API.

## Syntax

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

When you submit an order using sendOrder or sendOrderAsync, include an order ID or set of order IDs as the argument. For example, channel\_orders.ServiceOrderProcessor.sendOrder(orderId).

## Usage

Use sendOrderAsync when you want to create or update multiple orders and send them in the same transaction. See the example in this section for more details.

## Rules and Guidelines

It’s an Apex implementation, so all Apex usage rules and limits apply. Salesforce supports only one order per call.

Use the Partner Submit API to send an order after it has been created using a valid Service Order ID. You can create Service Order and Service Order Detail records using the Channel Order App, data loading, or automated processing.

Each order must include the fields listed on the Service Order and Service Order Detail objects.

## Methods

The ServiceOrderProcessor object supports the following methods.

| Name | Arguments | Description |
| --- | --- | --- |
| sendOrder | ID | Submit an order with a single ID immediately. |
| sendOrder | Set of IDs | Submit an order with a set of IDs immediately. |
| sendOrderAsync | ID | Submit an order with a single ID asynchronously (@future). |
| sendOrderAsync | Set of IDs | Submit an order with a set of IDs asynchronously (@future). |

## Example: Batching on the Partner Order Submit API

You can only invoke ServiceOrderProcessor one time per Apex transaction. If you pass a set of IDs to sendOrder or sendOrderAsync, the maximum set size is 5. This example uses a batch job to work around this limitation.

In this example, if you have 100 orders in Draft status, the code creates one batch job with 100 executions, because only one record is processed per execution.

```

```

## Code Examples

```
channel_orders.ServiceOrderProcessor.sendOrder()
channel_orders.ServiceOrderProcessor.sendOrderAsync()
```

```apex
//Batch Apex class
global class COABatchClass implements Database.batchable<sObject>, Database.AllowsCallouts, Database.Stateful{
   final String DRAFT_STATUS = 'Draft';
   global final String query =
      'select Id, CHANNEL_ORDERS__Service_Order_Status__c ' +
      ' from CHANNEL_ORDERS__Service_Order__c where CHANNEL_ORDERS__Service_Order_Status__c =: DRAFT_STATUS';

   global Database.QueryLocator start(Database.BatchableContext BC){
      return Database.getQueryLocator(query);
   }

   global void execute(Database.BatchableContext info, List<CHANNEL_ORDERS__Service_Order__c> scope){
       for(CHANNEL_ORDERS__Service_Order__c s : scope){
         CHANNEL_ORDERS.ServiceOrderProcessor.sendOrder(s.Id);
         }
   }
   global void finish(Database.BatchableContext BC){}
}

//Batch call
Id batchInstanceId = Database.executeBatch(new COABatchClass(), 1);
```
