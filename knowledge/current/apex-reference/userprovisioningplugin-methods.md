---
title: "UserProvisioningPlugin Methods"
domain: apex-reference
topic: userprovisioningplugin-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.621Z
keywords: [UserProvisioningPlugin, Methods, method, add, input, output, parameters, those, defined, base, class., buildDescribeCall, Signature, Return, Value, describe, getPluginClassName, invoke, request, Parameters]
---

# UserProvisioningPlugin Methods

> Use this method to add more input and output parameters to those
      defined in the base class.

## UserProvisioningPlugin Methods

The following are methods for UserProvisioningPlugin.

-   **[buildDescribeCall()](atlas.en-us.apexref.meta/apexref/apex_class_UserProvisioning_UserProvisioningPlugin.htm#apex_UserProvisioning_UserProvisioningPlugin_buildDescribeCall)**  
    Use this method to add more input and output parameters to those defined in the base class.
-   **[describe()](atlas.en-us.apexref.meta/apexref/apex_class_UserProvisioning_UserProvisioningPlugin.htm#apex_UserProvisioning_UserProvisioningPlugin_describe)**  
    Returns a Process.PluginDescribeResult object that describes this method call.
-   **[getPluginClassName()](atlas.en-us.apexref.meta/apexref/apex_class_UserProvisioning_UserProvisioningPlugin.htm#apex_UserProvisioning_UserProvisioningPlugin_getPluginClassName)**  
    Returns the name of the class implementing the plugin.
-   **[invoke(request)](atlas.en-us.apexref.meta/apexref/apex_class_UserProvisioning_UserProvisioningPlugin.htm#apex_UserProvisioning_UserProvisioningPlugin_invoke)**  
    Primary method that the system invokes when the class that implements the interface is instantiated.

### buildDescribeCall()

Use this method to add more input and output parameters to those defined in the base class.

#### Signature

public Process.PluginDescribeResult buildDescribeCall()

#### Return Value

Type: [Process.PluginDescribeResult](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult.htm#apex_class_Process_PluginDescribeResult "Describes the input and output parameters for Process.PluginResult.")

### describe()

Returns a Process.PluginDescribeResult object that describes this method call.

#### Signature

public Process.PluginDescribeResult describe()

#### Return Value

Type: [Process.PluginDescribeResult](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult.htm#apex_class_Process_PluginDescribeResult "Describes the input and output parameters for Process.PluginResult.")

### getPluginClassName()

Returns the name of the class implementing the plugin.

#### Signature

public String getPluginClassName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### invoke(request)

Primary method that the system invokes when the class that implements the interface is instantiated.

#### Signature

public Process.PluginResult invoke(Process.PluginRequest request)

#### Parameters

request

Type: [Process.PluginRequest](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginRequest.htm#apex_class_Process_PluginRequest "Passes input parameters from the class that implements the Process.Plugin interface to the flow.")

#### Return Value

Type: [Process.PluginDescribeResult](atlas.en-us.apexref.meta/apexref/apex_class_Process_PluginDescribeResult.htm#apex_class_Process_PluginDescribeResult "Describes the input and output parameters for Process.PluginResult.")