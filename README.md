# react-router-dom

항상 하위 컴포넌트에게 주는 3가지 정보를 가지고 있다.

### `history`
현재 어떤 상태인지
이 객체를 통해 push, replace 를 통해 다른 경로로 이동하거나
앞 뒤 페이지로 전환 할 수 있습니다.

### `match`
이 객체에는 어떤 라우트에 매칭이 되었는지에 대한 정보가 있고
params (/about/:name 형식) 정보를 가지고있습니다.

### `location`
현재 위치
이 객체는 현재 경로에 대한 정보를 지니고 있고
URL 쿼리 (/about?foo=bar 형식) 정보도 가지고있습니다.

## Installation

```sh
# npm
npm install react-router-dom --save
```
