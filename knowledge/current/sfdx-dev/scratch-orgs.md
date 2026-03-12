---
title: "Scratch Orgs"
domain: sfdx-dev
topic: scratch-orgs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:18.368Z
estimatedTokens: 2560
keywords: [Scratch, Orgs, org, source-driven, disposable, deployment, Salesforce, code, metadata, fully, configurable, allowing, developers, emulate, different]
---

# Scratch Orgs

> The scratch org is a source-driven and disposable deployment of Salesforce code and
        metadata. A scratch org is fully configurable, allowing developers to emulate different
        Salesforce editions with different features and settings. You can share the scratch org
        configuration file with other team members, so you all have the same basic org in which to
        do your development. In addition to code and metadata, developers can install packages and
        deploy synthetic or dummy data for testing. Don’t add personal data to scratch orgs.

# Scratch Orgs

The scratch org is a source-driven and disposable deployment of Salesforce code and metadata. A scratch org is fully configurable, allowing developers to emulate different Salesforce editions with different features and settings. You can share the scratch org configuration file with other team members, so you all have the same basic org in which to do your development. In addition to code and metadata, developers can install packages and deploy synthetic or dummy data for testing. Don’t add personal data to scratch orgs.

Scratch orgs drive developer productivity and collaboration during the development process, and facilitate automated testing and continuous integration. You can use Salesforce CLI or an IDE to open your scratch org in a browser without logging in. Spin up a new scratch org when you want to:

-   Start a new project.
-   Start a new feature branch.
-   Test a new feature.
-   Start automated testing.
-   Perform development tasks directly in an org.
-   Start from “scratch” with a fresh new org.

