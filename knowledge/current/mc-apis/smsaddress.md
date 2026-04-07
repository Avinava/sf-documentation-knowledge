---
title: "SMSAddress"
domain: mc-apis
topic: smsaddress
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:20.332Z
estimatedTokens: 101
keywords: [SMSAddress, SMS, address, communicate, Person]
---

> Defines an SMS address that is used to communicate with a Person.

# SMSAddress

Defines an SMS address that is used to communicate with a Person.

### Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Address | xsd:string | Address used to communicate with a subscriber. |
| AddressType | xsd:string | The type of address. |
| Carrier | xsd:string | Name of the SMS carrier. |
| Statuses | AddressStatus[] | Array of status values for an address. |
