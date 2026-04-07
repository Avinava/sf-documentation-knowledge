---
title: "Create Unique Journey Results using Transaction Keys"
domain: mc-app-development
topic: create-unique-journey-results-using-transaction-keys
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:26.189Z
estimatedTokens: 330
keywords: [Unique, Journey, Results, Transaction, Keys, allow, journeys, produce, entry, multi-criteria, decision, filters, key, combined, contact]
---

# Create Unique Journey Results using Transaction Keys

> Transaction keys allow your journeys to produce unique results for all entry and multi-criteria decision filters. The transaction key value is combined with the contact key to create a unique identifier that is automatically applied to the entry filter and multi-criteria decision filters used throug

# Create Unique Journey Results using Transaction Keys

Transaction keys allow your journeys to produce unique results for all entry and multi-criteria decision filters. The transaction key value is combined with the contact key to create a unique identifier that is automatically applied to the entry filter and multi-criteria decision filters used throughout a journey.

1.  Add a transaction key to the custom event’s config.json under metaData.
2.  Map the transaction key value to a contact attribute using the from and to properties.
3.  Enter the from event property, which comes from the event schema and is case sensitive. Only provide the property that you want to match, not the fully qualified string. For example, if FirstName is a valid event property, use FirstName for the from property, not Event.EventID.FirstName.
4.  Enter valid data extension values from the same MID in order to enable the Next button when defining the entry filter criteria in Journey Builder.

```
{
    "metaData": {
        "transactionKeys": {
            "0": {
                "from": "Event Property",
                "to": "DE_Name.DE_Property"
            }
        }
    }
}
```

## Related Items

[Journey Transaction Key Setting](http://help.marketingcloud.com/en/documentation/journey_builder/interaction_settings/)
