---
title: "Data Collection"
domain: data-cloud
topic: data-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:15.108Z
estimatedTokens: 357
keywords: [Data, Collection, Before, Salesforce, Interactions, SDK, begin, capturing, data, initialize, gain, user’s, consent, track, data., Capturing, User, Engagement, Profile]
---

# Data Collection

> Before the Salesforce Interactions SDK can begin capturing data, initialize the
    Salesforce Interactions SDK and gain the user’s consent to track the data.

# Data Collection

Before the Salesforce Interactions SDK can begin capturing data, initialize the Salesforce Interactions SDK and gain the user’s consent to track the data.

Use this function for [Initialization](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_initialization.htm "The recommended initialization flow for the Salesforce Interactions SDK follows a general pattern.") and [consent](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_consent.htm "The Salesforce Interactions SDK has been designed to respect user privacy and doesn’t store or transmit data collected until it has been granted consent. If your site has existing consent management features, those features must integrate with the SDK to signal when the user has given consent to track.").

```

```

If your site has existing consent management features, integrate those features with the Salesforce Interactions SDK to signal when the user gives consent to track.

## Capturing User Engagement Data

To capture a customer interaction, call the sendEvent function.

```

```

## Capturing Profile Data

Capturing profile data occurs in the same sendEvent function.

```

```

## Capturing Profile and Engagement Data

When capturing profile data, you aren’t limited to that minimal interaction format. You can combine any of the interaction data models with profile information to collect as much context for an event as possible.

```

```

## Code Examples

```
SalesforceInteractions.init({
  consents: [{
    purpose: "Tracking", 
    provider: "OneTrust", 
    status: "Opt In"
  }]
})
```

```
SalesforceInteractions.sendEvent({
    interaction : {
        name : "View Catalog Object",
        catalogObject: { 
          type : "Product", 
          id : "65e4e737",
          attributes: {
            description: "Shoes"
          }
        }
    }
    })
```

```
SalesforceInteractions.sendEvent({
    user: {
        attributes: {
            email: 'user@domain.com'
        }
    }
})
```

```
SalesforceInteractions.sendEvent({
    interaction : {
        name : "View Catalog Object",
        catalogObject: { 
          type : "Product", 
          id : "65e4e737",
          attributes: {
            description: "Shoes"
          }
        }
    },
    user: {
        attributes: {
            email: 'user@domain.com'
        }
    }
})
```

## Related Topics

- Initialization (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_initialization.htm)
- consent (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_consent.htm)