Alternatives to scratch orgs are sandboxes and Developer Edition orgs, which are used as development environments for many Salesforce development use cases. If you’re wondering whether to use a sandbox, scratch org, or Developer Edition org as your development environment, you’re not alone. To help you better understand which to choose, see the Salesforce Developers Blog: [Choose the Right Salesforce Org for the Right Job](https://developer.salesforce.com/blogs/2024/05/choose-the-right-salesforce-org-for-the-right-job).

## Source Tracking

Source tracking refers to tracking the changes you make to your local source files and the metadata in your org, and keeping both in sync.

Scratch orgs have source tracking enabled by default. You can opt out of source tracking when you create the scratch org by specifying the \--no-track-source flag of the org create scratch command. This flag affects only your local configuration, not the scratch org itself. Salesforce CLI sets a local configuration option trackSource: false as part of your authorization information to the org. If you log out of the scratch org and then log back in again, source tracking is enabled again by default.

If you’re actively in development mode, we suggest keeping source tracking enabled in your scratch org so you can easily sync the changes between your org and your local project. But source tracking can slow down deployments and retrievals, so it’s sometimes better to disable it if it’s not needed. Here are some use cases.

-   Your continuous integration (CI) script simply creates a scratch org, deploys source, runs Apex and browser tests, and then deletes the scratch org.
-   You want to spin up a scratch org for a demo, user acceptance testing, or debugging.
-   Your test data has changed and you want to ensure it’s correct by importing it into a scratch org. But you haven’t changed any metadata or source code.
-   You want to install and verify a package your CI built.
-   You want to test a pull request by deploying code to a scratch org, but you don’t plan to change the code.

## Scratch Org Creation Methods

By default, scratch orgs are empty. They don’t contain much of the sample metadata that you get when you sign up for an org, such as a Developer Edition org, the traditional way. Some of the things not included in a scratch org are:

-   Custom objects, fields, indexes, tabs, and entity definitions
-   Sample data
-   Sample Chatter feeds
-   Dashboards and reports
-   Workflows
-   Picklists
-   Profiles and permission sets
-   Apex classes, triggers, and pages

Before creating a scratch org, you must configure it so it has the features, settings, licenses, and limits that mirror a source org, often your production org. The combination of features, settings, edition, licenses, and limits are what we refer to as the org’s shape.

We offer these methods for configuring scratch orgs:

-   [Build Your Own Scratch Org Definition File](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file.htm "The scratch org definition file is a blueprint for a scratch org. It mimics the shape of an org that you use in the development lifecycle, such as sandbox, packaging, or production.")
-   [Create a Scratch Org Based on an Org Shape](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_intro.htm "We know it’s not easy to build a scratch org definition that mirrors the features and settings in your production org. With Org Shape for Scratch Orgs, you can leave building the scratch org definition to us. After you capture the org’s shape, you can spin up scratch orgs based on it.")
-   [Create a Scratch Org Based on a Snapshot](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_snapshots_intro.htm "Capture the state of a scratch org’s configuration so that you can use it to create scratch org replicas. A snapshot is a point-in-time copy of a scratch org that includes installed packages, features, limits, licenses, metadata, and data.")

## On Which Salesforce Instances Are Scratch Orgs Created?

Scratch orgs are created on sandbox instances. The sandbox instance depends on the country information used when creating the Dev Hub org.

Scratch orgs for Government Cloud and Hyperforce are created in the region where the Dev Hub org is physically located.

-   Scratch orgs created from a Dev Hub org in Government Cloud are created in a Government Cloud instance.
-   Scratch orgs created from a Dev Hub org in Hyperforce are created on a Hyperforce instance.

If you notice that your scratch orgs aren’t located in the expected region, create a Salesforce Support case.

## Scratch Org Expiration Policy

A scratch org is temporary and is deleted along with the associated ActiveScratchOrgs records from the Dev Hub after their expiration. This expiration process ensures that teams frequently sync their changes with their version control system and are working with the most recent version of their project.

Scratch orgs have a maximum 30 days lifespan. You can select a duration from 1 through 30 days at the time of creation, with the default set at 7 days. After the scratch org has expired, you can’t restore it.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

Deleting a scratch org doesn’t terminate your scratch org subscription. If your subscription is still active, you can create a new scratch org. Creating a new scratch org counts against your daily and active scratch org limits.

-   **[Supported Scratch Org Editions and Allocations](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_editions_and_allocations.htm)**
    Your Dev Hub org is often your production org, and you can enable Dev Hub in these editions: Developer, Enterprise, Unlimited, or Performance. Your Dev Hub edition determines how many scratch orgs you can create. You choose one of the supported scratch org editions each time you create a scratch org.
-   **[Build Your Own Scratch Org Definition File](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file.htm)**
    The scratch org definition file is a blueprint for a scratch org. It mimics the shape of an org that you use in the development lifecycle, such as sandbox, packaging, or production.
-   **[Create a Scratch Org Based on an Org Shape](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_intro.htm)**
    We know it’s not easy to build a scratch org definition that mirrors the features and settings in your production org. With Org Shape for Scratch Orgs, you can leave building the scratch org definition to us. After you capture the org’s shape, you can spin up scratch orgs based on it.
-   **[Create Scratch Orgs](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_create.htm)**
    Easily spin up a scratch org and open it directly from the command line.
-   **[Scratch Org Snapshots](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_snapshots_intro.htm)**
    Capture the state of a scratch org’s configuration so that you can use it to create scratch org replicas. A snapshot is a point-in-time copy of a scratch org that includes installed packages, features, limits, licenses, metadata, and data.
-   **[Select the Salesforce Release for a Scratch Org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_version_selection.htm)**
    During the Salesforce release transition, you can specify the release (preview or previous) when creating a scratch org.
-   **[Deploy Source From Your Project to the Scratch Org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_push_md_to_scratch_org.htm)**
    After changing the source, you can sync the changes to your scratch org by deploying the changed source to it with the project deploy start command.
-   **[Retrieve Source from the Scratch Org to Your Project](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_pull_md_from_scratch_org.htm)**
    After you do an initial deploy, your changes are tracked between your local file system and your scratch org. If you change metadata in your scratch org, retrieve those changes to your local project to keep both in sync.
-   **[Scratch Org Users](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_users.htm)**
    A scratch org includes one administrator user by default. The admin user is typically adequate for all your testing needs. But sometimes you need other users to test with different profiles and permission sets.
-   **[Manage Scratch Orgs from the Dev Hub Org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_view_lex.htm)**
    You can view and delete your scratch orgs and their associated requests from the Dev Hub org.
-   **[Scratch Org Error Codes](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_error_codes.htm)**
    If scratch org creation fails, the system generates an error code that can help you identify the cause. Some of these errors are generated by the SignupRequest API and apply to all org signups.

#### See Also

-   [*Salesforce Admins Blog*: Sandboxes vs. Scratch Orgs and How to Use Them](https://admin.salesforce.com/blog/2023/sandboxes-vs-scratch-orgs-and-how-to-use-them "Salesforce Admins Blog: Sandboxes vs. Scratch Orgs and How
    to Use Them - HTML (New Window)")

## Related Topics

- Build Your
                        Own Scratch Org Definition File (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file.htm)
- Create a Scratch
                        Org Based on an Org Shape (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_intro.htm)
- Create a
                        Scratch Org Based on a Snapshot (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_snapshots_intro.htm)
- Supported Scratch Org Editions and Allocations (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_editions_and_allocations.htm)
- Build Your Own Scratch Org Definition File (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file.htm)
- Create a Scratch Org Based on an Org Shape (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_intro.htm)
- Create Scratch Orgs (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_create.htm)
- Scratch Org Snapshots (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_snapshots_intro.htm)
- Select the Salesforce Release for a Scratch Org (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_version_selection.htm)
- Deploy Source From Your Project to the Scratch Org (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_push_md_to_scratch_org.htm)
