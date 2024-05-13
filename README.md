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
### 작업 예시
views/page1.vue
```html
<q-card id="page1-1" flat bordered class="my-card q-mt-md">
    ...
</q-card>
```
```js
const sideMenuItems = [
  { label: "1. 적절한 대체 텍스트 제공", id: "page1-1" },
  ...
];
```
id="page1-1" / id: "page1-1"
id값 매칭해야 사이드 메뉴와 연동


### public 이미지 경로
images/@test.png


## 참고 문서
- [Vue 3](https://ko.vuejs.org/guide/introduction)
- [quasar](https://quasar.dev/components)
