# uw_foodie_version2

It is a simple app to find food in UW fast. It has been deployed and run on the Google Cloud Platform service.
Please check [liuxin21.com](http://liuxin21.com)

## How to run?

First create a new user and schema in you local database.

```sql
  CREATE USER 'uw-foodie'@'localhost' IDENTIFIED BY 'uw-foodie';
  GRANT ALL PRIVILEGES ON  *.* TO 'uw-foodie'@'localhost';
  SET GLOBAL EVENT_SCHEDULER = ON;
  
  drop database if exists foodie;
  create database foodie;
  use foodie;

  drop table if exists comment;
  create table comment(user_name varchar(50), outlet_id int, comment varchar(200), score int);
```

Next, clone this repository.

Finally run this application thru src/main/java/com/uwfooide/Application as Java application.

```java
@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class,args);
    }

```

## Documentation

### REST API：

| Link          | HTTP Method   | Description                                           | 
| ------------- | ------------- | -------------------------------------------------     |
| `/comment/{id}` | GET           | Retrieve specific comment with provided outlet id.  |
| `/comment`      | POST          | Add new comment to the database.                    |

### Postman：

```
{
	"info": {
		"_postman_id": "99ecf843-cba7-48c3-a1d9-a2db25e503fc",
		"name": "comment",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "http://localhost:8080/comment/addComment",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/x-www-form-urlencoded",
						"type": "text"
					}
				],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "userName",
							"value": "liu",
							"type": "text"
						},
						{
							"key": "outletID",
							"value": "1",
							"type": "text"
						},
						{
							"key": "comment",
							"value": "test1 comment",
							"type": "text"
						},
						{
							"key": "score",
							"value": "5",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://localhost:8080/comment",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8080",
					"path": [
						"comment"
					]
				},
				"description": "addCommnet"
			},
			"response": []
		},
		{
			"name": "http://localhost:8080/comment/showAllComment",
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/x-www-form-urlencoded",
						"type": "text"
					}
				],
				"url": {
					"raw": "http://localhost:8080/comment/1",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8080",
					"path": [
						"comment",
						"1"
					]
				}
			},
			"response": []
		}
	],
	"protocolProfileBehavior": {}
}
```
### Rap2：

[http://rap2.taobao.org/repository/editor?id=247481&mod=364218&itf=1495424](http://rap2.taobao.org/repository/editor?id=247481&mod=364218&itf=1495424)


## Development Environment:

1. Run backend server. Open the terminal，cd to `uwfoodie_server` file, execute `mvn spring-boot:run`, then 8080 port is open.
2. Run frontend server. Open another terminal，cd to `uw_foodie_webapp` file, execute `npm run dev`, then 3000 port is open. Open the browser `http://localhost:3000`, the home page will appear.


## Test Environment: 
1、Unit Test in Backend: Unit test was excuted in the IntelliJ IDEA  with the JUnit plugin provided by the Springboot framework.


## Build Environment:

1. Build the frontend. Open the terminal，cd to `uwfoodie_webapp` file, execute `npm run build`, then the built html,css,js file will be in `uwfoodie_webapp/dist`.
2. Package the backend. Open the terminal，cd to `uwfoodie_server` file, execute `mvn clean install`, then the final jar will be in `uwfoodie_server/target`.
3. Execute jar. Open the terminal，cd to `uwfoodie_server` file, execute `java -jar target/uwfoodie-1.0-SNAPSHOT.jar`. Open the browser `http://localhost:8080`.



## Technology stack

- Java 8
- Spring boot 
- JSON
- MySQL
- Mybatis
- Maven
- Tomcat server (only for local deployment)
- Jetty server (only for Google Cloud Platform deployment)
- JUnit
- React
- Redux
- React Router