---
title: "Introducing Apex"
domain: apex-guide
topic: introducing-apex
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:33.506Z
estimatedTokens: 743
keywords: [Introducing, Apex, code, first, multitenant, on-demand, programming, language, developers, interested, building, next, generation, business, applications., revolutionizes, way, create]
---

# Introducing Apex

> Apex code is the first multitenant, on-demand programming language for developers
        interested in building the next generation of business applications. Apex revolutionizes the
        way developers create on-demand applications.

# Introducing Apex

Apex code is the first multitenant, on-demand programming language for developers interested in building the next generation of business applications. Apex revolutionizes the way developers create on-demand applications.

While many customization options are available through the Salesforce user interface, such as the ability to define new fields, objects, workflow, and approval processes, developers can also use the SOAP API to issue data manipulation commands such as delete(), update() or upsert(), from client-side programs.

These client-side programs, typically written in Java, JavaScript, .NET, or other programming languages, grant organizations more flexibility in their customizations. However, because the controlling logic for these client-side programs is not located on Salesforce servers, they are restricted by the performance costs of making multiple round-trips to the Salesforce site to accomplish common business transactions, and by the cost and complexity of hosting server code, such as Java or .NET, in a secure and robust environment.

1.  [What is Apex?](atlas.en-us.apexcode.meta/apexcode/apex_intro_what_is_apex.htm)
    Apex is a strongly typed, object-oriented programming language that allows developers to execute flow and transaction control statements on Salesforce servers in conjunction with calls to the API. Using syntax that looks like Java and acts like database stored procedures, Apex enables developers to add business logic to most system events, including button clicks, related record updates, and Visualforce pages. Apex code can be initiated by Web service requests and from triggers on objects.
2.  [Understanding Apex Core Concepts](atlas.en-us.apexcode.meta/apexcode/apex_qs_core_concepts.htm)
    Apex code typically contains many things that you're familiar with from other programming languages.
3.  [When Should I Use Apex?](atlas.en-us.apexcode.meta/apexcode/apex_intro_when_use_apex.htm)
    Salesforce provides the ability to customize prebuilt apps to fit your organization. For complex business processes, you can implement custom functionality and user interfaces with a variety of tools, including Apex and Lightning Components.
4.  [How Does Apex Work?](atlas.en-us.apexcode.meta/apexcode/apex_intro_how_does_apex_work.htm)
    All Apex runs entirely on-demand on the Lightning Platform. Developers write and save Apex code to the platform, and end users trigger the execution of the Apex code via the user interface.
5.  [Developing Code in the Cloud](atlas.en-us.apexcode.meta/apexcode/apex_intro_apex_limitation.htm)
    The Apex programming language is saved and runs in the cloud—the multitenant platform. Apex is tailored for data access and data manipulation on the platform, and it enables you to add custom business logic to system events. While it provides many benefits for automating business processes on the platform, it is not a general purpose programming language.

## Related Topics

- What is Apex? (atlas.en-us.apexcode.meta/apexcode/apex_intro_what_is_apex.htm)
- Understanding Apex Core Concepts (atlas.en-us.apexcode.meta/apexcode/apex_qs_core_concepts.htm)
- When Should I Use Apex? (atlas.en-us.apexcode.meta/apexcode/apex_intro_when_use_apex.htm)
- How Does Apex Work? (atlas.en-us.apexcode.meta/apexcode/apex_intro_how_does_apex_work.htm)
- Developing Code in the Cloud (atlas.en-us.apexcode.meta/apexcode/apex_intro_apex_limitation.htm)
