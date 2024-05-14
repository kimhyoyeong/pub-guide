<template>
  <div>
    <!-- title-link -->
    <h2 id="content2" class="text-h5 q-py-lg q-mb-none">
      2. 멀티미디어 대체 수단
    </h2>
    <!-- //title-link -->
    <!-- card -->
    <q-card flat bordered class="my-card q-mb-lg">
      <q-card-section>
        <h3 class="text-h6 q-mb-none">2-1. 자막 제공</h3>
        <div class="absolute-right q-pa-xs">
          <q-chip dense color="dark" text-color="white"
            ><q-icon name="done" />퍼블</q-chip
          >
        </div>
        <div class="text-subtitle q-mt-sm">
          멀티미디어 콘텐츠에는 자막, 대본 또는 수어를 제공해야 한다.
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
  name: "content2",
};
</script>
