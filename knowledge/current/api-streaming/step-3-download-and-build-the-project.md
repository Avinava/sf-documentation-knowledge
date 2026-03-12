---
title: "Step 3:  Download and Build the Project"
domain: api-streaming
topic: step-3-download-and-build-the-project
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.277Z
estimatedTokens: 898
keywords: [Step, Download, Build, Project, run, connector, examples, Java, source, files]
---

# Step 3:  Download and Build the Project

> Before you can run the connector examples, download the Java source files and build the
    Java project.

# Step 3: Download and Build the Project

Before you can run the connector examples, download the Java source files and build the Java project.

**Prerequisites:**

-   Java Development Kit 8 or later (see [Java Downloads](http://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html))
-   Eclipse IDE for Java Developers (get a recent version from [http://www.eclipse.org/downloads/eclipse-packages/](http://www.eclipse.org/downloads/eclipse-packages/)). This example walks you through the steps of building the project with the Eclipse IDE but you can you use your preferred IDE to build the Java client.

The EMP Connector project includes examples in the [GitHub repository’s example folder](https://github.com/forcedotcom/EMP-Connector/tree/master/src/main/java/com/salesforce/emp/connector/example) that use the connector to log in and subscribe to events. In the next steps, you run the following examples locally on your system.

-   [LoginExample.java](https://github.com/forcedotcom/EMP-Connector/blob/master/src/main/java/com/salesforce/emp/connector/example/LoginExample.java)
-   [BearerTokenExample.java](https://github.com/forcedotcom/EMP-Connector/blob/master/src/main/java/com/salesforce/emp/connector/example/BearerTokenExample.java)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

#### Note

LoginExample.java logs in to your Developer Edition org instance using the instanced login URL such as https://na139.salesforce.com. To pass in a different login URL, such as your org’s My Domain login URL for production or a sandbox, use [DevLoginExample.java](https://github.com/forcedotcom/EMP-Connector/blob/master/src/main/java/com/salesforce/emp/connector/example/DevLoginExample.java) instead. We recommend using DevLoginExample.java because My Domain login URLs provide an extra layer of security. DevLoginExample.java also provides debug logging for the Bayeux messages received.

To download and build the EMP connector project:

1.  To download the project files, do one of the following.

    -   Clone the EMP-Connector project using git.

        ```

        ```

    -   Download the project zip file from GitHub, and then extract the zip to a local folder.

2.  In Eclipse, import the Maven project from the folder where you cloned or extracted the project.

    The dependencies that are specified in the Maven’s pom.xml file, such as CometD, are added in the Java project in Eclipse.

3.  If the Java project wasn’t automatically built, build it.

If you prefer to run the tool from the command line, generate the JAR file using the Maven command mvn clean package. The generated JAR file includes the connector and the example class functionality. The JAR file is a shaded JAR—it contains all dependencies for the connector, so you don’t have to download them separately. The JAR file has a \-phat Maven classifier. You can run the login example from the command line. To run the tool against a Developer Edition org instance without specifying a login URL, use this command, which uses the LoginExample.java class by default.

```

```

To specify a different login URL, such as your org’s My Domain login URL, use this command, which references the DevLoginExample.java class.

```

```

For <login\_URL>, use your org’s My Domain login URL, including the https:// prefix. For example, https://MyDomainName.my.salesforce.com.

**Open Source Project**

EMP Connector is an open-source project, so you can contribute to it with your own enhancements by submitting pull requests to the repository.

## Code Examples

```
git clone https://github.com/forcedotcom/EMP-Connector
```

```
$ java -jar target/emp-connector-0.0.1-SNAPSHOT-phat.jar <username> <password> <channel> [optional_replay_id]
```

```
$ java -classpath target/emp-connector-0.0.1-SNAPSHOT-phat.jar com.salesforce.emp.connector.example.DevLoginExample <login_URL> <username> <password> <channel> [optional_replayId]
```
