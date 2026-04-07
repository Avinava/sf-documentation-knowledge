---
title: "SubscriberAddress"
domain: mc-apis
topic: subscriberaddress
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:25.267Z
estimatedTokens: 207
keywords: [SubscriberAddress, address, communicate, person, base, classes, SMSAddress, EmailAddress, derive, Items]
---

# SubscriberAddress

> The SubscriberAddress object is an address used to communicate with a person. The address is the base class from which other address classes (such as SMSAddress and EmailAddress) derive.

# SubscriberAddress

The SubscriberAddress object is an address used to communicate with a person. The address is the base class from which other address classes (such as SMSAddress and EmailAddress) derive.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Address | xsd:string | The physical mailing address required at the bottom of all email messages contains the information described by this property (no P.O. Boxes). The address used to communicate with a Person. |
| AddressType | xsd:string | Indicates what type of address this object represents |
| Statuses | AddressStatus[] | Array of status values for an address. |

## Related Items

-   [SMSAddress](atlas.en-us.noversion.mc-apis.meta/mc-apis/smsaddress.htm)
-   [EmailAddress](atlas.en-us.noversion.mc-apis.meta/mc-apis/emailaddress.htm)

## Related Topics

- SMSAddress (atlas.en-us.noversion.mc-apis.meta/mc-apis/smsaddress.htm)
- EmailAddress (atlas.en-us.noversion.mc-apis.meta/mc-apis/emailaddress.htm)
