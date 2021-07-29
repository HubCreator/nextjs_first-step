import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

/*
페이지 전환 시 레이아웃을 유지할 수 있다.
페이지 전환 시 상태값을 유지할 수 있다.
componentDidCatch를 이용해 커스텀 에러 핸들리을 할 수 있다.
추가적인 데이터를 페이지로 주입시켜줄 수 있다.
글로벌 CSS를 이곳에서 선언한다.
*/
