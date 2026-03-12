---
title: "Compound Fields in PushTopic Queries"
domain: api-streaming
topic: compound-fields-in-pushtopic-queries
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.452Z
estimatedTokens: 732
keywords: [Compound, PushTopic, Queries, support, Address, depends, present, query, specify, Geolocation, constituent]
---

# Compound Fields in PushTopic Queries

> By default, the support of compound fields, such as Name or Address fields, depends on
  which fields are present in the PushTopic query. For Name compound fields, you must specify the
  Name field. For Address and Geolocation fields, you must specify the constituent
  fields.

# Compound Fields in PushTopic Queries

By default, the support of compound fields, such as Name or Address fields, depends on which fields are present in the PushTopic query. For Name compound fields, you must specify the Name field. For Address and Geolocation fields, you must specify the constituent fields.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

#### Note

If the PushTopic field NotifyForFields is set to All, compound fields are supported. In this case, it’s not necessary to explicitly reference compound or constituent fields in the PushTopic query. The special behavior listed in the following sections applies only for the default NotifyForFields setting (Referenced) or when NotifyForFields is set to Select or Where.

## Name Compound Field

To detect changes on the Name compound field, include the Name field in the SELECT or WHERE clause. The constituent fields, such as firstName and lastName, are optional, but the Name field is required. The returned notification message includes all constituent field values. If the Name field is omitted, changes can’t be detected, even if the constituent fields are present.

The following table shows supported and unsupported SELECT statements. These statements contain fields for the Name compound field on Contact or Lead.

| Fields | Supported? |
| --- | --- |
| SELECT Id, Name | Yes |
| SELECT Id, Name, firstName, lastName | Yes |
| SELECT Id, firstName, lastName | No |

## Address Compound Field

To detect changes of Address compound fields, include the constituent fields in the SELECT or WHERE clause. The Address field, such as MailingAddress on Contact or ShippingAddress on Account, is optional, but the constituent fields are required. If the constituent fields are omitted, changes can’t be detected, even if the Address field is present.

The following table shows supported and unsupported SELECT statements. These statements contain MailingAddress fields of Contact.

| Fields | Supported? |
| --- | --- |
| SELECT Id, MailingAddress | No |
| SELECT Id, MailingAddress, MailingCity, MailingStreet | Yes |
| SELECT Id, MailingCity, MailingStreet | Yes |

## Geolocation Compound Field

To detect changes of Geolocation compound fields, include the latitude and longitude constituent fields in the SELECT or WHERE clause. The Geolocation field is optional, but the constituent fields are required. If the constituent fields are omitted, changes can’t be detected, even if the Geolocation field is present.

The following table shows supported and unsupported SELECT statements. These statements contain a custom Geolocation field called location\_\_c and its constituent fields.

| Fields | Supported? |
| --- | --- |
| SELECT Id, location__c | No |
| SELECT Id, location__c, location__latitude__s, location__longitude__s | Yes |
| SELECT Id, location__latitude__s, location__longitude__s | Yes |
