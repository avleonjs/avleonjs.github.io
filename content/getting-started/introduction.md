---
title: Introduction
navigation: false
---
## Overview

Avleon is a powerful, TypeScript-based web framework built on top of Fastify, designed to simplify API development with a focus on decorators, dependency injection, and OpenAPI documentation. It provides a robust set of tools for building scalable, maintainable web applications with minimal boilerplate code.


## 🧠 Why AvleonJs Instead of NestJS or Fastify?

While both **NestJS** and **Fastify** are excellent frameworks, **AvleonJs** was created to fill specific architectural and developer-experience gaps:

### 🔩 1. **Built for Composition, Not Convention**

Unlike NestJS which relies heavily on decorators and rigid architectural patterns, AvleonJs embraces flexibility and composability. It provides structured primitives—without enforcing a full-blown framework—that let you build apps how **you** want.

### ⚡ 2. **Fastify Inside, But Cleaner Outside**

Fastify is used under the hood for raw performance. But working with Fastify directly often leads to boilerplate and repetitive patterns. AvleonJs abstracts those pains while still exposing Fastify-level control when needed.

### 🧼 3. **Minimal Magic**

NestJS introduces a lot of “magic” (e.g., metadata reflection, global context injection) that can make debugging and testing harder. AvleonJs favors **explicitness over cleverness**, enabling better traceability, testability, and understanding.

### 🧪 4. **Testable by Design**

Inspired by modular DI patterns and functional programming principles, AvleonJs applications are **easy to test**—without needing to run the whole app or rely on global state.

### 🚀 5. **Smaller, Leaner, Sharper**

AvleonJs ships with a smaller footprint and avoids heavyweight dependencies when they aren't needed. It’s ideal for modern applications that need precision, performance, and control.


## What AvleonJS is Not
- Not a full-stack framework – AvleonJS focuses solely on the backend. It does not prescribe or bundle frontend tools, unlike full-stack frameworks such as Blitz.js or RedwoodJS.

- Not a clone of NestJS – While AvleonJS may use decorators and DI like NestJS, it is not built on Express or Fastify and avoids heavy abstractions. It follows its own minimal and real-time-oriented design principles.

- Not tightly coupled to HTTP – AvleonJS is transport-agnostic. While it supports HTTP out of the box, it's designed with WebSockets, events, and other protocols in mind from the start.

- Not opinionated about your project structure – It provides suggested patterns, but doesn’t enforce strict architectural rules, allowing for flexibility.

- Not ORM-locked – AvleonJS doesn't assume a specific ORM or database layer. You can use raw SQL, Prisma, Drizzle, TypeORM, or even in-memory adapters.

- Not monolithic – It's built for microservices and modular applications, with first-class support for context separation, service discovery, and dynamic scoping.

## Framework Comparison: AvleonJS vs NestJS vs Fastify
| Feature / Capability             | **AvleonJS**                                         | **NestJS**                                          | **Fastify**                                      |
| -------------------------------- | ---------------------------------------------------- | --------------------------------------------------- | ------------------------------------------------ |
| **Philosophy**                   | Real-time-first, modern scoped access control        | Full-stack backend framework with Angular influence | Lightweight and blazing-fast HTTP server         |
| **Real-time Built-in (Sockets)** | ✅ First-class support with scoped RBAC               | ⚠️ Optional (requires adapter setup)                | ❌ Minimal via plugins (e.g., socket.io)          |
| **RBAC + Scope-based Auth**      | ✅ Native support with decorators and metadata        | ⚠️ Manual or 3rd-party solutions                    | ❌ Not built-in                                   |
| **Developer Experience (DX)**    | ✅ Minimal boilerplate, intuitive decorators          | ⚠️ Verbose for small services                       | ✅ Simple, low-entry barrier                      |
| **Dependency Injection (DI)**    | ✅ TypeDI-based, lightweight, flexible                | ✅ Powerful but tightly coupled                      | ❌ None (requires manual DI or 3rd-party plugins) |
| **OpenAPI/Swagger Support**      | ✅ Via custom decorators (e.g., `@OpenApi`)           | ✅ Rich support (`@ApiProperty`, etc.)               | ⚠️ Requires plugin and manual schema definition  |
| **Modularity**                   | ✅ File-based + explicit modules                      | ✅ Structured modules, hierarchical                  | ⚠️ No standard — up to user                      |
| **Performance**                  | ⚡ Fast and extensible (built on top of Fastify)      | 🐢 Slower due to reflection-heavy metadata          | ⚡ Extremely fast, highly optimized               |
| **Learning Curve**               | 🚀 Smooth and intuitive for TypeScript users         | 📚 Steeper due to complexity and abstraction        | 🚀 Easy to start, more DIY for advanced use      |
| **CLI Tooling**                  | ✅ Simple generators, focused on backend needs        | ✅ Extensive CLI                                     | ❌ Minimal or external tooling                    |
| **Use Case Fit**                 | Real-time APIs, scoped microservices, internal tools | Monolithic or microservice APIs, GraphQL servers    | REST APIs, high-perf microservices               |

✅ Choose AvleonJS if:
You need real-time and event-driven features out of the box.

You want fine-grained, scoped access control (not just roles).

You prefer low-boilerplate but still want structure and modularity.

You want performance without sacrificing TypeScript ergonomics.
<!-- ::div{class="border rounded-lg shadow-md"}

:: -->
