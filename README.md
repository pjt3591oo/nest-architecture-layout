# nest 구조

[블로그](https://blog.naver.com/pjt3591oo/222952237465)

### 의존성 모듈 설치

```sh
$ npm i
```

### 환경변수

**`.env`**

```sh
DB_HOST=127.0.0.1
DB_USERNAME=root
DB_PASSWORD=password
DB_PORT=3306
DB_NAME=savle
```

### 디비 마이그레이션

* 마이그레이션 생성

```sh
$ npm run migration:generate
```

마이그레이션 파일은 src/migrations 아래에 생성된다.

해당 저장소는 이미 마이그레이션이 생성되어있기 때문에 엔티티를 수정하지 않는다면, 새로운 마이그레이션을 생성할 필요는 없다.

* 마이그레이션 적용

```sh
$ npm run migration:run
```

### 서버실행

```sh
$ npm run start
```

### APIs

* 주문목록조회
* 주문상세조회
* 주문단일추가
* 주문다수추가
* 주문수정
* 주문취소(삭제)

* 주문변경내역 조회

#### 주문목록 조회

*  요청

```sh
$ curl --location --request GET 'localhost:3000/order?page=0&limit=3'
```

page 기본값: 0

limit 기본값: 5

* 응답

```json
[
  {
    "id": 1,
    "status": "pending",
    "amount": 1,
    "createdAt": "2022-12-17T16:51:36.927Z",
    "updatedAt": "2022-12-17T16:51:36.927Z",
    "deletedAt": null
  },
  {
    "id": 2,
    "status": "pending",
    "amount": 1,
    "createdAt": "2022-12-17T16:51:47.242Z",
    "updatedAt": "2022-12-17T16:51:47.242Z",
    "deletedAt": null
  },
  {
    "id": 3,
    "status": "pending",
    "amount": 1,
    "createdAt": "2022-12-17T16:51:47.728Z",
    "updatedAt": "2022-12-17T16:51:47.728Z",
    "deletedAt": null
  }
]
```

#### 주문상세조회

* 요청

```sh
$ curl --location --request GET 'localhost:3000/order/2'
```

* 응답

```json
{
  "id": 5,
  "status": "pending",
  "amount": 1,
  "createdAt": "2022-12-17T16:51:48.631Z",
  "updatedAt": "2022-12-17T16:51:48.631Z",
  "deletedAt": null
}
```

#### 주문단일추가

* 요청

```sh
$ curl --location --request POST 'localhost:3000/order' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'amount=1'
```

* 응답

```json
{
  "amount": 1,
  "status": "pending",
  "deletedAt": null,
  "id": 9,
  "createdAt": "2022-12-17T16:55:14.715Z",
  "updatedAt": "2022-12-17T16:55:14.715Z"
}
```

#### 주문다수추가

* 요청

```bash
$ curl --location --request POST 'localhost:3000/order/bulk' \
--header 'Content-Type: application/json' \
--data-raw '{
    "orders": [
        { "amount": 10, "status": "pending" },
        { "amount": 20, "status": "pending" },
        { "amount": 30, "status": "pending" }
    ]
}'
```

```json
[
  {
    "amount": 10,
    "status": "pending",
    "deletedAt": null,
    "id": 16,
    "createdAt": "2022-12-17T17:13:01.549Z",
    "updatedAt": "2022-12-17T17:13:01.549Z"
  },
  {
    "amount": 20,
    "status": "pending",
    "deletedAt": null,
    "id": 17,
    "createdAt": "2022-12-17T17:13:01.552Z",
    "updatedAt": "2022-12-17T17:13:01.552Z"
  },
  {
    "amount": 30,
    "status": "pending",
    "deletedAt": null,
    "id": 18,
    "createdAt": "2022-12-17T17:13:01.556Z",
    "updatedAt": "2022-12-17T17:13:01.556Z"
  }
]
```

#### 주문수정

* 요청

```sh
$ curl --location --request PUT 'localhost:3000/order/3' \
--header 'Content-Type: application/json' \
--data-raw '{
    "amount": 33333
}'
```

* 응답

```json
{
    "id": 3,
    "status": "pending",
    "amount": 33333,
    "createdAt": "2022-12-17T16:51:47.728Z",
    "updatedAt": "2022-12-17T17:29:20.000Z",
    "deletedAt": null
}
```

#### 주문취소(삭제)

* 요청

```sh
$ curl --location --request DELETE 'localhost:3000/order/2'
```

* 응답

```json
true / false
```

#### 주문변경내역 조회

* 요청

```sh
$ curl --location --request GET 'localhost:3000/order-history/5?page=0&limit=3'
```

page 기본값: 0

limit 기본값: 5

* 응답

```json
[
    {
        "id": 46,
        "status": "pending",
        "amount": 1,
        "createdAt": "2022-12-17T18:26:18.821Z",
        "updatedAt": "2022-12-17T18:26:18.821Z",
        "deletedAt": null
    },
    {
        "id": 45,
        "status": "pending",
        "amount": 1,
        "createdAt": "2022-12-17T18:26:18.352Z",
        "updatedAt": "2022-12-17T18:26:18.352Z",
        "deletedAt": null
    },
    {
        "id": 44,
        "status": "pending",
        "amount": 1,
        "createdAt": "2022-12-17T18:26:17.905Z",
        "updatedAt": "2022-12-17T18:26:17.905Z",
        "deletedAt": null
    },
]
```