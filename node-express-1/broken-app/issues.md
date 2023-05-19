# Broken App Issues

-added a callback to app.listen to just make things more clear telling us what port its on
-err was not defined in the catch
-needed app.use(express.json());
- added ```const resolvedResults = await Promise.all(results);``` so that the promises could be resolved
- added gerneral error handling
