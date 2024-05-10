<template>
  <div class="q-pa-md items-start">
    <q-card flat bordered class="my-card q-mt-md q-pa-md">
      <div class="column items-center">
        <img src="@/assets/signon.svg" alt="CONCENTRIX" style="width: 300px" />
        <div class="text-h2 q-pb-md">콘센트릭스 웹접근성 가이드</div>
      </div>
    </q-card>

    <q-card id="index1-1" flat class="my-card q-mt-md">
      <q-card-section>
        <h3 class="text-h3 q-mb-none">인증 프로세스</h3>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <h4 class="text-h4">갱신시</h4>
        <ul>
          <li>1년 주기로 웹접근성 인증 갱신</li>
          <li>
            1차 심사 결과서 받은 후 수정 기간 평균 7일 정도 소요 예정 (심사
            보고서 수정 기준 개발 및 타 채널 수정건 있을 경우 일정 확인 필요)
          </li>
          <li>
            1차 심사 결과서 전체 검토 및 담당자 분류 하여 CTTD & 개발팀에 수정
            가이드 전달
          </li>
          <li>최종 합격 하여 인증서 취득 후 푸터의 인증 마크 교체 작업 진행</li>
        </ul>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <h4 class="text-h4">신규 심사시</h4>
        <ul>
          <li>
            자가 진단 도구를 활용하여 사전 점검 및 오류사항 수정 후, 웹접근성
            인증 심사 신청 필요
          </li>
        </ul>
      </q-card-section>
    </q-card>

    <q-card id="index1-2" flat class="my-card q-mt-md">
      <q-card-section>
        <h3 class="text-h3 q-mb-none">참조 문서</h3>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <a
          href="https://www.wa.or.kr/board/view.asp?sn=22592&page=1&search=&SearchString=&BoardID=0004&cate="
          target="_blank"
        >
          한국형 웹 콘텐츠 접근성 지침 2.2</a
        >
      </q-card-section>
    </q-card>

    <q-card id="index1-3" flat class="my-card q-mt-md">
      <q-card-section>
        <h3 class="text-h3 q-mb-none">자가진단 도구</h3>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <ul>
          <li>크롬 확장프로그램</li>
          <li>명도 대비 검사</li>
          <li>마크업 오류 검사</li>
          <li>내레이터 (윈도우 스크린리더)</li>
        </ul>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const sideMenuItems = [
  { label: "인증 프로세스", id: "index1-1" },
  { label: "참고 문서", id: "index1-2" },
  { label: "자가진단 도구", id: "index1-3" },
];

store.commit("setSideMenuItems", sideMenuItems);
</script>
