---
title: "Ensure Custom Components in Orgs with Experience Cloud Sites Are Secure"
domain: communities-dev
topic: ensure-custom-components-in-orgs-with-experience-cloud-sites-are-secure
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.259Z
estimatedTokens: 461
keywords: [Ensure, Custom, Components, Orgs, Experience, Cloud, Sites, Secure, Developers, customize, functionality, business, logic, any, solution]
---

# Ensure Custom Components in Orgs with Experience Cloud Sites Are Secure

> Developers can customize functionality and business logic in Experience Cloud sites by
  using custom components. As with any custom solution, developers must be aware of potential
  security-related pitfalls. Bypassing built-in defenses can expose sites and orgs to security
  risks.

# Ensure Custom Components in Orgs with Experience Cloud Sites Are Secure

Developers can customize functionality and business logic in Experience Cloud sites by using custom components. As with any custom solution, developers must be aware of potential security-related pitfalls. Bypassing built-in defenses can expose sites and orgs to security risks.

For example, if a developer stores sensitive data as text in a custom component’s definition, the data can potentially be exposed. Such an exposure can happen when Digital Experiences are enabled in the org, the org has custom components, and the custom component’s developer name is known. Exposure can occur whether the site is public or private.

Data exposed can include:

-   Sensitive information stored as text in the component definition
-   The complete component definition of the component including HTML, JavaScript, and CSS files
-   Names of any other components included in the component definition
-   Any Apex controller and method names used in the component definition

Such data can be exposed for any custom component in the org, whether they’re used in the Salesforce org, on an Experience Cloud site, or when unused.

Take the following steps to decrease risk of data exposure in custom components.

-   Review the component definitions in all your custom components in the org
-   Avoid storing any sensitive data in component definitions. Sensitive data can include personally identifiable information, company confidential information, or any information deemed sensitive to your business and customers
-   Review all your custom controllers and ensure that only required user profiles have access to them
-   Ensure that only required methods are exposed using @AuraEnabled
-   Use a naming convention for custom components that is complex and unique to your org
