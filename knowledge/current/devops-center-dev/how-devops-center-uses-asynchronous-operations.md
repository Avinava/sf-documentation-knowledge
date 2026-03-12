---
title: "How DevOps Center Uses Asynchronous Operations"
domain: devops-center-dev
topic: how-devops-center-uses-asynchronous-operations
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.363Z
estimatedTokens: 937
keywords: [How, DevOps, Center, Uses, Asynchronous, Operations, custom, objects, model, live, org, installed, managed, package, performs]
---

# How DevOps Center Uses Asynchronous Operations

> The custom objects that make up the DevOps Center object model live in the org in which you installed the DevOps Center managed package. But many of the operations that DevOps Center performs happen outside this org.

# How DevOps Center Uses Asynchronous Operations

The custom objects that make up the DevOps Center object model live in the org in which you installed the DevOps Center managed package. But many of the operations that DevOps Center performs happen outside this org.

These operations include:

-   Merging branches on your source control repository.
-   Deploying metadata to the development and staging environments.
-   Pulling metadata from a development environment.

DevOps Center delegates these operations to a Heroku application, which is created and configured as part of the initial DevOps Center installation.

For example, when DevOps Center deploys metadata to a staging environment, it packages up the related data and sends an HTTP POST to the Heroku application. The Heroku application parses this request payload and performs the required task. However, Heroku applications can keep an HTTP connection open for a maximum of 30 seconds, and sometimes a metadata deployment can take longer. For this reason, DevOps Center runs these operations asynchronously.

DevOps Center manages these asynchronous operations by creating a record in the Async Operation Result custom object each time it interacts with the Heroku application. The request payload that DevOps Center sends to Heroku includes the ID of this new record; Heroku uses the ID to update the Messages field of the Async Operation Result record with its progress. DevOps Center posts these progress messages to the UI, such as this message about deploying metadata during a promotion:

![DevOps Center showing a message about deploying metadata during a promotion to the UAT pipeline stage.](/docs/resources/img/en-us/260.0?doc_id=devops_center%2Fimages%2Fdevops_center_dev_aor_promote.png&folder=devops_center_dev)

When Heroku finishes the operation, it changes the Status field of Async Operation Result to either Completed or Error.

While Heroku is performing these operations, DevOps Center watches the Async Operation Result record for the change in status. When it happens, an Apex trigger updates other objects in the model to reflect the final state. For example, when the async operations associated with a promotion complete successfully, DevOps Center updates the Completion Date field of the Deployment Result. This update in turn lets the rest of the objects know that the promotion succeeded. Here’s a diagram to show the flow.

![Diagram of the process flow between DevOps Center and the Herokup application.](/docs/resources/img/en-us/260.0?doc_id=devops_center%2Fimages%2Fdevops_center_dev_aor_overview.png&folder=devops_center_dev)

When DevOps Center performs a remote operation, all objects that are part of the operation are associated with the Async Operation Result. This design serves two purposes:

-   When the remote operation completes, an Apex trigger can execute a single SOQL query to update all the associated objects to their final status, ensuring that the updates happen in a single transaction.
-   Other potential remote operations can determine whether there’s an operation already in progress, and wait for it to complete if necessary.

For example, let’s say a user initiates a promotion from the UAT pipeline stage to Staging. The new Async Operation Result record sets a flag on the two associated Pipeline Stage records to indicate that they’re associated with a remote operation (promotion) that’s in progress. Then let’s say a different user initiates a promotion from Integration to UAT. DevOps Center first checks whether either of these stages is already involved in a remote operation. Because the UAT stage is involved in the first operation, DevOps Center waits for it to complete before initiating a new operation.
