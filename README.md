# Library Manager

Another library _very simple_ manager to practice React + TypeScript using pre-made api

# Run backend

To run backend create a `Mysql` container using `docker-compose`:

```shell
docker-compose up -d
```
And then execute the `api.jar` using:
```shell
java -jar ./api.jar
```

The api will trigger flyway migration and build all tables with initial data.


