# Backend

Initialising the backend with TypeScript in express has to go through certain steps.

```powershell
npm init -y
```

Initialising the TypeScript config file.

```powershell
tsc --init
```

Initialising the application in TypeScript has to be done where the essential middleware has to setup.

These essential middleware are **json middleware** and **cors middleware** (which will be used for every request and hence that’s why it is used)

```tsx
app.use(cors({origin: '*'}));
app.use(express.json());
```

# What are routes?

Routes define the url path that will map to an async function in the controller and call that method.

### Creating a route

```tsx
import { Router } from "express";

export const xRouter = Router();

export default xRouter;
```

In order to map a function to a specific http request, we have to call the method on the router: either get, put, post or delete and then pass a method with the signature used commonly as a callback in express.

```tsx
router.get("x", (req, res, next) {
	next();
})
```