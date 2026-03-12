---
title: "Subscribe to the Channel and Receive the Filtered Event Stream"
domain: change-data-capture
topic: subscribe-to-the-channel-and-receive-the-filtered-event-stream
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:09.600Z
estimatedTokens: 938
keywords: [Subscribe, Channel, Receive, Filtered, Event, Stream, configuring, filter, messages, match, expression, data, ChannelName__chn, Pub, Sub]
---

# Subscribe to the Channel and Receive the Filtered Event Stream

> After configuring the filter, subscribe to the channel, and receive the event messages
    that match the filter expression. The channel to subscribe to is /data/ChannelName__chn. Only Pub/Sub API and CometD clients support stream
    filtering. Because Apex triggers don’t support channels, you can’t use them to subscribe to
    filtered event streams.

# Subscribe to the Channel and Receive the Filtered Event Stream

After configuring the filter, subscribe to the channel, and receive the event messages that match the filter expression. The channel to subscribe to is /data/ChannelName\_\_chn. Only Pub/Sub API and CometD clients support stream filtering. Because Apex triggers don’t support channels, you can’t use them to subscribe to filtered event streams.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=change_data_capture)

#### Note

Before subscribing to the channel, follow the steps in the previous sections to create the FilteredChannel\_\_chn channel, and configure a filter expression for AccountChangeEvent with Tooling API or Metadata API.

In this example, we use a Pub/Sub API Java client.

