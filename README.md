# 로컬 작업 환경
## 환경 설치
1. Node.js 설치 후

2. `npm install` 실행하여 패키지 설치
    ```sh
    npm install
    ```

 3. `npm run dev` 개발 서버 실행
 4. `npm run build` 배포 

## 사용 방법
### 작업 페이지
views/page1.vue
```html
<!-- title-link -->
<h2 id="content1" class="text-h5 q-py-lg q-mb-none">1. 대체 텍스트</h2>
<!-- //title-link -->
```
```js
const sideMenuItems = [
  { label: "1. 대체 텍스트", id: "content1" },
  ...
];
```
id="content1" / id: "content1"
id값 매칭해야 사이드 메뉴와 연동


### 코드 뷰어
```html
<VCodeBlock
  code='<q-img
  src="images/@test.png"
  :ratio="16 / 9"
  fit="contain"
  class="bg-grey-2"
>
<div class="absolute-top-right bg-primary">준수 사례</div>'
  highlightjs
  lang="html"
  theme="panda-syntax-light"
/>
```

### public 이미지 경로
images/@test.png


## 참고 문서
- [Vue 3](https://ko.vuejs.org/guide/introduction)
- [quasar](https://quasar.dev/components)
- [vue-code-block](https://webdevnerdstuff.github.io/vue-code-block/#home)
