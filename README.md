# Reactivities — learning project

A learning project: a full-stack activities app with an ASP.NET Core (.NET 7) API and a React + TypeScript client.

- **API:** CQRS with MediatR, FluentValidation, ASP.NET Core Identity with JWT authentication, EF Core with SQLite, exception middleware.
- **Client (`client-app`):** React 18 + TypeScript, MobX for state, Formik + Yup forms, Semantic UI.

## Run locally

```bash
# API (needs the .NET 7 SDK); creates and seeds the SQLite database on first run
dotnet run --project API

# Client
cd client-app
npm install
npm start
```
