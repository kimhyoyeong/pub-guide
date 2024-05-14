<template>
  <div>
    <!-- card -->
    <q-card flat bordered class="my-card q-mb-lg">
      <q-card-section>
        <h3 class="text-h6 q-mb-none">3-2. 콘텐츠의 선형구조</h3>
        <div class="absolute-right q-pa-xs">
          <q-chip dense color="dark" text-color="white"
            ><q-icon name="done" />퍼블</q-chip
          >
        </div>
        <div class="text-subtitle q-mt-sm">
          콘텐츠는 논리적인 순서로 제공해야 한다.
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
        <h3 class="text-h6 q-mb-none">3-3. 명확한 지시사항 제공</h3>
        <div class="absolute-right q-pa-xs">
          <q-chip dense color="dark" text-color="white"
            ><q-icon name="done" />퍼블</q-chip
          >
        </div>
        <div class="text-subtitle q-mt-sm">
          지시사항은 모양, 크기, 위치, 방향, 색,소리 등에 관계없이 인식될 수
          있어야 한다.
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
  name: "content4",
};
</script>
