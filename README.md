# **로컬 작업 환경**

## **환경 설치**

1. Node.js 설치 후
2. `npm install` 실행하여 패키지 설치
3. `npm run dev` 개발 서버 실행
4. `npm run build` 배포

## 사용 방법

각 페이지 작업은 src/views 내에서만 진행합니다.

```jsx
<template>
  <div class="q-pa-md items-start">
    <!-- title-link -->
    <h2 **id="content1"** class="text-h5 q-py-lg q-mb-none">1. 입력 장치 접근성</h2>
    <!-- //title-link -->
	   ....
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const sideMenuItems = [
  { label: "입력 장치 접근성", **id: "content1"** },
  { label: "충분한 시간 제공", id: "content2" },
  { label: "광 과민성 발작 예방", id: "content3" },
  { label: "쉬운 내비게이션", id: "content4" },
  { label: "입력 방식", id: "content5" },
];

store.commit("setSideMenuItems", sideMenuItems);
</script>
```

1. 사이드메뉴는 sideMenuItems 해당 배열에 타이틀이나 컨텐츠의 id값을 매칭해줘야 스크롤 이벤트가 발생합니다.
2. UI framwork 의 경우 Vue 환경에서 사용가능한 [quasar](https://quasar.dev/components)로 작업 되어있습니다. 
공식 문서 참고하여 사용하시면 됩니다.
3. 이미지 경로는 public/images 폴더에 저장하며 경로는 아래와 같습니다.
src="images/@test.png”
4.  html 코드 예시 같은 경우에는 아래와 같이 진행하시면 됩니다.

```jsx
<VCodeBlock
  code=**'<a href="#">텍스트</a>'**
  highlightjs
  lang="html"
  theme="panda-syntax-light"
/>
```

```html
**<a href="#">텍스트</a>**
```

## 페이지 추가

> 페이지 추가는 src/store/store.js에서 추가 가능하며, pageN.vue 숫자 형식으로 자동 추가 되도록 되어있습니다.
> 

```jsx
{
  path: "/page4",
  label: "견고성",
  sideMenuItems: [],
},
{
  path: "/page5",
  label: "추가된 페이지",
  sideMenuItems: [],
}
/*
	1. store.js에 page5 추가
	2. views폴더내 page5.vue 생성
*/
```

## **참조 링크**

- [Vue 3](https://ko.vuejs.org/guide/introduction)
- [quasar](https://quasar.dev/components)