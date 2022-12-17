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