---
title: "Trialforce Key Concepts and Relationships"
domain: packagingGuide
topic: trialforce-key-concepts-and-relationships
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:21.395Z
estimatedTokens: 911
keywords: [Trialforce, Key, Concepts, Relationships, setup, consists, management, org, source, orgs, templates, how, parts, work, together]
---

# Trialforce Key Concepts and Relationships

> A Trialforce setup consists of a Trialforce management org, Trialforce source orgs, and
    Trialforce templates. Before you set up Trialforce, learn how these parts work together to
    deliver trials of your AppExchange solution.

# Trialforce Key Concepts and Relationships

A Trialforce setup consists of a Trialforce management org, Trialforce source orgs, and Trialforce templates. Before you set up Trialforce, learn how these parts work together to deliver trials of your AppExchange solution.

## Key Concepts

Trialforce Management Organization

A Trialforce management org (TMO) is the starting point for creating trials with Trialforce. You perform these tasks in your TMO.

-   Create one or more Trialforce source orgs.
-   Define templates for custom branding.

Trialforce Source Organization

A Trialforce source org (TSO) is used to create Trialforce templates, which are used to provision trial orgs. You perform these tasks in your TSO.

-   Install your solution, and add sample data.
-   Configure the TSO as you want customers to experience it.
-   Optionally, specify custom branding using templates.
-   Create one or more Trialforce templates.

Trialforce Template

A Trialforce template is an approximate snapshot, not exact copy, of your TSO. The template defines the trial org that’s provisioned when a customer signs up for a trial. Trialforce templates are also used to generate trial orgs using the SignupRequest API and create demo orgs from the Environment Hub. You create a template after you install and configure a solution in your TSO. You can create Trialforce templates only if the TSO is a trial org.

## Relationships Between Trialforce Org Types

The TMO, TSOs, and Trialforce templates have a hierarchical relationship.

![Trialforce hierarchy diagram showing the relationships between organizations used to set up Trialforce.](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fimages%2Ftrialforce_hierarchy.png&folder=packagingGuide)

The TMO sits at the top of the hierarchy. You can create multiple TSOs from the same TMO. Likewise, you can create multiple Trialforce templates from the same TSO. After you add a Trialforce template to your AppExchange listing, the template is used to provision trial orgs for customers.

We recommend that you have one TMO for your company, one TSO for each solution that you offer, and one Trialforce template for each solution version. This configuration makes it easier to maintain and update your trials. Each time you change something, such as the version, its branding, or a configuration detail in the trial org, you change only one level in the hierarchy.

Let’s explore these relationships in an example.

## Example

Your company offers two solutions, Appy’s e-Signatures and Codey’s Maps. From your TMO, you create two TSOs—one for Appy’s e-Signatures and another for Codey’s Maps. Using the Appy’s e-Signatures TSO, you create a Trialforce template and connect it to the related AppExchange listing. You repeat the process for Codey’s Maps.

Sometime later, you add a feature to Codey’s Maps and create a new solution version. In the existing Codey’s Map’s TSO, you install the latest solution version and create an updated Trialforce template. Then you update the Codey’s Maps listing with the new Trialforce template so that customers can experience the feature.

## Trial Delivery Options with Trialforce

After you configure your TMO, TSO, and Trialforce template, you choose how to provide trials to prospective customers.

-   AppExchange: Customers start trials on your AppExchange listing. This approach has the fewest configuration steps and is the fastest way to deliver a trial.
-   SignupRequest API: Customers start trials from your website using a branded signup form. This approach allows for advanced customization and gives you full control of the signup process.
