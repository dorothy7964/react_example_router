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

## 설명
Router는 두가지의 라우터를 제공한다.
<BrowserRouter> / <HashRouter>
브라우저 라우터는 동적요청을 처리하는 서버가 존재할 경우 사용하고,
해시라우터는 정적  웹 사이트에 사용된다.
보통은 브라우저 라우터를 사용한다

렌덤 하고자 하는 컴포넌트를 라우터로 감싸준다

```javascript
import { BrowserRouter } from "reacr-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
```

그리고 Router는 Route, Link 와 같은 기능들을 제공한다

현재 경로에 따라 보여줄 컴포넌트를 선택하고,
Link는 html의 anchor 태그와 같은 역할을 한다.
다른점은 리액트 앱은 보통 SPA형식의 웹 사이트기 때문에 새로고침을 하지 않는다.

```javascript
import { Route, Link } from "react-router-dom";

const Header = () => (
  <header>
    <h1>My Contacts</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacts">Contact</Link>
        </li>
      </ul>
    </nav>
    <Route exact path="/" component={Welcome} />
    <Route path="/contacts" component={Contacts} />
  </header>
)
```

위의 예시처럼 Route는 path에 따라 컴포넌트를 달리 지정하여 url에 따라 다른 화면을 보여주는 기능을 제공한다.
exact는 경로가 정확히 / 이어야 하는 것을 의미한다.
만약 exact를 사용하지 않았다면, 뒤에오는 /contacts 또한 / 에 적용되기때문에 둘다 웰컴 컴포넌트가 보여지게 된다.
따라서 정해진 경로를 설정할때 exact를 사용한다


Link는 to에 정의된 경로로 url을 변환시켜주는 역할을 한다.

Router는 자식 컴포넌트로 props를 전달하는데 자식 컴포넌트에서는 {match} 라는 이름으로 받아 사용할 수 있다.

```javascript
const Contacts = ({match}) => console.log(match);
```
다음과 같은 자식 컴포넌트가 있다고 한다면
다음과 같이 match를 확인 할 수 있다.
path 부분에 :contactName이라고 한 부분은 경로에 파라미터를 지정하는부분이다.
같은 형식의 url을 사용하는데 변수 부분에 따라 결과가 다르게 나오는 것에 대해서
중복된 컴포넌트 생성을 방지하고 하나의 컴포넌트로 여러개의 결과를 나오게 할 수 있다.

```javascript
const Contact = ({ match }) => `이름은 ${match.params.contactName}`;
```

파라미터는 이렇게 사용 할 수 있겠다.
