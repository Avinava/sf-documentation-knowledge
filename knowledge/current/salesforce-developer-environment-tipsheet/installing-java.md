---
title: "Installing Java"
domain: salesforce-developer-environment-tipsheet
topic: installing-java
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.285Z
estimatedTokens: 712
keywords: [Installing, Java, Developer, Kit, JDK, version, 8.0, later, Salesforce, APIs, robust, cross-platform, widely, language, integrates]
---

# Installing Java

> You need the Java Developer Kit (JDK) version 8.0 or later to use Salesforce APIs. Java is a robust, cross-platform, widely used language that integrates well with
		Salesforce.

# Installing Java

You need the Java Developer Kit (JDK) version 8.0 or later to use Salesforce APIs. Java is a robust, cross-platform, widely used language that integrates well with Salesforce.

To install the JDK, you need a Windows, Mac OS X, or Linux system that has internet access. Depending on your system, you might also need administrator level access to install the JDK.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_developer_environment_tipsheet)

#### Note

If you think you already have the JDK installed, use the steps listed in [**Verifying your JDK install**](#verify_java_install) to verify your version of Java. Most versions of Mac OS X and Linux come pre-installed with a version of the JDK.

The JDK is a development kit required to build Java applications. The JDK includes the Java Runtime Environment (JRE) which is required to run Java applications.

1.  Navigate to [http://www.oracle.com/technetwork/java/javase/downloads/index.html](http://www.oracle.com/technetwork/java/javase/downloads/index.html "HTML (New Window)") in your browser on your local system. Download the latest version of the JDK for your operating system. Make sure you are downloading the JDK, and not the JRE.
2.  On Windows, double-click the installer executable and follow the steps to install the JDK and the included JRE to your local machine. On Mac OS X, open the .dmg file and double-click the installer package. On Linux, if you downloaded an .rpm file, in a command prompt window type rpm —ivh jdk install rpm file. If you downloaded a .tar file, extract the files from the tar archive and copy to a location of your choice.
3.  Add the JDK executables to your path.
    1.  On Windows, click **Start** | **Control Panel** | **System and Security** | **System** | **Advanced system settings**. Click **Environment Variables** and find the PATH variable in System variables. Add the location of the bin folder of the JDK installation path to the end of your path value. Your path might look something like: %SystemRoot%\\system32;%SystemRoot%;C:\\Program Files\\Java\\jdk1.8.0\_162\_x64\\bin. Click **Ok** to apply the changes.
    2.  On Mac OS X or Linux, you must update your $PATH environment variable. On Mac OS X, you can also use the java\_home command to set your Java paths.

**Verifying your JDK install**

To verify your JDK install, in a command prompt window type java —version. You should see something like:

```

```

You can also verify that the Java compiler was properly installed by typing javac —version in a command prompt window. The output should look something like:

```

```

If you get an error indicating that either java or javac is an unknown executable, your installation might have failed, or you might not have set your path environment as described in Step 3.

## Code Examples

```
java version "1.8.0_162"
Java(TM) SE Runtime Environment (build 1.8.0_162-b12)
Java HotSpot(TM) 64-Bit Server VM (build 225.162-b12, mixed mode)
```

```
javac 1.80_162
```
