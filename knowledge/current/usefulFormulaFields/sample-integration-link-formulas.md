---
title: "Sample Integration Link Formulas"
domain: usefulFormulaFields
topic: sample-integration-link-formulas
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.296Z
estimatedTokens: 780
keywords: [Sample, Integration, Link, Formulas, links, Application, API, Shipment, Tracking, Skype™, Auto, Dialer]
---

# Sample Integration Link Formulas

> Use these formulas for integration links.

# Sample Integration Link Formulas

Use these formulas for integration links.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: All Editions |


For details about using the functions included in these samples, see [Formula Operators and Functions by Context](atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/customize_functions.htm "Use these operators and functions when building formulas. All functions are available everywhere that you can include a formula, such as formula fields, validation rules, approval processes, and workflow rules, unless otherwise specified.").

## Application API Link

This formula creates a link to an application outside Salesforce, passing the parameters so that it can connect to Salesforce via SOAP API and create the necessary event.

```

```

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=usefulFormulaFields)

#### Important

$Api.Session\_ID and GETSESSIONID() return the same value, an identifier for the current session in the current context. This context varies depending on where the global variable or function is evaluated. For example, if you use either in a custom formula field, and that field is displayed on a standard page layout in Salesforce Classic, the referenced session is a basic Salesforce session. That same field (or the underlying variable or formula result), when used in a Visualforce page, references a Visualforce session instead.

Session contexts are based on the domain of the request. That is, the session context changes whenever you cross a hostname boundary, such as from .salesforce.com to .vf.force.com or .lightning.force.com.

Session identifiers from different contexts, and the sessions themselves, are different. When you transition between contexts, the new session replaces the previous one, and the previous session is no longer valid. The session ID also changes at this time.

Normally Salesforce transparently handles session hand-off between contexts, but if you’re passing the session ID around yourself, you must reaccess $Api.Session\_ID or GETSESSIONID() from the new context to ensure a valid session ID.

Not all sessions are created equal. In particular, sessions obtained in a Lightning Experience context have reduced privileges, and don't have API access. You can't use these session IDs to make API calls. {!$Api.Session\_ID} isn’t generated for guest users.

## Shipment Tracking Integration

This formula creates a link to FedEx, UPS, or DHL shipment tracking websites, depending on the value of a Shipping Method custom picklist field. The parameters shown in this example for FedEx, UPS, and DHL websites are illustrative and don’t represent the correct parameters for all situations.

```

```

## Skype™ Auto Dialer Integration

This formula creates a linkable phone number field that automatically dials the phone number via the Skype VOIP phone application. It requires installation of the Skype application (a third-party product not provided by Salesforce) on your desktop.

```

```

## Code Examples

```
HYPERLINK ("https://www.myintegration.com?sId=" & GETSESSIONID() & "?&rowID=" & Name & "action=CreateTask","Create a Meeting Request")
```

```
CASE(Shipping_Method__c,
"Fedex", 
HYPERLINK("http://www.fedex.com/Tracking?ascend_header=1&clienttype
=dotcom&cntry_code=us&language=english&tracknumbers= "& tracking_id__c,"Track"),
"UPS", 
HYPERLINK("http://wwwapps.ups.com/WebTracking/processInputRequest?HTMLVersion
=5.0&sort_by=status&loc=en_US&InquiryNumber1= "& tracking_id__c & "&track.x=32&track.y=7", "Track") ,
"DHL", 
HYPERLINK("http://track.dhl-usa.com/TrackByNbr.asp?ShipmentNumber=" & tracking_id__c,"Track"), "")
```

```
HYPERLINK("callto://+" & Country_Code__c & Phone_Unformatted__c, Phone)
```

## Related Topics

- Formula Operators and Functions by Context (atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/customize_functions.htm)
