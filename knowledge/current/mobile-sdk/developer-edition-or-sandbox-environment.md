---
title: "Developer Edition or Sandbox Environment?"
domain: mobile-sdk
topic: developer-edition-or-sandbox-environment
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:26.223Z
estimatedTokens: 793
keywords: [Developer, Edition, Sandbox, Environment, Development, environments, strictly, developing, testing, apps, contain, test, isn’t, business-critical, inside, browser, Salesforce, Extensions, Visual, Studio, Code, editor, Choosing]
---

> Development environments are used strictly for developing and testing apps. These environments
      contain test data that isn’t business-critical. Development can be done inside your browser or
      with the Salesforce Extensions for Visual Studio Code editor.

# Developer Edition or Sandbox Environment?

Salesforce offers a range of environments for developers. The environment that’s best for you depends on many factors, including:

-   The type of application you’re building
-   Your audience
-   Your company’s resources

Development environments are used strictly for developing and testing apps. These environments contain test data that isn’t business-critical. Development can be done inside your browser or with the Salesforce Extensions for Visual Studio Code editor.

## Types of Developer Environments

A Developer Edition environment is a free, fully featured copy of the Enterprise Edition environment, with less storage and users. Developer Edition is a logically separate environment, ideal as your initial development environment. You can sign up for as many Developer Edition orgs as you need. This allows you to build an application designed for any of the Salesforce production environments.

A Partner Developer Edition is a licensed version of the free Developer Edition that includes more storage, features, and licenses. Partner Developer Editions are free to enrolled Salesforce partners.

Sandbox is a nearly identical copy of your production environment available to Professional, Enterprise, Performance, and Unlimited Edition customers. The sandbox copy can include data, configurations, or both. You can create multiple sandboxes in your production environments for a variety of purposes without compromising the data and applications in your production environment.

## Choosing an Environment

In this book, all exercises assume you’re using a Developer Edition org. However, in reality a sandbox environment can also host your development efforts. Here’s some information that can help you decide which environment is best for you.

-   Developer Edition is ideal if you’re a:
    -   Partner who intends to build a commercially available Salesforce app by creating a managed package for distribution through AppExchange or Trialforce. Only Developer Edition or Partner Developer Edition environments can create managed packages.
    -   Salesforce customer with a Group or Personal Edition, and you don’t have access to Sandbox.
    -   Developer looking to explore the Salesforce Platform for FREE!
-   Partner Developer Edition is ideal if you:
    -   Are developing in a team and you require a team environment to manage all the source code. In this case, each developer has a Developer Edition environment and checks code in and out of this team repository environment.
    -   Expect more than two developers to log in to develop and test.
    -   Require a larger environment that allows more users to run robust tests against larger data sets.
-   Sandbox is ideal if you:
    -   Are a Salesforce customer with Professional, Enterprise, Performance, Unlimited, or Salesforce Platform Edition, which includes Sandbox.
    -   Are developing a Salesforce application specifically for your production environment.
    -   Aren’t planning to build a Salesforce application to be distributed commercially.
    -   Have no intention to list on the AppExchange or distribute through Trialforce.
