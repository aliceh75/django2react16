# Django2React16

This repository contains code examples for setting up a web application using React, served from a Django backend. There are four branches:

- `minimal-setup` that contains a minimal setup that builds and serves a React application from Django;
- `linting-and-common-libraries` builds on top of `minimal-setup` to add linting and some common libraries;
- `use-django-authentication` builds on top of `linting-and-common-libraries` to add Django authentication in front of the React application;
- `minimal-api-csrf` builds on top of `use-django-authentication` and adds a simple API with Django managed CSRF verification;
- `react-testing` builds on top of `minimal-api-csrf` to include a test framework for our React application.

Refer to the article at https://aliceh75.github.io/django-react for instructions on building the application, and for detailed explanation of the approach taken.
