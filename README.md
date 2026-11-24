# 총무 AI LAB · 카카오 총무팀 에이전트 핸즈온

가상 총무 데이터 3종(신규입사자 장비신청, 조직개편 좌석배치, 예산정산)으로 진행하는 셀프 핸즈온 사이트입니다.

## 실습 바로가기

**[실습 사이트 열기](https://kep-yang-mi.github.io/GA_HandsOn/)**

| 페이지 | 내용 |
|---|---|
| [안내 페이지](https://kep-yang-mi.github.io/GA_HandsOn/) | 셀프 핸즈온 링크 모음 · 이 실습으로 배우는 것 |
| [Part 1 개인 실습](https://kep-yang-mi.github.io/GA_HandsOn/personal.html) | Step 1 스킬 · Step 2 노코드 에이전트(프로젝트) · Step 3 워크플로우(예약 작업) |
| [Part 2 팀 실습](https://kep-yang-mi.github.io/GA_HandsOn/team.html) | Step 1 정본 지도 · Step 2 지식 카드 · Step 3 팀 에이전트·채점 · Step 4 업데이트 루틴 · 진행자 가이드 |

페이지 위쪽에서 **Claude / ChatGPT**를 고르면 같은 페이지 안에서 그 도구의 메뉴 안내만 보입니다.

## 실습 문서

### 실습 데이터 (CSV)
- [실습1_신규입사자_장비신청.csv](files/data/실습1_신규입사자_장비신청.csv)
- [실습2_좌석배치_현황.csv](files/data/실습2_좌석배치_현황.csv)
- [실습3_총무_예산정산.csv](files/data/실습3_총무_예산정산.csv)

### 스킬 (Part 1 · Step 1)
| 스킬 | 문서 | 다운로드 |
|---|---|---|
| 장비신청 점검 | [gs-equipment-check.md](files/skills/gs-equipment-check.md) · [웹에서 보기](https://kep-yang-mi.github.io/GA_HandsOn/view.html?f=files/skills/gs-equipment-check.md) | [zip](files/skills/gs-equipment-check.zip) |
| 좌석 재배치 | [gs-seat-relocation.md](files/skills/gs-seat-relocation.md) · [웹에서 보기](https://kep-yang-mi.github.io/GA_HandsOn/view.html?f=files/skills/gs-seat-relocation.md) | [zip](files/skills/gs-seat-relocation.zip) |
| 예산정산 보고 | [gs-budget-report.md](files/skills/gs-budget-report.md) · [웹에서 보기](https://kep-yang-mi.github.io/GA_HandsOn/view.html?f=files/skills/gs-budget-report.md) | [zip](files/skills/gs-budget-report.zip) |

### 에이전트 규칙 (Part 1 · Step 2)
- [AGENTS_총무팀.md](files/AGENTS_총무팀.md) · [웹에서 보기](https://kep-yang-mi.github.io/GA_HandsOn/view.html?f=files/AGENTS_%EC%B4%9D%EB%AC%B4%ED%8C%80.md)

### 지식 카드 (Part 2 · Step 2)
- [조직개편_부서명_매핑.md](files/cards/조직개편_부서명_매핑.md)
- [모니터재고_장비지급.md](files/cards/모니터재고_장비지급.md)
- [웰컴키트_품의_입사자지급.md](files/cards/웰컴키트_품의_입사자지급.md)

### 팀 실습 템플릿 (Part 2)
- [정본지도_템플릿.md](files/team/정본지도_템플릿.md)
- [canonical-map-template.md](files/team/canonical-map-template.md)
- [카드_템플릿.md](files/team/카드_템플릿.md)
- [평가질문_문제지.md](files/team/평가질문_문제지.md)

### 진행자용 (정답지)
- [answer-key.md](files/facilitator/answer-key.md)
- [canonical-map-answer.md](files/facilitator/canonical-map-answer.md)
- [평가질문_정답지.md](files/facilitator/평가질문_정답지.md)
- [second-brain-example.zip](files/facilitator/second-brain-example.zip)

## 저장소 구조

- `index.html` 안내 페이지
- `personal.html` Part 1 개인 실습
- `team.html` Part 2 팀 실습
- `view.html` 마크다운 파일 뷰어 (`view.html?f=파일경로`)
- `files/` 실습 파일 (CSV, 스킬, 규칙, 카드, 템플릿, 진행자용 정답)
- `assets/` 스타일·스크립트

정적 HTML이라 빌드가 필요 없습니다. GitHub Pages에서 저장소 루트(`/`)를 배포 대상으로 지정하면 됩니다.

> 모든 실습 데이터는 가상입니다. 실제 사내 데이터나 개인정보를 올리지 마세요.
> `files/facilitator/`에는 정답지가 있습니다. 참가자에게 정답을 숨기려면 이 폴더를 빼고 배포하세요.
