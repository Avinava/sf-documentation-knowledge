---
title: "Why Switch to Second-Generation Managed Packaging?"
domain: pkg1-dev
topic: why-switch-to-second-generation-managed-packaging
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:25.756Z
estimatedTokens: 1184
keywords: [Why, Switch, Second-Generation, Managed, Packaging, You’ve, first-generation, packages, develop, apps, you’re, probably, pretty, familiar, works]
---

# Why Switch to Second-Generation Managed Packaging?

> You’ve been using first-generation managed packages to develop your apps, so you’re
    probably pretty familiar with what works well, and what’s a bit more painful than you’d like.
    And no doubt, you’re aware that second-generation managed packages is our newer technology, but
    maybe you aren’t so sure why  switching to second-generation managed packaging (managed 2GP)
    will improve your package development experience. So let’s talk about that.

# Why Switch to Second-Generation Managed Packaging?

You’ve been using first-generation managed packages to develop your apps, so you’re probably pretty familiar with what works well, and what’s a bit more painful than you’d like. And no doubt, you’re aware that second-generation managed packages is our newer technology, but maybe you aren’t so sure why switching to second-generation managed packaging (managed 2GP) will improve your package development experience. So let’s talk about that.

## Source-Driven Development

The source-driven development model used in managed 2GP is a big shift from the org-based development used in managed 1GP. Say goodbye to packaging orgs as your source of truth. Instead, your source of truth with managed 2GP is the package metadata in your version control system. And as you develop your managed 2GP package, you create and update your package metadata in a version control system, not in an org.

## Minimal Interaction with Salesforce Orgs

As you probably know well, with managed 1GP development, every package and patch version requires a unique Salesforce org, so it’s not uncommon for you to own 100s of Salesforce orgs in which your package metadata is deployed. Managing these orgs and their credentials can become a nightmare.

Managed 2GP takes away the hassle of managing orgs, and instead you use a single org, the Dev Hub org, to manage all your packages. And even when you do need to connect to your Dev Hub org you’ll use Salesforce CLI (Command Line Interface) or a script to log in.

By eliminating the need to manually log in and keep track of hundreds of packaging and patch orgs (and their login credentials), managed 2GP simplifies package development and promotes modern, programmatic Application Lifecycle Management (ALM).

## API- and CLI-first Model

Unlike managed 1GP, which has only partial API coverage, you can perform every managed 2GP packaging operation using an API or CLI command. You can completely automate packaging operations and be more productive. Repeatable, scriptable, and track-able ALM is truly possible with managed 2GP.

## Flexible Versioning

Managed 1GP packaging follows a linear versioning model that requires you to build upon the previous package version. This approach is very restrictive, and for metadata that can’t be removed from a package, you’re stuck with that metadata in your managed 1GP.

Enter managed 2GP and flexible versioning. If you create a managed-released package version that you haven’t yet distributed to a customer, you can abandon that package version and select a previous package version as the ancestor you want to build upon. Flexible versioning also allows you to use branches and do parallel package development. You can iterate fast, learn from, and move on from any mistakes.

## One Namespace Shared Across Multiple Packages

Managed 1GP packages require each package to have a unique namespace. This restriction can lead to a proliferation of global Apex because sharing code among packages is only possible by declaring Apex classes and methods as global.

Managed 2GP changes the game by allowing multiple packages to share the same namespace. The @namespaceAccessible annotation then lets you share public Apex classes and methods across all packages in the same namespace. By using public Apex, you don’t increase your global Apex footprint by exposing a global API.

## Declarative Dependencies

In managed 2GP packaging, you specify dependencies among packages declaratively in a .json file. Which as you know, is a more developer-friendly approach than how managed 1GP dependencies are declared.

## Simplified Patch Versioning

Creating a patch version of a managed 2GP is as easy as creating a new major or minor package version. You use a Salesforce CLI command and specify a non-zero number for the patch version number. And that’s it!

Because your version control system is the source of truth for managed 2GP, creating patch versions is straightforward. We promise you won’t miss the laborious and error-prone patch org process of managed 1GP.

## Avoid Having to Migrate Customers in the Future

As you may be aware, we’re developing capabilities to migrate your managed 1GP packages to managed 2GP. However, when we launch that capability, there’s work that you have to do to migrate your managed 1GP packages and customers from 1GP to 2GP. By adopting managed 2GP today for your new packages, you avoid the hassle of migration in the future.

#### See Also

-   [Second-Generation Managed Packaging Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp.htm "Second-Generation Managed Packaging Developer Guide - HTML (New Window)")
