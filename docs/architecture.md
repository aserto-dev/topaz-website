# Architecture

<img src="/img/architecture.png" />

#### The architecture of Topaz includes the following:
* Topaz uses the OPA decision engine
* Instead of relying solely on the data.json file OPA uses to make decisions, Topaz has a directory that hosts identity and resource data.
* Topaz provides an API for the directory that lets you
  1. Import identity data
  2. Define a domain model and create instances of objects in that domain model
* The authorizer’s built-ins are extended with directory-specific built-ins that make it easy to build ReBAC policies alongside (and mixed with) RBAC and ABAC policies.
* The Topaz SDKs make it easy to pass identity and resource context to the authorizer and apply the decisions made by the authorizer in your application.
