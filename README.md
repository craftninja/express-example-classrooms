## README



### Running the server:

```
$ DEBUG=classroom:* npm start
```

### Adding things to the database:

```
$ mongo
MongoDB shell version: 3.0.3
connecting to: test
> use classroom
switched to db classroom
> db.classrooms
classroom.classrooms
> db.classrooms.insert({name: "Work Lab", numberOfSeats: 28, hasKeg: false})
WriteResult({ "nInserted" : 1 })
>
```
