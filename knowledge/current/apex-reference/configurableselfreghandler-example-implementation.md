---
title: "ConfigurableSelfRegHandler Example Implementation"
domain: apex-reference
topic: configurableselfreghandler-example-implementation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.595Z
keywords: [ConfigurableSelfRegHandler, Example, Implementation, Apex, code, implements, Auth.ConfigurableSelfRegHandler, interface., After, customer, partner, fills, sign-up, page, submits, handler, invoked, create, Experience, Cloud]
---

# ConfigurableSelfRegHandler Example Implementation

> This Apex code implements the Auth.ConfigurableSelfRegHandler interface. After the customer or partner fills
        out the sign-up page and submits it, the handler is invoked to create an Experience Cloud
        member with the supplied information. If the registration process requires email or phone
        verification, the verification process finishes before the Auth.ConfigurableSelfRegHandler.createUser is invoked. If verification isn’t
        required, createUser is invoked when the customer or
        partner submits the page.

## ConfigurableSelfRegHandler Example Implementation

This Apex code implements the Auth.ConfigurableSelfRegHandler interface. After the customer or partner fills out the sign-up page and submits it, the handler is invoked to create an Experience Cloud member with the supplied information. If the registration process requires email or phone verification, the verification process finishes before the Auth.ConfigurableSelfRegHandler.createUser is invoked. If verification isn’t required, createUser is invoked when the customer or partner submits the page.

Verification occurs by email if the admin chose Email as the verification method when setting up the Configurable Self-Reg handler on the Login & Registration (L&R) page. When a visitor clicks the sign-up link from the login page, Salesforce prompts for an email address and then sends a one-time password to the specified email address. If the visitor enters the verification code successfully on the verify page, the user is created and logged in. Likewise, if the admin chose Text Message as the verification method on the L&R page, the visitor is prompted to enter a phone number. Salesforce sends a challenge (verification code) via SMS to the user. If successful, the user is created and logged in. Requiring verification before creating a user reduces the number of dummy users cluttering your org.

The Auth.ConfigurableSelfRegHandler class contains logic for generating the user fields required to create a user in case the user doesn’t supply them. The handler generates default values, ensuring that the values are unique by appending a timestamp. You can modify the handler to make sure that the email address and phone number of the customer or partner are also unique.

```

```