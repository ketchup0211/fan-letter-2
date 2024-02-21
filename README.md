# fan-letter-2

# 0. 초기 세팅

```jsx
npm create vite@latest
```

```jsx
cd fan-letter-2
npm install
npm run dev
```

```jsx
npm install react-router-dom
npm install redux react-redux
npm install @reudxjs/toolkit
npm install -g json-server
npm install axios
```

# 1. Git & GitHub

## 1-1. 브랜치 관리

> `redux-thunk` 브랜치에서는 pure redux를 
**redux-thunk로 변경하여 관리**해서 코드를 작성합니다.
> 
> - redux-thunk 으로 코드를 모두 작성 및 커밋을 완료했으면 react-query 브랜치 생성 및 이동합니다.

## 1-2. 커밋 규칙

- [INIT] : 초기 세팅
- [ADD] : 기능 또는 파일, 폴더 등 추가
- [MOD] : 코드 및 파일, 폴더 명 등 수정
- [DEL] : 코드 및 파일, 폴더 명 등 삭제
- [FIX] : 버그 수정

# 2. Resource 출처

- Banner Font : 강원교육튼튼체
- Banner Image : [감자만두님의 침하하 대지도](https://chimhaha.net/stream_fanart/21374)
- Profile Image : [침착맨 유튜브 프로필](https://www.youtube.com/@ChimChakMan_Official)

# 3. CSS 참고 사이트 모음집

## 3-1. CSS Module in Vite

- .module.css className 여러개 사용하기
    - [https://www.halamlee.com/next-js-module-css-하나의-요소에-css-className-여러-개-주기](https://www.halamlee.com/next-js-module-css-%ED%95%98%EB%82%98%EC%9D%98-%EC%9A%94%EC%86%8C%EC%97%90-css-className-%EC%97%AC%EB%9F%AC-%EA%B0%9C-%EC%A3%BC%EA%B8%B0)

---

# 4. React 환경 설정 참고 사이트 모음집

## 4-1. CRA 대신 Vite를 사용

- [https://junghan92.medium.com/번역-create-react-app-권장을-vite로-대체-pr-대한-dan-abramov의-답변-3050b5678ac8](https://junghan92.medium.com/%EB%B2%88%EC%97%AD-create-react-app-%EA%B6%8C%EC%9E%A5%EC%9D%84-vite%EB%A1%9C-%EB%8C%80%EC%B2%B4-pr-%EB%8C%80%ED%95%9C-dan-abramov%EC%9D%98-%EB%8B%B5%EB%B3%80-3050b5678ac8)
- https://ko.vitejs.dev/guide/

### 4-1-1. vite 절대 경로 설정

- [https://velog.io/@hunmok1027/vite-에서-절대경로-설정하기](https://velog.io/@hunmok1027/vite-%EC%97%90%EC%84%9C-%EC%A0%88%EB%8C%80%EA%B2%BD%EB%A1%9C-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)

## 4-2. React Router 설치

- [https://shape-coding.tistory.com/entry/React-React-개발환경-세팅하기-React-Router-설치](https://shape-coding.tistory.com/entry/React-React-%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD-%EC%84%B8%ED%8C%85%ED%95%98%EA%B8%B0-React-Router-%EC%84%A4%EC%B9%98)

## 4-3. React-Router-Dom 개념

- [https://velog.io/@kandy1002/React-Router-Dom-개념잡기](https://velog.io/@kandy1002/React-Router-Dom-%EA%B0%9C%EB%85%90%EC%9E%A1%EA%B8%B0)

---

# 5. 개발 전 설계 과정

## 5-0. 아이디어 및 기능 구상

### 1. 아이디어 및 초기 디자인 구상

  해당 웹 개발자는 2020-2021 년 즈음부터 침착맨 유튜브를 보며 살아온 침튜브 애청자다. 심지어 안될과학, 오늘의 주우재 채널은 그 이전부터 좋아하던 유튜브 채널이었다. 이번 프로젝트의 주제가 “한 그룹에 대한 팬레터 함” 이었는데, 세븐틴 외에는 크게 좋아하는 아이돌 그룹이 없는지라 초기에는 세븐틴 팬레터함을 생각했다. 세븐틴 배경화면을 찾다 문득 머릿속에 ‘침하하’와 ‘배도라지’가 생각났고 프로젝트 방향을 바꾸었다. 꼭 아이돌 팬레터함이 아니어도 되지 않는가? 프로젝트를 완성하면 침하하에도 올려볼 수 있겠다는 생각에 <침하하 전보> 라는 이름으로 프로젝트를 시작하게 되었다. 나흘 안에 완성해야 하는데, 침하하 전보 아이디어는 아주 큰 동기부여가 되었다.

### 2.  와이어 프레임 설계 및 기능 구상

- **Main Page**
    - [x]  침하하 글자에 마우스 호버 시, ‘침하하 페이지로 이동’ 글자 표시
    - [x]  침하하 글자 클릭 시, 침하하 페이지로 이동
    - [ ]  침착맨 포함 17개국에 대한 정보를 볼 수 있는 가로 스크롤 리스트
        - 각 이름이 적힌 버튼에 마우스를 올리면
            - [x]  cursor가 pointer로 바뀐다.
            - [x]  버튼의 배경색이 #f39009 로 바뀐다.
        - 각 이름이 적힌 버튼을 클릭하면
            - [x]  해당 인물에게 전보를 쓸 수 있도록 Form 의 수신자에 대한 정보가 바뀐다.
            - [x]  선택된 인물에 대한 버튼의 색이 #dd364a 로 바뀐다.
            - [x]  Form 하단에 해당 인물에게 도착한 전보를 요약된 형태로 보여준다.
    - [ ]  전보를 쓸 수 있는 Form
        - [ ]  선택된 인물이 없는 경우, option을 통해 수신자에 대한 정보 변경 가능
            - [ ]  선택된 인물에 대한 버튼의 색이 #dd364 로 바뀐다.
        - [x]  내용은 150자, 닉네임은 10자로 글자수 제한
        - [ ]  인물을 선택하지 않았거나, 내용 또는 닉네임 둘 중 하나라도 공란이면 전보 송신 불가.
            - [ ]  유효성 검사를 통해 선택/입력이 필요한 곳을 붉은 border로 표시.
            - [ ]  내용 또는 닉네임을 입력해달라는 모달 띄워주기
    - [x]  도착한 전보를 볼 수 있는 세로 스크롤 리스트
        - [x]  해당 인물에게 도착한 전보를 요약된 형태로 보여준다.
            - 닉네임, 작성된 시간, 전보 내용 (한 줄을 넘어갈 시 … 표시)

**[설계 과정 설정 참고 사이트]**

- React로 사고하기(Velog To-Do)
    - https://ko.react.dev/learn/thinking-in-react

---

# 6. json-server

**[json-server 참고 사이트]**

- json-server 사용법
    - https://www.npmjs.com/package/json-server?activeTab=readme

---

# 7. Authentication (Login)  : JWT 인증 서버

**[Authentication (Login)  : JWT 인증 서버 참고 사이트]**

- https://velog.io/@kjw8971/React-JWT-Authentication
- https://breathtaking-life.tistory.com/156

---

# 8. 기타 참고 사이트
