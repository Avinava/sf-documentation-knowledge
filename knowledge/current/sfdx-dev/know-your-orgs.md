---
title: "Know Your Orgs"
domain: sfdx-dev
topic: know-your-orgs
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.731Z
estimatedTokens: 368
keywords: [Know, Orgs, unlocked, packaging, unique, purpose, Choose, Dev, Hub, Org]
---

# Know Your Orgs

> Some of the orgs that you use with unlocked packaging have a unique
        purpose.

# Know Your Orgs

Some of the orgs that you use with unlocked packaging have a unique purpose.

## Choose Your Dev Hub Org

Use the Dev Hub org for these purposes.

When you create an unlocked package using Salesforce CLI, you associate the package with a specific Dev Hub org. When you’re ready to define and create a package for production use, be sure to create the package using the Dev Hub in one of your production orgs.

The Dev Hub org is the owner of all unlocked packages you create, and is used:

-   To link your namespaces if you want to create namespaced unlocked packages
-   To authorize and run your sf package commands

If an unlocked package is associated with a non-production Dev Hub org, and that org expires or becomes inactive, the installed package can't be updated, and new attempts to install the package may fail.

## Namespace Org

If you are using a namespace, you must create an org for the sole purpose of specifying the namespace for your package. We refer to this org as your namespace org.. If you want to use the namespace strictly for testing, choose a disposable namespace.

After you create a namespace org and use it to specify your namespace, open your Dev Hub org and link the namespace org to your Dev Hub org.

## Other Orgs

When you work with packages, you also use these orgs:

-   You can create scratch orgs on the fly to use while testing your packages.
-   The target or installation org is where you install the package.
