<template>
  <div>
    <!-- title-link -->
    <h2 id="content4" class="text-h5 q-py-lg q-mb-none">4. 명료성</h2>
    <!-- //title-link -->
    <!-- card -->
    <q-card flat bordered class="my-card q-mb-lg">
      <q-card-section>
        <h3 class="text-h6 q-mb-none">4-1. 색에 무관한 콘텐츠 인식</h3>
        <div class="absolute-right q-pa-xs">
          <q-chip dense color="dark" text-color="white"
            ><q-icon name="done" />디자인</q-chip
          >
        </div>
        <div class="text-subtitle q-mt-sm">
          콘텐츠는 색에 관계없이 인식될 수있어야 한다.
        </div>
      </q-card-section>
      <q-separator />
      <q-img
        src="images/@test.png"
        :ratio="16 / 9"
        fit="contain"
        class="bg-grey-2"
      >
        <div class="absolute-top">준수 사례</div>
      </q-img>
      <q-separator />
      <q-card-section>
        <q-chip
          color="red"
          text-color="white"
          label="소스코드"
          class="q-mb-sm"
        />
        <VCodeBlock
          code="<a>텍스트</a>"
          highlightjs
          lang="html"
          theme="panda-syntax-light"
        />
        <q-chip
          color="primary"
          text-color="white"
          label="해결방안"
          class="q-mb-sm"
        />
        <VCodeBlock
          code='<a href="#">텍스트</a>'
          highlightjs
          lang="html"
          theme="panda-syntax-light"
        />
      </q-card-section>
    </q-card>
    <!-- //card -->
    <!-- card -->
    <q-card flat bordered class="my-card q-mb-lg">
      <q-card-section>
        <h3 class="text-h6 q-mb-none">4-2. 자동 재생 금지</h3>
        <div class="absolute-right q-pa-xs">
          <q-chip dense color="dark" text-color="white"
            ><q-icon name="done" />퍼블</q-chip
          >
        </div>
        <div class="text-subtitle q-mt-sm">
          자동으로 소리가 재생되지 않아야 한다.
        </div>
      </q-card-section>
      <q-separator />
      <q-img
        src="images/@test.png"
        :ratio="16 / 9"
        fit="contain"
        class="bg-grey-2"
      >
        <div class="absolute-top">준수 사례</div>
      </q-img>
      <q-separator />
      <q-card-section>
        <q-chip
          color="red"
          text-color="white"
          label="소스코드"
          class="q-mb-sm"
        />
        <VCodeBlock
          code="<a>텍스트</a>"
          highlightjs
          lang="html"
          theme="panda-syntax-light"
        />
        <q-chip
          color="primary"
          text-color="white"
          label="해결방안"
          class="q-mb-sm"
        />
        <VCodeBlock
          code='<a href="#">텍스트</a>'
          highlightjs
          lang="html"
          theme="panda-syntax-light"
        />
      </q-card-section>
    </q-card>
    <!-- //card -->
  </div>
</template>

<script>
export default {
  name: "content5",
};
</script>
