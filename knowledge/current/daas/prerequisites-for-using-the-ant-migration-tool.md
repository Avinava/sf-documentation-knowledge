---
title: "Prerequisites for Using the Ant Migration Tool"
domain: daas
topic: prerequisites-for-using-the-ant-migration-tool
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.118Z
estimatedTokens: 902
keywords: [Prerequisites, Ant, Migration, Tool, retired, Spring, ’24, continues, function, future, API, versions, isn’t, updated, new]
---

# Prerequisites for Using the Ant Migration Tool

> The Ant Migration Tool is retired with Spring ’24. The tool continues to
    function for future API versions but isn’t updated with new functionality and isn’t supported.
    To manage metadata changes, switch to Salesforce CLI for a modern, supported developer
    experience.

# Prerequisites for Using the Ant Migration Tool

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

The Ant Migration Tool is retired with Spring ’24. The tool continues to function for future API versions but isn’t updated with new functionality and isn’t supported. To manage metadata changes, switch to Salesforce CLI for a modern, supported developer experience.

Before you can use the Ant Migration Tool, Java and Ant must be installed and configured correctly. If you already have Java and Ant on your computer, you don’t need to install them, so first verify the installation from a command prompt.

## Java

Java version 11 or later is recommended for better security and for the latest TLS security protocols.

To check the version of Java that’s installed on your system:

1.  Open a command prompt.
2.  At the prompt, type java -version and press Enter.

If you have Java version 11, the output looks something like the following.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

Ant Migration Tool version 51.0 and later requires Java version 11 or later.

If working with Ant Migration Tool version 36.0 to 50.0, for enhanced security, we recommend Java 7 or later and a recent version of the Ant Migration Tool (version 36.0 or later). Starting with version 36.0, the Ant Migration Tool uses TLS 1.2 for secure communications with Salesforce when it detects Java version 7 (1.7). The tool explicitly enables TLS 1.1 and 1.2 for Java 7. If you’re using Java 8 (1.8), TLS 1.2 is used. For Java version 6, TLS 1.0 is used, which is no longer supported by Salesforce.

Alternatively, if you’re using Java 7, instead of upgrading your Ant Migration Tool to version 36.0 or later, you can add the following to your ANT\_OPTS environment variable:

```

```

This setting also enforces TLS 1.1 and 1.2 for any other Ant tools on your local system.

To install Java, go to [http://www.oracle.com/technetwork/java/javase/downloads/index.html](http://www.oracle.com/technetwork/java/javase/downloads/index.html "HTML (New Window)") and get the latest version of the Java JDK. When you’re finished with the installation, verify by typing java -version at a command prompt.

## Ant

1.  Open a command prompt.
2.  At the prompt, type ant -version and press Enter.

The output looks something like the following:

```

```

If the Ant version is 1.5.x or earlier, download the latest version of Ant.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

Even if you have Ant installed, you sometimes still need to put the bin directory on your path. On a Windows operating system, you sometimes also need to set the ANT\_HOME and JAVA\_HOME environment variables as follows.

To install and configure Ant:

1.  Download Apache Ant version 1.6 or later to a directory of your choice: [http://ant.apache.org/bindownload.cgi](http://ant.apache.org/bindownload.cgi "HTML (New Window)"). This directory known as ANT\_HOME. When the files are on your computer, no further installation is required.
2.  Add the bin directory to your path. (Only the bin and lib directories are required to run Ant.)
3.  If you are using a Windows operation system, create an ANT\_HOME environment variable and set the value to where you have installed Ant. Also create a JAVA\_HOME environment variable and set the value to the location of your JDK.

For more information, see [http://ant.apache.org/manual/install.html](http://ant.apache.org/manual/install.html "HTML (New Window)").

## Code Examples

```
openjdk version "11.0.8" 2020-07-14
OpenJDK Runtime Environment AdoptOpenJDK (build 11.0.8+10)
OpenJDK 64-Bit Server VM AdoptOpenJDK (build 11.0.8+10, mixed mode)
```

```
-Dhttps.protocols=TLSv1.1,TLSv1.2
```

```
Apache Ant version 1.7.0 compiled on December 13 2006
```
