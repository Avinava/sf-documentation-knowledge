---
title: "Run Salesforce CLI Using a Docker Image"
domain: sfdx-setup
topic: run-salesforce-cli-using-a-docker-image
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.104Z
estimatedTokens: 446
keywords: [Run, Salesforce, CLI, Docker, Image, publishes, container, images, Hub, follow, release, process, installers, npm, packages]
---

# Run Salesforce CLI Using a Docker Image

> Salesforce publishes Docker container images for Salesforce CLI on Docker Hub. We
  	follow the same release process as our installers and npm packages. Each week we publish a
		Docker container image for that week’s release candidate (latest-rc). The following week we retag the image as latest. You can run the latest or latest-rc CLI versions, or a
		specific numbered version.

# Run Salesforce CLI Using a Docker Image

Salesforce publishes Docker container images for Salesforce CLI on Docker Hub. We follow the same release process as our installers and npm packages. Each week we publish a Docker container image for that week’s release candidate (latest-rc). The following week we retag the image as latest. You can run the latest or latest-rc CLI versions, or a specific numbered version.

For each Salesforce CLI version, we provide two flavors:

-   slim—The CLI installed on Linux with a TAR file, plus OpenJDK 11.
-   full—The CLI installed on Linux with npm on a full Node.js installation, plus OpenJDK 11 and additional utilities such as jq.

Refer to [this Web page](https://hub.docker.com/r/salesforce/cli/tags) or the following table to determine the name of the image you want to use.

| Salesforce CLI Version Type | Docker Hub Image Name |
| --- | --- |
| Slim latest release | salesforce/cli:latest-slim |
| Full latest release | salesforce/cli:latest-full |
| Slim release candidate | salesforce/cli:latest-rc-slim |
| Full release candidate | salesforce/cli:latest-rc-full |
| Slim specific version, such as 2.0.1 | salesforce/cli:2.0.1-slim |
| Full specific version, such as 2.0.1 | salesforce/cli:2.0.1-full |

For example, to pull and run the slim CLI release candidate image:

```

```

Then you can run Salesforce CLI commands, such as:

```

```

To exit the Salesforce CLI Docker container:

```

```

You can also remotely execute commands from outside the container after you have it running and know the container ID:

```

```

#### See Also

-   [*Docker Hub*: The official Dockerfile for Salesforce DX.](https://hub.docker.com/r/salesforce/cli "Docker Hub: The official Dockerfile for Salesforce DX.
    - HTML (New Window)")

## Code Examples

```
docker pull salesforce/cli:latest-rc-slim
docker run -it salesforce/cli:latest-rc-slim
```

```
docker exec -it 8b1e2696a243 bin/bash sf version
```