1.  To set up the Pub/Sub API Java client, follow the steps in [Java Quick Start for Publishing and Subscribing to Events](https://developer.salesforce.com/docs/platform/pub-sub-api/guide/qs-java-quick-start.html) in the [Pub/Sub API Developer Guide](https://developer.salesforce.com/docs/platform/pub-sub-api/guide/intro.html).
2.  In [Step 3: Configure Client Parameters](https://developer.salesforce.com/docs/platform/pub-sub-api/guide/qs-java-parameters.html), supply the configuration parameters in arguments.yaml. Also, make sure you supply the values.
    1.  TOPIC: /data/FilteredChannel\_\_chn
    2.  PROCESS\_CHANGE\_EVENT\_HEADER\_FIELDS: true

        This value ensures that the bitmap fields, such as changedFields, in ChangeEventHeader are expanded. For more information, see [Event Deserialization Considerations](https://developer.salesforce.com/docs/platform/pub-sub-api/guide/event-deserialization-considerations.html) in the Pub/Sub API Developer Guide.

3.  In a Terminal window, navigate to the top-level java folder.
4.  To run the Subscribe RPC example, enter:./run.sh genericpubsub.Subscribe.
5.  Let’s create some accounts and update one account. Each account creation and update generates a change event that Salesforce publishes.
    1.  Click App Launcher, and enter Accounts in the search box.
    2.  Right-click Accounts, and select to open the link in a new tab.
    3.  In the new tab, search for Accounts in the App Launcher.
    4.  Create an account with these values.

        -   Account Name: Acme North
        -   Industry: Agriculture
        -   NumberOfEmployees: 1500

    5.  Create a second account with these values.

        -   Account Name: Acme South
        -   Industry: Agriculture
        -   NumberOfEmployees: 20

    6.  Create a third account with these values.

        -   Account Name: Acme West
        -   NumberOfEmployees: 1100

    7.  Update the 'Acme North' account with this value.

        -   Type: Prospect


As a refresher, here’s the filter expression that was set in the previous section.

```

```

From the change event messages that Salesforce published in response to the accounts created, only the first event of account Acme North matches the filter criteria set up in the previous example. The first event message is delivered to the client. Also, the last change event corresponding to the Acme North account update is delivered, as the account continues to match the criteria. Notice that even though only the Type field was updated, the change event includes the NumberOfEmployees and Industry fields because they’re auto-enriched.

The second and third events don’t match the filter criteria and aren’t delivered to the client. In the second event, the NumberOfEmployees field is less than 1,000, and the third event has a blank (null) Industry.

This example shows the received change event messages after subscribing to the /data/FilteredChannel\_\_chn channel.

```

```

## Code Examples

```
Industry='Agriculture' AND NumberOfEmployees>1000
```

```
{
  "ChangeEventHeader": {
    "entityName": "Account",
    "recordIds": [
      "001ZM000002JNaXYAW"
    ],
    "changeType": "CREATE",
    "changeOrigin": "com/salesforce/api/soap/61.0;client=SfdcInternalAPI/",
    "transactionKey": "00007816-6798-4836-5275-80afa466c4d4",
    "sequenceNumber": 1,
    "commitTimestamp": 1722531023000,
    "commitNumber": 77390604774,
    "commitUser": "005ZM000000M6o1YAC",
    "nulledFields": [],
    "diffFields": [],
    "changedFields": []
  },
  "Name": "Acme North",
  "Type": null,
  "ParentId": null,
  "BillingAddress": null,
  "ShippingAddress": null,
  "Phone": null,
  "Fax": null,
  "AccountNumber": null,
  "Website": null,
  "Sic": null,
  "Industry": "Agriculture",
  "AnnualRevenue": null,
  "NumberOfEmployees": 1500,
  "Ownership": null,
  "TickerSymbol": null,
  "Description": null,
  "Rating": null,
  "Site": null,
  "OwnerId": "005ZM000000M6o1YAC",
  "CreatedDate": 1722531023000,
  "CreatedById": "005ZM000000M6o1YAC",
  "LastModifiedDate": 1722531023000,
  "LastModifiedById": "005ZM000000M6o1YAC",
  "Jigsaw": null,
  "JigsawCompanyId": null,
  "AccountSource": null,
  "SicDesc": null,
  "External_Account_ID__c": null
}
with schema name: AccountChangeEvent

{
  "ChangeEventHeader": {
    "entityName": "Account",
    "recordIds": [
      "001ZM000002JNaXYAW"
    ],
    "changeType": "UPDATE",
    "changeOrigin": "com/salesforce/api/soap/61.0;client=SfdcInternalAPI/",
    "transactionKey": "000077fe-1655-b8fc-44ab-27df66fccbf6",
    "sequenceNumber": 1,
    "commitTimestamp": 1722531115000,
    "commitNumber": 77390686560,
    "commitUser": "005ZM000000M6o1YAC",
    "nulledFields": [],
    "diffFields": [],
    "changedFields": [
      "0x400004"
    ]
  },
  "Name": null,
  "Type": "Prospect",
  "ParentId": null,
  "BillingAddress": null,
  "ShippingAddress": null,
  "Phone": null,
  "Fax": null,
  "AccountNumber": null,
  "Website": null,
  "Sic": null,
  "Industry": "Agriculture",
  "AnnualRevenue": null,
  "NumberOfEmployees": 1500,
  "Ownership": null,
  "TickerSymbol": null,
  "Description": null,
  "Rating": null,
  "Site": null,
  "OwnerId": null,
  "CreatedDate": null,
  "CreatedById": null,
  "LastModifiedDate": 1722531115000,
  "LastModifiedById": null,
  "Jigsaw": null,
  "JigsawCompanyId": null,
  "AccountSource": null,
  "SicDesc": null,
  "External_Account_ID__c": null
}
with schema name: AccountChangeEvent
2024-08-01 09:52:08,030 [grpc-default-executor-1] java.lang.Class - ============================
2024-08-01 09:52:08,030 [grpc-default-executor-1] java.lang.Class -        ChangedFields       
2024-08-01 09:52:08,030 [grpc-default-executor-1] java.lang.Class - ============================
2024-08-01 09:52:08,030 [grpc-default-executor-1] java.lang.Class - Type
2024-08-01 09:52:08,030 [grpc-default-executor-1] java.lang.Class - LastModifiedDate
2024-08-01 09:52:08,030 [grpc-default-executor-1] java.lang.Class - ============================
```
