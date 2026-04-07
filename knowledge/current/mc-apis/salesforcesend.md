---
title: "SalesforceSend"
domain: mc-apis
topic: salesforcesend
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:24.795Z
estimatedTokens: 462
keywords: [SalesforceSend, instance, email, send, Salesforce]
---

# SalesforceSend

> Defines a single instance of an email send using Salesforce information.

# SalesforceSend

Defines a single instance of an email send using Salesforce information.

### Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. |
| Email | Email | Default email address for object. |
| Exclusions | Target[] | Definition. |
| FromAddress | xsd:string | Indicates From address associated with a object. |
| FromName | xsd:string | Specifies the default email message From Name. |
| ID | xsd:int | Read-only legacy identifier for an object. Not supported on all objects. |
| IndividualResults | xsd:boolean | Indicates whether individual email results show in a Salesforce instance. |
| IsMultipart | xsd:boolean | Indicates whether the email is sent with Multipart/MIME enabled. |
| ModifiedDate | Nullable`1 | Last time object information was modified. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| SendDate | xsd:dateTime | Indicates the date on which a send occurred. |
| Subject | xsd:string | Contains subject area information for a message. |
| Targets | Target[] | Identifies the targets used as part of a Salesforce send. |
