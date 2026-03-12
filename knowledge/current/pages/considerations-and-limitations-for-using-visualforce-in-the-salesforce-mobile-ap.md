---
title: "Considerations and Limitations for Using Visualforce in the Salesforce
   Mobile App"
domain: pages
topic: considerations-and-limitations-for-using-visualforce-in-the-salesforce-mobile-ap
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:24.518Z
estimatedTokens: 609
keywords: [Considerations, Limitations, Visualforce, Salesforce, Mobile, App, developers, build, sophisticated, custom, user, interfaces, hosted, natively, Lightning]
---

# Considerations and Limitations for Using Visualforce in the Salesforce
   Mobile App

> Visualforce allows developers to build sophisticated, custom user interfaces that can be
  hosted natively on the Lightning Platform. Visualforce is Salesforce’s tried and true model,
  giving developers access to data and robust tools and functionality. There are many benefits to
  using Visualforce in the Salesforce mobile app, but also some limitations.

# Considerations and Limitations for Using Visualforce in the Salesforce Mobile App

Visualforce allows developers to build sophisticated, custom user interfaces that can be hosted natively on the Lightning Platform. Visualforce is Salesforce’s tried and true model, giving developers access to data and robust tools and functionality. There are many benefits to using Visualforce in the Salesforce mobile app, but also some limitations.

## Usability

-   Easy to implement for greater productivity.
-   Page-centric model naturally splits large applications into small, manageable pages.

## Integration with the Salesforce Platform and Other Tools

-   Access to Salesforce’s rich metadata infrastructure.
-   The standard controller allows access to objects directly and via relationships without executing a single query.
-   Visualforce pages can act as containers for JavaScript or third-party frameworks, like AngularJS or React.

## Customization

-   Standard tabs, custom object tabs, and list views that are overridden with a Visualforce page aren’t supported in the Salesforce mobile app. Mobile users see the default Salesforce page for the object instead.

## Interactivity

-   Limited interactivity (aside from JavaScript functionality you add yourself).
-   Difficult to create an immersive user experience.

## Speed

-   Higher latency, which degrades mobile performance.
-   Poor match for low-end or older mobiles devices with limited compute resources.
-   Visualforce processes markup tags on the Salesforce server, which can increase response time.

## The one.app Container

In Salesforce Classic, Visualforce “owns” the page, the request, and the environment. Visualforce is the application container. But in the Salesforce mobile app and Lightning Experience, Visualforce runs inside an iframe that’s inside the larger /lightning container. If you’re used to developing in Salesforce Classic, using the one.app container requires a few adjustments, mainly scope and security considerations. For more information, see [Understanding the Salesforce Mobile App Container](atlas.en-us.pages.meta/pages/pages_mobile_salesforce1_container.htm "In Salesforce Classic, Visualforce “owns” the page, the request, and the environment. Visualforce is the application container. But in the Salesforce mobile app and Lightning Experience, Visualforce runs inside an iframe that’s inside the larger /lightning container.").

## Related Topics

- Understanding the Salesforce Mobile App
     Container (atlas.en-us.pages.meta/pages/pages_mobile_salesforce1_container.htm)
